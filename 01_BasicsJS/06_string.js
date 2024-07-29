const name = "sandipan";
const repoCount = 50;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandipankarmakar');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('k'));

const newStr = gameName.substring(0, 4);
console.log(newStr);

//slice | trim | replace

const newStr2 = "   sandipan   ";
console.log(newStr2.trim());