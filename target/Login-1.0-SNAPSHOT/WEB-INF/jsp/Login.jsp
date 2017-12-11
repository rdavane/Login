<%-- 
    Document   : Login
    Created on : 20 Jul, 2016, 5:19:01 PM
    Author     : nityanand
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        <link href="css/app.css" rel="stylesheet" type="text/css">
        <link href="css/style.css" rel="stylesheet" type="text/css">
        <link href="css/tabs.css" rel="stylesheet" type="text/css">
        <link href="css/table.css" rel="stylesheet" type="text/css">
        <link href="css/popup.css" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
        <script src="js/foundation.js"></script>
        <script src="js/templates.js"></script>
        <script src="js/routes.js"></script>
        <script src="js/app.js"></script>
    </head>
    <body>
        <!--<div class="login-left-panel"></div>-->
        <div class="login-right-panel">
            <!--<div class="login-logo"> <img src="images/Login-Logo.jpg"> </div>-->
            <form action="verifyLogin" method="POST" autocomplete="off">
                <input name="username" type="text" placeholder="Username"><br>
                <input name="password" type="password" placeholder="Password"><br>

                <!--<input name="" type="checkbox" value="">-->
                <!--<div class="login-remember">Remeber your Password</div>-->

                <input type="submit" value="Login" class="button" />

            </form>
            <font color="red">${errmsg}</font>
            <hr>
            <!--<a href="#">or Signup Now</a>-->
        </div>
    </body>
</html>
