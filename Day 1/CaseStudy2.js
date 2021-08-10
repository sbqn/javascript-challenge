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
    case (nilaiPeserta >= 80) :
        document.write('Nilai kamu masuk klasifikasi A')
        break
    case (nilaiPeserta >= 60) :
        document.write('Nilai kamu masuk klasifikasi B')
        break
    case (nilaiPeserta >= 40) :
        document.write('Nilai kamu masuk Klasifikasi C')
        break
    case (nilaiPeserta>=20) :
        document.write('Nilai kamu masuk Klasifikasi D')
    default :
        document.write('Nilaimu belum mencukupi')


/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/