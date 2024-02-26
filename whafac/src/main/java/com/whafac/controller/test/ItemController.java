package com.whafac.controller.test;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.whafac.service.test.ItemService;


@RestController
@RequestMapping("/basic")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	
	private final Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	
	/**
	 * 목록 조회 테스트
	 * @return
	 */
	@GetMapping("/items")
	public ModelAndView getItems() {
		
		

		log.debug( "목록 조회 테스트 =============================" );
		
		List<Map<String,Object>>  list = itemService.getItems();
		
	    if( list != null ) {
	    	log.debug( "조회건수={}건" , list.size() );
	    }
		
		ModelAndView mav = new ModelAndView("basic/items");
		mav.addObject("items", list);
		
		return mav;
	}
	
	
	/**
	 * 아이템 저장 테스트
	 * @param requstMap
	 * @return
	 */
	@PostMapping("/save")
	public ModelAndView saveItem(@RequestParam Map<String, Object> requstMap) {
		
		log.debug( "아이템 저장 테스트 =============================" );
		log.debug( "화면에서 보내준값 확인 ==== {}" , requstMap.toString() );
		
		
		itemService.saveItem(requstMap); // 저장 호출
	    
	    return this.getItems();
	}
	
	
	@GetMapping("/add")
	public ModelAndView addForm() {
		
		ModelAndView mav = new ModelAndView("basic/addForm");
		
		return mav;
	}

	@GetMapping("/{itemNo}")
	public ModelAndView findByNo(@PathVariable Long itemNo) {
		
		log.debug( "조회 아이템 번호 =========== {}" , itemNo);
		Map<String,Object> map = itemService.findByNo(itemNo);
		
		ModelAndView mav = new ModelAndView("basic/item");
		mav.addObject("item", map);
		
		log.debug( "조회결과 ========== {}" , map);
		
		return mav;
	}
	
	@GetMapping("/{itemNo}/edit")
	public ModelAndView editForm(@PathVariable Long itemNo) {
		Map<String,Object> map = itemService.findByNo(itemNo);
		
		ModelAndView mav = new ModelAndView("basic/editForm");
		mav.addObject("item", map);
		
		
		return mav;
	}
	
	
	@PostMapping("/update")
	public ModelAndView updateItem(@RequestParam Map<String, Object> requstMap) {
		
		log.debug( "변경 데이터 확인 ============================={}" , requstMap);
		itemService.updateByNo(requstMap);
		log.debug( "변경 성공");
		
		Map<String,Object> map = itemService.findByNo(Long.parseLong((String)requstMap.get("item_no")));
		ModelAndView mav = new ModelAndView("basic/item");
		mav.addObject("item", map);
		
		log.debug( "재조회결과 ============================={}" , map);
		
		return mav;
	}
}
