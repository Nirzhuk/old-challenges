import React, { FC } from "react";
import styled from "styled-components";
import { device } from "../../../core/lib/mediaQueries";

interface GridProps {
    grid?: string;
}

const GridStyled = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  @media ${device.laptop} {
    grid-template-columns: ${({ grid }) => grid};
  }
`;

const Grid: FC<GridProps> = ({
    children,
    grid = "repeat(5, 1fr)",
}) => {
    return <GridStyled data-testid="grid" grid={grid}>{children}</GridStyled>;
};

export default Grid;
