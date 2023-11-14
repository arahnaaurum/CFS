import styled from "styled-components";

export const StyledForm = styled.form `
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  .label {
    display: block;
    min-width: 150px;
    font-weight: bold;
  }
  .input {
    padding: 8px;
    border-radius: 8px;
  }
  .searchbtn {
    color: #ffffff;
    background-color: #646cff;
    padding: 8px 12px;
    border-radius: 8px;
    &:hover {
      background-color: #747bff;
    }
  }
`