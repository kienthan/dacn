<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if (
    isset($data->plcu)&& !empty(trim($data->plcu))
    && isset($data->plmoi)&& !empty(trim($data->plmoi))
) {
    $plcu = mysqli_real_escape_string($db_conn, trim($data->plcu));
    $plmoi = mysqli_real_escape_string($db_conn, trim($data->plmoi));
    if ($plmoi != '' && $plcu != '' ) {
            $updatePL = mysqli_query($db_conn, "UPDATE `phanloai` SET `phanloai`='$plmoi' WHERE `phanloai` ='$plcu'");
        if ($updatePL) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "Cập nhật thành công", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Cập nhật thất bại"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Dữ liệu nhập không hợp lệ"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Phải nhập đủ các thuộc tính yêu cầu "]);
}