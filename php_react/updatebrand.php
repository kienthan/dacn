<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if (
    isset($data->brandold)&& !empty(trim($data->brandold))
    && isset($data->brandnew)&& !empty(trim($data->brandnew))
) {
    $brandold = mysqli_real_escape_string($db_conn, trim($data->brandold));
    $brandnew = mysqli_real_escape_string($db_conn, trim($data->brandnew));
    if ($brandnew !='' && $brandold  != '' ) {
            $updateBrand = mysqli_query($db_conn, "UPDATE `brand` SET `brandname`='$brandnew' WHERE `brandname` = '$brandold'");
        if ($updateBrand) {
            $last_id = mysqli_insert_id($db_conn);
            //echo json_encode(["success" => 1, "msg" => "Cập nhật thành công", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Cập nhật thất bại"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Dữ liệu nhập không hợp lệ"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Phải nhập đủ các thuộc tính yêu cầu "]);
}