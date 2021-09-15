<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$gia = mysqli_query($db_conn, "SELECT * FROM gia");
if (mysqli_num_rows($gia) > 0) {
    $gia = mysqli_fetch_all($gia, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "gia" => $gia]);
} else {
    echo json_encode(["success" => 0]);
}