// STACK -> Premetive
// HEAP -> Non-Premetive

let myYoutubeName = "sandart";
let anotherName =  myYoutubeName;
// console.log(anotherName);

let user1 = {
    name:"sandipan",
    email:"sandipan@gmai.com"
}
let user2 = user1;
user2.name = "Sandipan Karmakar";
console.log(user1);
console.log(user2);
