import React, { useEffect } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PeopleActions } from "../../redux/ducks/peopleDucks";
//Components and Styles
import PeopleCard from "../PeopleCard/PeopleCard";
import { Container } from "./styles";

const PeopleOverview = ({ people: { loading, data }, getRequest }) => {
  useEffect(() => {
    getRequest();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Container>
      {data.map(person => (
        <PeopleCard key={person.name} url={person.url} name={person.name} />
      ))}
    </Container>
  );
};

PeopleOverview.propTypes = {};

const mapStateToProps = state => ({
  people: state.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PeopleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleOverview);
