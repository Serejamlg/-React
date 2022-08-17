const changeColor = require('./changeColor')

test('Должен меняться цвет у строки', () => {
    // expect(changeColor('green small', 'green', 'red')).toBe('red small')
    // expect(changeColor('green small', 'green', 'yellow')).toBe('yellow small')
    // expect(changeColor(undefined, 'green', 'yellow')).toBe('')
    // expect(changeColor('green', 'green', 'red')).toBe('red')
    // expect(changeColor('green green', 'green', 'red')).toBe('red red' )
    // expect(changeColor('green   small', 'green', 'red')).toBe('red   small' )
    expect(changeColor('green small', 'Green', 'red', true)).toBe('red small' )
    expect(changeColor('Green small', 'green', 'red', true)).toBe('red small' )
})