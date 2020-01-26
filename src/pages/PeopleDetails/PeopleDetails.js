import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//Reudx
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DetailsActions } from "../../redux/ducks/detailsDucks";
//Components and Styles
import PeopleCard from "../../components/PeopleCard/PeopleCard";
import Loading from "../../components/Loading/Loading";

const PeopleDetails = ({ getRequest, match, details }) => {
  const id = match.params.id;
  useEffect(() => {
    getRequest(id);
  }, []);

  return (
    <div>
      {details.loading ? (
        <Loading />
      ) : (
        <PeopleCard people={details.data} id={id} isOpen />
      )}
    </div>
  );
};

PeopleDetails.propTypes = {};

const mapStateToProps = state => ({
  details: state.details
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(DetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
