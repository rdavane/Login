<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%-- 
    Document   : basic-theme-2
    Created on : 22 Jun, 2016, 4:33:23 PM
    Author     : nityanand
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en" ng-app="application">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/jquery-ui.css">
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
    <script src="js/jquery-1.8.3.js" type="text/javascript"></script>
    <!--<script src="js/jquery-1.10.2.js"></script>-->
    <script src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/canvasjs.min.js"></script> 
    <script src="js/nicEdit.js" type="text/javascript"></script>
    <style>
      .tab-contents {
        padding: 1rem;
        border-top: 0px solid #ccc;
        margin-top: -2px;
      }
      .small-up-3 > li, .small-up-3 > div, .small-up-3 > section {
        padding: 0;
      }
    </style>


    <decorator:head/>
  </head>
  <body>
      <a href="logout" style="float: right;margin-top:10px;margin-right: 10px">Logout--><img src="images/logout.png" style="width: 25px"></a>
    <div class="grid-block">
      <div id="main" class="medium-8 grid-block">
        <div class="container-in dashboard-container">
          <decorator:body/>
        </div>
      </div>
    </div>
  </body>
</html>
