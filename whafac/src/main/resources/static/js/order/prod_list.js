

function getPaperLists(){
	
	let paper_list = 
            `<div>
              <select name="paper_size" id="paper_size">
                  <option value="a3" data-cutsize="297x420" data-jobsize="301x424" data-zoom="0.25" >A3 (297mm X 420mm)</option>
                  <option value="a4" data-cutsize="210x297" data-jobsize="214x301" data-zoom="0.35" selected="true">A4 (210mm X 297mm)</option>
                  <option value="a5" data-cutsize="148x210" data-jobsize="152x214" data-zoom="0.50" >A5 (148mm X 210mm)</option>
                  <option value="a6" data-cutsize="105x148" data-jobsize="109x152" data-zoom="0.7"  >A6 (105mm X 148mm)</option>
                  <option value="b3" data-cutsize="364x505" data-jobsize="368x509" data-zoom="0.205">B3 (364mm X 505mm)</option>
                  <option value="b4" data-cutsize="257x364" data-jobsize="261x368" data-zoom="0.287">B4 (257mm X 364mm)</option>
                  <option value="b5" data-cutsize="188x257" data-jobsize="192x261" data-zoom="0.41" >B5 (188mm X 257mm)</option>
                  <option value="b6" data-cutsize="127x188" data-jobsize="131x192" data-zoom="0.552">B6 (127mm X 188mm)</option>
               </select>
            </div>`;
     
     return paper_list;
}

function getCoverCates(){
	
	let cover_cate = 
		`<div >
		  <select name="cover_cate" id="cover_cate">
		    <option value="일반지" selected="" data-index='0'>일반지</option>
		    <option value="고급지" data-index='1'>고급지</option>
		    <option value="펄지" data-index='2'>펄지</option>
		    <option value="패키지" data-index='3'>패키지</option>
		    <option value="선방종이입고" data-index='4'>선방종이입고</option>
		  </select>
		</div>`
     
     return cover_cate;
}

function getCoverNames(){
	
	let cover_name = [];
	
	// 일반지
	cover_name[0] = 
	    `<div id="paper_name_wrap">
		  <select name="cover_name" id="cover_name" >
		    <option value="스노우" selected="">스노우</option>
		    <option value="아트지">아트지</option>
		    <option value="미색모조">미색모조</option>
		    <option value="백색모조">백색모조</option>
		    <option value="뉴플러스 미색">뉴플러스 미색</option>
		    <option value="뉴플러스 백색">뉴플러스 백색</option>
		    <option value="그린라이트">그린라이트</option>
		  </select>
		</div>`;
		
	// 고급지
	cover_name[1] = 
	    `<select name="cover_name"  id="cover_name">
			<option value="메리트 화이트">메리트 화이트</option>
			<option value="랑데뷰 내츄럴" selected="">랑데뷰 내츄럴</option>
			<option value="랑데뷰 울트라">랑데뷰 울트라</option>
			<option value="M러프 EW" selected="">M러프 EW</option>
			<option value="M러프 백색">M러프 백색</option>
			<option value="아르떼 내츄럴">아르떼 내츄럴</option>
			<option value="아르떼 울트라">아르떼 울트라</option>
			<option value="앙상블 화이트 e-class">앙상블 화이트 e-class</option>
			<option value="반누보 울트라화이트">반누보 울트라화이트</option>
			<option value="반누보 스노우화이트">반누보 스노우화이트</option>
			<option value="문켄폴라">문켄폴라</option>
			<option value="슈퍼파인 스무스">슈퍼파인 스무스</option>
			<option value="썬샤인">썬샤인</option>
			<option value="뉴에이프릴 브라이드">뉴에이프릴 브라이드</option>
			<option value="린넨커버">린넨커버</option>
			<option value="마쉬맬로우 백색">마쉬맬로우 백색</option>
			<option value="띤또레또">띤또레또</option>
			<option value="켄도">켄도</option>
	    </select>`;
	    
	// 펄지
	cover_name[2] =   
	    `<select name="cover_name" id="cover_name">
			<option value="스타드림 골드">스타드림 골드</option>
			<option value="스타드림 실버">스타드림 실버</option>
			<option value="스타드림 쿼츠">스타드림 쿼츠</option>
			<option value="스타드림 크리스탈">스타드림 크리스탈</option>
			<option value="시리오펄 골드">시리오펄 골드</option>
			<option value="시리오펄 스노우">시리오펄 스노우</option>
			<option value="시리오펄 실버">시리오펄 실버</option>
			<option value="시리오펄 진주">시리오펄 진주</option>
			<option value="크리스탈펄 화이트">크리스탈펄 화이트</option>
		</select>`;
	   
	  // 패키지
	  cover_name[3] = `<select name="cover_name" id="cover_name"><option value="네오CCP">네오CCP</option></select>`;
	  // 선방종이입고
	  cover_name[4] = `<select name="cover_name" id="cover_name"><option value="">&nbsp;</option></select>`;
	  
	  
	return cover_name;
}


