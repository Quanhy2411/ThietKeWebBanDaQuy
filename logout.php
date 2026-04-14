<?php
session_start();
// Xóa toàn bộ biến session
session_unset();
// Hủy session
session_destroy();

// Chuyển hướng về trang đăng nhập
header("Location: login.php");
exit;
?>