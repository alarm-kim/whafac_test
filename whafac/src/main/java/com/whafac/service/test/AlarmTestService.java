package com.whafac.service.test;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whafac.mapper.test.AlarmTestMapper;

@Service
public class AlarmTestService {
	
	@Autowired
	AlarmTestMapper mapper;
	
	
	@Transactional(readOnly = true)
	public Map<String, Object> getEstimate( Long id ) {
		
		Map<String, Object> result = mapper.getEstimate(id);
		
		return result;
	}
	
	@Transactional
	public void saveEstimate( Map<String, Object> requestMap ) {
		
		mapper.saveEstimate(requestMap);

	}
}
