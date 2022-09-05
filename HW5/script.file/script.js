// 1
// let e = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
function getRandomArray(length, min, max){
    const arr = new Array(length).fill(0);
     return arr.map(() => Math.floor(Math.random() * (max - min) + min));
}
console.log(getRandomArray(10, 2, 87));

// 2
// 3
function getAverage(...numbers){
    let sum = 0;
    numbers.map((el) => {
        if(Number.isInteger(el)) {
            sum = (sum + el);
        }
    });
    return sum / numbers.length;
}
console.log(getAverage(20, 50, 60));

// 5
const numbers = [1, 5 ,6 , 5, 9];
function filterEvenNumbers(...numbers) {
    return numbers.filter((el) => {
        if(el % 2 !== 0) {
            return el;
        }
    })
}
console.log(filterEvenNumbers(1, 5 ,6 , 5, 9));
 
// 6
function countPositiveNumbers(...numbers) {
    let counter = 0;
    numbers.map((el) => {
        if(el > 0 ) {
            counter = counter + 1;
        }
    });
    return(counter);
}
console.log(countPositiveNumbers(22, -3, 5, -1, 1));
// 7
function getDividedByFive(...numbers) {
    return numbers.filter((el) => {
        if(el % 5 === 0) {
            return el;
        }
    })
}
console.log(getDividedByFive(1, 15 ,6 , 55, 90));
//  8
let badWords = ["fuck", "shit"];
function replaceBadWords(string){
    let newArray = string.split(' '); 
    badWords.map((el) => {
        if(newArray.indexOf(el) >= 0 ) {
            newArray[newArray.indexOf(el)] = "****"; 
        }
    })
return newArray.join(' ');
}
console.log(replaceBadWords("Are you fuck kidding?"));
