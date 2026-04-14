<?php
session_start(); // Bắt buộc phải có ở dòng đầu tiên
include 'db.php';

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    // ... (Phần xử lý đăng ký giữ nguyên) ...

    if ($action == 'login') {
        $email = $_POST['email'];
        $pass = $_POST['password'];

        $stmt = $conn->prepare("SELECT firstName, password FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if ($user && password_verify($pass, $user['password'])) {
            // Lưu tên vào session 'user_name' để JS ở index.html đọc được
            $_SESSION['user_name'] = $user['firstName']; 
            header("Location: ../index.html"); // Sau khi login thành công thì về trang chủ
            exit();
        } else {
            echo "Sai email hoặc mật khẩu!";
        }
    }
}
?>