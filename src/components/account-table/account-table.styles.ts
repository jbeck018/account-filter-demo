import styled from "styled-components";

export const TableContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  position: relative;
  height: calc(100vh - 200px);
  width: calc(100vw - 60px);
  overflow: auto;
`;

export const StyledTable = styled.table<React.HTMLAttributes<HTMLTableElement>>`
  border: 1px solid lightgray;
  border-radius: 4px;
  display: grid;
  height: 100%;
  overflow: scroll;
`;

export const TableHead = styled.thead<
	React.HTMLAttributes<HTMLTableCellElement>
>`
  display: grid;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 60px;
`;

export const TableHeadGroup = styled.thead<
	React.HTMLAttributes<HTMLTableCellElement>
>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableRow = styled.tr<React.HTMLAttributes<HTMLTableRowElement>>`
  display: flex;
  width: 100%;
`;

export const VirtualizedTableRow = styled.tr<
	React.HTMLAttributes<HTMLTableRowElement>
>`
  display: flex;
  width: 100%;
  position: absolute;
`;

export const TableData = styled.td<
	React.DetailedHTMLProps<
		React.TdHTMLAttributes<HTMLTableCellElement>,
		HTMLTableCellElement
	>
>`
  width: 100%;
`;

export const TableBody = styled.tbody<
	React.HTMLAttributes<HTMLTableSectionElement>,
	HTMLTableSectionElement
>`
  display: grid;
  position: relative;
`;
