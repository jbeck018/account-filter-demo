import type React from "react";

import styled from "styled-components";

export const arrowSize = 12;
export const arrowOffset = "-6px";

export const MenuDiv = styled.div<
	React.HTMLAttributes<HTMLDivElement> & { menuIsWithArrow?: boolean }
>`
    outline: none;
    outline-color: transparent;
    min-width: 200px;
    box-sizing: border-box;
    background-color: white;
    filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.15));
    border-radius: ${(props) => (props?.menuIsWithArrow ? 4 : 0)}px;
    z-index: 99999998;
    &[data-popper-reference-hidden="true"]: {
      opacity: 0;
      transition: opacity 0.25s;
      pointer-events: none;
    };
    &[data-popper-reference-hidden="false"]: {
      opacity: 1
      transition: opacity 0.25s;
    };
    &[data-popper-placement^='top'] > $arrow: {
      bottom: ${arrowOffset};
    };
    &[data-popper-placement^='bottom'] > $arrow: {
      top: ${arrowOffset};
    };
    &[data-popper-placement^='left'] > $arrow: {
      right: ${arrowOffset};
    };
    &[data-popper-placement^='right'] > $arrow: {
      left: ${arrowOffset};
    };
`;

export const Arrow = styled.div<React.HTMLAttributes<HTMLDivElement>>`
      position: 'absolute',
      width: arrowSize,
      height: arrowSize,
      backgroundColor: theme.white,
      zIndex: Z_INDEX.forSelectMenuArrow,
      visibility: 'hidden',

      '&:before': {
        content: '""',
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'inherit',
        visibility: 'visible',
        transform: 'rotate(45deg)',
      },
`;

export const UL = styled.ul<React.HTMLAttributes<HTMLUListElement>>`
      list-style: none;
      padding: 0px;
      margin: 0px;
      max-height: 210px;
      overflow-y: scroll;
      position: ;relative;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar: {
        display: none;
      };
`;

export const LI = styled.li<React.HTMLAttributes<HTMLLIElement>>`
      position: absolute;
      z-index: 1;
      top: 0px;
      left: 0px;
      width: 100%;
      padding: 0px 10px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      cursor: pointer;
      box-sizing: border-box;
`;

export const MenuContent = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  padding: 10px;
`;
