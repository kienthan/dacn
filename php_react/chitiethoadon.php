<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->mamh)
    && isset($data->mahd)
    && isset($data->soluong)
    && isset($data->thanhtien)
    && !empty(trim($data->mamh))
    && !empty(trim($data->soluong))
    && !empty(trim($data->thanhtien))
) {
    $mahd = mysqli_real_escape_string($db_conn, trim($data->mahd));
    $mamh = mysqli_real_escape_string($db_conn, trim($data->mamh));
    $soluong = mysqli_real_escape_string($db_conn, trim($data->soluong));
    $thanhtien = mysqli_real_escape_string($db_conn, trim($data->thanhtien));


    if (filter_var($thanhtien, FILTER_VALIDATE_INT) ) {
            $insertCTHD = mysqli_query($db_conn, "CALL THEM_CTHOADON('$mahd','$mamh',$soluong,$thanhtien,@kq)");
        if ($insertCTHD) {
            $last_id = mysqli_insert_id($db_conn);
            // echo json_encode(["success" => 1, "msg" => "Thành Công Chi Tiết Hoá Đơn", "id" => $last_id]);
        } else {
             echo json_encode(["success" => 0, "msg" => "Thất bại Chi Tiết Hoá Đơn"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Dữ liệu nhập không hợp lệ"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Phải nhập đủ các thuộc tính yêu cầu "]);
}