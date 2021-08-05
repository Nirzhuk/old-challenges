export default function rangeMap<T>(n: number, fn: (i: number) => T) {
    const arr = []
    while (n > arr.length) {
        arr.push(fn(arr.length))
    }
    return arr
}