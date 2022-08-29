const INIT_CARS = () => {

}

class Cars {
    constructor() {
        this.list = initCars()
    }

    getCar(id) {
        return this.list.find(item.id === id);
    }
    addCars(newCar) {
        newCar.id = this.generateUniqId()

        this.list.push()

        return newCar.id
    }
    generateUniqId() {
        let max = 0;

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id > max) {
                max = this.list[i].id
            }
        }
        return max + 1
    }
    deleteCar(id) {
        this.list = this.list.filter(item => item.id !== id) 
    }
}


const cars = new Cars(INIT_CARS)

cars.addCars({
    id: 1,
    name: 'BMW M5',
    color: 'silver grey',
    year: 2020,
    price: 15000000,
    currency: 'RUB'
})

cars.replaceCar({
    id: 2,
    name: 'Kalina',
    color: 'orange',
    year: 2012,
    price: 200000,
    currency: 'RUB'
})


console.log(cars.getCar(2))




// let car = {
//
// };

// let cars = [];

// function getCars() {
//     return cars;
// };

// function getCar(id) {
//     return   cars.find(item => item.id == id)

// };

// function addCar(newCar) {

// }

// function deleteCar(id) {

// }

// function updateCar(id, car) {

// }

// function reset() {
//     cars.length = 0;
// }

// function init(initCars) {
//     cars = initCars;
// }
// module.exports = {
//     getCars,
//     getCar,
//     addCar,
//     deleteCar,
//     updateCar,
//     init,
//     reset,

// }