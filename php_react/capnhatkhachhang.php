<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->dienthoai)
    && isset($data->email)
    && isset($data->diachi)
    && isset($data->hoten)
    && isset($data->ngaysinh) 
    && isset($data->gioitinh)
    && isset($data->matkhau)  
    && !empty(trim($data->dienthoai))
    && !empty(trim($data->email))
    && !empty(trim($data->diachi))
    && !empty(trim($data->hoten))
    && !empty(trim($data->ngaysinh))
    && !empty(trim($data->gioitinh))
    && !empty(trim($data->matkhau))
) {
    $sdt = mysqli_real_escape_string($db_conn, trim($data->dienthoai));
    $email = mysqli_real_escape_string($db_conn, trim($data->email));
    $hoten = mysqli_real_escape_string($db_conn, trim($data->hoten));
    $gioitinh = mysqli_real_escape_string($db_conn, trim($data->gioitinh));
    $ngaysinh = mysqli_real_escape_string($db_conn, trim($data->ngaysinh));
    $matkhau = mysqli_real_escape_string($db_conn, trim($data->matkhau));
    $diachi = mysqli_real_escape_string($db_conn, trim($data->diachi));

    if ( 0 == 0 ) {
            $insertKH = mysqli_query($db_conn,"UPDATE `khachhang`
            SET `khachhang`.`email`='$email',`khachhang`.`matkhau`='$matkhau',`khachhang`.`hoten`='$hoten',`khachhang`.`ngaysinh`='$ngaysinh',`khachhang`.`gioitinh`='$gioitinh',`khachhang`.`diachi`='$diachi'
             WHERE `khachhang`.`sdt`='$sdt';");
        if ($insertKH) {
            $last_id = mysqli_insert_id($db_conn);
             echo json_encode(["success" => 1, "msg" => "Thành Công", "id" => $last_id]);
        } else {
             echo json_encode(["success" => 0, "msg" => "Thất bại"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Dữ liệu nhập không hợp lệ"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Phải nhập đủ các thuộc tính yêu cầu "]);
}