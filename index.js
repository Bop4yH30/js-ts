//Базовые операции объекты
const person = {age:36, male:'men'};
const wife = {age:20,male: 'women', inv:person }
person.nick = 'Bop4yH';
person['new-status'] = 'Big-Boss';
wife.inv.family = 'married'
const name ='Evgeniy';
const age = 30;
const child = 'Alex';
const child2 = 'Chris'
const men = {name,age,child};
delete person.nick;
person.child = child2
console.log(person, wife)
console.log (men)