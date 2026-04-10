<?php
include 'config.php'; // file kết nối DB

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    if (mysqli_query($conn, $sql)) {
        echo "Đăng ký thành công!";
        header("Location: login.html");
    } else {
        echo "Lỗi: " . mysqli_error($conn);
    }
}
?>
