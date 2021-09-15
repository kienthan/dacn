<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$phanloai = mysqli_query($db_conn, "SELECT * from phanloai;");
if (mysqli_num_rows($phanloai) > 0) {
    $phanloai = mysqli_fetch_all($phanloai, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "phanloai" => $phanloai]);
} else {
    echo json_encode(["success" => 0]);
}