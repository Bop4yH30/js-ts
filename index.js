// Циклы
const array = [1, -3, 5, 6, 7, -5, -36, 4, 10, -7, 0];
const count = array.length;
const array1 = array.splice(array.length-2,1);
let num1 = 0;

 let positive = 1;
 let negative = 1;

while (count>num1 ) {
    num1++;
    if (array[num1] > 0) {
        let po = positive++;
    } else if (array[num1] < 0) {
        let n = negative++;
    }
}
console.log('Положительных:', positive);
console.log('Отрицательных:', negative);
