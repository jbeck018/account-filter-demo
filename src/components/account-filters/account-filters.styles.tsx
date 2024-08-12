import styled from "styled-components";
import { MultiSearchSelector } from "../ui-components";
import { gray } from "../ui-components/selector-box/selector-box.styles";

export const Container = styled.div`
  margin-bottom: 10px;
  width: 100%
  height: 60px;
`;

export const InputSelect = styled(MultiSearchSelector)`
  width: 100%;
  height: 60px;
  padding: 10px 0;
`;

export const Form = styled.form<React.HTMLAttributes<HTMLFormElement>>`
  width: 100%;
  height: 60px;
  overflow: scroll;
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  // border: 1px solid ${gray};
  // border-radius: 4px;
`;
