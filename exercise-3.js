// Exercise 3 If-Else

var nama = "Teddy";
var peran = "Tabib";
var opening = "Selamat datang di Dunia Proxytia, " + nama;

if(nama === "") {
    console.log("Nama harus diisi!");

} else if(peran === "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");

} else if(peran === "Ksatria") {
    console.log(opening);
    console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");

} else if(peran === "Tabib") {
    console.log(opening);
    console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");

} else if(peran === "Penyihir") {
    console.log(opening);
    console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");

} else {
    console.log("Halo " + nama + ", peran tidak tersedia, silahkan pilih lagi");
}