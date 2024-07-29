const user = {
    username: "sandipan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
    //this refers to the current context. 

}
// user.welcomeMessage()
// user.username = "virat";
// user.welcomeMessage()

// console.log(this);

//Global object in browser is known as 'window' object.


// function chai() {
//     let username = "sandipan";
//     console.log(this.username);   
// }

// chai()

// const chai = function () {
//      let userName = "sandipan";
//      console.log(this.userName);
// }

// chai()

// const chai = () => {
//     let userName = "sandipan";
//     console.log(this);
// }

// chai()


//Explicite return example:
// const addTwo = (n1, n2) => {
//     return n1 + n2;
// }
// console.log(addTwo(6, 3));


//Implicite return example:
// const addTwo = (n1, n2) => (n1 + n2)
// console.log(addTwo(2, 3));


// const addTwo = (n1, n2) => ({username: "sandipan"})    
// console.log(addTwo(2, 3));

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
