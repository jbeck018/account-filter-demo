import type { HTMLAttributes } from "react";
import styled from "styled-components";

export const PillDiv = styled.div<
	React.HTMLAttributes<HTMLDivElement> & {
		bgColor?: string;
		color?: string;
		children?: React.ReactNode;
	}
>`
      display: inline-flex;
      align-items: center;
      justify-content: 'center';
      padding: 3px 11px;
      display: ;inline-flex;
      border-radius: 18px;
      white-space: nowrap;
      color: ${({ color }) => color || "#6C6F76"};
      background-color: ${({ bgColor }) => bgColor || "#F2CE62"};
      & > svg: {
        color: ${({ color }) => color || "#6C6F76"};
        fill: ${({ color }) => color || "#6C6F76"};
        height: 10px;
        width: 10px;
      };
      showRemoveIconOnHover: {
        maxWidth: 210px;
        &:hover: {
          & $removeIcon: {
            width: auto;
          };
        };
      };
      
`;

export const RemoveIcon = styled.span<
	HTMLAttributes<HTMLSpanElement> & { isRemovableOnHover?: boolean }
>`
      removeIcon: {
        width: ${({ isRemovableOnHover }) => (isRemovableOnHover ? "0" : "unset")};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-left: 4px;
        & svg: {
          height: 14px;
          width: 14px;
          opacity: 0.3;
          & path: {
            fill: #163944;
          };
        };
      };
`;
