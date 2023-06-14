// function BankAccount(customerName, balance) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   //   this.deposit = (amount) => {
//   //     this.balance = this.balance + amount;
//   //   };
// }

// const alokAccount = new BankAccount('Andrew', 2000);

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (withdrawAmount) {
//   this.balance = this.balance - withdrawAmount;
// };

// alokAccount.deposit(2000);
// alokAccount.withdraw(1000);

// console.log(alokAccount);


function Person() {
    this.name = "Prajapati Alok",
    this.age = 21
}

// creating a Objects
const userDetails = new Person();

// adding property to constractor function
Person.prototype.gender = "male"

console.log(Person.prototype)
console.log(userDetails.gender)
