import { PieceCoord } from 'src/hooks/AppContext';
import { movementToFEN } from './movementHelpers'

jest.setTimeout(10000)

describe("Movement Helpers", () => {
    let fen: string;
    let selected: PieceCoord
    beforeEach(() => {
        fen = "8/2p5/8/8/8/8/2P5/8 w KQkq - 0 1";
        selected = {
            x: 6,
            y: 2,
            piece: 'P'
        }
    })
    test("Initial Movement Pawn - 2 movement", () => {
        const movement = movementToFEN(fen, selected, 4, 2)
        expect(movement).toBe("8/2p5/8/8/2P5/8/8/8")
    })
    test("Normal movement Pawn", () => {
        const movement = movementToFEN(fen, selected, 5, 2)
        expect(movement).toBe("8/2p5/8/8/8/2P5/8/8")
    })
    test("Eat Pawn", () => {
        const eatSelected = {
            x: 2,
            y: 1,
            piece: 'P'
        }
        const eatFen = "8/2p5/1P6/8/8/8/8/8"
        const movement = movementToFEN(eatFen, eatSelected, 1,2)
        expect(movement).toBe("8/2P6/8/8/8/8/8/8")
    })
    test("Pawn Promotion to Queen", () => {
        const promotionFen  = "8/2P5/8/8/8/8/8/8 w KQkq - 0 1";
        const promotionPawnPosition = {
            x: 1,
            y: 2,
            piece: 'P'}
        const movement = movementToFEN(promotionFen, promotionPawnPosition, 0, 2)
        expect(movement).toBe("2Q5/8/8/8/8/8/8/8")
    })
})
