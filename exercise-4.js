// Exercise 4 Switch-Case

var tanggal = 24;
var bulan = 7;
var tahun = 2013;
var month = "";

switch (bulan) {
    case 1:
        month = " Januari ";
        break;
    case 2:
        month = " Februari ";
        break;
    case 3:
        month = " Maret ";
        break;
    case 4:
        month = " April ";
        break;
    case 5:
        month = " Mei ";
        break;
    case 6:
        month = " Juni ";
        break;
    case 7:
        month = " Juli ";
        break;
    case 8:
        month = " Agustus ";
        break;
    case 9:
        month = " September ";
        break;
    case 10:
        month = " Oktober ";
        break;
    case 11:
        month = " November ";
        break;
    case 12:
        month = " Desember ";
        break;
    default:
        console.log("Invalid Bulan!");
        break;
}

console.log(tanggal + month + tahun);