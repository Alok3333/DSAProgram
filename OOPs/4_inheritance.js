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
        super(customerName, balance)
    }

    takeBusinessLoad(amount) {
        console.log('Taking businessLoad: '+ amount)
    }
}

class SavingAccount extends BankAccount {
    transctionLimit = 10000;
    
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: '+ amount)
    }
}

const alokAccount = new SavingAccount('Alok k', 2000);

// alokAccount.deposit(3000);
// alokAccount.withdraw(1000);
alokAccount.takePersonalLoan(4000)

console.log(alokAccount);









// function BankAccount(customerName, balance) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (withdrawAmount) {
//   this.balance = this.balance - withdrawAmount;
// };

// // Current Account
// function CurrentAccount(customerName, balance) {
//   BankAccount.call(this, customerName, balance);
//   this.transictionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log('Taking business load: ' + amount);
// };

// // Saving Account
// function SavingAccount(customerName, balance) {
//   // constractor linking
//   BankAccount.call(this, customerName, balance);
//   this.transictionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log('Taking Personal load: ' + amount);
// };

// const alokAccount = new SavingAccount('Andrew', 2000);

// alokAccount.deposit(500);
// alokAccount.withdraw(1000);

// console.log(alokAccount);
