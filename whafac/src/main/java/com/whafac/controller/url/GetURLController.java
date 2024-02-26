package com.whafac.controller.url;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/est")
public class GetURLController {

	private final Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	
	@GetMapping("/item_list")
	public ModelAndView getViewIndex() {
		
		ModelAndView mav = new ModelAndView("basic/item_list");
		return mav;
	}
	
	@GetMapping("/table_test_list")
	public ModelAndView getTableTestList() {
		
		ModelAndView mav = new ModelAndView("est/table_test_list");
		return mav;
	}
	
	@GetMapping("/jsGridTest")
	public ModelAndView getGridTest() {
		log.debug( "jsGridTest" );
		
		ModelAndView mav = new ModelAndView("test/jsGridTest");
		return mav;
	}
}
