<?php
/**
 * Created by PhpStorm.
 * User: benmorris
 * Date: 16/11/2016
 * Time: 09:47
 */

//include '../../classes/BookingManager.php';
include '../../classes/Carpark.php';

date_default_timezone_set('Europe/London');

$servername = "192.168.20.56";
$dbname = "academy";
$username = "root";
$password = "";
$pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

$carpark = new Carpark($pdo, 'magic');
$bookingManager = new BookingManager($pdo);
echo $carpark->getAvailability('2016-12-02 12:00:00', '2016-12-02 14:00:00', $bookingManager);