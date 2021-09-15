<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$all_sp = mysqli_query($db_conn, "  Select `mamh`, `tenmh`, phanloai.idphanloai,  `url`,ct.mota,ct.img,ct.tinhtrang, b.brandname, gia.price, sale.saleoff, 1 as count,ct.soluongton
from mathang mh, chitietmathang ct, phanloai, brand b, gia, sale
WHERE  mh.mamh = ct.mactmh and mh.idphanloai = phanloai.idphanloai and ct.idbrand= b.idbrand and ct.idgia = gia.idprice and sale.idsale = mh.idsale");
if (mysqli_num_rows($all_sp) > 0) {
    $mathang = mysqli_fetch_all($all_sp, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "products" => $mathang]);
} else {
    echo json_encode(["success" => 0]);
}