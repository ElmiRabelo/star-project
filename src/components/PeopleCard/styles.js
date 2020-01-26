import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  box-shadow: 0 1px 10px rgba(0, 0, 30, 0.6), 0 1px 10px rgba(0, 0, 30, 0.6);
  border: 1px solid ${colors.suplementar};
  padding: 10px;
  h2 {
    font-size: 18px;
    height: 15%;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: ${colors.suplementar};
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${colors.auxiliar};
  }
`;
