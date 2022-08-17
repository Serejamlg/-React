const car = require( './car')

test('У машины должно быть 4 колеса', () => {
    expect(car.wheel).toBe(4)
    
});