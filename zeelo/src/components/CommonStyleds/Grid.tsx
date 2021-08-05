import React, { FC } from "react";
import styled from "styled-components";
import { device } from "core/libs/mediaQueries";

interface GridProps {
    grid?: string;
}

const GridStyled = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  padding: 25px;

  @media ${device.laptop} {
    grid-template-columns: ${({ grid }) => grid};
    margin: 0 auto;
    width: 1400px;
  }
`;

const Grid: FC<GridProps> = ({
    children,
    grid = "repeat(5, 1fr)",
}) => {
    return <GridStyled grid={grid}>{children}</GridStyled>;
};

export default Grid;



