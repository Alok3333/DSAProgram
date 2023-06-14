function BankAccount(customerName, balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = (amount) => {
    this.balance = this.balance + amount;
  };

  this.withdraw = (withdrawAmount) => {
    this.balance = this.balance - withdrawAmount;
  };
}

// const alokAccount = new BankAccount('Alok k', 1000);

// alokAccount.balance = 2000;  // it's a problem, so we will fix in the help of Encapsulation

// alokAccount.deposit(5000)
// alokAccount.withdraw(500);

// const pradeepAccount = new BankAccount('Pradeep verma', '1500')

// console.log(alokAccount);

// =====================================

const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);

  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  account.deposit(+amount.value);
  console.log(accounts);
});
