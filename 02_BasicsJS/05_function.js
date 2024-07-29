function sayName() {
    console.log("Sandipan Karmakar");
    
}
// sayName();

// function add(n1, n2){
//     console.log(n1 + n2);
// }
// add(3, "sandipan");

// function add2(p1, p2){
//     let re = p1 + p2;
//     return re;
// }
// const result = add2(3, 2);
// console.log(result);

function loginUser(userName) {
    if(userName == undefined){
        console.log("please enter a username");
    }
    return `${userName} just logged in.`
    
}
console.log(loginUser("sandipan"));