import { PieceCoord } from "../../hooks/AppContext";
import { arrayToFENRow, extractPiecesRow, fenMapper, piecePerRow } from "../helpers/FEN";
import { normalizePieceType } from "./utils";
import { possibleMovementPawn,possiblePromotion } from "./pawn";


export const possiblesMovements = (selected: PieceCoord,x:number,y:number,fen:string) => {
    const normalizedPiece = normalizePieceType(selected.piece);
    switch (normalizedPiece){
        case 'p':
            return possibleMovementPawn(selected,x,y,fen);
        default:
            return false;
    }
}

const movementWithMultiplePieces = (row: any, y:number,selected: PieceCoord, position: string) => {
    const rowEmpty = Array(8).fill("");
    const rows = row.split('');
    if (rows[0] === 8) return row;

    const pieceToAdd = piecePerRow(position)[selected.y];
    piecePerRow(row).forEach((item,index) => { 
        if(item) rowEmpty.splice(index,0,item)
    })
    rowEmpty[y] = pieceToAdd;
    return arrayToFENRow(rowEmpty)
}

const cleanRow = (row:any, pieceToDelete: string,index:number) => {
    const array = piecePerRow(row);
    if (array[index] === pieceToDelete){
        array[index] = '';
    }
    return arrayToFENRow(array)
}

export const movementToFEN = (fen:string,selected: PieceCoord, x: number, y: number) => {
    const {rows} = fenMapper(fen);
    const rowsArr = rows.split('/');
    const position = rowsArr[selected.x];
    if (possiblesMovements(selected,x,y,fen)){
        const positionWithMultiplePieces = movementWithMultiplePieces(extractPiecesRow(rows, x),y, selected, position);
        const positionWithPromotion = possiblePromotion(positionWithMultiplePieces, x, y, selected.piece)
        rowsArr[selected.x] = cleanRow(position,selected.piece,selected.y);
        rowsArr[x] = positionWithPromotion;
        return `${rowsArr.toString().replace(/,/g, '/')}`;
    }
    return fen
}


