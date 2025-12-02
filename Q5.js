// Q5 - Ride-Sharing Application (User, Driver, Trip)
// Classes and error handling for calculateFare

class User {
  constructor(name, rating = 5) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle; // e.g., {make:'Toyota', model:'Etios'}
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  // Example fare calculation: base fare + per km rate
  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error('Distance not provided');
    }
    if (typeof this.distance !== 'number' || this.distance < 0) {
      throw new Error('Invalid distance');
    }
    const baseFare = 50;
    const perKm = 12; // currency units per km
    return baseFare + this.distance * perKm;
  }
}

// Usage with try/catch
try {
  const trip1 = new Trip('A', 'B', 10);
  console.log('Fare for trip1:', trip1.calculateFare());

  const trip2 = new Trip('X', 'Y', -5); // invalid distance
  console.log('Fare for trip2:', trip2.calculateFare());
} catch (err) {
  console.error('Trip error:', err.message);
}
