package com.whafac.service.test;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.whafac.mapper.item.ItemMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ItemService {

	@Autowired
	ItemMapper mapper;
	
	private final Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	@Transactional(readOnly = true)
	public List<Map<String,Object>> getItems( ) {

		List<Map<String,Object>> result = mapper.getItems();
		
		return result;
	}	
	
	
	@Transactional
	public void saveItem( Map<String, Object> requestMap ) {
		
		log.debug( "저장하기 =============" );
		mapper.saveItem(requestMap);

	}

	@Transactional(readOnly = true)
	public Map<String, Object> findByNo(Long itemNo) {
		Map<String,Object> map = mapper.findByNo(itemNo);
		return map;
	}


	@Transactional
	public void updateByNo( Map<String, Object> requestMap) {
		mapper.updateByNo(requestMap);
	}
}
