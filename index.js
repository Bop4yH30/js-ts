// Циклы Ключи и значения
const people =    { id: 8, name: 'Александр', gender: 'm', age: 25 };
const keys = [];
let value = [];

for (const key in people){
    keys.push(key);
    value.push(people[key]);
}
console.log(keys);
console.log(value);








