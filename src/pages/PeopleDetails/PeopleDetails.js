import React, { useEffect } from "react";
import PropTypes from "prop-types";
//Reudx
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DetailsActions } from "../../redux/ducks/detailsDucks";
import { Creators as InfomationActions } from "../../redux/ducks/informationDucks";
//Components and Styles
import PeopleCard from "../../components/PeopleCard/PeopleCard";
import InformationCard from "../../components/InformationCard/InformationCard";
import Loading from "../../components/Loading/Loading";
import { Container } from "./styles";

const PeopleDetails = ({
  getRequest,
  getInformationRequest,
  match,
  details: { loading, data }
}) => {
  //get id from the url parameter
  const id = match.params.id;

  //make request when page is mounted
  useEffect(() => {
    getRequest(id);
  }, []);

  //Verify if the request to api is already finish and contains the data about the character, and then, makes a new request to take informations about the movies, vehicles and starships
  if (!loading && data.people) {
    const { vehicles, films, starships } = data.people;
    getInformationRequest({ vehicles, films, starships });
  }
  //if loading, returns loading component
  if (loading || !data.people) return <Loading />;

  return (
    <Container>
      <div className="details">
        <PeopleCard
          people={data.people}
          species={data.species}
          homeworld={data.homeworld}
          id={id}
          isOpen
        />
        <InformationCard isDouble />
        <InformationCard />
      </div>
    </Container>
  );
};

PeopleDetails.propTypes = {
  getRequest: PropTypes.func.isRequired,
  getInformationRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  details: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.shape({
      people: PropTypes.object,
      species: PropTypes.string,
      homeworld: PropTypes.string
    })
  }).isRequired
};

const mapStateToProps = state => ({
  details: state.details
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...DetailsActions, ...InfomationActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
