<?php
include 'db.php';

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    // XỬ LÝ ĐĂNG KÝ
    if ($action == 'register') {
        $fName = $_POST['fName'];
        $email = $_POST['email'];
        $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (firstName, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $fName, $email, $pass);
        
        if ($stmt->execute()) {
            header("Location: login.html#login"); // Chuyển về tab login
            exit();
        } else {
            echo "Lỗi: Email đã tồn tại.";
        }
    }

    // XỬ LÝ ĐĂNG NHẬP
    if ($action == 'login') {
        $email = $_POST['email'];
        $pass = $_POST['password'];

        $stmt = $conn->prepare("SELECT firstName, password FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

      // Trong file page/auth.php
if ($user && password_verify($pass, $user['password'])) {
    $_SESSION['user_name'] = $user['firstName'];
    
    // Thay đổi từ ../index.html thành taiKhoan.html
    header("Location: taiKhoan.html"); 
    exit();
}
    }
}
?>