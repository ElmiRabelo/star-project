import styled from "styled-components";
import colors from "../../styles/colors";

export const TitleH2 = styled.h2`
  font-weight: 300;
  letter-spacing: 0.2rem;
  color: ${colors.suplementar};
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${colors.auxiliar};
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  box-shadow: 0 1px 10px rgba(0, 0, 30, 0.6), 0 1px 10px rgba(0, 0, 30, 0.6);
  border: 1px solid ${colors.suplementar};
  padding: 10px;
  ${TitleH2} {
    font-size: 18px;
    height: 15%;
    &:hover {
      color: ${colors.darkred};
      cursor: pointer;
    }
  }
`;

export const OpenContainer = styled.article`
  display: grid;
  grid-template-columns: 250px auto;
  background-color: ${colors.secondary};
  box-shadow: 0 1px 10px rgba(0, 0, 30, 0.6), 0 1px 10px rgba(0, 0, 30, 0.6);
  border: 1px solid ${colors.suplementar};
  margin: 10px 0;
  img {
    border-radius: 0;
  }
  .people-informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    ${TitleH2} {
      font-size: 24px;
      padding-bottom: 5px;
      width: 100%;
    }

    p {
      color: #fff;
      text-transform: capitalize;
      strong {
        color: ${colors.suplementar};
        margin-right: 5px;
      }
    }
  }
`;
