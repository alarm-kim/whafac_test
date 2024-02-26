package com.whafac.mapper.test;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface AlarmTestMapper {

	/**
	 * 경종 조회 테스트
	 * @param id
	 * @return
	 */
	public Map<String,Object> getEstimate(Long id);
	
	
	/**
	 * 경종 저장 테스트
	 * @param requestMap
	 * @return
	 */
	public void saveEstimate(Map<String,Object> requestMap);
	
	
}
