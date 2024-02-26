// 명함
let namecards = `
    <li class="item">
        <a href="/order/form/dmynamecard?mcode=37">고급지 명함</a>
    </li>
    <li class="item">
        <a href="/order/form/dmynamecard?mcode=38">일반지 명함</a>
    </li>
    <li class="item">
        <a href="/order/form/dmynamecard?mcode=150">두꺼운 명함</a>
    </li>
    <li class="item">
        <a href="/order/form/dmynamecard?mcode=40">UV(PET) 명함</a>
    </li>
    <li class="item">
        <a href="/order/form/dmynamecard?mcode=39">백색인쇄 명함</a>
    </li>
    <!--li class="item">
        <a href="/order/form/dmynamecard?mcode=41">샌드위치(합지) 명함</a>
    </li-->
    <li class="item">
        <a href="/order/form/omynamecard?mcode=66">포토카드 명함</a>
    </li>
    <li class="item">
        <a href="/order/form/omynamecard?mcode=67">엣지 명함</a>
    </li>
    <li class="item">
        <a href="/order/form/omynamecard?mcode=68">부분코팅 명함</a>
    </li>`;

// 엽서
let postcards = `
    <li class="item">
        <a href="/order/form/dpostcard?mcode=48">고급지 엽서</a>
    </li>
    <li class="item">
        <a href="/order/form/dpostcard?mcode=48">일반지 엽서</a>
    </li>
    <li class="item">
        <a href="/order/form/opostcard?mcode=73">프리미엄 엽서</a>
    </li>
    <li class="item">
        <a href="/order/form/dpostcard?mcode=49">상품권</a>
    </li>
    <li class="item">
        <a href="/order/form/dpostcard?mcode=50">초대장</a>
    </li>`;

// 전단
let leaflets = `
    <li class="item">
        <a href="/order/form/dleaflet?mcode=35">전단</a>
    </li>
    <li class="item">
        <a href="/order/form/dleaflet?mcode=36">리플렛</a>
    </li>`;

// 포스터
let posters = `
    <li class="item">
        <a href="/order/form/dposter?mcode=30">일반지 포스터</a>
    </li>
    <li class="item">
        <a href="/order/form/dposter?mcode=30&qual=high">고급지 포스터</a>
    </li>
    <li class="item">
        <a href="/order/form/dposter?mcode=31">백색인쇄 포스터</a>
    </li>
    <li class="item">
        <a href="/order/form/dposter?mcode=32">포토인화 포스터</a>
    </li>
    <li class="item">
        <a href="/order/form/dposter?mcode=33">PET 포스터</a>
    </li>
    <li class="item">
        <a href="/order/form/dposter?mcode=34">캔버스 포스터</a>
    </li>
    <li class="item">
        <a href="/order/form/photoprint?mcode=84">대형 포스터</a>
    </li>`;

// 책자
let books = `
    <li class="item">
        <a href="/order/form/dbook?mcode=23">단행본/책자</a>
    </li>
    <li class="item">
        <a href="/order/form/dbook?mcode=24">카탈로그/브로슈어</a>
    </li>
    <li class="item">
        <a href="/order/form/dbook?mcode=26">교정출력(색샘플)</a>
    </li>`;

// 스티커
let stickers = `
    <li class="item">
        <a href="/order/form/dsticker?mcode=42">자유형 스티커</a>
    </li>
    <li class="item">
        <a href="/order/form/dsticker?mcode=43">원형 스티커</a>
    </li>
    <li class="item">
        <a href="/order/form/dsticker?mcode=44">타원형 스티커</a>
    </li>
    <li class="item">
        <a href="/order/form/dsticker?mcode=45">사각형 스티커</a>
    </li>
    <li class="item">
        <a href="/order/form/dsticker?mcode=46">사각라운드형 스티커</a>
    </li>
    <li class="item">
        <a href="/order/form/dsticker?mcode=47">재단형 스티커</a>
    </li>`;

// 패키지
let packages = `
    <li class="item">
        <a href="/order/form/dpackage?mcode=51">패키지</a>
    </li>`;

