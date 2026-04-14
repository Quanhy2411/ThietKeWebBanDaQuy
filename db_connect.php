<?php
// Thông tin cấu hình database XAMPP
$host = 'localhost';
$dbname = 'shop'; // ĐỔI TÊN NÀY THÀNH TÊN DATABASE BẠN ĐÃ TẠO
$db_user = 'root';
$db_pass = '';

try {
    // Tạo kết nối bằng PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $db_user, $db_pass);
    
    // Thiết lập chế độ báo lỗi để dễ debug trong quá trình học tập
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Nếu kết nối lỗi, dừng chương trình và in ra lỗi
    die("Kết nối CSDL thất bại: " . $e->getMessage());
}
?>