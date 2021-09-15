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
    isset($data->tenmh) 
    && !empty(trim($data->tenmh))
) {
    $tenmh = mysqli_real_escape_string($db_conn, trim($data->tenmh));
    $ctsp = mysqli_query($db_conn, "Select `mamh`, `tenmh`, phanloai.idphanloai,  `url`,ct.mota,ct.img,ct.tinhtrang, b.brandname, gia.price, sale.saleoff, 1 as count
    from mathang mh, chitietmathang ct, phanloai, brand b, gia, sale
    WHERE  mh.mamh = ct.mactmh and mh.idphanloai = phanloai.idphanloai and ct.idbrand= b.idbrand and ct.idgia = gia.idprice and sale.idsale = mh.idsale and mh.tenmh LIKE '%$tenmh%'");
    if (mysqli_num_rows($ctsp) > 0) {
    $detail = mysqli_fetch_all($ctsp, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "timkiem" => $detail]);
    } else {
    echo json_encode(["success" => 0]);
    }
}   else {
        echo json_encode(["success" => 0, "msg" => "Không Có dữ liệu"]);
}