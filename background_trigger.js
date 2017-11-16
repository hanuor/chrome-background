//enter the minimum number
var globalURL_start = "https://github.com/hanuor/chrome-background/blob/master/backgrounds/";
var list_of_backgrounds = ["creed", "creative", "milky", "mountain", "polygons"];
var globalURL_end = ".jpg?raw=true";
var minimum = 1;
var maximum = 5;
var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

document.body.style.backgroundImage = "url('" + globalURL_start + list_of_backgrounds[randomnumber] + globalURL_end + "')";
