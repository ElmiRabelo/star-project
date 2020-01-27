import styled from "styled-components";
import colors from "../../styles/colors";

export const HeaderStyle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 32px;
  padding: 20px;
  margin-bottom: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  font-weight: 400;
  letter-spacing: 0.3rem;
  background-color: ${colors.lightred};
  a,
  a:visited,
  a:focus {
    color: ${colors.lighter};
  }
`;
