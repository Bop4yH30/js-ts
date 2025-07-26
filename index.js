//Циклы Деление яблок
const mary = {
    name: 'Mary',
    wantApples: 2,
};

const alex = {
    name: 'Alex',
    wantApples: 1,
};

const mike = {
    name: 'Mike',
    wantApples: 5,
};

const brown = {
    name: 'Brown',
    wantApples: 4,
};

const people = [mary, alex, mike, brown];
const apples = 11;

const applesForOnePeople = Math.floor(apples/people.length);
const happy = [];
const notHappy = [];
for (const person of people) {
    person.eat = applesForOnePeople;
    person.inHappy = applesForOnePeople >= person.wantApples;
    if (person.inHappy){
        happy.push(person)
    }else {
        notHappy.push(person);
    }
}
console.log(happy)
console.log(notHappy)
        

    

