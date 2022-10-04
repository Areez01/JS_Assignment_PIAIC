var magicians = ["Mag 1", "Mag 2", "Mag 3"];

function show_magicians(){
for(var i = 0; i < magicians.length;i++){
console.log(magicians[i]);
}

}
function make_great(){
for(var j = 0; j < magicians.length; j++){
console.log("Great " + magicians[j]);
}
}
show_magicians();
make_great();

