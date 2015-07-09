<?php

namespace Model;

class Rest
{
    public function __construct()
    {

    }

    public function getData()
    {
        $decoded = json_decode(file_get_contents('php://input'), true);

        return '{"status": true, "message": "123"}';
    }
}