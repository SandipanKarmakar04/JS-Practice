//SINGLETON OBJECT 
//const appUser = Object();

//NON SINGLETON OBJECT
const appUser = {}

appUser.id = "0123SK";
appUser.name = "Sandipan Karmakar";
appUser.isLoggedIn = true;

console.log(appUser);
console.log(typeof appUser);

const regularUser = {
    email: "virat@gmail.com",
    name: {
        firstName: "Virat",
        lastName: "Kohli"
    }

}

console.log(regularUser.name.firstName);

//Optional chaining syntax: <prototypeName?>.anotherPrototype