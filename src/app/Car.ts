export class Car{
  id:string;
  brand:string;
  model:string;
  year:number;
  image:string;
  price:number;
  mileage:number;
  description:string;

  constructor(brand, model, year, image, price, mileage, description){
    this.id = 'not set';
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.image = image;
    this.price = price;
    this.mileage = mileage;
    this.description = description;
  }
}
