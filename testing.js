// // Anonymous function
// let anonymousfunction = function () {
//   console.log('This is anonymous function without name');
// };

// anonymousfunction();

// // Closure
// // When a variable which is defined outside the scope in reference
// // is accessed from some inner scope.
// let num = 10; // outer function
// function sum() {
//   return num + num; //inner function
// }

// let r = sum();
// console.log(r);

// let n = 12;
// let k = 3;

// function nFactors(n, k) {
//   if (k == 1) return 1;

//   let factors = [1];

//   for (let i = 2; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       factors.push(i);
//     }
//   }

//   factors.push(n);

//   if (factors.length >= k) {
//     return factors[k - 1];
//   } else {
//     return -1;
//   }
// }

// let r = nFactors(n, k);
// console.log(r);

console.log('Hello 1');

setTimeout(() => {
  console.log('Hello 2');
}, 1000);

console.log('Hello 3');
