package com.whafac.service.est;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whafac.mapper.est.EstimateMapper;

@Service
public class EstimateService {
	
	@Autowired
	EstimateMapper mapper;
	
	@Transactional
	public void saveEstimate( Map<String, Object> requestMap ) {
		
		mapper.saveEstimate(requestMap);

	}

}
