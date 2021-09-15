<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$saleoff = mysqli_query($db_conn, "SELECT * from sale;");
if (mysqli_num_rows($saleoff) > 0) {
    $saleoff = mysqli_fetch_all($saleoff, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "saleoff" => $saleoff]);
} else {
    echo json_encode(["success" => 0]);
}