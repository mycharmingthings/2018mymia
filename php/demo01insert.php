<?php
    header("content-type","text/html;charset=utf-8");
    
    //1.链接数据库（搭桥） localhost指链接本地的数据库，其他的输id名如老师的10.35.165.187，root本地数据库用户名，root本地密码
    $conn = mysql_connect("localhost","root","root"); 
    
    //2.选择数据库（目的地）
    mysql_select_db("miaload",$conn);
   
    //3.执行SQL（struct query language）语句
    $username = '张十一疯';
    $sqlStr = "insert into vip values('".$username."','666666','男','25')";
    mysql_query($sqlStr,$conn);
   
    //4.关闭数据库
    mysql_close($conn); 
?>
