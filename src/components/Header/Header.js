import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles";

const Header = () => (
  <HeaderStyle>
    <Link to="/">Star Project</Link>
  </HeaderStyle>
);

export default Header;