// 봉투
let envelopes_old = `
    <li class="item">
      <a href="/order/form/oenvelope?mcode=74">대봉투</a>
    </li>
    <li class="item">
      <a href="/order/form/oenvelope?mcode=75">중봉투</a>
    </li>
    <li class="item">
      <a href="/order/form/oenvelope?mcode=76">소봉투</a>
    </li>
    <li class="item">
      <a href="/order/form/oenvelope?mcode=77">6절봉투</a>
    </li>
    <li class="item">
      <a href="/order/form/oenvelope?mcode=78">티켓봉투</a>
    </li>
    <li class="item">
      <a href="/order/form/oenvelope?mcode=79">창봉투</a>
    </li>`;


// 봉투
let envelopes = `
    <li class="item active" data-desc="envelope1">
      <a href="#">디지털봉투</a>
    </li>
    <li class="item" data-desc="envelope2">
      <a href="#">옵셋봉투</a>
    </li>
    <li class="item" data-desc="envelope3">
      <a href="#">마스터봉투</a>
    </li>`;


let envelope1 = `
    <li class="lh2">
      <a href="/order/form/denvelope?mcode=152">세로형기성봉투(규격형)</a>
    </li>
    <li class="lh2">
      <a href="/order/form/denvelope?mcode=153">가로형기성봉투(자켓형)</a>
    </li>
    <li class="lh2">
      <a href="/order/form/denvelope?mcode=154">가로형기성봉투(안내형)</a>
    </li>
    <li class="lh2" data-desc="" style="height:10px;">
        <a href="#"></a>
    </li>`;


let envelope2 = `
    <li class="lh2">
      <a href="/order/form/oenvelope?mcode=74">대봉투</a>
    </li>
    <li class="lh2">
      <a href="/order/form/oenvelope?mcode=75">중봉투</a>
    </li>
    <li class="lh2">
      <a href="/order/form/oenvelope?mcode=76">소봉투</a>
    </li>
    <li class="lh2">
      <a href="/order/form/oenvelope?mcode=77">6절봉투</a>
    </li>
    <li class="lh2">
      <a href="/order/form/oenvelope?mcode=78">티켓봉투</a>
    </li>
    <li class="lh2">
      <a href="/order/form/oenvelope?mcode=79">창봉투</a>
    </li>
    <li class="lh2" data-desc="" style="height:10px;">
        <a href="#"></a>
    </li>`;


let envelope3 = `
    <li class="lh2">
      <a href="/order/form/denvelope?mcode=155">세로형봉투(규격형)</a>
    </li>
    <li class="lh2">
      <a href="/order/form/denvelope?mcode=156">가로형봉투(자켓형)</a>
    </li>
    <li class="lh2">
      <a href="/order/form/denvelope?mcode=155">가로형봉투(안내형)</a>
    </li>
    <li class="item" data-desc="" style="height:10px;">
        <a href="#"></a>
    </li>`;



// 달력
let calendars = `
    <li class="item">
        <a href="/order/form/dcalendar?mcode=53">스탠드 달력(가로형)</a>
    </li>
    <li class="item">
        <a href="/order/form/dcalendar?mcode=54">스탠드 달력(세로형)</a>
    </li>
    <li class="item">
        <a href="/order/form/dcalendar?mcode=55">벽걸이 달력</a>
    </li>`;

// 실사출력
let photoprints = `
    <li class="item active" data-desc="photoprintdesc1">
        <a href="#">배너</a>
    </li>
    <li class="item" data-desc="photoprintdesc2">
        <a href="#">미니배너</a>
    </li>
    <li class="item" data-desc="photoprintdesc3">
        <a href="#">현수막</a>
    </li>
    <li class="item" data-desc="photoprintdesc4">
        <a href="#">실사출력</a>
    </li>
    <li class="item" data-desc="photoprintdesc5">
        <a href="#">실사스티커</a>
    </li>
    <li class="item" data-desc="photoprintdesc6">
        <a href="#">패브릭출력</a>
    </li>
    <li class="item" data-desc="photoprintdesc7">
      <a href="#">실사합지</a>
    </li>
    <li class="item" data-desc="photoprintdesc8">
        <a href="#">시트컷팅</a>
    </li>
    <li class="item" data-desc="" style="height:10px;">
        <a href="#"></a>
    </li>`;


