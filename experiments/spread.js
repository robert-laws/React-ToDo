// function add(a, b, c, d) {
//   return a + b + c + d;
// }
//
// console.log(add(4, 5, 6, 7));
//
// var toAdd = [8, 13, 7, 12];
//
// console.log(add(...toAdd));


// var groupOne = ['hal', 'kal', 'bob', 'val'];
// var groupTwo = ['jim'];
// var final = [...groupTwo, 5, ...groupOne];
//
// console.log(final);

var personOne = ['Bob', 34];
var personTwo = ['Hal', 42];

function greeting(name, age) {
  return "hello " + name + ", you are " + age;
}

console.log(greeting(...personOne));
console.log(greeting(...personTwo));

var names = ['hal', 'kal', 'bob', 'val'];
var final = ['jim', ...names];

final.forEach(function(name) {
  console.log("hello " + name);
})
