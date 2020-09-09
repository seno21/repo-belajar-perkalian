// Pembuatan variabel
// Dalam JS (ES6) hanya ada 2 jenis const dan let
// penggunaan const untuk nilai yang tidak berubah, contoh pengambilan elemen
// let untuk nilainya yang berubah-ubah

// pengambilan elemen. Bisa menggunakan querySelector, getElementById, atau getElementByClassName
// masukkan elemen HTML yang ingin diubah

// catatan
// semua sudah sesuai dengan syntax ES6
// ketika ingin belajar JS coba pelajari hal berikut:
// 1. penulisan variabel (const dan let, hindari penggunaan var)
// 2. penulisan fungsi (fungsi normal dan arrow function)
// 3. pengamilan elemen HTML ke dalam JS (querySelector,getElemntById, atau getELementByClassName)
//     biasanya pada ES6 menggunakan querySelector("selector")
//     selector bisa diisi dengan nama kelas ataupun nama ID
//     (#)untuk ID (.) untuk kelas
// 4. pelajari event listener (penggunaan event yang biasanya digunakan click dan keyup)
// 5. cari tahu beberapa code keyboard (13 untuk enter dan masih banyak yang lainnya)


// pengambilan elemen angka
const angka1 = document.querySelector(".angka1");
const angka2 = document.querySelector(".angka2");

// pengambilan elemen skor
const skorBenar = document.querySelector(".skor-benar");
const skorSalah = document.querySelector(".skor-salah");

// pengambilan elemen input
const elemenInput = document.querySelector("#hasil");

// (#) untuk pengambilan selector dengan atribut id, sedangkan (.) untuk pengambilan selector dengan atribut class
// Intinya mirip kaya pemangilan selector di CSS.

// membuat variabel untuk menampung angka random
let randomAngka1;
let randomAngka2;

// membuat variabel untuk menampung hasil perkalian 2 angka random
let hasil;

// membuat variabel untuk nilai benar dan salah
let benar = 0;
let salah = 0;

// buat fungsi untuk merandom angka
function random() {
    randomAngka1 = Math.floor(Math.random() * 10) + 1;
    randomAngka2 = Math.floor(Math.random() * 10) + 1;
    hasil = randomAngka1 * randomAngka2;
    // Math Floor adalah fungsi untuk membulatkan angka
    // Math Random adalah fungsi untuk menghasilkan angka dari 0-1 termasuk angka koma
    // dikali 10 maksudnya untuk membatasi angka maksimal, misalnya dikali 5 berarti hasil random yang keluar 0-5
    // ditambah 1 supaya range angka randomnya dari 1-angka maksimal
}

// buat fungsi untuk menampilkan angka random ke elemen HTMl
function tampil() {
    random();
    angka1.innerHTML = randomAngka1;
    angka2.innerHTML = randomAngka2;
    skorBenar.innerHTML = benar;
    skorSalah.innerHTML = salah;
    elemenInput.value = '';
}

// buat fungsi cek jawaban
function cekJawaban() {
    // elemenInput.value itu untuk mengambil nilai yang diinput oleh user
    if (hasil == elemenInput.value) {
        benar += 1;
    } else {
        salah += 1;
    }

    // random kembali angka setelah cek jawaban
    tampil();
}

// buat fungsi cek hasil, saya sih pengen buatnya dalam variabel yang berisi fungsi
// oh iyah, di ES6 ada yang namanya arrow function
// arrow function itu penulisan fungsi secara singkat
// fungsi tanpa paramater ditulis ()=>
// fungsi dengan paramater ditulis (paramater)=>

const cekHasil = (event) => {
    if (event.keyCode === 13) {
        cekJawaban();
    }

    // event adalah sebuah kegiatan yang dilakukan oleh user bisa click atau pun pencet tombol
    // masing-masing pemencetan keyboard ada codenya
    // 13 adalah kode untuk user yang menekan tombol enter
}

// menambahkan event, banyak contoh event misalnya click
elemenInput.addEventListener("keyup", cekHasil);

// pemanggilan funsi tampil sebagai fungsi utama
tampil();

// Next kita akan membuat lebih interaktif dengan adanya pesan benar atau salah
// lalu kita akan membuat timer
// Jika ada pertanyaan langsung tanyakan