// 실사출력
let suncaps = `<li class="item">
        <a href="/order/form/dsuncap?mcode=158">디지털 썬캡</a>
    </li>
    <li class="item">
        <a href="/order/form/osuncap?mcode=159">옵셋 썬캡</a>
    </li>`;


// 액자
let frames = `
    <li class="item active" data-desc="framedesc1">
        <a href="#">아트룩스 액자</a>
    </li>
    <li class="item" data-desc="framedesc2">
        <a href="#">캔버스 액자</a>
    </li>
    <li class="item" data-desc="" style="height:50px;">
        <a href="#"></a>
    </li>`;


// 고급지 명함
let namecarddesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dmynamecard?mcode=37" class="btn-fulldown-order">주문하기</a>
    </li>
    <li style="color:#1279bd; font-size:15px; margin-bottom:10px;">
      <i class="far fa-info-circle"></i> 고급지 명함 설명
    </li>
    <li class="ps-3 mb-3">
      <b>용도</b> <span>명함/쿠폰/행텍/복권/티켓 등</span>
    </li>
    <li class="ps-3 mb-3">
      <b>용지</b> <span>M러프/랑데뷰/반누보/스타드림 등</span>
    </li>
    <li class="ps-3 mb-3">
      <b>인쇄도수</b> <span>양면8도/단면4도</span>
    </li>
    <li class="ps-3">
      <b>후가공</b> <span>귀도리/동판박/형압/송진엠보 등</span>
    </li>`;

// 일반지 명함
let namecarddesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dmynamecard?mcode=38" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 일반지 명함 설명
    </li>
    <li>
      용도 <span>명함/쿠폰/행텍/복권/티켓 등</span>
    </li>
    <li>
      용지 <span>아트지/스노우/모조지</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/송진엠보 등</span>
    </li>`;

// 프리미엄 명함설명
let namecarddesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/omynamecard?mcode=64" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 프리미엄 명함 설명
    </li>
    <li>
      용도 <span>명함/쿠폰/행텍/복권/티켓 등</span>
    </li>
    <li>
      용지 <span>머쉬/에그화이트/매트화이트 350g 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/송진엠보 등</span>
    </li>`;

// 카드(PET) 명함설명
let namecarddesc4 = `
    <li class="text-center mb-4">
      <a href="/order/form/dmynamecard?mcode=40" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 카드(PET) 명함 설명
    </li>
    <li>
      용도 <span>명함/쿠폰/행텍/카드 등</span>
    </li>
    <li>
      용지 <span>MC카드/PET 카드</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>없음</span>
    </li>`;

// 백색인쇄 명함
let namecarddesc5 = `
    <li class="text-center mb-4">
      <a href="/order/form/dmynamecard?mcode=39" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 백색인쇄 명함 설명
    </li>
    <li>
        용도 <span>명함/쿠폰/행텍/티켓 등</span>
    </li>
    <li>
        용지 <span>스튜디오 컬렉션 블랙/레드/블루/그린</span>
    </li>
    <li>
        인쇄도수 <span>양면8도+백색/단면4도+백색/백색</span>
    </li>
    <li>
        후가공 <span>귀도리/동판박/형압/송진엠보 등</span>
    </li>`;

// 샌드위치(합지) 명함
let namecarddesc6 = `
    <li class="text-center mb-4">
      <a href="/order/form/dmynamecard?mcode=41" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 샌드위치(합지) 명함 설명
    </li>
    <li>
      용도 <span>명함/쿠폰/행텍 등</span>
    </li>
    <li>
      용지 <span>블루/옐로우/오렌지/레드/블랙</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/송진엠보 등</span>
    </li>`;

// 포토카드 명함
let namecarddesc7 = `
  <li class="text-center mb-4">
    <a href="/order/form/omynamecard?mcode=66" class="btn-fulldown-order">주문하기</a>
  </li>
  <li>
    <i class="far fa-info-circle"></i> 포토카드 명함 설명</li>
  <li>
    용도 <span>명함/쿠폰/행텍/티켓 등</span>
  </li>
  <li>
    용지 <span>스노우 300g 홀로그램코팅/유광코팅</span>
  </li>
  <li>
    인쇄도수 <span>양면8도/단면4도</span>
  </li>
  <li>
    후가공 <span>오시/미싱/귀도리/타공/형압 등</span>
  </li>`;

// 엣지 명함
let namecarddesc8 = `
    <li class="text-center mb-4">
      <a href="/order/form/omynamecard?mcode=67" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 엣지 명함 설명
    </li>
    <li>
      용도 <span>명함/쿠폰/행텍/티켓 등</span>
    </li>
    <li>
      용지 <span>머쉬/누브/휘라레 350g</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/송진엠보 등</span>
    </li>`;

// 부분코팅 명함
let namecarddesc9 = `
  <li class="text-center mb-4">
    <a href="/order/form/omynamecard?mcode=68" class="btn-fulldown-order">주문하기</a>
  </li>
  <li>
    <i class="far fa-info-circle"></i> 부분코팅 명함 설명
  </li>
  <li>
    용도 <span>명함/쿠폰/행텍 등</span>
  </li>
  <li>
    용지 <span>스노우 300g 무광코팅</span>
  </li>
  <li>
    인쇄도수 <span>양면8도/단면4도</span>
  </li>
  <li>
    후가공 <span>귀도리/타공/형압 등</span>
  </li>`;


// 고급지 엽서
let postcarddesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dpostcard?mcode=48" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 고급지 엽서 설명
    </li>
    <li>
      용도 <span>엽서/청첩장/안내장 등</span>
    </li>
    <li>
      용지 <span>M러프/랑데뷰/반누보/스타드림 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/타공 등</span>
    </li>`;

