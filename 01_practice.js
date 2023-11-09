const accountId = 123456;
let accountName = "Sandipan Karmakar";
var accountEmail = "sandipan@gmail.com";
accountType = "Savings"
let accountCity;

// prefer not to use var because of issue in block scope and functional scope

console.log(accountName)
console.table([accountId, accountName, accountEmail, accountType, accountCity])