test('null', () => {
    const n = null
    expect(n).toBeNull() /*espera que N sea null*/
    expect(n).toBeDefined()//espera que N sea definido
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('cero', () => {
    const cero = 0
    expect(cero).not.toBeNull()
    expect(cero).toBeDefined()//este definido
    expect(cero).not.toBeTruthy()//no esa un elemento verdero
    expect(cero).toBeFalsy()// sea un elemento false

})