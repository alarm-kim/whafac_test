package com.whafac.controller.order;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/order")
public class OrderController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@GetMapping("/order00")
	public String getExpertList( ) {
		
		log.debug( "/order/order00 호출 됨 ---------------------------- " );
		
		return "order/order00";
	}
}
