class Product{
  constructor(id,name,price,category){
    this.id=id;
    this.name=name;
    this.price=price;
    this.category=category;
  }
  applyDiscount(percent){
    this.price=this.price-(this.price*(percent/100));
  }
  details(){
    return `${this.id} ${this.name} ${this.category} ₹${this.price}`;
  }
}

const p1=new Product(1,"Phone",15000,"Electronics");
const p2=new Product(2,"Shirt",500,"Fashion");
const p3=new Product(3,"Laptop",50000,"Electronics");

const products=[p1,p2,p3];

console.log(products.filter(p=>p.price>1000).map(p=>p.details()));
