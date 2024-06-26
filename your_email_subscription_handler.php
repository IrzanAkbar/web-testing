<?php

// Konfigurasi koneksi database
$servername = "localhost";
$username = "username_database";
$password = "password_database";
$dbname = "nama_database";

// Buat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Dapatkan alamat email dari formulir
$email = $_POST['email'];

// Validasi alamat email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Alamat email tidak valid
    echo "Alamat email tidak valid.";
    exit;
}

// Periksa apakah alamat email sudah ada dalam database
$sql = "SELECT * FROM subscribers WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Alamat email sudah ada
    echo "Alamat email sudah terdaftar.";
    exit;
}

// Simpan alamat email ke database
$sql = "INSERT INTO subscribers (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    // Email berhasil disimpan
    echo "Terima kasih telah berlangganan!";
} else {
    // Terjadi kesalahan
    echo "Terjadi kesalahan: " . $conn->error;
}

// Tutup koneksi database
$conn->close();

?>