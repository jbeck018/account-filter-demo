import type { HTMLAttributes } from "react";
import styled from "styled-components";

export const FlexRow = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: start;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
    height: 40px;
    box-sizing: border-box;
    padding: 5px 15px;
`;

export const TextItem = styled.p`
    font-size: 15px;
    text-wrap: nowrap;
`;
