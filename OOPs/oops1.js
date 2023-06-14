// write a classes
class Person {
  name;
  address;
  #rollNo;
  constructor(name, address, rollNo) {
    this.name = name;
    this.address = address;
    this.#rollNo = rollNo;
  }

  std() {
    console.log(`${this.name} standred 10`);
  }

  get PersonName() {
    return this.name;
  }

  set PersonName(x) {
    this.name = x;
  }
}

class Person1 extends Person {
  constructor(name, address, rollNo, belong) {
    super(name, address, rollNo);
    this.belong = belong;
  }

  religous(contryName) {
    this.religous = contryName;
  }
}

const studentList = new Person1('Alok k', 'BTM Layout', 2, 'Up');

// studentList.#rollNo = 5;

// stList2.religous = 'India';
Person1.prototype.religous = 'India';

console.log(studentList);
console.log(studentList.religous);
