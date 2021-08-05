import styled from 'styled-components';

export const ChessboardStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(8,1fr);
    border: 1px solid black;
    grid-area: Chessboard;
`;
export const ChessboardRows = styled.div`
    display:grid;
    grid-template-rows: repeat(8,1fr);
    grid-area: Rows;
`;
export const ChessboardColumns = styled.div`
    display:grid;
    grid-template-columns: repeat(8,1fr);
    grid-area: Columns;
`;
export const CoordTile = styled.div`
    height: 64px;
    width: 64px;
    text-align: center;
`;
export const ChessboardContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-rows: 1fr 64px;
  gap: 0px 0px;
  grid-template-areas:
    "Rows Chessboard"
    "Void Columns";
`;
