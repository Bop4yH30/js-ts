//Циклы Округлить значения
const num = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3]
const num1 = [];
let count = 0;
for (let i = num.length-1; i >=0; i--) {
    let m = num[i];
    if (m<0 ) {
        num1.unshift(num[i]);
    } else if(m>0 && m>count && count<3) {
        num1.unshift(num[i])
        count++;
    }
        else if (m>0 && count>=3){
            num1.unshift(Math.round(num[i]));
        }
    }
console.log(num1);
