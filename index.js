//FizzBuzz
const max = 20;
const min = 1;
const random = Math.floor(Math.random()*(max-min+1)+min);
if (random%3===0) {
    console.log(`Fizz`);
} else if (random%5===0) {
    console.log(`Buzz`);
} else if (random%5===0 && random%3===0) {
    console.log(`FizzBuzz`);
} else {
    console.log(`${random} не подходит поl условие`);
}


