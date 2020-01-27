import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//Reudx
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DetailsActions } from "../../redux/ducks/detailsDucks";
import { Creators as InfomationActions } from "../../redux/ducks/informationDucks";
//Components and Styles
import PeopleCard from "../../components/PeopleCard/PeopleCard";
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
  if (!loading && data.people) {
    const { vehicles, films, starships } = data.people;
    getInformationRequest({ vehicles, films, starships });
  }
  return (
    <Container>
      <div className="details">
        {loading || !data.people ? (
          <Loading />
        ) : (
          <PeopleCard
            people={data.people}
            species={data.species}
            homeworld={data.homeworld}
            id={id}
            isOpen
          />
        )}
      </div>
    </Container>
  );
};

PeopleDetails.propTypes = {};

const mapStateToProps = state => ({
  details: state.details
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...DetailsActions, ...InfomationActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
