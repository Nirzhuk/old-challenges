import { fenMapper, extractPiecesRow, piecePerRow, FEN } from './FEN'

jest.setTimeout(10000)

describe("FEN", () => {
    let fen:string;
    beforeEach(() => {
        fen = "8/2p5/8/8/8/8/8/8 w KQkq - 0 1";
    }) 
    test("FenMapper", () => {
        const fenObject = fenMapper(fen);
        expect(fenObject).toEqual({
            rows: "8/2p5/8/8/8/8/8/8",
            playableTurn: "w",
            castling: "KQkq",
            capture: "-",
            movements: "0",
            totalMovements: "1"
        })
    })
    test("No piece - Empty Square ", () => {
        const piecesPerRow = extractPiecesRow(fenMapper(fen).rows, 0);
        const piece = piecePerRow(piecesPerRow)[0]
        expect(piece).toBe("")
    })
    test("Exist piece - Starter Black Pawn ", () => {
        const piecesPerRow = extractPiecesRow(fenMapper(fen).rows, 1);
        const piece = piecePerRow(piecesPerRow)[2]
        expect(piece).toBe("p")
    })
})
