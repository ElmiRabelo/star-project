import React from "react";
import PropTypes from "prop-types";
import { getImageId } from "../../services/utils";

import PeopleImage from "../PeopleImage/PeopleImage";
import { Container } from "./styles.js";

const PeopleCard = ({ name, url }) => {
  const imgId = getImageId(url);
  return (
    <Container>
      <h2>{name}</h2>
      <PeopleImage imgId={imgId} name={name} />
    </Container>
  );
};

PeopleCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PeopleCard;
