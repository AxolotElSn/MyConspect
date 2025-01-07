<?php
$_POST = json_decode(file_get_contents("php://input"), true) // получаем json данные
echo var_dump($_POST); // команда берет те данные которые нам пришли с клиента превращает в строку и показывает нам обратно на клиенте