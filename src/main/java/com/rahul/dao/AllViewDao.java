/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rahul.dao;

import java.util.List;
import java.util.Map;

/**
 *
 */
public interface AllViewDao<T> {

    public List<T> getanyhqldatalist(String query);

    public List<Map<String, Object>> getanyjdbcdatalist(String query);    
}
