<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$all_hoadon = mysqli_query($db_conn, "SELECT `mahd`, `sdt`, DATE_FORMAT(`ngaymua`, '%d/%m/%Y') as ngaymua, `diachigiaohang`, `ghichu`, `tongtien` FROM `hoadon` WHERE 1");
if (mysqli_num_rows($all_hoadon) > 0) {
    $hoadon = mysqli_fetch_all($all_hoadon, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "hoadon" => $hoadon]);
} else {
    echo json_encode(["success" => 0]);
}