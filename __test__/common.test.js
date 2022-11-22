test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4)
})

test('object validation', () => {
    const data = { username: 'kratos' }
    const data2 = { username: 'cratos' }
    expect(data).toEqual({ username: 'kratos' })
    expect(data).not.toEqual(data2)
})