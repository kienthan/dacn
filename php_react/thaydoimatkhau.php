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
    isset($data->passold) 
    && isset($data->passnew) 
    && isset($data->sdt) 
    && !empty(trim($data->passold))
    && !empty(trim($data->passnew))
    && !empty(trim($data->sdt))
) {
    $passold = mysqli_real_escape_string($db_conn, trim($data->passold));
    $passnew = mysqli_real_escape_string($db_conn, trim($data->passnew));
    $sdt = mysqli_real_escape_string($db_conn, trim($data->sdt));
    if (filter_var($sdt, FILTER_VALIDATE_INT) ) {
        $thaydoi = mysqli_query($db_conn, "UPDATE `khachhang` SET `khachhang`.`matkhau`='$passnew' WHERE `khachhang`.`sdt` = '$sdt' and `khachhang`.`matkhau` ='$passold'");
    if ($thaydoi) {
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