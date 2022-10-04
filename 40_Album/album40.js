function make_album(artist_name,album_title,album_tracks){
if(album_tracks){
return{
name:artist_name, 
title:album_title,
tracks:album_tracks
}
}
else{
return{
name:artist_name, 
title:album_title,
}
}
}
console.log(make_album("Aareez", "Hello World"));

console.log(make_album("Aareez B", "Hello World B"));

console.log(make_album("Aareez C", "Hello World C"));

console.log(make_album("Aareez D", "Hello World D", 5));

console.log(make_album("Aareez E", "Hello World E", 51));

