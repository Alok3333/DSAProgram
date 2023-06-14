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

const alokAccount = new BankAccount('Alok k', 2000);

alokAccount.deposit(3000)
alokAccount.withdraw(1000)

console.log(alokAccount);
