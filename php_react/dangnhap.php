<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->user)
    && isset($data->pass)
) {
    $tendn = mysqli_real_escape_string($db_conn, trim($data->user));
    $mk = mysqli_real_escape_string($db_conn, trim($data->pass));
    
    $ctsp = mysqli_query($db_conn, "SELECT `sdt`, `email`, `matkhau`, `hoten`, DATE_FORMAT(`ngaysinh`, '%d/%m/%Y') as ngaysinh, `gioitinh`, `diachi` 
                                    FROM `khachhang`
                                    WHERE `sdt` = '$tendn' and `matkhau` ='$mk'");
    if (mysqli_num_rows($ctsp) > 0) {
    $row = mysqli_fetch_all($ctsp, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "khachhang" => $row]);
    } else {
    echo json_encode(["success" => 0]);
    }
}   else {
        echo json_encode(["success" => 0, "msg" => "Không Có dữ liệu"]);
}