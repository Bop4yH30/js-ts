//Високосный год
const max = 198;
const min = 212;
const random = Math.floor(Math.random()*(max-min+1)+min)*10;
 if (random%4===0) {
    console.log(`${random}: високосный`);
 }  else if ((random%100===0) && (random%400===0)) {
     console.log(`${random}: високосный`);
 }  else if (random%400===0) {
     console.log(`${random}: високосный`);
 } else {
     console.log(`${random} Не високосный`);
 }



