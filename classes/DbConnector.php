<?php

class DbConnector {

    public $conn;

    public function __construct($servername, $dbname, $username, $password){

        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        } catch(Exception $e) {
            throw new Exception('error connecting to database');
        }
    }
}