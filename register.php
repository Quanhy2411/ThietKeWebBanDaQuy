<?php
session_start();
require_once 'db_connect.php';

$error_message = '';
$success_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = $_POST['confirm_password'];

    // Kiểm tra các trường trống
    if (empty($username) || empty($email) || empty($password)) {
        $error_message = "Vui lòng nhập đầy đủ thông tin.";
    } elseif ($password !== $confirm_password) {
        $error_message = "Mật khẩu xác nhận không khớp.";
    } else {
        // Kiểm tra xem username hoặc email đã tồn tại chưa
        $check_sql = "SELECT id FROM users WHERE username = :username OR email = :email";
        $stmt = $pdo->prepare($check_sql);
        $stmt->execute(['username' => $username, 'email' => $email]);

        if ($stmt->rowCount() > 0) {
            $error_message = "Tên đăng nhập hoặc Email đã được sử dụng.";
        } else {
            // Lưu người dùng mới (Mật khẩu lưu thẳng - không mã hóa)
            $insert_sql = "INSERT INTO users (username, email, password_hash, status) VALUES (:username, :email, :password, 1)";
            $stmt = $pdo->prepare($insert_sql);
            
            if ($stmt->execute(['username' => $username, 'email' => $email, 'password' => $password])) {
                $success_message = "Đăng ký thành công! Bạn có thể <a href='login.php'>Đăng nhập ngay</a>.";
            } else {
                $error_message = "Đã xảy ra lỗi, vui lòng thử lại.";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Đăng Ký Tài Khoản</title>
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; margin-top: 30px; }
        .register-box { border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 350px; }
        .error { color: red; margin-bottom: 10px; }
        .success { color: green; margin-bottom: 10px; }
        input { width: 100%; padding: 8px; margin: 10px 0; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="register-box">
        <h2>Đăng Ký</h2>
        <?php if ($error_message): ?> <div class="error"><?php echo $error_message; ?></div> <?php endif; ?>
        <?php if ($success_message): ?> <div class="success"><?php echo $success_message; ?></div> <?php endif; ?>

        <form method="POST">
            <label>Tên đăng nhập:</label>
            <input type="text" name="username" required>
            <label>Email:</label>
            <input type="email" name="email" required>
            <label>Mật khẩu:</label>
            <input type="password" name="password" required>
            <label>Xác nhận mật khẩu:</label>
            <input type="password" name="confirm_password" required>
            <button type="submit">Đăng ký</button>
        </form>
        <p style="margin-top:15px;">Đã có tài khoản? <a href="login.php">Đăng nhập</a></p>
    </div>
</body>
</html>