// 일반지 엽서
let postcarddesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dpostcard?mcode=48" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 일반지 엽서 설명
    </li>
    <li>
      용도 <span>엽서/청첩장/안내장 등</span>
    </li>
    <li>
      용지 <span>아트지/스노우/모조지</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/오시/미싱/동판박/형압/타공 등</span>
    </li>`;

// 프리미엄 엽서
let postcarddesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/opostcard?mcode=73" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 프리미엄 엽서 설명
    </li>
    <li>
      용도 <span>엽서/청첩장/안내장 등</span>
    </li>
    <li>
      용지 <span>머쉬/에그화이트/매트화이트 350g 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/타공 등</span>
    </li>`;

// 상품권
let postcarddesc4 = `
    <li class="text-center mb-4">
      <a href="/order/form/dpostcard?mcode=49" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 상품권 설명
    </li>
    <li>
      용도 <span>상품권/초대장/입장권 등</span>
    </li>
    <li>
      용지 <span>일반지/고급지/펄지/무늬지/빈티지 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/타공/디지털UV 등</span>
    </li>`;

// 초대장
let postcarddesc5 = `
    <li class="text-center mb-4">
      <a href="/order/form/dpostcard?mcode=50" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 초대장 설명
    </li>
    <li>
      용도 <span>초대장/상품권/입장권 등</span>
    </li>
    <li>
      용지 <span>일반지/고급지/펄지/무늬지/빈티지 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>귀도리/동판박/형압/타공/디지털UV 등</span>
    </li>`;

// 전단
let leafletdesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dleaflet?mcode=35" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 전단 설명
    </li>
    <li>
      용도 <span>홍보용전단/레터지/리플렛 등</span>
    </li>
    <li>
      용지 <span>아트지/스노우/모조지/M러프/랑데뷰 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>접지/오시/미싱/귀도리/동판박/도무송 등</span>
    </li>`;

// 리플렛
let leafletdesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dleaflet?mcode=36" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 리플렛 설명
    </li>
    <li>
        용도 <span>홍보용전단/레터지/리플렛 등</span>
    </li>
    <li>
        용지 <span>M러프/랑데뷰/반누보/스타드림 등</span>
    </li>
    <li>
        인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
        후가공 <span>접지/오시/미싱/귀도리/동판박/도무송 등</span>
    </li>`;

// 일반지 포스터
let posterdesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dposter?mcode=30" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 일반지 포스터 설명
    </li>
    <li>
        용도 <span>포스터/브로마이드 등</span>
    </li>
    <li>
        용지 <span>아트지/스노우/모조지</span>
    </li>
    <li>
        인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
        후가공 <span>코팅/접지/오시/미싱/귀도리/도무송 등</span>
    </li>`;

// 고급지 포스터
let posterdesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dposter?mcode=30&qual=high" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 고급지 포스터 설명
    </li>
    <li>
      용도 <span>포스터/브로마이드 등</span>
    </li>
    <li>
      용지 <span>M러프/랑데뷰/반누보/스타드림 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>접지/오시/미싱/귀도리/도무송 등</span>
    </li>`;

