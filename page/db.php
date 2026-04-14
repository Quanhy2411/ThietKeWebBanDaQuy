<?php
$conn = new mysqli("localhost", "root", "", "hquan");
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
session_start();
?>