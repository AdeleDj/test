//                              EXERCISE #14

// let word = prompt('Введите слово');
// for(let x = 0; x < word.length; x++){
//         for(let y = x; y <= word.length; y++)
//         console.log(word.slice(x, y))            
// }


//                              EXERCISE #15

// countries (['France', 'United States of America', 'Togo', 'Australia', 'Bosnia and Herzegovina']);

// function countries (countryArr){
//     let sorted = countryArr.sort(
//         (a, b) => a.length - b.length);
//         console.log(`The shortest name of a country is: ${sorted[0]}`);
//         console.log(`The longest name of a country is: ${sorted[sorted.length -1]}`);
// }


//                              EXERCISE #16

// function findLetter(word, char) {
//     word = word.split("");
//     let counter = 0;

//     for(let i = 0; i < word.length; i++){
//         if(char === word[i]) counter += 1;
//     }
//     return counter;
// }
// console.log(findLetter("hippopotamus", "p"))


//                              EXERCISE #17

// let factorial = n => (n != 1) ? n * factorial (n - 1) : 1;
// console.log(factorial(6))

//                              EXERCISE #18
/////////////////////////////////////
/////////////////////////////////////
let z = [];
numbers(10, 100);
function numbers(x, y) {
    let arrayLength = y-x;
    for (let i = 0; i < arrayLength+1; i++) {
        z[i] = x;
        x++;
    }
    console.log(z);
}