<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : Success
    Created on : Dec 8, 2017, 11:05:59 PM
    Author     : HRtech
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/table1.css" rel="stylesheet" type="text/css">
        <title>Home</title>
    </head>
    <body>
        <h1>Logged In successful!</h1>
        <table class="table1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${userdt}" var="ob">
                    <tr>
                        <td>${ob.id}</td>
                        <td>${ob.username}</td>
                        <td>${ob.password}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </body>
</html>
