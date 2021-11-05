import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
`;

export const FooterBox = styled.div`
  width: 100%;
`;
