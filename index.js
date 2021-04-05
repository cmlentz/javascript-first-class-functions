function myFunc() {
  console.log('Hello World!');
}

function receivesAFunction(callback) {
  callback();
}

// myFunc as callback function
function callingFunc() {
  receivesAFunction(myFunc);
}

function returnsANamedFunction() {
  return myFunc;
}

// anonymous function return
function returnsAnAnonymousFunction() {
  return function() {
    console.log(`Anonymous World!`);
  };
}