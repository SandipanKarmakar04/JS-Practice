//ARRAY

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(myArray);
//Shallow Copies
//Deep Copies

const myHeros = ["Ironman", "Captain America", "Black Panther"];
//console.log(myHeros);

const myArray2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
//myArray2.push(10);
//myArray2.pop();
//myArray2.unshift(0);
//myArray2.shift();

//console.log(myArray2.includes(5));
//console.log(myArray2.indexOf(6));
//const newArray = myArray2.join()

//console.log(myArray2);
//console.log(newArray);

/* ++++++++++ SLICE ++++++++++ */
//Doesn't manipulate the original values.
console.log("A. ", myArray);
const s1 = myArray.slice(1, 3);
console.log("Slice: ", s1);
console.log(myArray);

/* ++++++++++ SLICE ++++++++++ */
//Manipulate the original values. 
console.log("B. ",myArray);
const s2 = myArray.splice(1, 3);
console.log("Splice:", s2);
console.log(myArray);
