<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$mahd = mysqli_query($db_conn, "SELECT mahd +1 as mahd FROM `hoadon` ORDER By mahd DESC LIMIT 1;");
if (mysqli_num_rows($mahd) > 0) {
    $mahd = mysqli_fetch_all($mahd, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "mahd" => $mahd]);
} else {
    echo json_encode(["success" => 0]);
}