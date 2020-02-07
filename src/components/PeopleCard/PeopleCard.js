import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PeopleImage from "../PeopleImage/PeopleImage";
import { Container, OpenContainer, TitleH2 } from "./styles.js";

const PeopleCard = ({
  people: {
    name,
    url,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  },
  species,
  homeworld,
  id,
  isOpen
}) => {
  if (isOpen) {
    return (
      <OpenContainer>
        <PeopleImage url={id} name={name} />
        <div className="people-informations">
          <TitleH2>{name}</TitleH2>
          <p>
            <strong>Birth Year: </strong>
            {birth_year}
          </p>
          <p>
            <strong>Species: </strong>
            {species}
          </p>
          <p>
            <strong>Height: </strong>
            {height}cm
          </p>
          <p>
            <strong>Mass: </strong>
            {mass}kg
          </p>
          <p>
            <strong>Gender: </strong>
            {gender}
          </p>
          <p>
            <strong>Hair Color: </strong>
            {hair_color}
          </p>
          <p>
            <strong>Skin Color: </strong>
            {skin_color}
          </p>
          <p>
            <strong>Eye Color: </strong>
            {eye_color}
          </p>
          <p>
            <strong>Homeworld: </strong>
            {homeworld}
          </p>
        </div>
      </OpenContainer>
    );
  }
  return (
    <Container>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <Link to={`/people/${id}`}>
        <TitleH2>{name}</TitleH2>
      </Link>
      <PeopleImage url={url} name={name} />
    </Container>
  );
};

PeopleCard.propTypes = {
  people: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default PeopleCard;