function getPaperGrams(){
	let paper_grams = 
		`<div id="paper_gram">
			<select name="cover_gram" id="cover_gram" >
				<option value="스노우 100g" data-thick="0.088" data-gram="100" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%2061130%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%2088010%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%2061130%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20900%7D%5D%22" data-toner="%22%5B%5D%22" data-indigo="%22%5B%5D%22" data-dc="N" data-istoner="Y" data-isindigo="Y">100g</option>
				<option value="스노우 120g" data-thick="0.107" data-gram="120" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%2073350%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20105600%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%2073350%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20900%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%2073350%2C%20%5C%22width%5C%22%3A%20457%2C%20%5C%22height%5C%22%3A%20612%7D%5D%22" data-toner="%22%5B%5D%22" data-indigo="%22%5B%5D%22" data-dc="N" data-istoner="Y" data-isindigo="Y">120g</option>
				<option value="스노우 150g" data-thick="0.142" data-gram="150" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%2093300%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20134310%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%2093300%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20900%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%2093300%2C%20%5C%22width%5C%22%3A%20457%2C%20%5C%22height%5C%22%3A%20612%7D%5D%22" data-toner="%22%5B%5D%22" data-indigo="%22%5B%5D%22" data-dc="N" data-istoner="Y" data-isindigo="Y">150g</option>
				<option value="스노우 180g" data-thick="0.179" data-gram="180" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%20111960%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20161160%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20111960%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20900%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20111960%2C%20%5C%22width%5C%22%3A%20457%2C%20%5C%22height%5C%22%3A%20612%7D%5D%22" data-toner="%22%5B%5D%22" data-indigo="%22%5B%5D%22" data-dc="N" data-istoner="Y" data-isindigo="Y">180g</option>
				<option selected="" value="스노우 200g" data-thick="0.212" data-gram="200" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%20124390%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20179070%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20124390%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20910%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201500%2C%20%5C%22price%5C%22%3A%20124390%2C%20%5C%22width%5C%22%3A%20310%2C%20%5C%22height%5C%22%3A%20620%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20124390%2C%20%5C%22width%5C%22%3A%20457%2C%20%5C%22height%5C%22%3A%20612%7D%5D%22" data-toner="%22%5B%5D%22" data-indigo="%22%5B%5D%22" data-dc="N" data-istoner="Y" data-isindigo="Y">200g</option>
				<option value="스노우 250g" data-thick="0.26" data-gram="250" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%20155490%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20223830%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20155490%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20900%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20155490%2C%20%5C%22width%5C%22%3A%20457%2C%20%5C%22height%5C%22%3A%20612%7D%5D%22" data-toner="%22%5B%7B%5C%22maesu%5C%22%3A%2096%2C%20%5C%22price%5C%22%3A%202900%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20192%2C%20%5C%22price%5C%22%3A%203600%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20288%2C%20%5C%22price%5C%22%3A%205100%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20384%2C%20%5C%22price%5C%22%3A%206500%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20480%2C%20%5C%22price%5C%22%3A%208000%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%5D%22" data-indigo="%22%5B%7B%5C%22maesu%5C%22%3A%2096%2C%20%5C%22price%5C%22%3A%203200%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20192%2C%20%5C%22price%5C%22%3A%204000%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20288%2C%20%5C%22price%5C%22%3A%205600%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20384%2C%20%5C%22price%5C%22%3A%207200%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20480%2C%20%5C%22price%5C%22%3A%208800%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%5D%22" data-dc="Y" data-istoner="Y" data-isindigo="Y">250g</option>
				<option value="스노우 300g" data-thick="0.318" data-gram="300" data-max="750x530" data-nuvera="N" data-obj="%22%5B%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%202000%2C%20%5C%22price%5C%22%3A%20186600%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20465%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20268640%2C%20%5C%22width%5C%22%3A%20530%2C%20%5C%22height%5C%22%3A%20750%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20186600%2C%20%5C%22width%5C%22%3A%20315%2C%20%5C%22height%5C%22%3A%20900%7D%2C%20%7B%5C%22dc%5C%22%3A%20%5C%220.9%5C%22%2C%20%5C%22cnt%5C%22%3A%201000%2C%20%5C%22price%5C%22%3A%20186600%2C%20%5C%22width%5C%22%3A%20457%2C%20%5C%22height%5C%22%3A%20612%7D%5D%22" data-toner="%22%5B%7B%5C%22maesu%5C%22%3A%2096%2C%20%5C%22price%5C%22%3A%203100%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20192%2C%20%5C%22price%5C%22%3A%203900%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20288%2C%20%5C%22price%5C%22%3A%205400%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20384%2C%20%5C%22price%5C%22%3A%207000%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20480%2C%20%5C%22price%5C%22%3A%208500%2C%20%5C%22machine%5C%22%3A%20%5C%22toner%5C%22%7D%5D%22" data-indigo="%22%5B%7B%5C%22maesu%5C%22%3A%2096%2C%20%5C%22price%5C%22%3A%203400%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20192%2C%20%5C%22price%5C%22%3A%204300%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20288%2C%20%5C%22price%5C%22%3A%206000%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20384%2C%20%5C%22price%5C%22%3A%207700%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%2C%20%7B%5C%22maesu%5C%22%3A%20480%2C%20%5C%22price%5C%22%3A%209400%2C%20%5C%22machine%5C%22%3A%20%5C%22indigo%5C%22%7D%5D%22" data-dc="Y" data-istoner="Y" data-isindigo="Y">300g</option>
			</select>
        </div>`;
        
    return paper_grams;
}