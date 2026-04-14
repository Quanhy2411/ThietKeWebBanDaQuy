<?php
session_start();
require_once 'db_connect.php';

$error_message = '';

if (isset($_SESSION['user_id'])) {
    header("Location: dashboard.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username_or_email = trim($_POST['username']);
    $password_input = trim($_POST['password']);

    if (empty($username_or_email) || empty($password_input)) {
        $error_message = "Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu.";
    } else {
        $sql = "SELECT id, username, password_hash, status FROM users WHERE username = :user_input OR email = :user_input LIMIT 1";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['user_input' => $username_or_email]);
        
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            if ($user['status'] == 0) {
                $error_message = "Tài khoản của bạn đã bị khóa hoặc chưa kích hoạt.";
            } else {
                // SỰ KHÁC BIỆT NẰM Ở DÒNG NÀY: So sánh trực tiếp 2 chuỗi
                if ($password_input === $user['password_hash']) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['username'] = $user['username'];
                    
                    header("Location: dashboard.php");
                    exit;
                } else {
                    $error_message = "Mật khẩu không chính xác.";
                }
            }
        } else {
            $error_message = "Tài khoản không tồn tại.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Đăng Nhập</title>
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; margin-top: 50px; }
        .login-box { border: 1px solid #ccc; padding: 20px; border-radius: 8px; width: 300px; }
        .error { color: red; margin-bottom: 15px; font-size: 14px; }
        input[type="text"], input[type="password"] { width: 100%; padding: 8px; margin: 10px 0; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>

<div class="login-box">
    <h2>Đăng Nhập</h2>
    
    <?php if ($error_message): ?>
        <div class="error"><?php echo htmlspecialchars($error_message); ?></div>
    <?php endif; ?>

    <form method="POST" action="">
        <label>Tên đăng nhập hoặc Email:</label>
        <input type="text" name="username" required>
        
        <label>Mật khẩu:</label>
        <input type="password" name="password" required>
        
        <button type="submit">Đăng nhập</button>
    </form>
</div>

</body>
</html>