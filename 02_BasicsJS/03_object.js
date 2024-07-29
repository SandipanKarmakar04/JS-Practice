//Singleton
//Object.create

//Object literal
const mySym = Symbol("Key1");
const user = {
    name: "Sandipan",
    [mySym]: "myKey1",
    age: 23,
    location: "Kolkata",
    email: "sandipankarmakar@gmail.com",
    isLoggedIn: true,
    lastOnlineDays: ["monday", "tuesday"]
}

// console.log(user);
// console.log(user["email"]);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);

user.email = "sandipan.sk7@gmail.com";
// Object.freeze(user);
user.email = "sandipan@yahoo.com";
// console.log(user.email);

user.greeting1 = function(){
    console.log("Hello JS user.");
}
user.greeting2 = function(){
    console.log(`Hello ${this.name} `);
}

console.log(user.greeting1());
console.log(user.greeting2());