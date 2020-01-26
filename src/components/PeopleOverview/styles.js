import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    @media (min-width: 760px) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
`;
