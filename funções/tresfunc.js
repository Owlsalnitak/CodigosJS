function  funct () {
    console.log("Function")
}
function valor(value =10) {
   return value   
}
console.log(valor)

let numer = [1,2,3,4]

const numAlterados = numer.map(num =>{
    return num * 2;
});

console.log(numAlterados)