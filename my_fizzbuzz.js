/*
fizzbuzz is considered a widespread problem in computer science. it is the 
name for all the "basic logic" coding exercises that can be asked during a technical
interview *gasp...*

TASK:
 -create a my_fizzbuzz() function
    - it will take a parameter and an integer
    - function will iterate until i've reached the number given in the integer (?)
    - For each iteration, you will check the fizzbuzz logic, and the logic is the following:
        print (with a new line)
        'Fizz' for numbers divisible by 3
        'Buzz' for numbers divisible by 5
        'FizzBuzz' for numbers divisible by 15
        else you will print the number.
*/

function my_fizzbuzz(number) {
    for (let i = 1; i <= number; i++) { //'for' loop that iterates over a variable 'i' that increments up to 100.
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  