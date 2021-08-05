export interface FEN {
    rows: string,
    playableTurn: string,
    castling: string,
    capture: string,
    movements: string,
    totalMovements: string
}

export const fenMapper = (fenString?: string): FEN => {
    if (!fenString) return {
        rows: '',
        playableTurn: '',
        castling: '',
        capture: '',
        movements: '',
        totalMovements: ''
    };
    const fenArray = fenString.split(" ")
    return {
        rows: fenArray[0],
        playableTurn: fenArray[1],
        castling: fenArray[2],
        capture: fenArray[3],
        movements: fenArray[4],
        totalMovements: fenArray[5]
    }
}

export const extractPiecesRow = (rows: string, y: number) => {
    return rows.split('/')[y]
}
export const piecePerRow = (row: string) => {
    if (!row) return [];
    const array = row.split("")
    const test = array.reduce((acc: string[], item: string) => {
        if (isNaN(parseInt(item))) {
            return [...acc, item]
        }
        else {
            return [...acc, ...Array(parseInt(item)).fill("")]
        }
    }, [])
    return test;
}
export const arrayToFENRow = (array: string[]) => {
    let counter = 0;
    let finalString = ''
    for (let index = 0; index < array.length; index++) {
        let item = array[index]
        if (!item) counter = counter + 1;
        if (item) {
            let stringWithNumber = finalString;
            if (counter !== 0) {
                stringWithNumber = finalString.concat('', counter.toString())
            }
            finalString = stringWithNumber.concat('', item)
            counter = 0;
        }
        if (array.length === index + 1) {
            finalString = finalString.concat('', counter.toString())
        }
    }
    return finalString;
}