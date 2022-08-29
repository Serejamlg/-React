const car = {
    id: 1,
    name: 'Lada 2106',
    color: 'red',
    year: 2000,
    price: 500,
    currency: 'RUB'
};

let cars = [];

function getCars() {
    return cars;
};

function getCar(id) {
    return   cars.find(item => item.id == id)

};

function addCar(newCar) {

}

function deleteCar(id) {

}

function updateCar(id, car) {

}

function reset() {
    cars.length = 0;
}

function init(initCars) {
    cars = initCars;
}
module.exports = {
    getCars,
    getCar,
    addCar,
    deleteCar,
    updateCar,
    init,
    reset,

}