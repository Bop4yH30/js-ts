//Циклы Подходящие люди
const people = [
    { id: 8, name: 'Александр', gender: 'm', age: 25 },
    { id: 12, name: 'Мария', gender: 'f', age: 22 },
    { id: 31, name: 'Иван', gender: 'm', age: 17 },
    { id: 34, name: 'Ольга', gender: 'f', age: 19 },
    { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
    { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
    { id: 3, name: 'Сергей', gender: 'm', age: 18 },
    { id: 20, name: 'Анна', gender: 'f', age: 20 },
    { id: 19, name: 'Андрей', gender: 'm', age: 15 },
    { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];
const men = [];
const female = [];
for (let i = 0; i < people.length; i++) {
    let fm = people[i].gender;
    if (fm==="m" && people[i].age>18){
        men.push(people[i].name);

    }else if (fm==='f'&& people[i].age>20){
        female.push(people[i].name);
    }

}
console.log(`mans:${men}`);
console.log(`woman:${female}`);