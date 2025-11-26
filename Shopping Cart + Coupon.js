class Cart{
  constructor(){
    this.items=[];
  }
  addItem(name,price,qty){
    this.items.push({name,price,qty});
  }
  getTotal(){
    return this.items.reduce((a,b)=>a+(b.price*b.qty),0);
  }
  applyCoupon(code){
    if(!/^(SAVE|DISC)\d{2}$/.test(code)) return this.getTotal();
    let percent=parseInt(code.match(/\d+/)[0]);
    let total=this.getTotal();
    return total-(total*(percent/100));
  }
}

const c=new Cart();
c.addItem("Phone",20000,1);
c.addItem("Earbuds",2000,2);
console.log(c.applyCoupon("SAVE20"));
