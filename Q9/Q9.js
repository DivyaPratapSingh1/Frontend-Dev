class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }
  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }
  applyCoupon(code) {
    const reg = /^(SAVE|DISC)(\d{1,2})$/;
    if (reg.test(code)) this.discount = parseInt(code.match(/\d+/)[0]);
    else alert("Invalid coupon");
  }
  getTotal() {
    let total = this.items.reduce((s, i) => s + i.price * i.qty, 0);
    return total - (total * this.discount) / 100;
  }
}
function testCart() {
  const cart = new Cart();
  cart.addItem("Shoes", 2000, 1);
  cart.addItem("Tshirt", 500, 2);
  cart.applyCoupon("SAVE20");
  document.getElementById("output").innerText = "Final Total: " + cart.getTotal();
}