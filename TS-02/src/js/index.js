"use strict";
class Vehcile {
    constructor(_model, _year, _rent) {
        this._model = _model;
        this._year = _year;
        this._rent = _rent;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rent() {
        return this._rent;
    }
    set model(newmodel) {
        if (!newmodel) {
            throw new Error("Name cannot be empty");
        }
        this._model = newmodel;
    }
    set year(newyear) {
        if (!newyear) {
            throw new Error("Name cannot be empty");
        }
        this._year = newyear;
    }
    set rent(newrent) {
        if (!newrent) {
            throw new Error("Car is not Available");
        }
        this.rent = newrent;
    }
}
class BMW extends Vehcile {
    constructor(model, year, rent, vehcileName, colour) {
        super(model, year, rent);
        this.vehcileName = vehcileName;
        this.colour = colour;
    }
    rentalrate() {
        return this.rent * 10;
    }
}
class Audi extends Vehcile {
    constructor(model, year, rent, vehcileName, colour) {
        super(model, year, rent);
        this.vehcileName = vehcileName;
        this.colour = colour;
    }
    rentalrate() {
        return this.rent * 10;
    }
}
class Ferrari extends Vehcile {
    constructor(model, year, rent, vehcileName, colour) {
        super(model, year, rent);
        this.vehcileName = vehcileName;
        this.colour = colour;
    }
    rentalrate() {
        return this.rent * 10;
    }
}
var user = prompt("Welcome to Our Rental Car Service " + "Audi," + " " +" Ferrari,"+  " " + "BMW")


if(user=="Audi"){
const audi = new Audi(2019, 2023, + 1800 * 5, "Audi","Black");
 console.log(audi);
 
}
if(user=="Ferrari"){
 const ferrari = new Ferrari(2021, 2023, + 9000 * 5, "Ferrari","Black");
 console.log(ferrari);
 
}
if(user=="BMW"){
 const bmw = new BMW(2020, 2023, + 8000 * 5, "BMW","White");
 console.log(bmw);
 
}

//# sourceMappingURL=index.js.map