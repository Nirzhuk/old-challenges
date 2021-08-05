import { useContext } from 'react'
import { fenMapper, piecePerRow,extractPiecesRow } from '../../core/helpers/FEN';
import AppContext from '../../hooks/AppContext';
import { ChessboardStyled, ChessboardContainerStyled, ChessboardColumns, ChessboardRows, CoordTile} from './Chessboard.styled'
import Square from '../Square';

interface ChessboardProps {
    size?: number;
}
const Chessboard = ({ size = 8 }: ChessboardProps) => {
    const { state } = useContext(AppContext);
    const numArr = [8,7,6,5,4,3,2,1];
    const letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return (
        <ChessboardContainerStyled>
            <ChessboardRows>{numArr.map((number) => <CoordTile>{number}</CoordTile>)}</ChessboardRows>
            <ChessboardStyled>
                {[...Array(size)].map((_, indexRow) => { //Board

                    return [...Array(size)].map((_, index) => {
                        const piecesPerRow = extractPiecesRow(fenMapper(state.boardConfiguration).rows,indexRow);
                        const piece = piecePerRow(piecesPerRow)[index]
                        return <Square key={index} y={index} x={indexRow} piece={piece} />
                    })
                })}
            </ChessboardStyled>
            <ChessboardColumns>{letterArr.map((letter) => <CoordTile>{letter}</CoordTile>)}</ChessboardColumns>
        </ChessboardContainerStyled>
    )
}

export default Chessboard
