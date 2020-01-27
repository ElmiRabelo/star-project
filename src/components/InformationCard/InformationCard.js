import React from "react";
import PropTypes from "prop-types";
//redux
import { connect } from "react-redux";
//components and Styles
import Loading from "../Loading/Loading";
import { Container, TitleH3, DoubleContent, StarContent } from "./styles";

const InformationCard = ({
  isDouble,
  information: {
    data: { films, vehicles, starships },
    loading
  }
}) => {
  //if isDouble is true, will return a card with information about vehicles and films
  //if false, return a card with information about the starships
  let content;
  if (isDouble) {
    content = loading ? (
      <Loading />
    ) : (
      <DoubleContent>
        <div className="information-content">
          <TitleH3>Films</TitleH3>
          <ul>
            {films.map(film => (
              <li key={film.episode_id}>
                <h4>
                  Episode: {film.episode_id} - {film.title}
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="information-content">
          <TitleH3>Vehicles</TitleH3>
          {!vehicles.length ? (
            <h4>No vehicles related</h4>
          ) : (
            <ul>
              {vehicles.map(vehicle => (
                <li key={vehicle.url}>
                  <h4>{vehicle.name}</h4>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DoubleContent>
    );
  } else {
    content = loading ? (
      <Loading />
    ) : (
      <StarContent>
        {!starships.length ? (
          <h4>No Starships related</h4>
        ) : (
          starships.map(starship => (
            <div key={starship.name} className="information-starships">
              <TitleH3>{starship.name}</TitleH3>
              <p>
                <strong>Model: </strong>
                {starship.model}
              </p>
              <p>
                <strong>Manufacturer: </strong>
                {starship.manufacturer}
              </p>
              <p>
                <strong>Class: </strong>
                {starship.starship_class}
              </p>
              <p>
                <strong>Speed: </strong>
                {starship.max_atmosphering_speed}
              </p>
              <p>
                <strong>Crew: </strong>
                {starship.crew}
              </p>
              <p>
                <strong>Cargo Capacity: </strong>
                {starship.cargo_capacity}
              </p>
              <p>
                <strong>Length: </strong>
                {starship.length}
              </p>
              <p>
                <strong>Hyperdrive Rating: </strong>
                {starship.hyperdrive_rating}
              </p>
              <p>
                <strong>MGLT: </strong>
                {starship.MGLT}
              </p>
              <p>
                <strong>Cost: </strong>
                {starship.cost_in_credits}
              </p>
            </div>
          ))
        )}
      </StarContent>
    );
  }

  return <Container>{content}</Container>;
};

InformationCard.propTypes = {
  isDouble: PropTypes.bool,
  information: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.shape({
      vehicles: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string
        })
      ),
      films: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          episode_id: PropTypes.number
        })
      ),
      starships: PropTypes.arrayOf(
        PropTypes.shape({
          model: PropTypes.string,
          manufacturer: PropTypes.string,
          mass: PropTypes.string,
          name: PropTypes.string,
          starship_class: PropTypes.string,
          max_atmosphering_speed: PropTypes.string,
          crew: PropTypes.string,
          cargo_capacity: PropTypes.string,
          hyperdrive_rating: PropTypes.string,
          MGLT: PropTypes.string,
          cost_in_credits: PropTypes.string,
          length: PropTypes.string
        })
      )
    })
  }).isRequired
};

const mapStateToProps = state => ({
  information: state.information
});

export default connect(mapStateToProps)(InformationCard);
