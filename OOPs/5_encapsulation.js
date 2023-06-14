class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transctionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoad(amount) {
    console.log('Taking businessLoad: ' + amount);
  }
}

const alokAccount = new CurrentAccount('Alok k', 500);

console.log(alokAccount);
