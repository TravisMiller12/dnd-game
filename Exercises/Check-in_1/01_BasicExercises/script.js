 //1. Write a function that takes in two numbers as a parameter and add them up.

 function adder (num1, num2){
    return num1 + num2;
}

let answer = adder(50, 2);

console.log(answer);

//2. Write a function that accepts an array of numbers as an input and outputs the sum of all the numbers in the array

function sumArray(numbers) {
    return numbers.reduce(function(sum, num){
    return sum + num;
}, 0);
}

const nums = [2, 3, 5, 65, 22];
console.log(sumArray(nums));

//3. Write a function that accepts an array of numbers as an input and outputs "Foo" 
// if the sum is greater than 100, and "Bar" if the sum is less than 100 and "FooBar" if the sum is exactly 100

function fooBar(arrFoo){

return arrFoo.reduce(function(sum, num){
    return sum + num;
}, 0);
}

let num = [3, 66, 54, 80, 92];

let sum = fooBar(num);

if (sum > 100){
    console.log("Foo");
} else if (sum < 100) {
    console.log("Bar");
} else if(sum === 100) {
    console.log("FooBar");
}


//4. Write a function that randomly generates a dice toss result. Then call that function twice, 
// the first result will be player ones score, the second result will be player two's score. 
// Output who is the winner of the game.


function diceRoll(roll) {
    return Math.floor(Math.random() * 6) + 1;
  }

  let playerOne = diceRoll();
  let playerTwo = diceRoll();

  console.log(playerOne);
  console.log(playerTwo);

  if (playerOne > playerTwo){
    console.log("Player One rolled " + playerOne + " and Player Two rolled " + playerTwo + ". Player One wins!");
  } else if(playerOne < playerTwo) {
    console.log("Player One rolled " + playerOne + " and Player Two rolled " + playerTwo + ". Player Two wins!");
  } else {
    console.log("Both players rolled " + playerOne + ". It is a tie!");
  }

  //5. Given a string, reverse the characters and return the result

  function reserveString (str){
    return str.split("").reverse().join("");
  }

 let word = reserveString("Hello");

 console.log(word);