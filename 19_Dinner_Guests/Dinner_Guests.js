const dinnerInvitation = ["Sameer", "Ali", "Abbas"];
console.log("Mr." + dinnerInvitation[0] + ", You're invited for dinner at 8pm");
console.log("Mr." + dinnerInvitation[1] + ", You're invited for dinner at 8pm");
console.log("Mr." + dinnerInvitation[2] + ", You're invited for dinner at 8pm");

console.log("\nMr." + dinnerInvitation[1] + ", Sorry to hear that you can't make it to dinner.");


dinnerInvitation[1] = "Rizwan"

console.log("\nMr." + dinnerInvitation[0] + ", You're invited for dinner at 8pm");
console.log("Mr." + dinnerInvitation[1] + ", You're invited for dinner at 8pm");
console.log("Mr." + dinnerInvitation[2] + ", You're invited for dinner at 8pm");


console.log("\nHello everyone! We've got more people joining us on dinner.");

dinnerInvitation.unshift("Shahmeer");

dinnerInvitation.splice(1, "Ahsan");

dinnerInvitation.push("Shafiq");

console.log("\nMr." + dinnerInvitation[0] + ", You're invited for dinner at 8pm");


console.log("Mr." + dinnerInvitation[1] + ", You're invited for dinner at 8pm");


console.log("Mr." + dinnerInvitation[2] + ", You're invited for dinner at 8pm");


console.log("Mr." + dinnerInvitation[3] + ", You're invited for dinner at 8pm");


console.log("Mr." + dinnerInvitation[4] + ", You're invited for dinner at 8pm");


console.log("\nI'm really sorry to say that but we can only invite two people for the dinner.");

console.log(dinnerInvitation);
console.log("Sorry Mr." + dinnerInvitation[4] + ", We can't invite you for dinner at this moment.")
dinnerInvitation.pop();


console.log("Sorry Mr." + dinnerInvitation[3] + ", We can't invite you for dinner at this moment.")
dinnerInvitation.pop();


console.log("Sorry Mr." + dinnerInvitation[2] + ", We can't invite you for dinner at this moment.")
dinnerInvitation.pop();

console.log(dinnerInvitation);

console.log("\nHello Mr." + dinnerInvitation[0] + ", You're still invited to the dinner")

console.log("Hello Mr." + dinnerInvitation[1] + ", You're still invited to the dinner")

dinnerInvitation.pop();

dinnerInvitation.pop();

console.log(dinnerInvitation);

console.log("Total " + dinnerInvitation.length + " persons are invited");