// 백색인쇄 포스터
let posterdesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/dposter?mcode=31" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 백색인쇄 포스터 설명
    </li>
    <li>
      용도 <span>포스터/브로마이드 등</span>
    </li>
    <li>
      용지 <span>딤플/스튜디오 컬렉션/뉴크라프트</span>
    </li>
    <li>
      인쇄도수 <span>양면8도+백색/단면4도+백색/백색</span>
    </li>
    <li>
      후가공 <span>접지/오시/미싱/귀도리/도무송 등</span>
    </li>`;

// 포토인화 포스터
let posterdesc4 = `
    <li class="text-center mb-4">
      <a href="/order/form/dposter?mcode=32" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 포토인화 포스터 설명
    </li>
    <li>
        용도 <span>포스터/사진인화 등</span>
    </li>
    <li>
        용지 <span>무광인화지/무광인화지 펄</span>
    </li>
    <li>
        인쇄도수 <span>단면4도/단면1도</span>
    </li>
    <li>
        후가공 <span>코팅/오시/미싱/귀도리/도무송 등</span>
    </li>`;

// PET 포스터
let posterdesc5 = `
    <li class="text-center mb-4">
      <a href="/order/form/dposter?mcode=33" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> PET 포스터 설명
    </li>
    <li>
        용도 <span>포스터/브로마이드 등</span>
    </li>
    <li>
        용지 <span>백색PET지/투명PET지/백릿</span>
    </li>
    <li>
        인쇄도수 <span>단면4도/단면1도</span>
    </li>
    <li>
        후가공 <span>코팅/미싱/도무송/타공 등</span>
    </li>`;

// 캔버스 포스터
let posterdesc6 = `
    <li class="text-center mb-4">
      <a href="/order/form/dposter?mcode=34" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 캔버스 포스터 설명
    </li>
    <li>
      용도 <span>포스터/브로마이드 등</span>
    </li>
    <li>
      용지 <span>캔버스</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면1도</span>
    </li>
    <li>
      후가공 <span>재단/타공</span>
    </li>`;

// 대형 포스터
let posterdesc7 = `
    <li class="text-center mb-4">
      <a href="/order/form/photoprint?mcode=84" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 대형 포스터 설명
    </li>
    <li>
      용도 <span>대형포스터/브로마이드/가림막 등</span>
    </li>
    <li>
      용지 <span>페트/캔버스/유포스티커/포토천 등</span>
    </li>
    <li>
      인쇄도수 <span>수성잉크4색</span>
    </li>
    <li>
      후가공 <span>접지/오시/미싱/귀도리/동판박/도무송 등</span>
    </li>`;


// 단행본책자
let bookdesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dbook?mcode=23" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 단행본/책자 설명
    </li>
    <li>
      용도 <span>단행본/책자/독립출판/여행책자 등</span>
    </li>
    <li>
      용지 <span>스노우지/모조지/M러프/랑데뷰 등 고급지</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>코팅/귀도리/무선/중철/PUR/스프링제본 등</span>
    </li>`;

// 카탈로그/브로슈어
let bookdesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dbook?mcode=24" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 카탈로그/브로슈어 설명
    </li>
    <li>
      용도 <span>단행본/책자/독립출판/여행책자 등</span>
    </li>
    <li>
      용지 <span>스노우지/모조지/M러프/랑데뷰 등 고급지</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도</span>
    </li>
    <li>
      후가공 <span>코팅/귀도리/무선/중철/PUR/스프링제본 등</span>
    </li>`;

// 누베라먹1도 책자
let bookdesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/dbook?mcode=27" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 누베라먹1도 책자 설명
    </li>
    <li>
      용도 <span>책자/소설/시집/학술자료/학원서적 등</span>
    </li>
    <li>
      용지 <span>모조지</span>
    </li>
    <li>
      인쇄도수 <span>양면먹2도/단면먹1도</span>
    </li>
    <li>
      후가공 <span>코팅/귀도리/무선/중철/PUR/스프링제본 등</span>
    </li>`;

