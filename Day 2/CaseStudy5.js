/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/

//VARIABLE SCOPE

/* menghitung luas bangun */
//segi empat (sisi * sisi)
function luasSegiEmpat(sisi){
    //tidak ada nilai balik
    var luas = sisi * sisi
    document.write('Luas segi empat = ' + luas);
}

//segi panjang (panjang * lebar)
function luasPersegiPanjang(panjang,lebar){
    var luas = panjang * lebar
    document.write('Luas persegi panjang = ' + luas);
}

//menggunakan nilai balik
//segitiga (0.5 * alas * tinggi)
function luasSegiTiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi
    return luas;
}
var 

//lingkaran (3.14 * jari-jari ^2)
function luasLingkaran(jarijari) {
    return 3.14 * jarijari ** 2
}

/* menghitung keliling bangun menggunakan fungsi expression */
//segi empat (4 * sisi)
var kelilingSegiEmpat = function(sisi){
    // return sisi + sisi + sisi + sisi;
    return 4 * sisi;
}

//segi panjang (2* (panjang + lebar))
var kelilingPersegiPanjang = function(panjang,lebar){
    return 2 * (panjang + lebar);
}

//segitiga (sisi + sisi + sisi)
var kelilingSegiTiga = function(alas,tinggi,sisiMiring){
    return alas + tinggi + sisiMiring;
}

//lingkaran (2 * 3.14 * jari-jari)
var kelilingLingkaran = function(jarijari){
    return 2 * 3.14 * jarijari;
}