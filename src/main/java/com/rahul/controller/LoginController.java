/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.controller;

import com.rahul.model.UserDetails;
import com.rahul.service.AllViewService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author nityanand
 */
@PropertySource(value = "classpath:keyidconfigured.properties", ignoreResourceNotFound = true)
@Controller
public class LoginController {

    @Autowired
    AllViewService viewService;

    @Autowired
    Environment env;

    @RequestMapping(value = "verifyLogin", method = RequestMethod.POST)
    public ModelAndView verifyLogin(@RequestParam(value = "username") String username,
            @RequestParam(value = "password") String password,
            HttpSession session) {
        ModelAndView modelAndView = null;
        List<UserDetails> userlist = viewService.getanyhqldatalist("from userdetails where username='" + username + "' and password='" + password + "'");
        if (userlist != null && userlist.size() > 0 && userlist.get(0).getUsername().equals(username) && userlist.get(0).getPassword().equals(password)) {
            session.setAttribute("USERID", userlist.get(0).getId());
            session.setAttribute("USERNAME", userlist.get(0).getUsername());

//            modelAndView = new ModelAndView("redirect:/viewServiceRequestGrid");
            modelAndView = new ModelAndView("redirect:/success");
        } else {
            modelAndView = new ModelAndView("Login", "errmsg", "Authentication error please check your username/password");
        }
        return modelAndView;
    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        if (request.getSession().getAttribute("USERNAME") != null) {
            request.getSession().invalidate();

            return "redirect:/Login";
        }
        return "redirect:" + request.getContextPath() + "/Login";
    }

    @RequestMapping(value = {"/", "Login"})
    public String redirectdemo() {
        return "Login";
    }


}
