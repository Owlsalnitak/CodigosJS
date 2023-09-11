var soma = 0;
for (var i = 0; i < 100; i++) {
  soma+= i;
}

console.log("A dos números de 1 à 100:  " + soma);

/*MULTIPLOS DE 3 */
var soma = 0;
for(let i = 1; i < 100; i++) {
        if(i % 3 == 0) {
            soma += i;
        }
    }
console.log("Soma de multiplos de 3 entre 1 e 100: " + soma)