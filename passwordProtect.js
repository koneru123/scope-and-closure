/*
var myFunc = function(a, b) {
  console.log('my func ran');
  return a + b;
};

var myOtherFunc = function(a, b, c, d, e, f, g, h) {
  console.log('my func ran');
  return [a, b, c, d, e, f, g, h];
};

var protectedMyFunc = passwordProtect(myFunc, 'p@ssw0rd');

protectedMyFunc('password', 1, 2); // nothing logged, nothing returned
protectedMyFunc('p@ssw0rd', 1, 2); // logs 'my func ran', returns 3
protectedMyFunc('p@ssw0rd', 13, 5); // logs 'my func ran', returns 18
*/
var myFunc = function(a, b) {
  //debugger;
  console.log('my func ran');
  return a + b;
};

var passwordProtect = function(func, password) {
  return function(passwordNeedsVerification, num1, num2) {
    if(password === passwordNeedsVerification) {
      return func(num1, num2);
    }
    return '';
  }
}

/*var passwordProtect = function(func, password) {
  debugger;
  console.log(arguments);
  // YOUR CODE HERE
  return function() {
    debugger;
    console.log(password);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    let value;
    if(arguments[0] === password) {
      value = func(arguments[1], arguments[2]);
      console.log(value);
      return value;
    }
  }
};*/

var protectedMyFunc = passwordProtect(myFunc, 'p@ssw0rd');

console.log(protectedMyFunc('password', 1, 2)); // nothing logged, nothing returned
console.log(protectedMyFunc('p@ssw0rd', 1, 2)); // logs 'my func ran', returns 3
console.log(protectedMyFunc('p@ssw0rd', 13, 5)); // logs 'my func ran', returns 18




