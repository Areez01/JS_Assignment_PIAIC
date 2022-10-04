var processor = "Ryzen 5 5600G"
var processor2 = "Ryzen 5 5600g"
console.log("Testing Case Sensitivity between Ryzen 5 5600G and Ryzen 5 5600g");
console.log(processor == processor2);

console.log("Testing if Ryzen 5 5600G is not equal to Ryzen 5 5600g");
console.log(processor != processor2);


var port = "Sata";
console.log("Testing Lower case Fuction")
console.log(port == port.toLowerCase());

var a = 15; 
var b = 10;
var c = 20;
console.log("Is 15 equal to 10?");
console.log(a == b);
console.log("Is 20 not equal to 15?");
console.log(c != a);

console.log("Is 15 greater than 10?");
console.log(a > b);


console.log("Is 10 less than 20?");
console.log(b > c);


console.log("Is 50 greater or equal to 39?");
console.log(50 >= 39);



console.log("Is 55 less or equal to 100?");
console.log(55 <= 100);

console.log("Is 75 Less than 80 or 75 is greater than 80");
console.log(75 < 80 || 75 > 80);


console.log("Is 52 Less than 10 or 15 is greater than 55");
console.log(52 < 10 || 15 > 55);

console.log("Is 69 equal to 10 and 5 is greater than 1");
console.log(69 == 10 && 5 > 1);


console.log("Is 69 equal to 69 and 5 is greater than 1");
console.log(69 == 69 && 5 > 1);

var asia = ["Pakistan", "Iran", "India"]
console.log("Does Pakistan exists in Asia?");
console.log(asia.includes("Pakistan"));

console.log("Does USA exists in Asia?");
console.log(asia.includes("USA"));






















