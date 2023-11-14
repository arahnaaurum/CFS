import styled from "styled-components";

export const StyledContainer = styled.div `
  height: 85vh;
  padding: 0 30px;
  .title {
    text-transform: capitalize;
  }
  .text {
    font-size: 24px;
  }
  .author {
    font-weight: bold;
  }
  .back {
    display: block;
    max-width: 130px;
    margin-top: 24px;
    color: #ffffff;
    background-color: #646cff;
    padding: 8px 12px;
    border-radius: 8px;
    &:hover {
      background-color: #747bff;
    }
  }
`;