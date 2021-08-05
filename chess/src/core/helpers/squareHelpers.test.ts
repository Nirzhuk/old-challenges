import { getGizmoColor,getSquareColor } from './squareHelpers'


describe("Square Helpers", () => {
    test("Square Color 0,0", () => {
        const squareColor = getSquareColor(0, 0);
        expect(squareColor).toBe("#d4bd9a")
    })
    test("Square Color 0,1", () => {
        const squareColor = getSquareColor(0, 1);
        expect(squareColor).toBe("#a08a69")
    })
    test("Gizmo Color 0,0", () => {
        const gizmoColor = getGizmoColor(0, 0);
        expect(gizmoColor).toBe("#d8b861")
    })
    test("Gizmo Color 0,1", () => {
        const gizmoColor = getGizmoColor(0, 1);
        expect(gizmoColor).toBe("#ad9143")
    })
})
