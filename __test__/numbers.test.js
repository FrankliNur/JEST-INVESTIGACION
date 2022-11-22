//toBeGreaterThan()
//toBeLessThan
//toBeGreaterThanOrEqual()
//toBeLessThanOrEqual()
//toBe()
//toBeCloseTo()
//toEqual()

test('2+2', () => {
    const valor = 2 + 2

    expect(valor).toBeGreaterThan(3)
    expect(valor).toBeGreaterThanOrEqual(3.5)
    expect(valor).toBeLessThan(5)
    expect(valor).toBeLessThanOrEqual(4.5)

    expect(valor).toBe(4)
    expect(valor).toEqual(4)

})

test('nomeros flotante', () => {
    const value = (0.1 + 0.2);
    expect(value).toBeCloseTo(0.3);
})

