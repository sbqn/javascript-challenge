function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
}

var nilaiPeserta = prompt('Silahkan masukkan nilai yang kamu peroleh untuk mengetahui klasifikasi nilai: ','20-100');

switch(true){
    case (nilaiPeserta > 80 && nilaiPeserta <= 100) :
        document.write('Nilai kamu masuk klasifikasi A')
        break
    case (nilaiPeserta > 60 && nilaiPeserta <= 80) :
        document.write('Nilai kamu masuk klasifikasi B')
        break
    case (nilaiPeserta > 40 && nilaiPeserta <= 60) :
        document.write('Nilai kamu masuk Klasifikasi C')
        break
    case (nilaiPeserta > 20 && nilaiPeserta <= 40) :
        document.write('Nilai kamu masuk Klasifikasi D')
        break
    default :
        document.write('Nilaimu belum mencukupi')
}


var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(nilai)],
    ["Andika", 70.1, nilaiPeserta(nilai)],
    ["Alif", 19, nilaiPeserta(nilai)],
    ["Vista", 102, nilaiPeserta(nilai)]
];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.

