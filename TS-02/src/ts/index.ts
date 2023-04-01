abstract class Vehcile {
    constructor(
      private _model: number,
      private _year: number,
      private _rent: number
    ) {}
  
    get model() {
      return this._model;
    }
  
    get year() {
      return this._year;
    }
    get rent() {
      return this._rent;
    }
  
    set model(newmodel: number) {
      if (!newmodel) {
        throw new Error("Name cannot be empty");
      }
      this._model = newmodel;
    }
    set year(newyear: number) {
      if (!newyear) {
        throw new Error("Name cannot be empty");
      }
      this._year = newyear;
    }
    set rent(newrent: number) {
      if (!newrent) {
        throw new Error("Car is not Available");
      }
      this.rent = newrent;
    }
  
    
  
    abstract rentalrate(): number;
  }
  
  class BMW extends Vehcile{
    constructor(
        model: number,
        year: number,
        rent: number,
        private vehcileName: string,
        private colour: string

      ) {
        super(model, year, rent);
      }
      

       rentalrate(){
        return this.rent*10;
       }
       
  }
  
  class Audi extends Vehcile{
    constructor(
        model: number,
        year: number,
        rent: number,
        private vehcileName: string,
        private colour: string

      ) {
        super(model, year, rent);
      }
      

       rentalrate(){
        return this.rent*10;
       }
       
  }
  class Ferrari extends Vehcile{
    constructor(
        model: number,
        year: number,
        rent: number,
        private vehcileName: string,
        private colour: string

      ) {
        super(model, year, rent);
      }
      

       rentalrate(){
        return this.rent*10;
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
 