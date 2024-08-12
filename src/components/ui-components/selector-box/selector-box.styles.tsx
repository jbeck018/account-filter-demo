import type React from "react";
import styled from "styled-components";

export const gray = "#DBDEE3";
export const navy3 = "#C6D3D8";
export const navy4 = "#EDF2F3";
export const SelectorBoxDiv = styled.div<
	React.HTMLAttributes<HTMLDivElement> & {
		isEditable?: boolean;
		isRemovableOnHover?: boolean;
		isEmpty?: boolean;
		isRemovable?: boolean;
	}
>`
    opacity: ${({ isEditable }) => (isEditable ? 0.5 : "unset")};
    pointerEvents: ${({ isEditable }) => (isEditable ? "none" : "unset")};
    display: flex;
    maxWidth: ${({ isRemovableOnHover }) => (isRemovableOnHover ? "210px" : "unset")}
    '&:hover': {
      '& $removeIcon': {
        width: 'auto';
      };
    };
    width: max-content;
    overflow: hidden;
    max-width: 100%;
    padding: 0 10px;
    align-items: center;
    background: #fff;
    border-radius: 4;
    border: 1px solid ${gray};
    color: theme.gray1;
    font: bold 13px/24px black;
    cursor: pointer;
    box-sizing: border-box;
    height: 24px;
    & *: {
      box-sizing: border-box;
    };
    &[data-variation='hoverable']:hover: {
      background-color: ${navy4};
    };
    &[data-variation='hoverable']:active: {
      background-color: ${navy3};
    };
`;

export const IconStyle = styled.svg<React.HTMLAttributes<HTMLOrSVGElement>>`
    display: flex;
    & svg: {
      max-height: 14px;
      max-width: 14px;
    };
    & + div: {
      margin-left: 5px;
    };
`;

export const RemoveIcon = styled.div<
	React.HTMLAttributes<HTMLSpanElement> & { isRemovableOnHover?: boolean }
>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ isRemovableOnHover }) => (isRemovableOnHover ? 0 : "unset")};
    overflow: 'hidden';
    flex-shrink: 0;
    margin-left: 4;
    '& svg': {
      height: 14;
      width: 14;
      opacity: 0.3;
      '& path': {
        fill: black;
      };
    };
`;
