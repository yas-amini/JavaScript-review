//Lets convert a for loop into a while loop:
// A for loop that prints 1, 2, and 3

for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3

let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

/* 
-The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
-We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
-Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo. */