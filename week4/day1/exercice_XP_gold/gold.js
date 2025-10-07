//exerciece 1

// let landscape = function() {

//  let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }

//  let mountain = function(x) {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }

//  flat(4);
//  mountain(4);
//  flat(4)

//  return result;
// }

// console.log(landscape());
//predictoin : "____/''''\\____" but we used // to escape so the result is "____/''''\____"

//arrow function
const landscape = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape());  



// exercice 2
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3); // the result is 13 because the arrow function addTo is a higher ordered function so addTo return the function y => 10 + y
// then addToTen(3) becomes: 10 + 3, which equals 13


//exercice 3
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)//curriedSum is a curried function  it returns another function
//curriedSum(30) returns: (b) => 30 + b
//then we call that with (1): 30 + 1 = 31


//exercice 4
const curriedSum1 = (a) => (b) => a + b
const add5 = curriedSum1(5)
add5(12)// 17 because curriedSum is a curried function: (a) => (b) => a + b
//curriedSum(5) returns a new function: (b) => 5 + b
//so add5(12) = 5 + 12 = 17

//exercice 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const ad_d5 = (num) => num + 5;
compose(add1, ad_d5)(10) // 16 compose(f, g) returns the function (a) => f(g(a)) then the function compose(add1, ad_d5)(10) means
                        // firstly it will calls ad_d5 =>5 then add1=>1



