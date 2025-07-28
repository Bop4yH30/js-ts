//Циклы Каскадёры
const alice = {
    name: 'Alice',
    age: 10,
    illness: null,
    driverLicenses: ['B'],
};

const bob = {
    name: 'Bob',
    age: 18,
    illness: 'Cold',
    driverLicenses: ['B'],
};

const charlie = {
    name: 'Charlie',
    age: 17,
    illness: null,
    driverLicenses: ['C', 'E'],
};

const diana = {
    name: 'Diana',
    age: 22,
    illness: 'H. Disease',
    driverLicenses: ['A', 'C', 'D'],
};

const eve = {
    name: 'Eve',
    age: 35,
    illness: null,
    driverLicenses: ['A', 'B', 'E'],
};

const frank = {
    name: 'Frank',
    age: 37,
    illness: null,
    driverLicenses: [],
};

const gorge = {
    name: 'Gorge',
    age: 28,
    illness: null,
    driverLicenses: ['B', 'D'],
};

const persons = [alice, bob, charlie, diana, eve, frank, gorge];

const invalidPersons = [];
const validPersons = [];

// ----- Код НИЖЕ нужно переписать ------
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    if (person.age >= 18 && person.driverLicenses.includes('B') && person.illness === null ) {
         validPersons.push(person);
            } else {
         invalidPersons.push(person);
            }
    }
// ----- Код ВЫШЕ нужно переписать ------

console.log('Для трюка подходят:', validPersons);
console.log('Для трюка НЕ подходят:', invalidPersons);

        

    

