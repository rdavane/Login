/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rahul.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 */
@Transactional
@Repository
public class AllViewDaoIMPL implements AllViewDao{
    @Autowired SessionFactory sessionfactory;

    JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    
    @Override
    public List getanyhqldatalist(String query) {
        return sessionfactory.getCurrentSession().createQuery(query).list();
    }
    @Override
    public List<Map<String,Object>> getanyjdbcdatalist(String query) {
        return jdbcTemplate.queryForList(query);
    }
    
}
