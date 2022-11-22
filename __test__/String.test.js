describe('email validation', () => {

    test('this is an email', () => {
        const email = 'Nur@mail.com'
        expect(email).toMatch(/\S+@\S+\.\S+/)
    })

    test('this is NOT an email', () => {
        const email = 'Nurmailcom'
        expect(email).not.toMatch(/\S+@\S+\.\S+/)
    })
})