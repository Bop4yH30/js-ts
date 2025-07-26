//Циклы Самый длинный массив
const user = {
    example: [1, 2, 3],
    'X-Address': {
        street: 'Ленина',
        house: '10-Б',
    },
    data: { length: 50 },
    nickname: null,
    permissions: [true, false],
    age: 101,
    emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
    name: 'Peter Charles',
    isAdult: true,
    now: new Date().toISOString(),
};
let maxSize = null;
let result = null;

for (const key in user) {
    const value = user[key];

    if (!Array.isArray(value)) {
        continue;
    }

    if (maxSize === null || value.length > maxSize) {
        maxSize = value.length;
        result = value[value.length - 1];
    }
}

console.log(`Максимальная длина: ${maxSize}. Последнее значение: ${result}`);
        

    

