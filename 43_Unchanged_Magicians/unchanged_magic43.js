var magicians = ["Mag 1", "Mag 2", "Mag 3"];
var great_mag = magicians.map(name => `Great ${name}`);

function show_magicians(){
for(var i = 0; i < magicians.length;i++){
console.log(magicians[i]);
}
}

function make_great(){
for(var h = 0; h < great_mag.length; h++){
console.log(great_mag[h]);
}
}

show_magicians();
make_great();
