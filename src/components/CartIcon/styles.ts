import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  .icon {
    height: 3rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;

    div {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
