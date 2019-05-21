// Tugas 1
console.log("Tugas 1\n");

var shoutOut = () => "Halo Function!" ;
console.log(shoutOut());

// Tugas 2
console.log("\nTugas 2\n");

var calculateMultiply = (no1, no2) => no1 * no2;

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);

console.log(hasilPerkalian);

// Tugas 3
console.log("\nTugas 3\n");

var processSentence = (nama, usia, alamat, hobi) => "Nama saya " + nama + ", umur saya " + usia + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!"

var name = "Ted";
var age = 12;
var address = "Jln. Sultan Iskandar Muda";
var hobby = "tidur";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);