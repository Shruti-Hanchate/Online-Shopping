export class Product {
    constructor(
      public id: String,
      public name: String,
      public image: String,
      public description: String,
      public price: String,
      public type: String,
      
    ) {}
  }
  
  export interface Product2 {
     id: String,
     name: String,
      image: String,
     description: String,
     price: String,
     type: String,
  }