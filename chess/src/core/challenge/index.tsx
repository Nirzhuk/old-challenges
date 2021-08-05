//This  is not ideal for escalating the app, the porpuse of these functions are totally for the challenge to simulate a more complex system.
// The idea is to know pawns only can exists in the second rows. Other pieces like the tower it easier, I think it's easy to iterate to improve to check if an existent piece exists in that tile.
const randomNumber = (max:number) => Math.floor(Math.random() * max) + 1
const parseRandomPositionRow = (color: string,pieceType: string) => { 
    switch(pieceType){
        case 'pawn':
            const pieceString = color === 'white' ? 'P' : 'p';
            const piecePosition = randomNumber(8);
            const beforePiece = 8 - piecePosition;
            const afterPiece = piecePosition - 1;
            return `${beforePiece}${pieceString}${afterPiece}`
        default:
            return '8'
    }
}


export const generatePieceLegalRandomPosition = () => {
    const pawn = parseRandomPositionRow('white','pawn');
    return `8/2p5/8/8/8/8/${pawn}/8 w KQkq - 0 1`
}