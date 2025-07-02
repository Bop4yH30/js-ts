// апишите программу, которая генерирует случайное число между -2 и +2 и выводит в консоль “положительное” или “отрицательное”, в зависимости от того, какое число было сгенерировано.
//
//     Если число равно нулю, то вывести null
const num = Math.random();
const min = -2;
const max = 2;
const random = Math.floor(num * (max - min + 1) + min)
if (random<0) {
    console.log(`${random} отрицательное`);
} else if (random>0) {
    console.log(`${random} положительное`);
} else if (random===0) {
    console.log('null')
}

