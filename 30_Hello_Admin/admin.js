var users = ["Aareez", "Raafay", "Saleem", "Shani", "Admin"];

for(var i=0;i<users.length;i++){
if(users[i] == "Admin"){
    console.log("Hello " + users[i] + "! Welcome to the Dashboard");
    break;
}
else
{
console.log("Hello " + users[i]);
}
}
