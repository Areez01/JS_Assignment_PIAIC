const dinnerInvitation = ["Sameer", "Ali", "Abbas"];

for(let i=0;i<dinnerInvitation.length;i++)
{
console.log("Mr." + dinnerInvitation[i] + ", You're invited for dinner at 8pm");
}
console.log("\nMr." + dinnerInvitation[1] + ", Sorry to hear that you can't make it to dinner.");


dinnerInvitation[1] = "Rizwan"

for(i=0;i<dinnerInvitation.length;i++)
{
console.log("\nMr." + dinnerInvitation[i] + ", You're invited for dinner at 8pm");
}

console.log("\nHello everyone! We've got more people joining us on dinner.\n");

dinnerInvitation.unshift("Shahmeer");

dinnerInvitation.splice(1, "Ahsan");

dinnerInvitation.push("Shafiq");

for(i=0;i<dinnerInvitation.length;i++)
{
console.log("Mr." + dinnerInvitation[i] + ", You're invited for dinner at 8pm");
}










