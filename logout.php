<?php
// Bắt đầu session để có quyền truy cập vào các dữ liệu cần xóa
session_start();

// Xóa tất cả các biến trong session
session_unset();

// Hủy bỏ hoàn toàn session
session_destroy();

// Chuyển hướng người dùng về trang chủ (hoặc trang login) sau khi thoát
header("Location: index.html");
exit;
?>