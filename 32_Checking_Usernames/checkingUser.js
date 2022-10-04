
 var current_users = ["Aareez", "Raafay", "Faiz", "Test", "Unknown"];
 var new_users = ["Raafay", "raafay", "Noneusr", "USER", "Faiz"];
 let i;
for(i = 0;i <= 4;i++){
for(let j = 0;j <= 4;j++){
if(current_users[i].toLowerCase() == new_users[j].toLowerCase()){
console.log("User "+ "'"+current_users[i]+"'" + " Already Exists try some other name");

}
else{
console.log(new_users[j] + " User name is avaiable");
}
}

}









