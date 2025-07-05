//Возраст
const alex = {
    name: 'Alex',
    dateOfBirth: new Date('1989-06-26'),
};

const jake = {
    name: 'Jake',
    dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
    name: 'John',
    dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
    name: 'Bob',
    dateOfBirth: new Date(),
};
const begin = new Date().getTime();
const milsek_v_year = 31557600000;
alex.age = (Math.floor((begin - alex.dateOfBirth.getTime())/milsek_v_year));
jake.age = (Math.floor((begin - jake.dateOfBirth.getTime())/milsek_v_year));
john.age = (Math.floor((begin - john.dateOfBirth.getTime())/milsek_v_year));
bob.age = (Math.floor((begin - bob.dateOfBirth.getTime())/milsek_v_year));
console.log(alex);
console.log(jake);
console.log(john);
console.log(bob);