// 교정출력(샘플)
let bookdesc4 = `
    <li class="text-center mb-4">
      <a href="/order/form/dbook?mcode=26" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 교정출력(색샘플) 설명
    </li>
    <li>
      용도 <span>본작업 진행전 색감과 오탈자 확인을 위함</span>
    </li>
    <li>
      용지 <span>스노우지/모조지/M러프 등 (먹1도별도)</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도/양면먹2도/단면먹1도</span>
    </li>
    <li>
      후가공 <span>코팅/귀도리/무선/중철/PUR/스프링제본 등</span>
    </li>`;

// 자유형 스티커
let stickerdesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dsticker?mcode=42" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 자유형 스티커 설명
    </li>
    <li>
      용도 <span>제품라벨/굿즈스티커/봉합스티커 등</span>
    </li>
    <li>
      용지 <span>아트지/모조지/유포/투명/은데드롱 스티커</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면4도+백색 등</span>
    </li>
    <li>
      후가공 <span>코팅/반칼/완칼 등</span>
    </li>`;

// 원형 스티커
let stickerdesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dsticker?mcode=43" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 원형 스티커 설명
    </li>
    <li>
      용도 <span>제품라벨/굿즈스티커/봉합스티커 등</span>
    </li>
    <li>
      용지 <span>아트지/모조지/유포/투명/은데드롱 스티커</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면4도+백색 등</span>
    </li>
    <li>
      후가공 <span>코팅/반칼/완칼 등</span>
    </li>`;


// 타원형 스티커
let stickerdesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/dsticker?mcode=44" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 타원형 스티커 설명
    </li>
    <li>
      용도 <span>제품라벨/굿즈스티커/봉합스티커 등</span>
    </li>
    <li>
      용지 <span>아트지/모조지/유포/투명/은데드롱 스티커</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면4도+백색 등</span>
    </li>
    <li>
      후가공 <span>코팅/반칼/완칼 등</span>
    </li>`;


// 사각형 스티커
let stickerdesc4 = `
    <li class="text-center mb-4">
      <a href="/order/form/dsticker?mcode=45" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 사각형 스티커 설명
    </li>
    <li>
      용도 <span>제품라벨/굿즈스티커/봉합스티커 등</span>
    </li>
    <li>
      용지 <span>아트지/모조지/유포/투명/은데드롱 스티커</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면4도+백색 등</span>
    </li>
    <li>
      후가공 <span>코팅/반칼/완칼 등</span>
    </li>`;

// 사각라운드 스티커
let stickerdesc5 = `
    <li class="text-center mb-4">
      <a href="/order/form/dsticker?mcode=46" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 사각라운드형 스티커 설명
    </li>
    <li>
      용도 <span>제품라벨/굿즈스티커/봉합스티커 등</span>
    </li>
    <li>
      용지 <span>아트지/모조지/유포/투명/은데드롱 스티커</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면4도+백색 등</span>
    </li>
    <li>
      후가공 <span>코팅/반칼/완칼 등</span>
    </li>`;

// 재단 스티커
let stickerdesc6 = `
    <li class="text-center mb-4">
      <a href="/order/form/dsticker?mcode=47" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 재단형 스티커 설명
    </li>
    <li>
      용도 <span>제품라벨/굿즈스티커/봉합스티커 등</span>
    </li>
    <li>
      용지 <span>아트지/모조지/유포/투명/은데드롱 스티커</span>
    </li>
    <li>
      인쇄도수 <span>단면4도/단면4도+백색 등</span>
    </li>
    <li>
      후가공 <span>코팅/재단 등</span>
    </li>`;

// 패키지
let packagedesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dpackage?mcode=51" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 패키지 설명
    </li>
    <li>
      용도 <span>제품패키지/홀더/슬리브패키지 등</span>
    </li>
    <li>
      용지 <span>CCP/아이보리/마닐라/MGB/M러프 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도/단면4도/양면2도/단면1도</span>
    </li>
    <li>
        후가공 <span>코팅/도무송 등</span>
    </li>`;


