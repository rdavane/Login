/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.controller;

import com.google.gson.Gson;
import com.rahul.model.UserDetails;
import com.rahul.service.AllInsertService;
import com.rahul.service.AllUpdateService;
import com.rahul.service.AllViewService;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author HRtech
 */
@Controller
public class UserDetailsController {

    @Autowired
    AllViewService viewService;
    @Autowired
    AllInsertService insertService;
    @Autowired
    AllUpdateService updateService;

    @RequestMapping(value = "success")
    public ModelAndView success(HttpSession session,
            @RequestParam(value = "search", required = false) String search
    ) {
        ModelAndView modelAndView = new ModelAndView("Success");
        String query = "";
        query = "select * from userdetails ";
        if (search != null && !search.equals("")) {
            query = query + search;
        }
        modelAndView.addObject("userdt", viewService.getanyjdbcdatalist(query));
        return modelAndView;
    }

    @RequestMapping(value = "insertuser")
    public String insertuser(@RequestParam(value = "username") String username,
            @RequestParam(value = "password") String password) {
        UserDetails details = new UserDetails();
        details.setPassword(password);
        details.setUsername(username);
        List<Map<String, Integer>> map = viewService.getanyjdbcdatalist("select max(id) id from userdetails");
        int id = map.get(0).get("id") + 1;
        details.setId(id);
        insertService.insert(details);
        return "redirect:success";
    }

    @RequestMapping(value = "inser_user_ajax")
    public void inser_user_ajax(@ModelAttribute UserDetails details,
            HttpServletResponse response) {
        String jsondata = "";
        List<Map<String, Integer>> map = viewService.getanyjdbcdatalist("select max(id) id from userdetails");
        int id = map.get(0).get("id") + 1;
        details.setId(id);
        insertService.insert(details);
        jsondata = new Gson().toJson(details);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try {
            response.getWriter().write(jsondata);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    @RequestMapping(value = "updateuser")
    public String updateuser(@ModelAttribute UserDetails details) {
        updateService.update(details);
        return "redirect:success";
    }

    @RequestMapping(value = "deleteuser")
    public String deleteuser(@RequestParam(value = "id") String id) {
        updateService.updateanyhqlquery("delete from userdetails where id='" + id + "'");
        return "redirect:success";
    }
}
