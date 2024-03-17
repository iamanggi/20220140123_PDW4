// Fungsi untuk memvalidasi input username dan password saat tombol Login diklik
function validate() {
    var username = document.getElementById("username").value; // Mengambil nilai dari input username
    var password = document.getElementById("password").value; // Mengambil nilai dari input password

    // Memeriksa apakah input username atau password kosong
    if (username === "" || password === "") {
        alert("Silakan isi username dan password terlebih dahulu!"); // Menampilkan pesan jika input kosong
    } else {
        alert("Login berhasil!"); // Menampilkan pesan jika login berhasil
    }
}

// Mendapatkan elemen dengan id 'waktu'
const waktu = document.getElementById('waktu');

// Fungsi untuk menampilkan tanggal dan waktu saat ini
function tanggal() {
    const date = new Date(); // Membuat objek Date yang merepresentasikan waktu saat ini
    waktu.innerHTML = date; // Menetapkan nilai innerHTML dari elemen 'waktu' dengan tanggal dan waktu saat ini
}

// Memanggil fungsi tanggal setiap 1000 milidetik (1 detik) menggunakan setInterval
setInterval(tanggal, 1000);

// Memanggil fungsi tanggal sekali saat halaman dimuat
tanggal();

