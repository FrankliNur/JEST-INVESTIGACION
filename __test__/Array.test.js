const { movieList, MovieGenre } = require('../src/Arrays')

describe('verificando las peliculas existentes', () => {
    test('Arreglo no sea nulo', () => {
        expect(MovieGenre()).not.toBeNull()
    })

    test('Arreglo no sea nulo', () => {
        expect(movieList()).not.toBeNull()
    })

    test('Verificar si contiene un Spider-Man', () => {
        expect(movieList()).toContain('Spider-Man')
    })

    test('Comprobar la longitud del arreglo', () => {
        expect(movieList()).toHaveLength(8)
    })
})


