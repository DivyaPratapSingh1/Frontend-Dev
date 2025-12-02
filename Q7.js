// Q7 - Banking Application with private fields (#balance)
class BankAccount {
  #balance = 0;
  constructor(initial = 0) {
    this.#balance = initial;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdraw amount must be positive');
    if (amount > this.#balance) throw new Error('Insufficient balance');
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Demonstration
const acc = new BankAccount(1000);
acc.deposit(500);
console.log('Balance after deposit:', acc.getBalance());

try {
  acc.withdraw(2000);
} catch (err) {
  console.error('Withdrawal error:', err.message);
}
console.log('Final balance:', acc.getBalance());
