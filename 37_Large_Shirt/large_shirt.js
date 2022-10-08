
function large_shirt(l_shirt="Large", message="I love JS"){
console.log("The size of the shirt is " + l_shirt + " and the message is " + message);

}
large_shirt();

function small_shirt(s_shirt="Small", message="I love JS"){
console.log("The size of the shirt is " + s_shirt + " and the message is " + message);
}

small_shirt();

function make_shirt(message, size = "Medium"){
console.log("The size of the shirt is " + size + " and the message is " + message);
}

make_shirt("Hello I'm a Medium shirt");
