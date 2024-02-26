package com.whafac.controller.est;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.whafac.service.est.EstimateService;

@RestController
@RequestMapping("/estimate")
public class EstimateController {
	
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private EstimateService estimateService;
	
	@PostMapping("")
	public Map<String, Object> saveEstimate(@RequestBody Map<String, Object> requstMap) {
		
		
		log.debug( "memberkey=[" + requstMap.get("memberkey") + "]" );
		System.out.println( "estdata=" + requstMap.get("estdata") );
		
		estimateService.saveEstimate(requstMap);
		
		Map<String, Object> result = new HashMap<>();
		result.put("result" , "SUCESS" );
		
		return result;
		
	}
	

}
