/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.controller;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author HRtech
 */
@Controller
public class UserDetailsController {
    
    @RequestMapping(value = "success")
    public ModelAndView success(HttpSession session) {
       ModelAndView modelAndView=new ModelAndView("Success");
       modelAndView.addObject("name", session.getAttribute("USERNAME"));
       return modelAndView;
    }
    
}
