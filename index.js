// Циклы Гласные буквы
let count = 0;
const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
const newvowels =[];
const words = 'ПроработАнный';
const long = words.length;
for (let i = 0; i<vowels.length; i++){
    newvowels.push(vowels[i].toUpperCase());
}
for (const word  of words){
    if (vowels.includes(word)) {
        count++;
            }
    else if (newvowels.includes(word)){
        count++;
    }
}
console.log(`Гласных:${count}`);
console.log(`Согласных:${long-count}`);



