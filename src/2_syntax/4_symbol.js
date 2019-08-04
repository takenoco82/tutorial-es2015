let var1 = Symbol('var');
let var2 = Symbol('var');

// Symbol(var)
console.log(var1);
// Symbol(var)
console.log(var2);
// symbol
console.log(typeof var1);
// Symbol(var)
console.log(var1.toString());
// false
console.log(var1 == var2);
// false
console.log(var1 === var2);


// Symbolを定数として使う
let JAVASCRIPT = Symbol();
let JAVA = Symbol();
let PYHTON = Symbol();

let langage = PYHTON;
if (langage === JAVASCRIPT) {
    console.log("langage = JAVASCRIPT");
} else if (langage === JAVA) {
    console.log("langage = JAVA");
} else if (langage === PYHTON) {
    console.log("langage = PYHTON");
}
