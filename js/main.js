/* Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato. L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
*/
let N=prompt("quanti numeri vuoi inserire?");
let myArray=[N];
let sum;
for(let i=0;i<N;i++){
  let numeroinserito= parseInt( prompt("inserisci un numero:"));
      myArray.push(numeroinserito);
  
sum=sommaNumeri(myArray,N);
}

console.log(myArray);
console.log( `la somma totale è:  ${sum}`);

function sommaNumeri(array, N){
     
let somma=0;
    for(let i=1;i<=N;i++){
    somma += array[i];
   }
   return somma;
   
}

/*ilestone 2:
Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti! */