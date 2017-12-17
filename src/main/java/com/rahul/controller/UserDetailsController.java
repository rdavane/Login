/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.controller;

import com.rahul.model.UserDetails;
import com.rahul.service.AllInsertService;
import com.rahul.service.AllUpdateService;
import com.rahul.service.AllViewService;
import java.util.List;
import java.util.Map;
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
    public ModelAndView success(HttpSession session) {
        ModelAndView modelAndView = new ModelAndView("Success");
        modelAndView.addObject("userdt", viewService.getanyhqldatalist("from userdetails"));
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