// 대봉투
let envelopedesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/oenvelope?mcode=74" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 대봉투 설명
    </li>
    <li>
        용도 <span>서류봉투/카렌다봉투 등</span>
    </li>
    <li>
        용지 <span>모조지/체크레자크/줄레자크/밍크/탄트 등</span>
    </li>
    <li>
        인쇄도수 <span>단면4도</span>
    </li>
    <li>
        후가공 <span>양면테이프 등</span>
    </li>`;


// 중봉투
let envelopedesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/oenvelope?mcode=75" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 중봉투 설명
    </li>
    <li>
        용도 <span>서류봉투 등</span>
    </li>
    <li>
        용지 <span>모조지/체크레자크/줄레자크/밍크/탄트 등</span>
    </li>
    <li>
        인쇄도수 <span>단면4도</span>
    </li>
    <li>
        후가공 <span>양면테이프 등</span>
    </li>`;

// 소봉투
let envelopedesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/oenvelope?mcode=76" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 소봉투 설명
    </li>
    <li>
        용도 <span>서류봉투/편지봉투 등</span>
    </li>
    <li>
        용지 <span>모조지/체크레자크/줄레자크/밍크/탄트 등</span>
    </li>
    <li>
        인쇄도수 <span>단면4도</span>
    </li>
    <li>
        후가공 <span>양면테이프 등</span>
    </li>`;

// 6절봉투
let envelopedesc4 = `
    <li class="text-center mb-4">
      <a href="/order/form/oenvelope?mcode=76" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <a href="/order/form/oenvelope?mcode=77">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 6절봉투 설명
    </li>
    <li>
      용도 <span>서류봉투 등</span>
    </li>
    <li>
      용지 <span>모조지/체크레자크/줄레자크/밍크/탄트 등</span>
    </li>
    <li>
      인쇄도수 <span>단면4도</span>
    </li>
    <li>
        후가공 <span>양면테이프 등</span>
    </li>`;


// 티켓봉투
let envelopedesc5 = `
    <li class="text-center mb-4">
      <a href="/order/form/oenvelope?mcode=78" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 티켓봉투 설명
    </li>
    <li>
      용도 <span>상품권봉투/티켓봉투 등</span>
    </li>
    <li>
      용지 <span>모조지/체크레자크/줄레자크/밍크/탄트 등</span>
    </li>
    <li>
      인쇄도수 <span>단면4도</span>
    </li>
    <li>
        후가공 <span>양면테이프 등</span>
    </li>`;

// 창봉투
let envelopedesc6 = `
    <li class="text-center mb-4">
      <a href="/order/form/oenvelope?mcode=79" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 창봉투 설명
    </li>
    <li>
        용도 <span>청구서 봉투/DM발송 봉투 등</span>
    </li>
    <li>
        용지 <span>모조지/체크레자크/줄레자크/밍크/탄트 등</span>
    </li>
    <li>
        인쇄도수 <span>단면4도</span>
    </li>
    <li>
        후가공 <span>양면테이프 등</span>
    </li>`;

// 스탠드 달력(가로형)
let calendardesc1 = `
    <li class="text-center mb-4">
      <a href="/order/form/dcalendar?mcode=53" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 스탠드 달력(가로형) 설명
    </li>
    <li>
      용도 <span>가족달력/단체달력/홍보달력/학사일정달력 등</span>
    </li>
    <li>
      용지 <span>스노우/M러프/매직콤마 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도</span>
    </li>
    <li>
        후가공 <span>트윈링/코일링 등</span>
    </li>`;

// 스탠드 달력(세로형)
let calendardesc2 = `
    <li class="text-center mb-4">
      <a href="/order/form/dcalendar?mcode=54" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 스탠드 달력(세로형) 설명
    </li>
    <li>
      용도 <span>가족달력/단체달력/홍보달력/학사일정달력 등</span>
    </li>
    <li>
      용지 <span>스노우/M러프/매직콤마 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도</span>
    </li>
    <li>
      후가공 <span>트윈링/코일링 등</span>
    </li>`;

// 벽걸이 달력
let calendardesc3 = `
    <li class="text-center mb-4">
      <a href="/order/form/dcalendar?mcode=55" class="btn-fulldown-order">주문하기</a>
    </li>
    <li>
      <i class="far fa-info-circle"></i> 벽걸이 달력 설명
    </li>
    <li>
      용도 <span>가족달력/단체달력/홍보달력/학사일정달력 등</span>
    </li>
    <li>
      용지 <span>스노우/M러프/매직콤마 등</span>
    </li>
    <li>
      인쇄도수 <span>양면8도</span>
    </li>
    <li>
      후가공 <span>트윈링/코일링 등</span>
    </li>`;

// 배너
let photoprintdesc1 = `
    <!--li class="lh2">
      <a href="/order/form/photobanner?mcode=135">에코솔벤배너(고해상)</a>
    </li-->
    <li class="lh2">
      <a href="/order/form/photobanner?mcode=80">실내용배너<span class="speech-bubble-left">특가배너</span></a>
    </li>
    <li class="lh2">
      <a href="/order/form/photobanner?mcode=81">실외용배너<span class="speech-bubble-left">특가배너</span></a>
    </li>
    <li class="lh2">
      <a href="/order/form/photobanner?mcode=103">크리스탈배너</a>
    </li>
    <li class="lh2">
      <a href="/order/form/photobanner?mcode=104">메쉬배너<span class="speech-bubble-left">최저가</span></a>
    </li>
    <li class="lh2">
      <a href="/order/form/photobanner?mcode=106">투명페트배너(고해상)</a>
    </li>`;

// 미니 배너
let photoprintdesc2 = `
  <!--li class="lh2">
    <a href="/order/form/photombanner?mcode=136">에코솔벤미니배너(고해상)</a>
  </li-->
  <li class="lh2">
    <a href="/order/form/photombanner?mcode=137">미니배너</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photombanner?mcode=130">크리스탈미니배너</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photombanner?mcode=131">메쉬미니배너</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photombanner?mcode=133">투명페트미니배너(고해상)</a>
  </li>`;

// 현수막
let photoprintdesc3 = `
  <li class="lh2">
    <a href="/order/form/photohbanner?mcode=83">일반현수막</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photohbanner?mcode=138">에코솔벤현수막(고해상)</a>
  </li>`;


// 실사출력
let photoprintdesc4 = `
  <li class="lh2">
    <a href="/order/form/photoprint?mcode=84">실사일반</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photoprint?mcode=112">에코솔벤실사(고해상)</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photoprint?mcode=113">투명페트(고해상)</a>
  </li>`;

// 실사스티커
let photoprintdesc5 = `
  <li class="lh2">
    <a href="/order/form/photosticker?mcode=115">일반스티커</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photosticker?mcode=116">에코솔벤스티커(고해상)</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photosticker?mcode=117">반사시트스티커(고해상)</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photosticker?mcode=118">투명윈도우스티커(고해상)</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photosticker?mcode=140">메탈릭스티커(골드,실버)</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photosticker?mcode=141">에어퓨리티스티커(항균,탈취)</a>
  </li>`;

// 패브릭출력
let photoprintdesc6 = `
  <li class="lh2">
    <a href="/order/form/photofabric?mcode=120">부직포</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photofabric?mcode=121">포토천</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photofabric?mcode=122">캔버스</a>
  </li>`;

// 실사합지
let photoprintdesc7 = `
  <li class="lh2">
    <a href="/order/form/photopaper?mcode=144">등신대</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photopaper?mcode=145">보드합지</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photopaper?mcode=146">페트합지</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photopaper?mcode=147">자석합지</a>
  </li>`;

// 시트컷팅
let photoprintdesc8 = `
<li class="lh2">
  <a href="/order/form/photosheet?mcode=148">시트컷팅</a>
</li>`;

// 아트룩스 액자
let framedesc1 = `
  <li class="lh2">
    <a href="/order/form/photoframe?mcode=126">슈어뷰(무광매트) 액자</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photoframe?mcode=124">클라세(유광글로시) 액자</a>
  </li>
  <li class="lh2">
    <a href="/order/form/photoframe?mcode=125">크라운(유광무반사) 액자</a>
  </li>`;

// 캔버스 액자
let framedesc2 = `
  <li class="lh2">
    <a href="/order/form/photoframe?mcode=139">무광 캔버스 액자</a>
  </li>`;
