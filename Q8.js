// Q8 - Movie Ticket Booking System (inheritance + prototype)
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }
  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Add printTicket to MovieTicket.prototype
MovieTicket.prototype.printTicket = function() {
  console.log('Ticket ->', this.movieName, 'Seat:', this.seatNo, 'Price:', this.price);
};

// Use OnlineTicket and call prototype method
const ot = new OnlineTicket('Avengers', 'A12', 250, 30);
ot.printTicket(); // inherited from MovieTicket.prototype
console.log('Total amount:', ot.getTotalAmount());
