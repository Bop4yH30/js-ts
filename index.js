//Циклы Возраст
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 }
    ];
const counter = {};
for (const user of users) {
    if (counter[user.age] === undefined) {
        counter[user.age] = 0;
    }

    counter[user.age]++;
}

for (const key in counter) {
    console.log(`Возраст=${key}. Количество людей=${counter[key]}`);
}

        

    

