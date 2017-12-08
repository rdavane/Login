/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.interceptor;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 *
 * @author user
 */
public class Interceptor extends HandlerInterceptorAdapter {

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws IOException {
        StringBuffer pageName = request.getRequestURL();
        String requestMapping = pageName.substring(pageName.lastIndexOf("/"));

        if (requestMapping.equals("/app.css") || requestMapping.equals("/style.css") || requestMapping.equals("/tabs.css")
                || requestMapping.equals("/table.css") || requestMapping.equals("/popup.css") || requestMapping.equals("/foundation.js")
                || requestMapping.equals("/templates.js") || requestMapping.equals("/routes.js") || requestMapping.equals("/app.js") 
                || requestMapping.equals("/Login-Logo.jpg") || requestMapping.equals("/macbook-mockup-hero-ping-pong.jpg")
                || requestMapping.equals("/") || requestMapping.endsWith("/Login") || requestMapping.endsWith("/verifyLogin") 
                 || requestMapping.endsWith("/addPickUpLink")|| requestMapping.endsWith("/getBrands")|| requestMapping.endsWith("/getModels") || requestMapping.endsWith("/insertPickup")
                || requestMapping.endsWith("/PickupResponse")|| requestMapping.endsWith("/showStatusResult") || requestMapping.endsWith("/showStatusResultLink") || requestMapping.equals("/form-style.css")
                || requestMapping.equals("/jquery-1.8.3.js")){
            return true;
        } else if (request.getSession().getAttribute("USERNAME") != null) {
            return true;
        } else {
            response.sendRedirect("Login");
            return false;
        }
    }

}
