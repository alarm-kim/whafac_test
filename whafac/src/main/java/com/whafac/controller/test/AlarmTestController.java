package com.whafac.controller.test;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.whafac.service.test.AlarmTestService;

@RestController
@RequestMapping("/alarmtest")
public class AlarmTestController {
	
	@Autowired
	private AlarmTestService alarmTestService;

	@GetMapping("/getEstimate")
	public Map<String, Object> getEstimate( @RequestParam Long id ) {
		
		Map<String, Object> result = alarmTestService.getEstimate( id );
		System.out.print( "result=[" + result + "]" );
		
		return result;
	}
	
	
	@PostMapping("/saveEstimate")
	public Map<String, Object> saveEstimate(@RequestBody Map<String, Object> requstMap) {
	
		
		alarmTestService.saveEstimate(requstMap);
		
		Map<String, Object> result = new HashMap<>();
		result.put("result" , "SUCESS" );
		
		return result;
	}
}
