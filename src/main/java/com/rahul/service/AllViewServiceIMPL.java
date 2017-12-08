/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rahul.service;

import com.rahul.dao.AllViewDao;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author krisnela
 */
@Service
public class AllViewServiceIMPL implements AllViewService{
    @Autowired AllViewDao viewDao;

    @Transactional
    public List getanyhqldatalist(String query) {
       return viewDao.getanyhqldatalist(query);
    }

    @Override
    public List<Map<String,Object>> getanyjdbcdatalist(String query) {
        return viewDao.getanyjdbcdatalist(query);
    }
    
}
