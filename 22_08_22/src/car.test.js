const car = require('./car')



beforeEach(() => {
    car.init([
        {
            id: 1,
            name: 'Lada 2106',
            color: 'red',
            year: 2000,
            price: 10000,
            currency: 'RUB'
        },
        {
            id: 2,
            name: 'Lada kalina',
            color: 'black',
            year: 2019,
            price: 500000,
            currency: 'RUB'
        }
    ])
}

)
describe('getCars', () => {
    test('Возвращает массив машин', () => {
        expect(car.getCars()).toEqual([
            {
                id: 1,
                name: 'Lada 2106',
                color: 'red',
                year: 2000,
                price: 10000,
                currency: 'RUB'
            },
            {
                id: 2,
                name: 'Lada kalina',
                color: 'black',
                year: 2019,
                price: 500000,
                currency: 'RUB'
            }
        ])

    })
})

describe('getCar', () => {
    test('возвращает один автомобиль из списка', () => {
        expect(car.getCar(2)).toEqual(
            {
                id: 2,
                name: 'Lada kalina',
                color: 'black',
                year: 2019,
                price: 500000,
                currency: 'RUB'
            }
        )
    })
    test('Вернуть undefined если такой машины нет', () => {
        expect(car.getCar(1000)).toEqual(undefined)
    })
})
