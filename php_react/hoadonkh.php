<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

$i =0;
if (
    isset($data->sdt) 
    && !empty(trim($data->sdt))
) {
    $sdt = mysqli_real_escape_string($db_conn, trim($data->sdt));
    $ctsp = mysqli_query($db_conn, "SELECT `mahd`, `sdt`, DATE_FORMAT(`ngaymua`, '%d/%m/%Y') as ngaymua, `diachigiaohang`, `ghichu`, `tongtien` FROM `hoadon` WHERE `hoadon`.`sdt` =$sdt");
    if (mysqli_num_rows($ctsp) > 0) {
    $detail = mysqli_fetch_all($ctsp, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "hoadon" => $detail]);
    } else {
    echo json_encode(["success" => 0]);
    }
}   else {
        echo json_encode(["success" => 0, "msg" => "Không Có dữ liệu"]);
}