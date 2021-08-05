import { useContext, createElement, useCallback } from 'react'
import styled from 'styled-components';
import { getSquareColor, getGizmoColor } from '../core/helpers/squareHelpers';
import Pawn from './Pieces/Pawn';
import AppContext from '../hooks/AppContext';
import { possiblesMovements } from '../core/pieces/movementHelpers';
import Queen from './Pieces/Queen';
import { normalizePieceType } from '../core/pieces/utils';


interface SquareProps {
    x: number;
    y: number;
    piece?: string;
}

type SquareStyledProps = SquareProps & { isSelected: string | false, gizmoMovement: Boolean};

const renderPiece = (piece:string) => {
    let pieceToRender = <></>;
    const normalizedPiece = normalizePieceType(piece)
    switch (normalizedPiece) {
        case 'p':
            return createElement(Pawn, { color: piece === normalizedPiece ? 'black' : 'white' })
        case 'q':
            return createElement(Queen, { color: piece === normalizedPiece ? 'black' : 'white' })
        default:
            return pieceToRender
    }
}


const SquareStyled = styled.div<SquareStyledProps>`
    height:64px;
    width:64px;
    box-shadow:  ${({ isSelected }) => isSelected ?'inset 0px 0px 0px 5px yellow':''} ;
    ${({gizmoMovement,x,y}) => gizmoMovement ? `
    background-color: ${getGizmoColor(x,y)};
    &:hover {
        box-shadow: inset 0px 0px 0px 2px #e6d9a1;
    }
    `:`
    background-color: ${getSquareColor(x, y)};
    `}
`;
 
const Square = ({x,y,piece}: SquareProps) => {
    const {state, dispatch } = useContext(AppContext);
    const { selected,boardConfiguration } = state
    const isSelected = selected.x === x && selected.y === y && selected.piece;
    const gizmoMovement = possiblesMovements(selected, x, y, boardConfiguration);
    const onClick = useCallback(() => {
        if(selected.piece){ //Movement of the selected piece
            dispatch({ type: 'move',value: {
                from: selected,
                to: {
                    x: x,
                    y: y,
                    piece: piece || ''
                }
            }})
        }

        if (!gizmoMovement && piece === '') { //Check if not gizmoTile or just empty
            dispatch({ type: 'deselect' })
        }
        if(piece) { 
            const normalizedPiece = normalizePieceType(piece)
            if (piece === normalizedPiece) { // Check if the player pawn
                return;
            }
            dispatch({ type: 'select', value: { x, y, piece } })
        }
    }, [selected,piece,gizmoMovement,dispatch,x,y])
    return (
        <SquareStyled isSelected={isSelected} gizmoMovement={gizmoMovement} x={x} y={y} onClick={onClick}>
            {piece && renderPiece(piece)}
        </SquareStyled>
    )
}

export default Square
