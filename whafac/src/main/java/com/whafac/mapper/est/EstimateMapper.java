package com.whafac.mapper.est;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface EstimateMapper {
	
	/**
	 * 요청한 견적서 내용 저장
	 * @param requestMap
	 */
	public void saveEstimate(Map<String,Object> requestMap);

}
