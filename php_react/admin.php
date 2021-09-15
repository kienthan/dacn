<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->admin)
    && isset($data->pass)
) {
    $tendn = mysqli_real_escape_string($db_conn, trim($data->admin));
    $mk = mysqli_real_escape_string($db_conn, trim($data->pass));
    
    $ctsp = mysqli_query($db_conn, "SELECT `username`, `password` 
                                    FROM `admin`
                                    WHERE `username` = '$tendn' and `password` ='$mk'");
    if (mysqli_num_rows($ctsp) > 0) {
    $row = mysqli_fetch_all($ctsp, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "admin" => $row]);
    } else {
    echo json_encode(["success" => 0]);
    }
}   else {
        echo json_encode(["success" => 0, "msg" => "Không Có dữ liệu"]);
}