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
        <script src="js/jquery-1.10.2.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/table1.css" rel="stylesheet" type="text/css">
        <title>Home</title>
        <script>
            function edituser(ob) {
                $("#insert").hide();
                $("#update").show();
                var username = $(ob).parents("tr").find("#username").val();
                var password = $(ob).parents("tr").find("#password").val();
                var id = $(ob).parents("tr").find("#id").val();
                $("#username_form").val(username)
                $("#password_form").val(password)
                $("#id_form").val(id);
            }
            function search1() {
                var keyword = $("#search_keyword").val();
                var strcondition = "where ";
                $('.table1 > thead > tr > th').each(function () {
                    var id = $(this).prop('id');
                    if (id != "")
                    {
                        strcondition = strcondition + id + " like '%" + keyword + "%' or "
                    }
                });
                strcondition = strcondition.substring(0, strcondition.length - 4)
                $("#search").val(strcondition);
                $("#success").submit()
            }
            $(document).ready(function () {
                $("#insertsubmit").click(function (e) {
                    e.preventDefault();
                    var name = $("#insert_name").val();
                    var password = $("#insert_password").val();
                    $.ajax({
                        url: "inser_user_ajax",
                        type: 'POST',
                        data: {
                            username: name,
                            password: password
                        },
                        success: function (data) {
                            alert('success');
                        },
                        error: function () {
                            alert('error');
                        }
                    })
                })
            })
        </script>
    </head>
    <body>
        <h1>Logged In successful!</h1>
        <form action="insertuser" method="post" id="insert">
            <table>
                <tr>
                    <td>UserName:</td>
                    <td> <input type="text" id="insert_name" name="username" placeholder="username"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td> <input type="text" id="insert_password" name="password" placeholder="password"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" id="insertsubmit" class="button" value="Save"></td>
                </tr>
            </table>
        </form>
        <form action="updateuser" method="post" id="update" style="display: none">
            <input type="text" name="id" id="id_form" hidden="">
            <table >
                <tr>
                    <td>UserName:</td>
                    <td> <input type="text" name="username" id="username_form" placeholder="username"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td> <input type="text" name="password" id="password_form" placeholder="password"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" class="button" id="updatesubmit" value="Update"></td>
                </tr>
            </table>
        </form>
        <form action="success" id="success" method="post">
            <input type="text" hidden="" name="search" id="search"> 
            <div> 
                <div style="float: right"><input type="button" class="button" onclick="search1()" value="search"></div>
                <div style="float: right"><input type="text" style="height: 38px !important" id="search_keyword"  placeholder="Search"></div>
                <div></div>
            </div>
        </form>
        <table class="table1">
            <thead>
                <tr>
                    <th id="id" >ID</th>
                    <th id="username">User Name</th>
                    <th id="password">Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <c:choose>
                    <c:when test="${userdt[0]==null}">
                    <td align="center" colspan="4">no data available</td>
                </c:when>
                <c:otherwise>
                    <c:forEach items="${userdt}" var="ob">
                        <tr>
                            <td>${ob.id}<input type="text" id="id" value="${ob.id}" hidden=""></td>
                            <td>${ob.username}<input type="text" id="username" value="${ob.username}" hidden=""></td>
                            <td>${ob.password}<input type="text" id="password" value="${ob.password}" hidden=""></td>
                            <td>
                                <a onclick="edituser(this)">edit</a>|<a href="deleteuser?id=${ob.id}">delete</a>
                            </td>
                        </tr>
                    </c:forEach>
                </c:otherwise>
            </c:choose>
        </tbody>
    </table>
</body>
</html>
