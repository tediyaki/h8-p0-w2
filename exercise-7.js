// No. 1
console.log("1. Menyusun Barisan Bintang\n");

var rows = 5;

for(var i = 0; i < rows; i++) {
    console.log("*");
}

console.log("\n2. Menyusun Barisan Bintang Dengan Nested Looping\n");

var rows2 = 7;

for(i = 0; i < rows2; i++) {
    var stars = "";
    for(var j = 0; j < rows2; j++) {
        stars += "*"
    }
    console.log(stars);
}

console.log("\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping\n");

var rows3 = 9;

for(i = 0; i < rows3; i++) {
    stars = "";
    for(j = 0; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}