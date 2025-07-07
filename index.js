// Циклы Бросок кубиковБросок кубиков

let count = 0;
const max =6;
const min = 1;
let num1 = Math.floor(Math.random()*(max-min+1)+min);
let num2 = Math.floor(Math.random()*(max-min+1)+min);
while (num1!==num2){
     num1 = Math.floor(Math.random()*(max-min+1)+min);
     num2 = Math.floor(Math.random()*(max-min+1)+min);
        count++;
    if (num1===num2){
        break;
    }
}
console.log(`Попыток:${count}`)
console.log(`Дубль:${num1}`);



