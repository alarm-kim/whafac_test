package com.whafac.mapper.item;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface ItemMapper {
	
	/**
	 * 아이템 조회 테스트
	 * @param id
	 * @return
	 */
	public List<Map<String,Object>> getItems( );
	
	
	/**
	 * 아이템 저장 테스트
	 * @param requestMap
	 * @return
	 */
	public void saveItem(Map<String, Object> requestMap );


	/**
	 * 해당 번호의 아이템 조회
	 * @param itemNo
	 * @return
	 */
	public Map<String, Object> findByNo(Long itemNo);


	/**
	 * 해당번호의 아이템 수정
	 * @param itemNo
	 */
	public void updateByNo(Map<String, Object> requestMap );

}
