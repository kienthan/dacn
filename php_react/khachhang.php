<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$brand = mysqli_query($db_conn, "SELECT `sdt`, `email`, `matkhau`, `hoten`, DATE_FORMAT(`ngaysinh`, '%d/%m/%Y') as ngaysinh, `gioitinh`, `diachi` from khachhang;");
if (mysqli_num_rows($brand) > 0) {
    $brand = mysqli_fetch_all($brand, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "khachhang" => $brand]);
} else {
    echo json_encode(["success" => 0]);
}