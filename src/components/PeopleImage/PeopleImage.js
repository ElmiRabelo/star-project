import React from "react";
import PropTypes from "prop-types";
import { getId } from "../../services/utils";
import { Container } from "./styles";

const PeopleImage = ({ url, name }) => {
  const id = getId(url);
  return (
    <Container>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />
    </Container>
  );
};

PeopleImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PeopleImage;
