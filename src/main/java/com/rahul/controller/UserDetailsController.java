/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.controller;

import com.rahul.service.AllViewService;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author HRtech
 */
@Controller
public class UserDetailsController {

    @Autowired
    AllViewService viewService;

    @RequestMapping(value = "success")
    public ModelAndView success(HttpSession session) {
        ModelAndView modelAndView = new ModelAndView("Success");
        modelAndView.addObject("userdt", viewService.getanyhqldatalist("from userdetails"));
        return modelAndView;
    }
}
