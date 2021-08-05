export const getSquareColor = (x: number, y: number) => {
    const odd = x % 2
    if (y % 2) {
        return odd ? "#d4bd9a" : "#a08a69"
    }

    return odd ? "#a08a69" : "#d4bd9a"
};
export const getGizmoColor = (x: number, y: number) => {
    const odd = x % 2
    if (y % 2) {
        return odd ? "#d8b861" : "#ad9143"
    }

    return odd ? "#ad9143" : "#d8b861"
};