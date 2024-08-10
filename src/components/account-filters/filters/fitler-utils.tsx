import { HTMLAttributes } from "react";
import styled from "styled-components";
import { navy3 } from "../../ui-components/selector-box/selector-box.styles";

export const FlexRow = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: start;
    background-color: ${navy3};
    border-radius: 4px;
    height: 50px;
    box-sizing: border-box;
    padding: 5px 15px;
`

export const TextItem = styled.p`
    font-size: 15px;
    text-wrap: nowrap;
`