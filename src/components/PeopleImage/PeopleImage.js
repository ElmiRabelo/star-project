import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const PeopleImage = ({ imgId, name }) => {
  return (
    <Container>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${imgId}.jpg`}
        alt={name}
      />
    </Container>
  );
};

PeopleImage.propTypes = {
  imgId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PeopleImage;
