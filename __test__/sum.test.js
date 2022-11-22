const sum = require('../src/suma')
describe('pruebas para suma', () => {
    test('1 + 2 is 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    it('-2 + -2 = -4', () => {
        expect(sum(-2, -2)).toBe(-4)
    })


    test('1 + (-2) = -1', () => {
        expect(sum(1, -2)).toBe(-1)
    })

    test('-1 + (-2) = -3', () => {
        expect(sum(-1, -2)).toBe(-3)
    })
})