// Циклы Мин, макс, среднее
const array = [2, -3, 5, 6, 7, -5, -36, 4, 10, -7, 0];
const count = array.length;
let max = array[0];
let min = array[0];
let summa = 0;
// const array1 = array.splice(array.length-2,1);
for (let i=0; i<count; i++) {
    summa = summa + array[i];
}
for (let i=0; i<count; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
for (let i =0; i<count; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}


console.log(max);
console.log(min);
console.log((summa/count).toFixed(2))

