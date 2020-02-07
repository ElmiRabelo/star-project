import styled from "styled-components";
import colors from "../../styles/colors";

export const TitleH3 = styled.h3`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.3rem;
  color: ${colors.suplementar};
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.auxiliar};
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.secondary};
  box-shadow: 0 1px 10px rgba(0, 0, 30, 0.6), 0 1px 10px rgba(0, 0, 30, 0.6);
  border: 1px solid ${colors.suplementar};
  padding: 10px;
  margin: 20px 0;
  h4 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    font-weight: 300;
    color: ${colors.light};
    padding-bottom: 10px;
    padding-left: 10px;
  }
`;

export const DoubleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  .information-content {
    padding: 20px;
    border-right: 2px solid ${colors.suplementar};
    ul {
      list-style: none;
    }

    &:last-child {
      border-right: none;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;

    .information-content {
      border-right: 0;
    }
  }
`;

export const StarContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
  padding: 10px;
  .information-starships {
    display: flex;
    flex-direction: column;
    padding: 20px;
    p {
      font-size: 18px;
      color: ${colors.light};
      padding-bottom: 10px;
      padding-left: 10px;
      strong {
        color: ${colors.suplementar};
      }
    }
  }
`;
