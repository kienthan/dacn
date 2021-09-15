<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->sdt)
    && isset($data->mahd)
    && isset($data->diachigiaohang)
    && isset($data->ghichu)
    && isset($data->tongtien) 
    && !empty(trim($data->sdt))
    && !empty(trim($data->diachigiaohang))
    && !empty(trim($data->tongtien))
) {
    $mahd = mysqli_real_escape_string($db_conn, trim($data->mahd));
    $sdt = mysqli_real_escape_string($db_conn, trim($data->sdt));
    $diachigiaohang = mysqli_real_escape_string($db_conn, trim($data->diachigiaohang));
    $ghichu = mysqli_real_escape_string($db_conn, trim($data->ghichu));
    $tongtien = mysqli_real_escape_string($db_conn, trim($data->tongtien));

    if (filter_var($tongtien, FILTER_VALIDATE_INT) ) {
            $insertHD = mysqli_query($db_conn, "CALL THEM_HOADON($mahd,$sdt, CURRENT_DATE, '$diachigiaohang','$ghichu',$tongtien,@kq)");
        if ($insertHD) {
            $last_id = mysqli_insert_id($db_conn);
            // echo json_encode(["success" => 1, "msg" => "Thành Công Hoá Đơn", "id" => $last_id]);
        } else {
            // echo json_encode(["success" => 0, "msg" => "Thất bại Hoá Đơn"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Dữ liệu nhập không hợp lệ"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Phải nhập đủ các thuộc tính yêu cầu "]);
}