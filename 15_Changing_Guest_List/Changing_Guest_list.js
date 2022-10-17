const dinnerInvitation = ["Sameer", "Ali", "Abbas"];

for(let i=0;i<dinnerInvitation.length;i++)
{
console.log("Mr." + dinnerInvitation[i] + ", You're invited for dinner at 8pm");
}

console.log("\nMr." + dinnerInvitation[1] + ", Sorry to hear that you can't make it to dinner.\n");

dinnerInvitation[1] = "Rizwan"

for(i=0;i<dinnerInvitation.length;i++)
{
console.log("Mr." + dinnerInvitation[i] + ", You're invited for dinner at 8pm");
}
