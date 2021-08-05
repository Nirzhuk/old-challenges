import { PieceCoord } from "../../hooks/AppContext";
import { piecePerRow, } from "../helpers/FEN";
import { normalizePieceType } from "./utils";

export const possibleMovementPawn = (selected: PieceCoord, x: number, y: number, fen: string) => {
    const existAnotherPieceAbove = piecePerRow(fen.split('/')[selected.x - 1])[y];
    const attackEnemy = piecePerRow(fen.split('/')[x])[y];
    if (attackEnemy) {
        const adjacentPieceLeft = piecePerRow(fen.split('/')[selected.x - 1])[selected.y - 1]
        const adjacentPieceRight = piecePerRow(fen.split('/')[selected.x - 1])[selected.y + 1]
        if (adjacentPieceRight || adjacentPieceLeft) return true;
    }
    if (existAnotherPieceAbove) return false;
    if (selected.x === 6) {
        return (selected.x - 1 === x && selected.y === y) || (selected.x - 2 === x && selected.y === y)
    } else {
        return selected.x - 1 === x && selected.y === y
    }
}

export const possiblePromotion = (position: string, x: number, y: number, piece: string) => {
    const promotionSliced = position.split('');
    const piecePosition = promotionSliced.indexOf(piece)
    const normalizedPiece = normalizePieceType(promotionSliced[piecePosition]);
    if (x === 0 && normalizedPiece === 'p') {
        if (y === 0) {
            return `Q${promotionSliced[1]}`
        }
        return `${promotionSliced[0]}Q${promotionSliced[2]}`
    }
    return position

}