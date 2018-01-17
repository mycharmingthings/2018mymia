<?php
    header("Content-type:text/html;charset=utf-8");
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];
    //2.做判断
    if($username=='15091868490' &&  $userpass=="1234"){
        echo '1';
    }else{
        echo '0';
    }
?>