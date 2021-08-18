//Q1

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

//alternatif
if (nilai > 80 && nilai <= 100) {
    return "A";
} else if (nilai > 60 && nilai <= 80) {
    return "B";
} else if (nilai > 40 && nilai <= 60) {
    return "C";
} else if (nilai > 20 && nilai <= 40) {
    return "D";
} else if (nilai >= 0 && nilai <= 20) {
    return "E";
} else {
    return "Nilai tidak valid";
}

//Q2

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(nilai)],
    ["Andika", 70.1, nilaiPeserta(nilai)],
    ["Alif", 19, nilaiPeserta(nilai)],
    ["Vista", 102, nilaiPeserta(nilai)]
];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.

for (var i = 0, l1 = dataSiswa.length; i < l1; i++) {
    for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++) {
        if(j==0){
            document.write('Nama : ' + dataSiswa[i][j], '<br>')
        }
        if(j==1){
            document.write('Nilai angka : ' + dataSiswa[i][j], '<br>')
        }
        if(j==2){
            document.write('Nilai huruf : ' + dataSiswa[i][j], '<br>')
        }
    }
}