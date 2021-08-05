import rangeMap from './rangeMap'

describe("Utils Tests - RangeMap", () => {
    test("Create 5 elements of index", () => {
        const rangedMap = rangeMap(5, (i) => i);
        expect(rangedMap).toStrictEqual([0, 1, 2, 3, 4])
    })
    test("Create 0 elements of index", () => {
        const rangedMap = rangeMap(0, (i) => i);
        expect(rangedMap).toStrictEqual([])
        expect(rangedMap.length).toStrictEqual(0)

    })
})
