import styled from "styled-components";

export const StyledPaginationList = styled.ul`
  display: flex;
  gap: 42px;
  list-style: none;
  padding: 0;
  margin: 24px 0;
`

export const StyledPaginationItem = styled.li`
  padding: 8px 14px;
  border-radius: 24px;
  cursor: pointer;
  &.active {
    background-color: #535bb0;
  }
  &.not_active {
    background-color: #b8bdf2;
  }
  &:hover {
    background-color: #3d4173;
  }
` 