// No. 1
console.log("1. Melakukan Looping Menggunakan While\n");

var i = 2;

console.log("LOOPING PERTAMA");
while(i <= 20) {
    console.log(i + " - I love coding");
    i += 2;
}

console.log("LOOPING KEDUA");
while(i > 2) {
    i -= 2;
    console.log(i + " - I will become fullstack developer");
}

// No. 2
console.log("\n2. Melakukan Looping Menggunakan For\n");

console.log("LOOPING PERTAMA");
for(var j = 1; j <= 20; j++) {
    console.log(j + " - I love coding");
}

console.log("LOOPING KEDUA");
for(j = 20; j >= 1; j--) {
    console.log(j + " - I will become fullstack developer");
}

// No. 3
console.log("\n3. Angka Ganjil dan Genap\n");

console.log("\nGanjil Genap");
for(i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}

console.log("\nCOUNTER 2");
for(i = 1; i <= 100; i += 2) {
    if(i % 3 === 0) {
        console.log(i + " kelipatan 3");
    } else {
        console.log("");
    }
}

console.log("\nCOUNTER 5");
for(i = 1; i <= 100; i += 5) {
    if(i % 6 === 0) {
        console.log(i + " kelipatan 6");
    } else {
        console.log("");
    }
}

console.log("\nCOUNTER 9");
for(i = 1; i <= 100; i += 9) {
    if(i % 10 === 0) {
        console.log(i + " kelipatan 10");
    } else {
        console.log("");
    }
}