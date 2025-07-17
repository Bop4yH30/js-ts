//Циклы Ёлочка
let h = 6;
let tree =' ';
let ornament = '*';
for (let i=0; i<h; i++) {
    let space = h-i-1;
    let colSymbols = 2*i +1;
    let line=tree.repeat(space) + ornament.repeat(colSymbols);
     console.log(line);
    }
// console.log(tree)
