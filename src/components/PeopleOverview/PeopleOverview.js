import React, { useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";
import { getId } from "../../services/utils";
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PeopleActions } from "../../redux/ducks/peopleDucks";
//Components and Styles
import PeopleCard from "../PeopleCard/PeopleCard";
import Loading from "../Loading/Loading";
import { Container } from "./styles";

const PeopleOverview = ({ people: { loading, data }, getRequest }) => {
  //Does the api request when the page is mounted
  useEffect(() => {
    if (!data.length) {
      getRequest(1);
    }
  }, []);

  const loadMoreItems = page => {
    if (!loading && data.length !== 0) {
      getRequest(page);
    }
  };

  return (
    <Container>
      <InfiniteScroll
        element={"section"}
        pageStart={1}
        initialLoad={false}
        loadMore={page => loadMoreItems(page)}
        threshold={20}
        hasMore={!loading && data.length !== 0}
      >
        {data.map(person => (
          <PeopleCard
            key={person.name}
            id={getId(person.url)}
            people={person}
          />
        ))}
      </InfiniteScroll>
      {loading && <Loading />}
    </Container>
  );
};

PeopleOverview.propTypes = {
  getRequest: PropTypes.func.isRequired,
  people: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
      })
    )
  }).isRequired
};

const mapStateToProps = state => ({
  people: state.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PeopleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleOverview);
