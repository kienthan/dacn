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
    && isset($data->tenmh)
    && isset($data->idphanloai)
    && isset($data->idsale)
    && isset($data->url) 
    && isset($data->idbrand) 
    && isset($data->mota) 
    && isset($data->idprice) 
    && isset($data->soluongton) 
    && isset($data->img) 
    && isset($data->tinhtrang) 
    && !empty(trim($data->mamh))
    && !empty(trim($data->tenmh))
    && !empty(trim($data->idphanloai))
    && !empty(trim($data->idsale))
    && !empty(trim($data->url))
    && !empty(trim($data->idbrand))
    && !empty(trim($data->mota))
    && !empty(trim($data->idprice))
    && !empty(trim($data->soluongton))
    && !empty(trim($data->img))
    && !empty(trim($data->tinhtrang))
) {
    $mamh = mysqli_real_escape_string($db_conn, trim($data->mamh));
    $tenmh = mysqli_real_escape_string($db_conn, trim($data->tenmh));
    $idphanloai = mysqli_real_escape_string($db_conn, trim($data->idphanloai));
    $idsale = mysqli_real_escape_string($db_conn, trim($data->idsale));
    $url = mysqli_real_escape_string($db_conn, trim($data->url));
    $idbrand = mysqli_real_escape_string($db_conn, trim($data->idbrand));
    $mota = mysqli_real_escape_string($db_conn, trim($data->mota));
    $idprice = mysqli_real_escape_string($db_conn, trim($data->idprice));
    $soluongton = mysqli_real_escape_string($db_conn, trim($data->soluongton));
    $img = mysqli_real_escape_string($db_conn, trim($data->img));
    $tinhtrang = mysqli_real_escape_string($db_conn, trim($data->tinhtrang));

    if (filter_var($mamh, FILTER_VALIDATE_INT) ) {
            $updateMH = mysqli_query($db_conn, "   Call CAPNHATSP ($mamh,'$tenmh','$idphanloai','$idsale','$url',
                                                    '$idbrand','$mota','$idprice','$soluongton',
                                                    '$img','$tinhtrang',@kq)");
        if ($updateMH) {
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