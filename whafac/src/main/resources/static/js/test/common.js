$.fn.serializeObject = function () {
  var obj = null;
  try {
    if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
      var arr = this.serializeArray();
      if (arr) {
        obj = {};
        jQuery.each(arr, function () {
          if (this.name != 'spec') {
            obj[this.name] = this.value;
          }
        });
      }//if ( arr ) {
    }
  } catch (e) {
    alert(e.message);
  } finally {
  }

  return obj;
};

$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
}

var arr_product = [
  {"idx": 23, "cate": "디지털", "p_title": "디지털책자-인디고", "title": "단행본/책자", "copy": ""},
  {"idx": 24, "cate": "디지털", "p_title": "디지털책자-인디고", "title": "카탈로그/브로슈어", "copy": "인터프로프린트에서 나만의 카탈로그/브로슈어를 만들어보세요!"},
  {"idx": 25, "cate": "디지털", "p_title": "디지털책자-인디고", "title": "인디고별색+먹1도", "copy": ""},
  {"idx": 26, "cate": "디지털", "p_title": "디지털책자-인디고", "title": "교정출력(색샘플)", "copy": ""},
  {"idx": 27, "cate": "디지털", "p_title": "디지털책자-누베라", "title": "먹1도 단행본/책자", "copy": ""},
  {"idx": 28, "cate": "디지털", "p_title": "디지털책자-누베라", "title": "먹1도 카탈로그", "copy": ""},
  {"idx": 29, "cate": "디지털", "p_title": "디지털책자-누베라", "title": "먹1도 교정출력", "copy": ""},
  {"idx": 30, "cate": "디지털", "p_title": "디지털포스터", "title": "포스터", "copy": ""},
  {"idx": 31, "cate": "디지털", "p_title": "디지털포스터", "title": "백색 인쇄 포스터", "copy": ""},
  {"idx": 32, "cate": "디지털", "p_title": "디지털포스터", "title": "포토인화 포스터", "copy": ""},
  {"idx": 33, "cate": "디지털", "p_title": "디지털포스터", "title": "PET 포스터", "copy": ""},
  {"idx": 34, "cate": "디지털", "p_title": "디지털포스터", "title": "캔버스 포스터", "copy": ""},
  {"idx": 35, "cate": "디지털", "p_title": "디지털전단", "title": "전단", "copy": ""},
  {"idx": 36, "cate": "디지털", "p_title": "디지털전단", "title": "리플렛", "copy": ""},
  {"idx": 37, "cate": "디지털", "p_title": "디지털명함", "title": "고급지 명함", "copy": ""},
  {"idx": 38, "cate": "디지털", "p_title": "디지털명함", "title": "일반지 명함", "copy": ""},
  {"idx": 39, "cate": "디지털", "p_title": "디지털명함", "title": "백색 인쇄 명함", "copy": ""},
  {"idx": 40, "cate": "디지털", "p_title": "디지털명함", "title": "UV(PET) 명함", "copy": ""},
  {"idx": 41, "cate": "디지털", "p_title": "디지털명함", "title": "샌드위치(합지) 명함", "copy": ""},
  {"idx": 42, "cate": "디지털", "p_title": "디지털스티커", "title": "자유형 스티커", "copy": ""},
  {"idx": 43, "cate": "디지털", "p_title": "디지털스티커", "title": "원형 스티커", "copy": ""},
  {"idx": 44, "cate": "디지털", "p_title": "디지털스티커", "title": "타원형 스티커", "copy": ""},
  {"idx": 45, "cate": "디지털", "p_title": "디지털스티커", "title": "사각형 스티커", "copy": ""},
  {"idx": 46, "cate": "디지털", "p_title": "디지털스티커", "title": "사각라운드형 스티커", "copy": ""},
  {"idx": 47, "cate": "디지털", "p_title": "디지털스티커", "title": "재단형 스티커", "copy": ""},
  {"idx": 48, "cate": "디지털", "p_title": "디지털엽서", "title": "엽서", "copy": ""},
  {"idx": 49, "cate": "디지털", "p_title": "디지털엽서", "title": "상품권", "copy": ""},
  {"idx": 50, "cate": "디지털", "p_title": "디지털엽서", "title": "초대장", "copy": ""},
  {"idx": 51, "cate": "디지털", "p_title": "디지털패키지", "title": "패키지", "copy": ""},
  {"idx": 52, "cate": "디지털", "p_title": "디지털패키지", "title": "종이썬캡", "copy": ""},
  {"idx": 53, "cate": "디지털", "p_title": "디지털달력", "title": "스탠드 달력(가로형)", "copy": ""},
  {"idx": 54, "cate": "디지털", "p_title": "디지털달력", "title": "스탠드 달력(세로형)", "copy": ""},
  {"idx": 55, "cate": "디지털", "p_title": "디지털달력", "title": "벽걸이 달력", "copy": ""},
  {"idx": 158, "cate": "디지털", "p_title": "디지털썬캡", "title": "썬캡", "copy": ""},
  {"idx": 56, "cate": "옵셋", "p_title": "옵셋책자", "title": "단행본/책자", "copy": ""},
  {"idx": 57, "cate": "옵셋", "p_title": "옵셋책자", "title": "카탈로그/브로슈어", "copy": ""},
  {"idx": 58, "cate": "옵셋", "p_title": "옵셋포스터", "title": "포스터", "copy": ""},
  {"idx": 59, "cate": "옵셋", "p_title": "옵셋전단", "title": "일반지전단", "copy": ""},
  {"idx": 60, "cate": "옵셋", "p_title": "옵셋전단", "title": "고급지전단", "copy": ""},
  {"idx": 61, "cate": "옵셋", "p_title": "옵셋전단", "title": "리플렛", "copy": ""},
  {"idx": 62, "cate": "옵셋", "p_title": "옵셋명함", "title": "일반지 명함", "copy": ""},
  {"idx": 63, "cate": "옵셋", "p_title": "옵셋명함", "title": "고급지 명함", "copy": ""},
  {"idx": 64, "cate": "옵셋", "p_title": "옵셋명함", "title": "두꺼운 명함", "copy": ""},
  {"idx": 65, "cate": "옵셋", "p_title": "옵셋명함", "title": "카드 명함", "copy": ""},
  {"idx": 66, "cate": "옵셋", "p_title": "옵셋명함", "title": "포토카드 명함", "copy": ""},
  {"idx": 67, "cate": "옵셋", "p_title": "옵셋명함", "title": "엣지 명함", "copy": ""},
  {"idx": 68, "cate": "옵셋", "p_title": "옵셋명함", "title": "부분코팅 명함", "copy": ""},
  {"idx": 69, "cate": "옵셋", "p_title": "옵셋스티커", "title": "재단형 스티커", "copy": ""},
  {"idx": 70, "cate": "옵셋", "p_title": "옵셋스티커", "title": "모양 스티커", "copy": ""},
  {"idx": 71, "cate": "옵셋", "p_title": "옵셋엽서", "title": "일반엽서", "copy": ""},
  {"idx": 72, "cate": "옵셋", "p_title": "옵셋엽서", "title": "수입지엽서", "copy": ""},
  {"idx": 73, "cate": "옵셋", "p_title": "옵셋엽서", "title": "프리미엄엽서", "copy": ""},
  {"idx": 74, "cate": "옵셋", "p_title": "옵셋봉투", "title": "대봉투", "copy": ""},
  {"idx": 75, "cate": "옵셋", "p_title": "옵셋봉투", "title": "중봉투", "copy": ""},
  {"idx": 76, "cate": "옵셋", "p_title": "옵셋봉투", "title": "소봉투", "copy": ""},
  {"idx": 77, "cate": "옵셋", "p_title": "옵셋봉투", "title": "6절봉투", "copy": ""},
  {"idx": 78, "cate": "옵셋", "p_title": "옵셋봉투", "title": "티켓봉투", "copy": ""},
  {"idx": 79, "cate": "옵셋", "p_title": "옵셋봉투", "title": "창봉투", "copy": ""},
  {"idx": 159, "cate": "옵셋", "p_title": "옵셋썬캡", "title": "썬캡", "copy": ""},
  {"idx": 80, "cate": "실사", "p_title": "실사배너", "title": "실내용배너", "copy": ""},
  {"idx": 81, "cate": "실사", "p_title": "실사배너", "title": "실외용배너", "copy": ""},
  {"idx": 82, "cate": "실사", "p_title": "실사배너", "title": "미니배너", "copy": ""},
  {"idx": 83, "cate": "실사", "p_title": "실사현수막", "title": "일반현수막", "copy": ""},
  {"idx": 84, "cate": "실사", "p_title": "실사출력", "title": "실사일반", "copy": ""},
  {"idx": 103, "cate": "실사", "p_title": "실사출력", "title": "크리스탈배너", "copy": ""},
  {"idx": 104, "cate": "실사", "p_title": "실사출력", "title": "메쉬배너", "copy": ""},
  {"idx": 106, "cate": "실사", "p_title": "실사출력", "title": "투명페트배너", "copy": ""},
  {"idx": 107, "cate": "실사", "p_title": "실사출력", "title": "반사시트배너", "copy": ""},
  {"idx": 108, "cate": "실사", "p_title": "실사출력", "title": "크리스탈미니배너", "copy": ""},
  {"idx": 109, "cate": "실사", "p_title": "실사출력", "title": "메쉬미니배너", "copy": ""},
  {"idx": 110, "cate": "실사", "p_title": "실사출력", "title": "투명페트미니배너", "copy": ""},
  {"idx": 111, "cate": "실사", "p_title": "실사출력", "title": "반사시트미니배너", "copy": ""},
  {"idx": 112, "cate": "실사", "p_title": "실사출력", "title": "에코솔벤실사(고해상)", "copy": ""},
  {"idx": 113, "cate": "실사", "p_title": "실사출력", "title": "투명페트(고해상)", "copy": ""},
  {"idx": 114, "cate": "실사", "p_title": "실사출력", "title": "실사스티커", "copy": ""},
  {"idx": 115, "cate": "실사", "p_title": "실사출력", "title": "일반스티커", "copy": ""},
  {"idx": 116, "cate": "실사", "p_title": "실사출력", "title": "에코솔벤스티커(고해상)", "copy": ""},
  {"idx": 117, "cate": "실사", "p_title": "실사출력", "title": "반사스티커(고해상)", "copy": ""},
  {"idx": 118, "cate": "실사", "p_title": "실사출력", "title": "투명윈도우스티커(고해상)", "copy": ""},
  {"idx": 119, "cate": "실사", "p_title": "실사출력", "title": "페브릭출력", "copy": ""},
  {"idx": 120, "cate": "실사", "p_title": "실사출력", "title": "부직포", "copy": ""},
  {"idx": 121, "cate": "실사", "p_title": "실사출력", "title": "포토천", "copy": ""},
  {"idx": 122, "cate": "실사", "p_title": "실사출력", "title": "캔버스", "copy": ""},
  {"idx": 123, "cate": "실사", "p_title": "실사출력", "title": "아트룩스액자", "copy": ""},
  {"idx": 124, "cate": "", "p_title": "실사출력", "title": "클리세(유광글로시) 아트룩스액자", "copy": ""},
  {"idx": 125, "cate": "", "p_title": "실사출력", "title": "크라운(유광무반사) 아트룩스액자", "copy": ""},
  {"idx": 126, "cate": "", "p_title": "실사출력", "title": "슈어뷰(무광매트) 아트룩스액자", "copy": ""},
  {"idx": 127, "cate": "실사", "p_title": "실사출력", "title": "마스크", "copy": ""},
  {"idx": 128, "cate": "실사", "p_title": "실사출력", "title": "에어퓨리티 3D 마스크", "copy": ""},
  {"idx": 130, "cate": "실사", "p_title": "실사배너", "title": "크리스탈 미니배너", "copy": ""},
  {"idx": 131, "cate": "실사", "p_title": "실사배너", "title": "메쉬 미니배너", "copy": ""},
  {"idx": 133, "cate": "실사", "p_title": "실사배너", "title": "투명페트 미니배너", "copy": ""},
  {"idx": 134, "cate": "실사", "p_title": "실사배너", "title": "반사시트 미니배너", "copy": ""},
  {"idx": 135, "cate": "실사", "p_title": "실사배너", "title": "에코솔벤배너", "copy": ""},
  {"idx": 136, "cate": "실사", "p_title": "미니배너", "title": "에코솔벤미니배너", "copy": ""},
  {"idx": 137, "cate": "실사", "p_title": "미니배너", "title": "일반 미니배너", "copy": ""},
  {"idx": 138, "cate": "실사", "p_title": "실사현수막", "title": "에코솔벤현수막", "copy": ""},
  {"idx": 139, "cate": "", "p_title": "아트룩스액자", "title": "무광캔버스액자", "copy": ""},
  {"idx": 140, "cate": "실사", "p_title": "실사스티커", "title": "메탈릭스티커", "copy": ""},
  {"idx": 141, "cate": "실사", "p_title": "실사스티커", "title": "에어퓨리티스티커", "copy": ""},
  {"idx": 144, "cate": "실사", "p_title": "실사합지", "title": "등신대", "copy": ""},
  {"idx": 145, "cate": "실사", "p_title": "실사합지", "title": "보드합지", "copy": ""},
  {"idx": 146, "cate": "실사", "p_title": "실사합지", "title": "페트합지", "copy": ""},
  {"idx": 147, "cate": "실사", "p_title": "실사합지", "title": "자석합지", "copy": ""},
  {"idx": 148, "cate": "실사", "p_title": "시트커팅", "title": "시트커팅", "copy": ""},
  {"idx": 150, "cate": "디지털", "p_title": "디지털명함", "title": "두꺼운 명함", "copy": ""},
  {"idx": 152, "cate": "디지털", "p_title": "디지털봉투", "title": "세로형 기성봉투(규격형)", "copy": ""},
  {"idx": 153, "cate": "디지털", "p_title": "디지털봉투", "title": "가로형 기성봉투(자켓형)", "copy": ""},
  {"idx": 154, "cate": "디지털", "p_title": "디지털봉투", "title": "가로형 기성봉투(안내형)", "copy": ""},
  {"idx": 155, "cate": "마스터", "p_title": "마스터봉투", "title": "세로형봉투(규격형)", "copy": ""},
  {"idx": 156, "cate": "마스터", "p_title": "마스터봉투", "title": "가로형봉투(자켓형)", "copy": ""},
  {"idx": 157, "cate": "마스터", "p_title": "마스터봉투", "title": "가로형봉투(안내형)", "copy": ""},
];

var tot_obj = {};
var ord_conts = '';
var _form_history = [];
var file_progress = 'N';
var _debug = 'N';

var $_boxsize = [
  {"no":1,"label":"명함소","length":140,"width":110,"height":80,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":2,"label":"책자박스1호","length":230,"width":160,"height":70,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":3,"label":"8호(소)","length":470,"width":320,"height":20,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":4,"label":"9호","length":200,"width":150,"height":105,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":5,"label":"책자박스2호","length":310,"width":220,"height":75,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":6,"label":"1호","length":315,"width":230,"height":100,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":7,"label":"10호","length":120,"width":120,"height":640,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":8,"label":"8호(중)","length":600,"width":430,"height":40,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":9,"label":"2호","length":315,"width":230,"height":150,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":10,"label":"8호(중-1)","length":640,"width":470,"height":40,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":11,"label":"3호","length":280,"width":200,"height":300,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":12,"label":"8호(대)","length":750,"width":530,"height":45,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":13,"label":"4호","length":315,"width":230,"height":300,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":14,"label":"5호","length":400,"width":280,"height":250,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":15,"label":"6호","length":440,"width":310,"height":250,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0},
  {"no":16,"label":"7호","length":470,"width":325,"height":260,"box_weight":0,"basic_weight":0,"box_price":0,"total_price":0,"height_jari":0,"box_cnt":0,"v1":0,"v2":0,"v3":0,"v4":0,"v5":0}
];

var $_boxprice = [
  {"kg":2,"price":3000},{"kg":5,"price":3500},{"kg":15,"price":4000},{"kg":25,"price":5500}
];

function isNumCheck(arr) {
  const arr_key = ['cutsize_w','cutsize_h','jobsize_w','jobsize_h','maesu','quantity','print_price','cutting_price','cover_width','cover_height','seneka','cover_paper_price','cover_print_price','cover_price','startend_price','between_price','binding_price'];
  let bcount = 0;

  $.each( arr, function( key, val ) {
    if( $.inArray( key,arr_key) > -1) {
      if( $.isNumeric(val) == false) {
        console.log('key=>' + key + ',val=>' + val);
        bcount++;
      }
    }
  });

  return bcount;
}

//범용볼륨
function gsetVolume() {
  const ret = volumeTotal();
  const total_height = ret['heights'];
  const total_weight = ret['weights'];
  const cutsize_w = Number($('#cutsize-w').val());
  const cutsize_h = Number($('#cutsize-h').val());

  for(let i=0; i < $_boxsize.length; i++) {
    $_boxsize[i]['v1'] = Math.floor($_boxsize[i]['length']/cutsize_w);
    $_boxsize[i]['v2'] = Math.floor($_boxsize[i]['width']/cutsize_h);
    $_boxsize[i]['v3'] = Math.floor($_boxsize[i]['length']/cutsize_h);
    $_boxsize[i]['v4'] = Math.floor($_boxsize[i]['width']/cutsize_w);
    const p1 = $_boxsize[i]['v1'] * $_boxsize[i]['v2'];
    const p2 = $_boxsize[i]['v3'] * $_boxsize[i]['v4'];
    $_boxsize[i]['v5'] = Math.max(p1,p2);

    if( $_boxsize[i]['v5'] !=0) {
      $_boxsize[i]['height_jari'] = $_boxsize[i]['height'] * $_boxsize[i]['v5'];
      $_boxsize[i]['box_cnt'] = Math.ceil((total_height / $_boxsize[i]['height_jari']));
      const p3 = total_weight / $_boxsize[i]['box_cnt'];
      const rounded = Math.round((p3 + Number.EPSILON) * 100) / 100;
      let basic_weight = 0;
      let box_price = 0;

      for(let j=0;j<$_boxprice.length;j++) {
        if( rounded <= $_boxprice[j]['kg']) {
          basic_weight = $_boxprice[j]['kg'];
          box_price = $_boxprice[j]['price'];
          break;
        }
      }

      $_boxsize[i]['box_weight'] = rounded;
      $_boxsize[i]['basic_weight'] = basic_weight;
      $_boxsize[i]['box_price'] = box_price;
      $_boxsize[i]['total_price'] = $_boxsize[i]['box_cnt'] * box_price;
    }
  }

  let obj = _.filter($_boxsize, function(o) {
    return (o.total_price > 0);
  });

  obj = _.sortBy(obj,'total_price');

  const box_cnt = Math.ceil(total_weight / 15);
  //const box_cnt = obj[0]['box_cnt'];

  const boxvol = obj[0]['length'] + 'x' + obj[0]['width'] + 'x' + obj[0]['height'];
  const volumes = total_weight + '/' + box_cnt + '/' + total_height + '/' + boxvol + '/' + obj[0]['total_price'];
  $('#volume').val(volumes);

  //console.clear();
  //console.log(volumes);
}

//실사볼륨
function psetVolume() {
  const volumes = '1/1/1/750x530x45/0';
  $('#volume').val(volumes);
  //console.log(volumes);
}

function comma3(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}


function currTime(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;

  return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}


function roundDown(number, decimals) {
  decimals = decimals || 0;
  return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
}

//디지털 책자
function setOrderDBook() {

  const q = $('#quantity').val();

  if (q != '1' && (q % 2) == 1) {
    alert('짝수로 주문 가능합니다');
    $('#quantity').focus();
    return false;
  }


  var arr_inner = [];
  var arr_foil = [];
  var obj = {};


  //표지2페이지
  var total_pages = 2;
  total_pages += Number($('#inner-pages').val());
  if ($('#add-inner-paper').prop('checked')) {
    total_pages += Number($('#inner-pages2').val());
  }
  if ($('#add-startend-paper').prop('checked')) {
    total_pages += Number($('input:radio[name="startend_page"]:checked').attr('data-cnt'));
  }
  if ($('#add-between-paper').prop('checked')) {
    total_pages += Number($('#between-pages').val());
  }


  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "인쇄부수:" + $('#quantity').val() + "부;";
  ord_conts += "총페이지:" + total_pages + ";";
  ord_conts += "표지용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "내지1용지:" + $('select[name="inner_gram"] option:selected').val() + ";";

  if ($('#add-inner-paper').prop('checked')) {
    ord_conts += "내지2용지:" + $('select[name="inner_gram2"] option:selected').val() + ";";
  }


  ord_conts += "표지:" + $('input[name="cover_color"]:checked').val() + ";";
  ord_conts += "내지1:" + $('input[name="inner_color"]:checked').val() + ";";

  if ($('#add-inner-paper').prop('checked')) {
    ord_conts += "내지2:" + $('input[name="inner_color2"]:checked').val() + ";";
  }


  if ($('input[name="cover_color"]:checked').val().indexOf('토너') > -1) {
    tot_obj['cmachine'] = 'toner';
  } else {
    tot_obj['cmachine'] = 'indigo';
  }


  if ($('input[name="inner_color"]:checked').val().indexOf('토너') > -1) {
    tot_obj['machine'] = 'toner';
  } else {
    tot_obj['machine'] = 'indigo';
  }


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['quantity'] = $('#quantity').val();

  tot_obj['cover_width'] = $('#cover-width').val();
  tot_obj['cover_height'] = $('#cover-height').val();
  tot_obj['seneka'] = $('#seneka').val();
  tot_obj['cover_paper'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['cover_color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['cover_add_color'] = $('select[name="cover_add_color"] option:selected').val();
  tot_obj['cover_paper_price'] = $('#fp-cover-paper').text().replace(/,/g, '');
  tot_obj['cover_print_price'] = $('#fp-cover-print').text().replace(/,/g, '');
  tot_obj['cover_price'] = $('#fp-cover').text().replace(/,/g, '');

  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "표지추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }


  // 내지옵션
  var no = 1;


  $('.inner-papers-row').each(function () {
    obj = {};
    const inner_quantity = $(this).find('.inner-pages').val();
    const inner_cate = $(this).find('.paper-cate option:selected').val();
    const inner_name = $(this).find('.paper-name option:selected').val();
    const inner_gram = $(this).find('.paper-gram option:selected').val();
    const inner_color = $(this).find('input:radio.inner-color:checked').val();
    const inner_add_color = $(this).find('.inner-add-color option:selected').val();

    if (inner_quantity > 0) {
      obj['quantity'] = inner_quantity;
      obj['cate'] = inner_cate;
      obj['name'] = inner_name;
      obj['paper'] = inner_gram;
      obj['color'] = inner_color;
      obj['add_color'] = inner_add_color;

      arr_inner.push(obj);
      no++;
    }
  });

  tot_obj['inner_papers'] = arr_inner;

  tot_obj['inner_paper_price'] = $('#fp-inner-paper').text().replace(/,/g, '');
  tot_obj['inner_print_price'] = $('#fp-inner-print').text().replace(/,/g, '');
  tot_obj['inner_price'] = $('#fp-inner').text().replace(/,/g, '');

  tot_obj['startend_paper_yn'] = 'N';
  tot_obj['startend_paper'] = '';
  tot_obj['startend_price'] = '0';
  tot_obj['startend_inner_same'] = 'N';

  // 면지추가
  if ($('#add-startend-paper').attr('data-yn') == 'Y') {
    tot_obj['startend_paper_yn'] = 'Y';

    const cate = $('select[name="startend_cate"] option:selected').val();
    const name = $('select[name="startend_name"] option:selected').val();
    let paper = $('select[name="startend_gram"] option:selected').val();

    if ($('#startend-inner-same').prop('checked')) {
      paper = $('select[name="inner_gram"] option:selected').val();
      tot_obj['startend_inner_same'] = 'Y';
    }

    const cnt = $('input[name="startend_page"]:checked').attr('data-cnt');
    const pos = $('input[name="startend_page"]:checked').val();

    obj = {};
    obj['cate'] = cate;
    obj['name'] = name;
    obj['paper'] = paper;
    obj['pos'] = pos;
    obj['count'] = cnt;

    tot_obj['startend_paper_yn'] = 'Y';
    tot_obj['startend_paper'] = obj;
    tot_obj['startend_price'] = $('#fp-startend').text().replace(/,/g, '');

    //ord_conts += "면지:" + paper + " " + pos + ";";
  }

  tot_obj['between_paper_yn'] = 'N';
  tot_obj['between_paper'] = '';
  tot_obj['between_price'] = '0';

  // 간지추가
  if ($('#add-between-paper').attr('data-yn') == 'Y') {
    tot_obj['between_paper_yn'] = 'Y';
    const quantity = $('input[name="between_pages"]').val();
    const cate = $('select[name="between_cate"] option:selected').val();
    const name = $('select[name="between_name"] option:selected').val();
    const paper = $('select[name="between_gram"] option:selected').val();
    const color = $('input:radio[name="between_color"]:checked').val();

    obj = {};
    obj['quantity'] = quantity;
    obj['cate'] = cate;
    obj['name'] = name;
    obj['paper'] = paper;
    obj['color'] = color;

    //ord_conts += "간지:" + paper + ";";
    //ord_conts += "간지매수:" + quantity + ";";

    tot_obj['between_paper_yn'] = 'Y';
    tot_obj['between_paper'] = obj;
    tot_obj['between_price'] = $('#fp-between').text().replace(/,/g, '');
  }


  var binding = $('input[name="binding"]:checked').val();
  var binding_way = $('input:radio[name="binding_way"]:checked').val();
  var binding_val = $('input:radio[name="binding"]:checked').attr('data-val');

  if( binding_way == '세로형상철' || binding_way == '가로형상철') {
    tot_obj['nextdir'] = $('input:radio[name="nextdir"]:checked').val();
  }

  obj = {};
  obj['name'] = binding;
  obj['direction'] = binding_way;
  obj['front_wing'] = $('#front-wing').val();
  obj['back_wing'] = $('#back-wing').val();

  obj['spring_type'] = 'no';
  obj['spring_type_opt'] = '';
  obj['spring_punching'] = '';
  obj['spring_pvc_cover'] = '';

  obj['cover_size'] = $('#cover-width').val() + 'x' + $('#cover-height').val();
  obj['seneka'] = $('#seneka').val();


  if (binding_val == 'spring') {
    obj['spring_type'] = $('input:radio[name="spring_type"]:checked').val();

    if ($('input:radio[name="spring_type"]:checked').attr('data-val') == 'twin') {
      obj['spring_type_opt'] = $('select[name="spring_type_opt1"] option:selected').val();
      obj['spring_punching'] = $('select[name="spring_punching1"] option:selected').val();
      obj['spring_pvc_cover'] = $('select[name="spring_pvc_cover1"] option:selected').val();
    } else {
      obj['spring_type_opt'] = $('select[name="spring_type_opt2"] option:selected').val();
      obj['spring_punching'] = $('select[name="spring_punching2"] option:selected').val();
      obj['spring_pvc_cover'] = $('select[name="spring_pvc_cover2"] option:selected').val();
    }

    ord_conts += "제본:" + binding + " ";
    ord_conts += $('input:radio[name="spring_type"]:checked').val() + " ";

    if ($('input:radio[name="spring_type"]:checked').attr('data-val') == 'twin') {
      ord_conts += $('select[name="spring_type_opt1"] option:selected').val() + " ";
      ord_conts += $('select[name="spring_punching1"] option:selected').val() + " ";
      ord_conts += $('select[name="spring_pvc_cover1"] option:selected').val() + " ";
    } else {
      ord_conts += $('select[name="spring_type_opt2"] option:selected').val() + " ";
      ord_conts += $('select[name="spring_punching2"] option:selected').val() + " ";
      ord_conts += $('select[name="spring_pvc_cover2"] option:selected').val() + " ";
    }

    ord_conts += $('input[name="binding_way"]:checked').val() + " ";
    ord_conts += $('#cover-width').val() + 'x' + $('#cover-height').val() + " " + $('#seneka').val() + ";";
  } else {
    ord_conts += "제본:" + binding + " " + $('input[name="binding_way"]:checked').val() + " " + $('#cover-width').val() + 'x' + $('#cover-height').val() + " " + $('#seneka').val() + ";";
  }


  tot_obj['binding'] = obj;
  tot_obj['binding_price'] = $('#fp-binding').text().replace(/,/g, '');

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 귀도리
  if ($('input:checkbox[name="is_rounding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'rounding';
    obj['label'] = '귀도리';
    var str = '';

    $('.rounding-dir').each(function () {
      if ($(this).prop('checked')) {
        str += $(this).val() + ',';
      }
    });

    var str2 = str.slice(0, -1);

    if (str2 == '좌상,우상,좌하,우하') {
      str2 = "전체귀도리";
    }

    // 라운딩 mm
    str2 += ' ' + $('select[name="rounding_mm"] option:selected').val();

    obj['val'] = str2;
    obj['price'] = $('#fp-rounding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 귀도리:" + $('select[name="rounding_mm"] option:selected').val() + " " + str2 + ";";
  }

  //후가공 uv scodix
  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    obj = {};
    obj['name'] = 'uvscodix';
    obj['label'] = 'UV스코딕스';
    obj['val'] = 'UV스코딕스';
    obj['price'] = $('#fp-uvscodix').text().replace(/,/g, '');
    obj['width'] = $('input[name="uvscodix_width"]').val();
    obj['height'] = $('input[name="uvscodix_height"]').val();
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 디지털 부분UV:디지털 부분UV";
  }


  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      obj2['price'] = $(this).find('.foilscodix-price').text();
      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  tot_obj['afterprocs'] = arr_afterproc;

}

//옵셋 책자
function setOrderOBook() {

  var arr_inner = [];
  var arr_foil = [];
  var obj = {};
  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "부수:" + $('#quantity').val() + "부;";
  ord_conts += "표지용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "표지색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['quantity'] = $('#quantity').val();

  tot_obj['cover_width'] = $('#cover-width').val();
  tot_obj['cover_height'] = $('#cover-height').val();
  tot_obj['seneka'] = $('#seneka').val();

  tot_obj['cover_paper'] = $('select[name="cover_gram"] option:selected').val();

  tot_obj['cover_ink_volume'] = $('select[name="cover_ink_volume"] option:selected').val();
  tot_obj['cover_color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['cover_add_color'] = $('select[name="cover_add_color"] option:selected').val();
  tot_obj['cover_print_method'] = $('#cover-print-method').val();
  tot_obj['inner_print_method'] = $('#inner-print-method').val();
  tot_obj['inner1_print_method'] = $('#inner1-print-method').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['ctp_price'] = $('#fp-ctp').text().replace(/,/g, '');
  tot_obj['cover_ctp_price'] = $('#fp-cover-ctp').text().replace(/,/g, '');
  tot_obj['inner_ctp_price'] = $('#fp-inner-ctp').text().replace(/,/g, '');

  tot_obj['cover_paper_price'] = $('#fp-cover-paper').text().replace(/,/g, '');
  tot_obj['cover_print_price'] = $('#fp-cover-print').text().replace(/,/g, '');
  tot_obj['inner_print_price'] = $('#fp-inner-print').text().replace(/,/g, '');

  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');

  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "표지추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }


  // 내지옵션
  var no = 1;

  $('.inner-papers-row').each(function () {
    obj = {};
    var inner_quantity = $(this).find('.inner-pages').val();
    var inner_gram = $(this).find('.paper-gram option:selected').val();

    var inner_color = $(this).find('input:radio.inner-color:checked').val();
    var inner_add_color = $(this).find('select.inner-add-color option:selected').val();

    if (inner_quantity > 0) {

      obj['quantity'] = inner_quantity;
      obj['paper'] = inner_gram;
      //obj['start'] = inner_pos_start;
      //obj['end'] = inner_pos_end;
      obj['color'] = inner_color;
      obj['add_color'] = inner_add_color;


      ord_conts += "내지" + no + " 페이지수:" + inner_quantity + ";";
      ord_conts += "내지" + no + " 용지:" + inner_gram + ";";
      //ord_conts += "내지" + no + " 시작위치:" + inner_pos_start + ";";
      //ord_conts += "내지" + no + " 종료위치:" + inner_pos_end + ";";
      ord_conts += "내지" + no + " 색상:" + inner_color + ";";
      ord_conts += "내지" + no + " 추가색상:" + inner_color + ";";

      arr_inner.push(obj);
      no++;
    }
  });

  tot_obj['inner_papers'] = arr_inner;

  tot_obj['inner_paper_price'] = $('#fp-inner-paper').text().replace(/,/g, '');
  tot_obj['inner_print_price'] = $('#fp-inner-print').text().replace(/,/g, '');
  tot_obj['inner_price'] = $('#fp-inner').text().replace(/,/g, '');


  var binding = $('input[name="binding"]:checked').val();
  var binding_way = $('input:radio[name="binding_way"]:checked').val();
  var binding_val = $('input:radio[name="binding"]:checked').attr('data-val');

  if( binding_way == '세로형상철' || binding_way == '가로형상철') {
    tot_obj['nextdir'] = $('input:radio[name="nextdir"]:checked').val();
  }

  obj = {};
  obj['name'] = binding;
  obj['direction'] = binding_way;
  obj['front_wing'] = $('#front-wing').val();
  obj['back_wing'] = $('#back-wing').val();

  obj['spring_type'] = 'no';
  obj['spring_type_opt'] = '';
  obj['spring_punching'] = '';
  obj['spring_pvc_cover'] = '';

  obj['cover_size'] = $('#cover-width').val() + 'x' + $('#cover-height').val();
  obj['seneka'] = $('#seneka').val();


  if (binding_val == 'spring') {
    obj['spring_type'] = $('input:radio[name="spring_type"]:checked').val();
    obj['spring_type_opt'] = $('select[name="spring_type_opt"] option:selected').val();
    obj['spring_punching'] = $('select[name="spring_punching"] option:selected').val();
    obj['spring_pvc_cover'] = $('select[name="spring_pvc_cover"] option:selected').val();

    ord_conts += "제본:" + binding + " ";
    ord_conts += $('input:radio[name="spring_type"]:checked').val() + " ";
    ord_conts += $('select[name="spring_type_opt"] option:selected').val() + " ";
    ord_conts += $('select[name="spring_punching"] option:selected').val() + " ";
    ord_conts += $('select[name="spring_pvc_cover"] option:selected').val() + " ";
    ord_conts += $('input[name="binding_way"]:checked').val() + " ";
    ord_conts += $('#cover-width').val() + 'x' + $('#cover-height').val() + " " + $('#seneka').val() + ";";
  } else {
    ord_conts += "제본:" + binding + " " + $('input[name="binding_way"]:checked').val() + " " + $('#cover-width').val() + 'x' + $('#cover-height').val() + " " + $('#seneka').val() + ";";
  }


  tot_obj['binding'] = obj;
  tot_obj['binding_price'] = $('#fp-binding').text().replace(/,/g, '');

  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//디지털 포스터
function setOrderDPoster() {

  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + _maesu + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = _maesu;
  tot_obj['quantity'] = $('#quantity').val();

  //분류비
  tot_obj['is_class'] = $('select[name="is_class"] option:selected').val();

  //박스포장
  tot_obj['box_package'] = $('select[name="box_package"] option:selected').val();

  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();

  if( $('select[name="cover_gram"] option:selected').val() == undefined || $('select[name="cover_gram"] option:selected').val() == '') {
    alert('용지정보가 제대로 입력되지 않았습니다.\n재주문 부탁 드립니다.');
    location.reload();
    return false;
  }

  try {
    if ($('#after-paper-name').val().length > 1 && $('#after-paper-gram').val().length) {
      tot_obj['paper_name'] = '(선방)' + $('#after-paper-name').val() + ' ' + $('#after-paper-gram').val() + 'g';
    }
  } catch (e) {
  }


  tot_obj['machine'] = $('input[name="machine"]:checked').val();

  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  if( $('#cover-color-opt').length > 0) {
    tot_obj['cover_color_opt'] = $('select[name="cover_color_opt"] option:selected').val();
  }


  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['cutting_price'] = $('#fp-cutting').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '' && $('select[name="cover_add_color"] option:selected').val() != undefined) {
    ord_conts += "추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 오시+접지
  if ($('input:checkbox[name="is_osifold"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osifold';
    obj['label'] = '오시접지';

    let vals = '';

    $('#osifold-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osifold_line"]:checked').val() + ' : ' + vals;
    obj['price'] = $('#fp-osifold').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시접지:" + $('input:radio[name="osifold_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 접지
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'folding';
    obj['label'] = '접지';

    let vals = '';

    $('#folding-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    vals = vals.slice(0,(vals.length-1));

    obj['val'] = $('input:radio[name="fold_line"]:checked').val() + ' : ' + vals;
    obj['price'] = $('#fp-folding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 접지:" + $('input:radio[name="fold_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 도무송
  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    var arr_tomson = [];

    var no = 1;

    $('.tomson-row').each(function () {
      obj2 = {};
      obj2['width'] = $(this).find('.tomson-width').val();
      obj2['height'] = $(this).find('.tomson-height').val();
      obj2['count'] = $(this).find('.tomson-cnt option:selected').val();
      obj2['shape'] = $(this).find('.tomson-shape option:selected').val();
      obj2['price'] = $(this).find('.tomson-price').text();
      arr_tomson.push(obj2);

      ord_conts += "후가공 도무송" + no + ":";
      ord_conts += $(this).find('.tomson-width').val() + "x" + $(this).find('.tomson-height').val() + " ";
      ord_conts += $(this).find('.tomson-cnt option:selected').val() + '개 ';
      ord_conts += $(this).find('.tomson-shape option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'tomson';
    obj['label'] = '도무송';
    obj['val'] = arr_tomson;
    obj['price'] = $('#fp-tomson').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 타공
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching_mm"] option:selected').val() + ' ' + $('select[name="punching_cnt"] option:selected').val() + '개';
    obj['price'] = $('#fp-punching').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching_mm"] option:selected').val() + " " + $('select[name="punching_cnt"] option:selected').val() + "개;";
  }

  //후가공 uv scodix
  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    obj = {};
    obj['name'] = 'uvscodix';
    obj['label'] = 'UV스코딕스';
    obj['val'] = 'UV스코딕스';
    obj['price'] = $('#fp-uvscodix').text().replace(/,/g, '');
    obj['width'] = $('input[name="uvscodix_width"]').val();
    obj['height'] = $('input[name="uvscodix_height"]').val();
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 디지털 부분UV:디지털 부분UV";
  }

  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      obj2['price'] = $(this).find('.foilscodix-price').text();

      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 라미넥스코팅
  if ($('input:checkbox[name="is_ramicoating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'ramicoating';
    obj['label'] = '라미넥스코팅';
    obj['val'] = $('input[name="ramicoating"]:checked').val();
    obj['price'] = $('#fp-ramicoating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 라미넥스코팅:" + $('input[name="ramicoating"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
  tot_obj['pan_selected'] = $('#pan-selected').val();
  tot_obj['pan_grids'] = $('#pan-grids').val();
}

//디지털 전단
function setOrderDLeaflet() {

  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();

  //분류비
  tot_obj['is_class'] = $('select[name="is_class"] option:selected').val();

  //박스포장
  tot_obj['box_package'] = $('select[name="box_package"] option:selected').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();

  if( $('select[name="cover_gram"] option:selected').val() == undefined || $('select[name="cover_gram"] option:selected').val() == '') {
    alert('용지정보가 제대로 입력되지 않았습니다.\n재주문 부탁 드립니다.');
    location.reload();
    return false;
  }


  try {
    if ($('#after-paper-name').val().length > 1 && $('#after-paper-gram').val().length) {
      tot_obj['paper_name'] = '(선방)' + $('#after-paper-name').val() + ' ' + $('#after-paper-gram').val() + 'g';
    }
  } catch (e) {
  }

  tot_obj['machine'] = $('input[name="machine"]:checked').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  if( $('#cover-color-opt').length > 0) {
    tot_obj['cover_color_opt'] = $('select[name="cover_color_opt"] option:selected').val();
  }

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['cutting_price'] = $('#fp-cutting').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '' && $('select[name="cover_add_color"] option:selected').val() != undefined) {
    ord_conts += "추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }

  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 오시+접지
  if ($('input:checkbox[name="is_osifold"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osifold';
    obj['label'] = '오시접지';

    let vals = '';

    $('#osifold-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osifold_line"]:checked').val() + ' : ' + vals;
    obj['price'] = $('#fp-osifold').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시접지:" + $('input:radio[name="osifold_line"]:checked').val() + '줄 : ' + vals + ";";
  }


  //후가공 접지
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'folding';
    obj['label'] = '접지';

    let vals = '';

    $('#folding-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    vals = vals.slice(0,(vals.length-1));

    obj['val'] = $('input:radio[name="fold_line"]:checked').val() + ' : ' + vals;
    obj['price'] = $('#fp-folding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 접지:" + $('input:radio[name="fold_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 도무송
  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    var arr_tomson = [];

    var no = 1;

    $('.tomson-row').each(function () {
      obj2 = {};
      obj2['width'] = $(this).find('.tomson-width').val();
      obj2['height'] = $(this).find('.tomson-height').val();
      obj2['count'] = $(this).find('.tomson-cnt option:selected').val();
      obj2['shape'] = $(this).find('.tomson-shape option:selected').val();
      obj2['price'] = $(this).find('.tomson-price').text();

      arr_tomson.push(obj2);

      ord_conts += "후가공 도무송" + no + ":";
      ord_conts += $(this).find('.tomson-width').val() + "x" + $(this).find('.tomson-height').val() + " ";
      ord_conts += $(this).find('.tomson-cnt option:selected').val() + '개 ';
      ord_conts += $(this).find('.tomson-shape option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'tomson';
    obj['label'] = '도무송';
    obj['val'] = arr_tomson;
    obj['price'] = $('#fp-tomson').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 타공
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching_mm"] option:selected').val() + ' ' + $('select[name="punching_cnt"] option:selected').val() + '개';
    obj['price'] = $('#fp-punching').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching_mm"] option:selected').val() + " " + $('select[name="punching_cnt"] option:selected').val() + "개;";
  }

  //후가공 uv scodix
  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    obj = {};
    obj['name'] = 'uvscodix';
    obj['label'] = 'UV스코딕스';
    obj['val'] = 'UV스코딕스';
    obj['price'] = $('#fp-uvscodix').text().replace(/,/g, '');
    obj['width'] = $('input[name="uvscodix_width"]').val();
    obj['height'] = $('input[name="uvscodix_height"]').val();
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 디지털 부분UV:디지털 부분UV";
  }

  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      obj2['price'] = $(this).find('.foilscodix-price').text();

      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });


    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 라미넥스코팅
  if ($('input:checkbox[name="is_ramicoating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'ramicoating';
    obj['label'] = '라미넥스코팅';
    obj['val'] = $('input[name="ramicoating"]:checked').val();
    obj['price'] = $('#fp-ramicoating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 라미넥스코팅:" + $('input[name="ramicoating"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
  tot_obj['pan_selected'] = $('#pan-selected').val();
  tot_obj['pan_grids'] = $('#pan-grids').val();
}

//옵셋 포스터
function setOrderOPoster() {
  const g = $('select[name="cover_gram"] option:selected').attr('data-gram');

  if (g >= 150 && $('input:checkbox[name="is_folding"]').prop('checked')) {
    if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    } else {
      alert('용지 150g 이상은 오시를 하지 않고 접을 경우 용지터짐이 발생하므로 오시를 선택해주세요.');
      return false;
    }
  }

  var arr_inner = [];
  var arr_foil = [];
  var obj = {};
  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  tot_obj['print_method'] = $('#print-method').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['ctp_price'] = $('#fp-ctp').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '' && $('select[name="cover_add_color"] option:selected').val() != undefined) {
    ord_conts += "추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }


  //후가공 접지
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'folding';
    obj['label'] = '접지';

    obj['val'] = $('input:radio[name="folding"]:checked').val();
    obj['price'] = $('#fp-folding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 접지:" + $('input:radio[name="folding"]:checked').val() + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 라미넥스코팅
  if ($('input:checkbox[name="is_ramicoating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'ramicoating';
    obj['label'] = '라미넥스코팅';
    obj['val'] = $('input[name="ramicoating"]:checked').val();
    obj['price'] = $('#fp-ramicoating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 라미넥스코팅:" + $('input[name="ramicoating"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//옵셋 전단
function setOrderOLeaflet() {

  const g = $('select[name="cover_gram"] option:selected').attr('data-gram');

  if (g >= 150 && $('input:checkbox[name="is_folding"]').prop('checked')) {
    if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    } else {
      alert('용지 150g 이상은 오시를 하지 않고 접을 경우 용지터짐이 발생하므로 오시를 선택해주세요.');
      return false;
    }
  }

  var arr_inner = [];
  var arr_foil = [];
  var obj = {};
  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";

  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();

  if (mcode == '59') {
    tot_obj['yn'] = $('#yn').val();
    let price = 0;
    let yn = Number($('select[name="yn"] option:selected').val());

    if ($('select[name="package"] option:selected').val() == '박스포장') {
      price = yn * 1000 * 2;
    }

    tot_obj['package'] = $('select[name="package"] option:selected').val();
    tot_obj['package_price'] = price;
  }

  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();

  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['machine'] = $('input[name="machine"]:checked').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  tot_obj['print_method'] = $('#print-method').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['ctp_price'] = $('#fp-ctp').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '' && $('select[name="cover_add_color"] option:selected').val() != undefined) {
    ord_conts += "추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }

  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }


  //후가공 접지
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'folding';
    obj['label'] = '접지';
    obj['val'] = $('input[name="folding"]:checked').val();
    obj['price'] = $('#fp-folding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 접지:" + $('input[name="folding"]:checked').val() + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 라미넥스코팅
  if ($('input:checkbox[name="is_ramicoating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'ramicoating';
    obj['label'] = '라미넥스코팅';
    obj['val'] = $('input[name="ramicoating"]:checked').val();
    obj['price'] = $('#fp-ramicoating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 라미넥스코팅:" + $('input[name="ramicoating"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//디지털 명함
function setOrderDNamecard() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();

  tot_obj['maesu'] = $('select[name="maesu"] option:selected').val();
  tot_obj['quantity'] = $('#quantity').val();

  //분류비
  tot_obj['is_class'] = $('select[name="is_class"] option:selected').val();
  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();

  if( $('select[name="cover_gram"] option:selected').val() == undefined || $('select[name="cover_gram"] option:selected').val() == '') {
    alert('용지정보가 제대로 입력되지 않았습니다.\n재주문 부탁 드립니다.');
    location.reload();
    return false;
  }


  try {
    if ($('#after-paper-name').val().length > 1 && $('#after-paper-gram').val().length) {
      tot_obj['paper_name'] = '(선방)' + $('#after-paper-name').val() + ' ' + $('#after-paper-gram').val() + 'g';
    }
  } catch (e) {
  }


  tot_obj['machine'] = $('input[name="machine"]:checked').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  if( $('#cover-color-opt').length > 0) {
    tot_obj['cover_color_opt'] = $('select[name="cover_color_opt"] option:selected').val();
  }

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['cutting_price'] = $('#fp-cutting').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "추가색상:" + $('input[name="cover_add_color"]:checked').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 귀도리
  if ($('input:checkbox[name="is_rounding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'rounding';
    obj['label'] = '귀도리';
    var str = '';

    $('.rounding-dir').each(function () {
      if ($(this).prop('checked')) {
        str += $(this).val() + ',';
      }
    });

    var str2 = str.slice(0, -1);

    if (str2 == '좌상,우상,좌하,우하') {
      str2 = "전체귀도리";
    }

    // 라운딩 mm
    str2 += ' ' + $('select[name="rounding_mm"] option:selected').val();

    obj['val'] = str2;
    obj['price'] = $('#fp-rounding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 귀도리:" + $('select[name="rounding_mm"] option:selected').val() + " " + str2 + ";";
  }


  //후가공 도무송
  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    var arr_tomson = [];

    var no = 1;

    $('.tomson-row').each(function () {
      obj2 = {};
      obj2['width'] = $(this).find('.tomson-width').val();
      obj2['height'] = $(this).find('.tomson-height').val();
      obj2['count'] = $(this).find('.tomson-cnt option:selected').val();
      obj2['shape'] = $(this).find('.tomson-shape option:selected').val();
      obj2['price'] = $(this).find('.tomson-price').text();

      arr_tomson.push(obj2);

      ord_conts += "후가공 도무송" + no + ":";
      ord_conts += $(this).find('.tomson-width').val() + "x" + $(this).find('.tomson-height').val() + " ";
      ord_conts += $(this).find('.tomson-cnt option:selected').val() + '개 ';
      ord_conts += $(this).find('.tomson-shape option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'tomson';
    obj['label'] = '도무송';
    obj['val'] = arr_tomson;
    obj['price'] = $('#fp-tomson').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 타공
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching_mm"] option:selected').val() + ' ' + $('select[name="punching_cnt"] option:selected').val() + '개';
    obj['price'] = $('#fp-punching').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching_mm"] option:selected').val() + " " + $('select[name="punching_cnt"] option:selected').val() + "개;";
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 넘버링
  if ($('input:checkbox[name="is_numbering"]').prop('checked')) {
    obj = {};
    obj['name'] = 'numbering';
    obj['label'] = '넘버링';
    obj['val'] = $('input:radio[name="numbering"]:checked').val();
    obj['start_number'] = $('input:text[name="start_number"]').val();
    obj['end_number'] = $('input:text[name="end_number"]').val();

    let obj2 = {};
    let arr_files2 = [];

    $('#numbering-upload-queue .uploadifive-queue-item').each(function () {
      let curr_time = currTime(new Date());

      if ($(this).hasClass('complete')) {
        obj2 = {};
        obj2['filename'] = $(this).find('.filename').text();
        obj2['fileinfo'] = $(this).find('.fileinfo').text();
        obj2['dates'] = curr_time;
        arr_files2.push(obj2);
      }
    });

    obj['file'] = JSON.stringify(arr_files2);
    obj['price'] = $('#fp-numbering').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 넘버링:넘버링";
  }

  //후가공 QR코드
  if ($('input:checkbox[name="is_qrcode"]').prop('checked')) {
    obj = {};
    obj['name'] = 'qrcode';
    obj['label'] = 'QR코드';
    obj['val'] = 'qrcode';

    let obj2 = {};
    let arr_files2 = [];

    $('#qrcode-upload-queue .uploadifive-queue-item').each(function () {
      let curr_time = currTime(new Date());

      if ($(this).hasClass('complete')) {
        obj2 = {};
        obj2['filename'] = $(this).find('.filename').text();
        obj2['fileinfo'] = $(this).find('.fileinfo').text();
        obj2['dates'] = curr_time;
        arr_files2.push(obj2);
      }
    });

    obj['file'] = JSON.stringify(arr_files2);
    obj['price'] = $('#fp-qrcode').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 QR코드:QR코드";
  }

  //후가공 바코드
  if ($('input:checkbox[name="is_barcode"]').prop('checked')) {
    obj = {};
    obj['name'] = 'barcode';
    obj['label'] = '바코드';
    obj['val'] = 'barcode';

    let obj2 = {};
    let arr_files2 = [];

    $('#barcode-upload-queue .uploadifive-queue-item').each(function () {
      let curr_time = currTime(new Date());

      if ($(this).hasClass('complete')) {
        obj2 = {};
        obj2['filename'] = $(this).find('.filename').text();
        obj2['fileinfo'] = $(this).find('.fileinfo').text();
        obj2['dates'] = curr_time;
        arr_files2.push(obj2);
      }
    });

    obj['file'] = JSON.stringify(arr_files2);

    obj['price'] = $('#fp-barcode').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 바코드:바코드";
  }

  //후가공 즉석명함
  if ($('input:checkbox[name="is_quick"]').prop('checked')) {
    obj = {};
    obj['name'] = 'quicknamecard';
    obj['label'] = '즉석명함';
    obj['val'] = 'quicknamecard';
    obj['price'] = $('#fp-quick-mynamecard').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 즉석명함:즉석명함";
  }


  //후가공 송진엠보
  if ($('input:checkbox[name="is_embo"]').prop('checked')) {
    obj = {};
    obj['name'] = 'embo';
    obj['label'] = '송진엠보';
    obj['val'] = $('input[name="embo"]:checked').val();
    obj['price'] = $('#fp-embo').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 송진엠보:" + $('input[name="embo"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
  tot_obj['pan_selected'] = $('#pan-selected').val();
  tot_obj['pan_grids'] = $('#pan-grids').val();
}

//옵셋 명함
function setOrderONamecard() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();

  if (mcode == '62' || mcode == '68') {
    tot_obj['coating'] = $('select[name="coating"] option:selected').val();
  }

  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();


  //tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g,'');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['partner'] = $('#partner').val();


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 귀도리
  if ($('input:checkbox[name="is_rounding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'rounding';
    obj['label'] = '귀도리';
    var str = '';

    $('.rounding-dir').each(function () {
      if ($(this).prop('checked')) {
        str += $(this).val() + ',';
      }
    });

    var str2 = str.slice(0, -1);

    if (str2 == '좌상,우상,좌하,우하') {
      str2 = "전체귀도리";
    }

    // 라운딩 mm
    str2 += ' ' + $('select[name="rounding_mm"] option:selected').val();

    obj['val'] = str2;
    obj['price'] = $('#fp-rounding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 귀도리:" + $('select[name="rounding_mm"] option:selected').val() + " " + str2 + ";";
  }

  //후가공 타공
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching_mm"] option:selected').val() + ' ' + $('select[name="punching_cnt"] option:selected').val() + '개';
    obj['price'] = $('#fp-punching').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching_mm"] option:selected').val() + " " + $('select[name="punching_cnt"] option:selected').val() + "개;";
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 송진엠보
  if ($('input:checkbox[name="is_embo"]').prop('checked')) {
    obj = {};
    obj['name'] = 'embo';
    obj['label'] = '송진엠보';
    obj['val'] = $('input[name="embo"]:checked').val();
    obj['price'] = $('#fp-embo').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 송진엠보:" + $('input[name="embo"]:checked').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//디지털 스티커
function setOrderDSticker() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu_option'] = $('#maesu-option').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['machine'] = 'indigo';

  tot_obj['sticker_shape'] = $('select[name="sticker_shape"] option:selected').val();
  tot_obj['perfcut'] = $('input:radio[name="perfcut"]:checked').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();


  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['perfcut_price'] = $('#fp-perfcut').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }


  tot_obj['afterprocs'] = arr_afterproc;
}

//옵셋 스티커
function setOrderOSticker() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['partner'] = $('#partner').val();

  tot_obj['sticker_shape'] = $('select[name="sticker_shape"] option:selected').val();

  if (mcode == '69') {
    tot_obj['margin'] = $('input:radio[name="margin"]:checked').val();
    tot_obj['level'] = '';
  } else if (mcode == '70') {
    tot_obj['margin'] = '';
    //tot_obj['level'] = $('select[name="level"] option:selected').val();
    tot_obj['level'] = $('#level').val();
  }

  //tot_obj['perfcut'] = $('input:radio[name="perfcut"]:checked').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();


  //tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g,'');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['perfcut_price'] = $('#fp-perfcut').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "추가색상:" + $('input[name="cover_add_color"]:checked').val() + ";";
  }

  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }


  tot_obj['afterprocs'] = arr_afterproc;
}

//디지털 엽서
function setOrderDPostcard() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();

  //분류비
  tot_obj['is_class'] = $('select[name="is_class"] option:selected').val();
  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();

  if( $('select[name="cover_gram"] option:selected').val() == undefined || $('select[name="cover_gram"] option:selected').val() == '') {
    alert('용지정보가 제대로 입력되지 않았습니다.\n재주문 부탁 드립니다.');
    location.reload();
    return false;
  }


  try {
    if ($('#after-paper-name').val().length > 1 && $('#after-paper-gram').val().length) {
      tot_obj['paper_name'] = '(선방)' + $('#after-paper-name').val() + ' ' + $('#after-paper-gram').val() + 'g';
    }
  } catch (e) {
  }

  tot_obj['machine'] = $('input[name="machine"]:checked').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  if( $('#cover-color-opt').length > 0) {
    tot_obj['cover_color_opt'] = $('select[name="cover_color_opt"] option:selected').val();
  }

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['cutting_price'] = $('#fp-cutting').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "추가색상:" + $('input[name="cover_add_color"]:checked').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 오시+접지
  if ($('input:checkbox[name="is_osifold"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osifold';
    obj['label'] = '오시접지';

    let vals = '';

    $('#osifold-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osifold_line"]:checked').val() + ' : ' + vals;
    obj['price'] = $('#fp-osifold').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시접지:" + $('input:radio[name="osifold_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 접지
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'folding';
    obj['label'] = '접지';
    obj['val'] = $('input[name="folding"]:checked').val();
    obj['price'] = $('#fp-folding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 접지:" + $('input[name="folding"]:checked').val() + ";";
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 귀도리
  if ($('input:checkbox[name="is_rounding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'rounding';
    obj['label'] = '귀도리';
    var str = '';

    $('.rounding-dir').each(function () {
      if ($(this).prop('checked')) {
        str += $(this).val() + ',';
      }
    });

    var str2 = str.slice(0, -1);

    if (str2 == '좌상,우상,좌하,우하') {
      str2 = "전체귀도리";
    }

    // 라운딩 mm
    str2 += ' ' + $('select[name="rounding_mm"] option:selected').val();

    obj['val'] = str2;
    obj['price'] = $('#fp-rounding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 귀도리:" + $('select[name="rounding_mm"] option:selected').val() + " " + str2 + ";";
  }

  //후가공 도무송
  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    var arr_tomson = [];

    var no = 1;

    $('.tomson-row').each(function () {
      obj2 = {};
      obj2['width'] = $(this).find('.tomson-width').val();
      obj2['height'] = $(this).find('.tomson-height').val();
      obj2['count'] = $(this).find('.tomson-cnt option:selected').val();
      obj2['shape'] = $(this).find('.tomson-shape option:selected').val();
      obj2['price'] = $(this).find('.tomson-price').text();
      arr_tomson.push(obj2);

      ord_conts += "후가공 도무송" + no + ":";
      ord_conts += $(this).find('.tomson-width').val() + "x" + $(this).find('.tomson-height').val() + " ";
      ord_conts += $(this).find('.tomson-cnt option:selected').val() + '개 ';
      ord_conts += $(this).find('.tomson-shape option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'tomson';
    obj['label'] = '도무송';
    obj['val'] = arr_tomson;
    obj['price'] = $('#fp-tomson').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 타공
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching_mm"] option:selected').val() + ' ' + $('select[name="punching_cnt"] option:selected').val() + '개';
    obj['price'] = $('#fp-punching').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching_mm"] option:selected').val() + " " + $('select[name="punching_cnt"] option:selected').val() + "개;";
  }

  //후가공 uv scodix
  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    obj = {};
    obj['name'] = 'uvscodix';
    obj['label'] = 'UV스코딕스';
    obj['val'] = 'UV스코딕스';
    obj['price'] = $('#fp-uvscodix').text().replace(/,/g, '');
    obj['width'] = $('input[name="uvscodix_width"]').val();
    obj['height'] = $('input[name="uvscodix_height"]').val();
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 디지털 부분UV:디지털 부분UV";
  }

  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      obj2['price'] = $(this).find('.foilscodix-price').text();
      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  tot_obj['afterprocs'] = arr_afterproc;
  tot_obj['pan_selected'] = $('#pan-selected').val();
  tot_obj['pan_grids'] = $('#pan-grids').val();
}

//옵셋 엽서
function setOrderOPostcard() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();

  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 귀도리
  if ($('input:checkbox[name="is_rounding"]').prop('checked')) {
    obj = {};
    obj['name'] = 'rounding';
    obj['label'] = '귀도리';
    var str = '';

    $('.rounding-dir').each(function () {
      if ($(this).prop('checked')) {
        str += $(this).val() + ',';
      }
    });

    var str2 = str.slice(0, -1);

    if (str2 == '좌상,우상,좌하,우하') {
      str2 = "전체귀도리";
    }

    // 라운딩 mm
    str2 += ' ' + $('select[name="rounding_mm"] option:selected').val();

    obj['val'] = str2;
    obj['price'] = $('#fp-rounding').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 귀도리:" + $('select[name="rounding_mm"] option:selected').val() + " " + str2 + ";";
  }

  //후가공 오시
  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    obj = {};
    obj['name'] = 'osi';
    obj['label'] = '오시';

    let vals = '';

    $('#osi-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-osi').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 오시:" + $('input:radio[name="osi_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });


    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 미싱
  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    obj = {};
    obj['name'] = 'mising';
    obj['label'] = '미싱';

    let vals = '';

    $('#mising-input .inputbox').each(function () {
      vals += $(this).val() + ',';
    });

    obj['val'] = $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals;
    obj['price'] = $('#fp-mising').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 미싱:" + $('input:radio[name="mising_line"]:checked').val() + '줄 : ' + vals + ";";
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 타공
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching_mm"] option:selected').val() + ' ' + $('select[name="punching_cnt"] option:selected').val() + '개';
    obj['price'] = $('#fp-punching').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching_mm"] option:selected').val() + " " + $('select[name="punching_cnt"] option:selected').val() + "개;";
  }


  tot_obj['afterprocs'] = arr_afterproc;
}

//옵셋 봉투
function setOrderOEnvelope() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  if (mcode == '76') {
    ord_conts += "형태:" + $('select[name="envelope_type"] option:selected').val() + ";";
  }
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['partner'] = $('select[name="maesu"] option:selected').attr('data-partner');
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();

  if (mcode == '76') {
    tot_obj['type'] = $('select[name="envelope_type"] option:selected').val();
  } else {
    tot_obj['type'] = '';
  }

  tot_obj['cover_cate'] = $('select[name="cover_cate"] option:selected').val();

  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 양면테이프
  if ($('input:checkbox[name="is_tape"]').prop('checked')) {
    obj = {};
    obj['name'] = 'tape';
    obj['label'] = '양면테이프';
    var str = '';

    obj['val'] = '7~10mm 테이프';
    obj['price'] = $('#fp-tape').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "양면테이프:7~10mm 양면테이프;";
  }


  tot_obj['afterprocs'] = arr_afterproc;
}

//디지털 패키지
function setOrderPackage() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();

  //분류비
  tot_obj['is_class'] = $('select[name="is_class"] option:selected').val();

  //박스포장
  tot_obj['box_package'] = $('select[name="box_package"] option:selected').val();

  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();

  if( $('select[name="cover_gram"] option:selected').val() == undefined || $('select[name="cover_gram"] option:selected').val() == '') {
    alert('용지정보가 제대로 입력되지 않았습니다.\n재주문 부탁 드립니다.');
    location.reload();
    return false;
  }

  try {
    if ($('#after-paper-name').val().length > 1 && $('#after-paper-gram').val().length) {
      tot_obj['paper_name'] = '(선방)' + $('#after-paper-name').val() + ' ' + $('#after-paper-gram').val() + 'g';
    }
  } catch (e) {
  }


  tot_obj['machine'] = $('input[name="machine"]:checked').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();
  if( $('#cover-color-opt').length > 0) {
    tot_obj['cover_color_opt'] = $('select[name="cover_color_opt"] option:selected').val();
  }

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['cutting_price'] = $('#fp-cutting').text().replace(/,/g, '');

  if ($('select[name="cover_add_color"] option:selected').val() != '' && $('select[name="cover_add_color"] option:selected').val() != undefined) {
    ord_conts += "추가색상:" + $('select[name="cover_add_color"] option:selected').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 도무송
  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    var arr_tomson = [];

    var no = 1;

    $('.tomson-row').each(function () {
      obj2 = {};
      obj2['width'] = $(this).find('.tomson-width').val();
      obj2['height'] = $(this).find('.tomson-height').val();
      obj2['count'] = $(this).find('.tomson-cnt option:selected').val();
      obj2['shape'] = $(this).find('.tomson-shape option:selected').val();
      obj2['price'] = $(this).find('.tomson-price').text();

      arr_tomson.push(obj2);

      ord_conts += "후가공 도무송" + no + ":";
      ord_conts += $(this).find('.tomson-width').val() + "x" + $(this).find('.tomson-height').val() + " ";
      ord_conts += $(this).find('.tomson-cnt option:selected').val() + '개 ';
      ord_conts += $(this).find('.tomson-shape option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'tomson';
    obj['label'] = '도무송';
    obj['val'] = arr_tomson;
    obj['price'] = $('#fp-tomson').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 형압
  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    obj = {};
    obj['name'] = 'press';
    obj['label'] = '형압';
    obj['val'] = $('input:radio[name="press"]:checked').val() + ' ' + $('input[name="press_width"]').val() + 'x' + $('input[name="press_height"]').val();
    obj['price'] = $('#fp-press').text().replace(/,/g, '');
    obj['pan_price'] = $('#toggle-afterproc-press .pan-price').text();
    obj['film_price'] = $('#toggle-afterproc-press .film-price').text();
    obj['partner'] = '';
    obj['state'] = '0';
    obj['work_no'] = $('.press-workno').text();

    arr_afterproc.push(obj);

    ord_conts += "후가공 형압:" + $('input:radio[name="press"]:checked').val() + " " + $('input[name="press_width"]').val() + "x" + $('input[name="press_height"]').val();
  }

  //후가공 동판박
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    var arr_foil = [];

    var no = 1;

    $('.foil-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foil-way option:selected').val();
      obj2['width'] = $(this).find('.foil-width').val();
      obj2['height'] = $(this).find('.foil-height').val();
      obj2['val'] = $(this).find('.foil option:selected').val();
      obj2['work_no'] = $(this).find('.foil-workno').text();
      obj2['price'] = $(this).find('.foil-price').text();
      obj2['pan_price'] = $(this).find('.pan-price').text();
      obj2['film_price'] = $(this).find('.film-price').text();

      arr_foil.push(obj2);

      ord_conts += "후가공 동판박" + no + ":";
      ord_conts += $(this).find('.foil-way option:selected').val() + " ";
      ord_conts += $(this).find('.foil-width').val() + "x" + $(this).find('.foil-height').val() + " ";
      ord_conts += $(this).find('.foil option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foil';
    obj['label'] = '동판박';
    obj['val'] = arr_foil;
    obj['price'] = $('#fp-foil').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 uv scodix
  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    obj = {};
    obj['name'] = 'uvscodix';
    obj['label'] = 'UV스코딕스';
    obj['val'] = 'UV스코딕스';
    obj['price'] = $('#fp-uvscodix').text().replace(/,/g, '');
    obj['width'] = $('input[name="uvscodix_width"]').val();
    obj['height'] = $('input[name="uvscodix_height"]').val();
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 디지털 부분UV:디지털 부분UV";
  }

  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      obj2['price'] = $(this).find('.foilscodix-price').text();
      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  tot_obj['afterprocs'] = arr_afterproc;
  tot_obj['pan_selected'] = $('#pan-selected').val();
  tot_obj['pan_grids'] = $('#pan-grids').val();
}

//포토배너
function setOrderPhotobanner() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";

  if( $('select[name="ilet_quantity"] option:selected').val() != undefined) {
    ord_conts += "금속링(아이렛):" + $('select[name="ilet_quantity"] option:selected').val() + ";";
  }

  if( $('select[name="rounding"] option:selected').val() != undefined && $('select[name="rounding"] option:selected').val() != '') {
    ord_conts += "둥근모서리:" + $('select[name="rounding"] option:selected').val() + ";";
  }

  if( $('#holder-quantity').val() != '0' && $('#holder-quantity').val() != undefined ) {
    ord_conts += "거치대:" + $('select[name="holder_inout"] option:selected').val() + " " + $('select[name="holder_banner"] option:selected').val() + " " + $('#holder-quantity').val() + "개;";
  }


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['front_back'] = $('select[name="front_or_back"] option:selected').val();
  tot_obj['print_length'] = $('#print-length').val();
  tot_obj['bracket'] = $('select[name="bracket"] option:selected').val();
  tot_obj['bracket_price'] = $('#fp-bracket').text().replace(/,/g, '');
  tot_obj['rounding'] = $('select[name="rounding"] option:selected').val();
  tot_obj['rounding_price'] = $('#fp-rounding').text().replace(/,/g, '');


  //투명배너 전면후면
  tot_obj['front_or_back'] = $('select[name="front_or_back"] option:selected').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ilet_quantity'] = $('select[name="ilet_quantity"] option:selected').val();


  tot_obj['color'] = $('select[name="ink"] option:selected').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['punching'] = '';
  tot_obj['holder_inout'] = $('select[name="holder_inout"] option:selected').val();
  tot_obj['holder_banner'] = $('select[name="holder_banner"] option:selected').val();
  //tot_obj['holder_quantity'] = $('select[name="holder_quantity"] option:selected').val();
  tot_obj['holder_quantity'] = $('#holder-quantity').val();

  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['holder_price'] = $('#fp-holder').text().replace(/,/g, '');

  if (mcode == '135' || mcode == '104' || mcode == '106') {
    tot_obj['coating'] = '';
  } else {
    tot_obj['coating'] = $('select[name="coating"] option:selected').val();
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '' && $('select[name="coating"] option:selected').val() != undefined) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//포토미니배너
function setOrderPhotoMbanner() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";
  ord_conts += "타공:" + $('select[name="punching"] option:selected').val() + ";";

  if( $('#holder-quantity').val() != '0' && $('#holder-quantity').val() != undefined ) {
    ord_conts += "거치대:" + $('select[name="holder_banner"] option:selected').val() + " " + $('#holder-quantity').val() + "개;";
  }

  if( $('select[name="rounding"] option:selected').val() != undefined && $('select[name="rounding"] option:selected').val() != '') {
    ord_conts += "둥근모서리:" + $('select[name="rounding"] option:selected').val() + ";";
  }


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ilet_quantity'] = $('select[name="ilet_quantity"] option:selected').val();


  tot_obj['color'] = $('select[name="ink"] option:selected').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['punching'] = $('select[name="punching"] option:selected').val();
  tot_obj['holder_inout'] = '';
  tot_obj['holder_banner'] = $('select[name="holder_banner"] option:selected').val();
  //tot_obj['holder_quantity'] = $('select[name="holder_quantity"] option:selected').val();
  tot_obj['holder_quantity'] = $('#holder-quantity').val();

  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['holder_price'] = $('#fp-holder').text().replace(/,/g, '');

  tot_obj['rounding'] = $('select[name="rounding"] option:selected').val();
  tot_obj['rounding_price'] = $('#fp-rounding').text().replace(/,/g, '');


  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '' && $('select[name="coating"] option:selected').val() != undefined) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }


  //후가공 타공
  if ($('select[name="punching"] option:selected').val() != '') {
    obj = {};
    obj['name'] = 'punching';
    obj['label'] = '타공';
    obj['val'] = $('select[name="punching"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 타공:" + $('select[name="punching"] option:selected').val() + ";";
  }


  tot_obj['afterprocs'] = arr_afterproc;
}

//현수막
function setOrderPhotoHbanner() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="paper_color"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();
  tot_obj['ilet_quantity'] = '없음';
  tot_obj['cubang'] = '없음';
  tot_obj['rope'] = '없음';
  tot_obj['hot_cutting'] = $('select[name="hot_cutting"] option:selected').val();
  tot_obj['timber'] = $('select[name="timber"] option:selected').val();
  tot_obj['paper'] = $('select[name="paper"] option:selected').val();
  tot_obj['paper_color'] = $('select[name="paper_color"] option:selected').val();

  tot_obj['rope_price'] = 0;
  tot_obj['cubang_price'] = 0;
  tot_obj['ilet_price'] = 0;
  tot_obj['timber_price'] = $('#fp-timber').text().replace(/,/g, '');
  tot_obj['tape_price'] = $('#fp-tape').text().replace(/,/g, '');

  if ($('select[name="ilet_quantity"] option:selected').val() != '0') {
    tot_obj['ilet_quantity'] = '금속링+삼각접착 ' + $('select[name="ilet_quantity"] option:selected').val() + '개';
    tot_obj['ilet_price'] = $('#fp-ilet').text().replace(/,/g, '');
  }

  if ($('select[name="cubang"] option:selected').val() != '0') {
    tot_obj['cubang'] = '일체형 40mm ' + $('select[name="cubang"] option:selected').val() + '개';
    tot_obj['cubang_price'] = $('#fp-cubang').text().replace(/,/g, '');
  }

  if ($('select[name="tape"] option:selected').val() != '0') {
    tot_obj['tape'] = '실리콘 점착폼 ' + $('select[name="tape"] option:selected').val() + '개';
    tot_obj['tape_price'] = $('#fp-tape').text().replace(/,/g, '');
  }

  if( $('select[name="rope_cnt"] option:selected').val() != '0') {
    tot_obj['rope'] = $('select[name="rope_dia"] option:selected').val() + ' ' + $('select[name="rope_length"] option:selected').val() + ' ' + $('select[name="rope_cnt"] option:selected').val() + '개';
    tot_obj['rope_price'] = $('#fp-rope').text().replace(/,/g, '');
  }

  if( $('select[name="combo_bong_mising"] option:selected').val() != '') {
    tot_obj['combo_bong_mising'] = $('select[name="bong_mising_position"] option:selected').val()+$('select[name="combo_bong_mising"] option:selected').val();
    tot_obj['bong_mising'] = $('#bong-mising').val();
    tot_obj['bongmising_price'] = $('#fp-bongmising').text().replace(/,/g, '');
  }


  tot_obj['color'] = $('select[name="ink_volume"] option:selected').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');
  tot_obj['holder_price'] = $('#fp-holder').text().replace(/,/g, '');


  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '' && $('select[name="coating"] option:selected').val() != undefined) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//실사출력
function setOrderPhotoprint() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['front_back'] = $('select[name="front_or_back"] option:selected').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();

  tot_obj['ilet_quantity'] = '없음';
  tot_obj['cubang'] = '없음';
  tot_obj['tape'] = '없음';

  if ($('select[name="ilet_quantity"] option:selected').val() != '0') {
    tot_obj['ilet_quantity'] = '금속링+삼각접착 ' + $('select[name="ilet_quantity"] option:selected').val() + '개';
  }

  if ($('select[name="cubang"] option:selected').val() != '0') {
    tot_obj['cubang'] = '일체형 40mm ' + $('select[name="cubang"] option:selected').val() + '개';
  }

  if ($('select[name="tape"] option:selected').val() != '0') {
    tot_obj['tape'] = $('select[name="tape"] option:selected').val() + '개';
  }


  tot_obj['color'] = $('select[name="ink"] option:selected').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');

  if ($('select[name="aux_sheet_width"] option:selected').val() == '1000') {
    tot_obj['aux_sheet_width'] = $('#aux-sheet-width').val();
    tot_obj['aux_sheet_height'] = $('#aux-sheet-height').val();
    tot_obj['aux_sheet_cnt'] = $('#aux-sheet-cnt').val();
    tot_obj['aux_sheet_price'] = $('#fp-aux-sheet').text().replace(/,/g, '');
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '') {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }

  //모양따기
  obj = {};
  obj['name'] = 'board_cutting';
  obj['label'] = '모양따기';
  obj['shape_kind'] = $('select[name="cutting_shape"] option:selected').val();
  obj['shape'] = $('select[name="shape_cutting"] option:selected').val();
  obj['shape_quantity'] = $('#shape-cutting-cnt').val();
  obj['price'] = $('#fp-shape').text().replace(/,/g, '');

  arr_afterproc.push(obj);

  ord_conts += "후가공 모양따기:모양따기;";


  tot_obj['afterprocs'] = arr_afterproc;
}


//실사스티커
function setOrderPhotosticker() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['front_back'] = $('select[name="front_or_back"] option:selected').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();

  tot_obj['ilet_quantity'] = '없음';
  tot_obj['cubang'] = '없음';
  tot_obj['tape'] = '없음';

  if ($('select[name="ilet_quantity"] option:selected').val() != '0') {
    tot_obj['ilet_quantity'] = '금속링+삼각접착 ' + $('select[name="ilet_quantity"] option:selected').val() + '개';
  }

  if ($('select[name="cubang"] option:selected').val() != '0') {
    tot_obj['cubang'] = '일체형 40mm ' + $('select[name="cubang"] option:selected').val() + '개';
  }

  if ($('select[name="tape"] option:selected').val() != '0') {
    tot_obj['tape'] = $('select[name="tape"] option:selected').val() + '개';
  }


  tot_obj['color'] = $('select[name="ink"] option:selected').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');

  if ($('select[name="aux_sheet_width"] option:selected').val() == '1000') {
    tot_obj['aux_sheet_width'] = $('#aux-sheet-width').val();
    tot_obj['aux_sheet_height'] = $('#aux-sheet-height').val();
    tot_obj['aux_sheet_cnt'] = $('#aux-sheet-cnt').val();
    tot_obj['aux_sheet_price'] = $('#fp-aux-sheet').text().replace(/,/g, '');
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '') {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }


  //모양따기
  obj = {};
  obj['name'] = 'board_cutting';
  obj['label'] = '모양따기';
  obj['shape_kind'] = $('select[name="cutting_shape"] option:selected').val();
  obj['shape'] = $('select[name="shape_cutting"] option:selected').val();
  obj['shape_quantity'] = $('#shape-cutting-cnt').val();
  obj['price'] = $('#fp-shape').text().replace(/,/g, '');

  arr_afterproc.push(obj);

  ord_conts += "후가공 모양따기:모양따기;";

  tot_obj['afterprocs'] = arr_afterproc;

}

//실사합지
function setOrderPhotoPaper() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  if (mcode == '146') {
    tot_obj['hapji'] = $('select[name="hapji"] option:selected').val();
  }

  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();


  tot_obj['color'] = $('select[name="ink"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');

  tot_obj['board'] = $('select[name="board"] option:selected').val();

  tot_obj['board_price'] = $('#fp-board').text().replace(/,/g, '');


  tot_obj['holder'] = $('select[name="holder"] option:selected').val();
  tot_obj['holder_banner'] = $('select[name="holder"] option:selected').val();
  tot_obj['holder_quantity'] = $('#holder-quantity').val();
  tot_obj['holder_price'] = $('#fp-holder').text().replace(/,/g, '');

  if ($('#tape').length > 0) {
    if (Number($('#tape').val()) > 0) {
      tot_obj['tape'] = $('#tape').val();
    }
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }




  let arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '') {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }


  //모양따기
  obj = {};
  obj['name'] = 'board_cutting';
  obj['label'] = '모양따기';
  obj['shape_kind'] = $('select[name="cutting_shape"] option:selected').val();
  obj['shape'] = $('select[name="shape_cutting"] option:selected').val();
  obj['shape_quantity'] = $('#shape-cutting-cnt').val();
  obj['price'] = $('#fp-shape-cutting').text().replace(/,/g, '');

  arr_afterproc.push(obj);

  ord_conts += "후가공 코팅:보드재단;";

  tot_obj['afterprocs'] = arr_afterproc;
}

//실사시트커팅
function setOrderPhotoSheet() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  //ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();


  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();


  tot_obj['aux_sheet_width'] = $('#aux-sheet-width').val();
  tot_obj['aux_sheet_height'] = $('#aux-sheet-height').val();
  tot_obj['aux_sheet_cnt'] = $('#aux-sheet-cnt').val();
  tot_obj['aux_sheet_price'] = $('#fp-aux-sheet').text().replace(/,/g, '');

  tot_obj['color'] = $('select[name="ink"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  let arr_afterproc = [];


  //모양따기
  obj = {};
  obj['name'] = 'board_cutting';
  obj['label'] = '모양따기';
  obj['shape_kind'] = $('select[name="cutting_shape"] option:selected').val();
  obj['shape'] = $('select[name="shape_cutting"] option:selected').val();
  obj['shape_quantity'] = $('#shape-cutting-cnt').val();
  obj['price'] = $('#fp-shape-cutting').text().replace(/,/g, '');

  arr_afterproc.push(obj);

  ord_conts += "후가공 코팅:모양재단;";

  tot_obj['afterprocs'] = arr_afterproc;
}

//실사페브릭
function setOrderPhotofabric() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="paper"] option:selected').val() + ";";
  ord_conts += "색상:" + $('select[name="ink"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '실사';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();
  tot_obj['print_length'] = $('#print-length').val();


  tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();

  tot_obj['ink'] = $('select[name="ink"] option:selected').val();
  tot_obj['ink_volume'] = $('select[name="ink_volume"] option:selected').val();

  tot_obj['ilet_quantity'] = '없음';
  tot_obj['cubang'] = '없음';
  tot_obj['rope'] = '없음';

  if ($('select[name="ilet_quantity"] option:selected').val() != '0') {
    tot_obj['ilet_quantity'] = '금속링+삼각접착 ' + $('select[name="ilet_quantity"] option:selected').val() + '개';
  }

  if ($('select[name="cubang"] option:selected').val() != '0') {
    tot_obj['cubang'] = '일체형 40mm ' + $('select[name="cubang"] option:selected').val() + '개';
  }

  if ($('select[name="rope_cnt"] option:selected').val() != '0') {
    tot_obj['rope'] = $('select[name="rope_dia"] option:selected').val() + ' ' + $('select[name="rope_length"] option:selected').val() + ' ' + $('select[name="rope_cnt"] option:selected').val() + '개';
  }


  tot_obj['color'] = $('select[name="ink"] option:selected').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }


  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 코팅
  if ($('select[name="coating"] option:selected').val() != '' && $('select[name="coating"] option:selected').val() != undefined) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('select[name="coating"] option:selected').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('select[name="coating"] option:selected').val() + ";";
  }


  tot_obj['afterprocs'] = arr_afterproc;
}

//실사액자
function setOrderPhotoframe() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#maesu').val() + "매/" + $('#quantity').val() + "건;";
  //ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  //ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = '액자';
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();


  //tot_obj['paper_name'] = $('select[name="paper"] option:selected').val();
  tot_obj['frame'] = $('select[name="frame"] option:selected').val();

  tot_obj['pedestal'] = '없음';
  tot_obj['silicon'] = '없음';
  tot_obj['acryl_hanger'] = '없음';
  tot_obj['metal_hanger'] = '없음';

  if ($('select[name="pedestal"] option:selected').val() != '0') {
    tot_obj['pedestal'] = $('select[name="pedestal"] option:selected').val() + '개';
  }

  if ($('select[name="silicon"] option:selected').val() != '0') {
    tot_obj['silicon'] = $('select[name="silicon"] option:selected').val() + '개';
  }

  if ($('select[name="acryl_hanger"] option:selected').val() != '0') {
    tot_obj['acryl_hanger'] = $('select[name="acryl_hanger"] option:selected').val() + '개';
  }

  if ($('select[name="metal_hanger"] option:selected').val() != '0') {
    tot_obj['metal_hanger'] = $('select[name="metal_hanger"] option:selected').val() + '개';
  }


  //tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  tot_obj['frame_price'] = $('#fp-frame').text().replace(/,/g, '');
  tot_obj['pedestal_price'] = $('#fp-pedestal').text().replace(/,/g, '');

}

//디지털 달력
function setOrderCalendar() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + $('#pages').val() + "페이지/" + $('#maesu').val() + "부/" + $('#quantity').val() + "건;";
  ord_conts += "건수:" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  if (mcode == '55') {
    tot_obj['page'] = $('select[name="pages"] option:selected').val();
  }
  else {
    tot_obj['page'] = $('#final-page').val();
  }

  tot_obj['machine'] = $('input:radio[name="machine"]:checked').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();


  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  //tot_obj['add_color'] = $('select[name="cover_add_color"] option:selected').val();

  if (mcode == '55') {
    tot_obj['calendar_stand'] = '';
  } else {
    tot_obj['calendar_stand'] = $('select[name="calendar_stand"] option:selected').val();
  }

  tot_obj['binding'] = $('select[name="binding"] option:selected').val();

  tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  if ($('select[name="cover_add_color"] option:selected').val() != '') {
    ord_conts += "추가색상:" + $('input[name="cover_add_color"]:checked').val() + ";";
  }

  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }



  var str_afterproc = '';
  var arr_afterproc = [];


  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }

  //후가공 도무송
  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    var arr_tomson = [];

    var no = 1;

    $('.tomson-row').each(function () {
      obj2 = {};
      obj2['width'] = $(this).find('.tomson-width').val();
      obj2['height'] = $(this).find('.tomson-height').val();
      obj2['count'] = $(this).find('.tomson-cnt option:selected').val();
      obj2['shape'] = $(this).find('.tomson-shape option:selected').val();
      arr_tomson.push(obj2);

      ord_conts += "후가공 도무송" + no + ":";
      ord_conts += $(this).find('.tomson-width').val() + "x" + $(this).find('.tomson-height').val() + " ";
      ord_conts += $(this).find('.tomson-cnt option:selected').val() + '개 ';
      ord_conts += $(this).find('.tomson-shape option:selected').val() + ";";

      no++;
    });

    obj = {};
    obj['name'] = 'tomson';
    obj['label'] = '도무송';
    obj['val'] = arr_tomson;
    obj['price'] = $('#fp-tomson').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  //후가공 uv scodix
  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    obj = {};
    obj['name'] = 'uvscodix';
    obj['label'] = 'UV스코딕스';
    obj['val'] = 'UV스코딕스';
    obj['price'] = $('#fp-uvscodix').text().replace(/,/g, '');
    obj['width'] = $('input[name="uvscodix_width"]').val();
    obj['height'] = $('input[name="uvscodix_height"]').val();
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
    ord_conts += "후가공 디지털 부분UV:디지털 부분UV";
  }

  //후가공 foil scodix
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    var arr_digitalfoil = [];

    var no = 1;

    $('.foilscodix-row').each(function () {
      obj2 = {};
      obj2['direction'] = $(this).find('.foilscodix-way option:selected').val();
      obj2['width'] = $(this).find('.foilscodix-ww').val();
      obj2['height'] = $(this).find('.foilscodix-hh').val();
      obj2['val'] = $(this).find('.foilscodix option:selected').val();
      arr_digitalfoil.push(obj2);

      ord_conts += "후가공 디지털박" + no + ":";
      ord_conts += $(this).find('.foilscodix-way option:selected').val() + " ";
      ord_conts += $(this).find('.foilscodix-ww').val() + "x" + $(this).find('.foilscodix-hh').val() + " ";
      ord_conts += $(this).find('.foilscodix option:selected').val() + ";";

      no++;
    });


    obj = {};
    obj['name'] = 'foilscodix';
    obj['label'] = '박스코딕스';
    obj['val'] = arr_digitalfoil;
    obj['price'] = $('#fp-foilscodix').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);
  }

  tot_obj['afterprocs'] = arr_afterproc;
}

//디지털봉투
function setOrderDenvelope() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + _maesu + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = _maesu;
  tot_obj['quantity'] = $('#quantity').val();

  //박스포장
  tot_obj['box_package'] = $('select[name="box_package"] option:selected').val();
  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['envelope_type'] = $('select[name="envelope_type"] option:selected').val();


  tot_obj['machine'] = $('input[name="machine"]:checked').val();

  tot_obj['color'] = $('input[name="cover_color"]:checked').val();

  //tot_obj['paper_price'] = $('#fp-paper').text().replace(/,/g, '');
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }



  var str_afterproc = '';
  var arr_afterproc = [];


  tot_obj['afterprocs'] = arr_afterproc;
}

//썬캡
function setOrderSuncap() {
  var arr_inner = [];
  var arr_foil = [];
  var obj = {};

  ord_conts += "상품:" + $('#goods-name').val() + ";";
  ord_conts += "규격:" + $('#cutsize-w').val() + "x" + $('#cutsize-h').val() + ";";
  ord_conts += "수량:" + _maesu + "매/" + $('#quantity').val() + "건;";
  ord_conts += "용지:" + $('select[name="cover_gram"] option:selected').val() + ";";
  ord_conts += "색상:" + $('input[name="cover_color"]:checked').val() + ";";
  ord_conts += "제품유형:" + $('select[name="kind"] option:selected').val() + ";";


  tot_obj['subject'] = $('#subject').val();
  tot_obj['goods_cate'] = $('#goods-cate').val();
  tot_obj['paper_size'] = $('#paper-size').val();
  tot_obj['cutsize_w'] = $('#cutsize-w').val();
  tot_obj['cutsize_h'] = $('#cutsize-h').val();
  tot_obj['jobsize_w'] = $('#jobsize-w').val();
  tot_obj['jobsize_h'] = $('#jobsize-h').val();
  tot_obj['maesu'] = $('#maesu').val();
  tot_obj['quantity'] = $('#quantity').val();

  //박스포장
  tot_obj['box_package'] = $('select[name="box_package"] option:selected').val();
  tot_obj['paper_name'] = $('select[name="cover_gram"] option:selected').val();
  tot_obj['kind'] = $('select[name="kind"] option:selected').val();
  tot_obj['machine'] = $('input[name="machine"]:checked').val();
  tot_obj['color'] = $('input[name="cover_color"]:checked').val();
  tot_obj['print_price'] = $('#fp-print').text().replace(/,/g, '');


  tot_obj['is_today'] = 'N';
  tot_obj['is_tomorrow'] = 'N';
  tot_obj['is_emerprice'] = 'N';

  //오늘출고
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    tot_obj['is_today'] = 'Y';
    tot_obj['todayprice'] = $('#fp-todayprice').text().replace(/,/g, '');
    ord_conts += "오늘출고:Y;";
  }

  //내일출고
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    tot_obj['is_tomorrow'] = 'Y';
    tot_obj['tomorrowprice'] = $('#fp-tomorrowprice').text().replace(/,/g, '');
    ord_conts += "내일출고:Y;";
  }

  //긴급요청
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    tot_obj['is_emerprice'] = 'Y';
    tot_obj['emerprice'] = $('#fp-emerprice').text().replace(/,/g, '');
    ord_conts += "긴급요청:Y;";
  }



  var str_afterproc = '';
  var arr_afterproc = [];

  //후가공 재단
  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    obj = {};
    obj['name'] = 'cutting';
    obj['label'] = '재단';
    obj['val'] = $('input[name="cutting"]:checked').val();
    obj['price'] = $('#fp-cutting').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 재단:" + $('input[name="cutting"]:checked').val() + ";";
  }

  //후가공 코팅
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    obj = {};
    obj['name'] = 'coating';
    obj['label'] = '코팅';
    obj['val'] = $('input[name="coating"]:checked').val();
    obj['price'] = $('#fp-coating').text().replace(/,/g, '');
    obj['partner'] = '';
    obj['state'] = '0';

    arr_afterproc.push(obj);

    ord_conts += "후가공 코팅:" + $('input[name="coating"]:checked').val() + ";";
  }


  //도무송 디폴트추가
  var arr_tomson = [];

  obj2 = {};
  obj2['width'] = $('#cutsize-w').val();
  obj2['height'] = $('#cutsize-h').val();
  obj2['count'] = '1';
  obj2['shape'] = '복잡한모양';
  obj2['price'] = $('#tomson-price').val();

  arr_tomson.push(obj2);

  ord_conts += "후가공 도무송:";
  ord_conts += $('#cutsize-w').val() + "x" + $('#cutsize-h').val()
  ord_conts += "1개 ";
  ord_conts += "복잡한모양;";

  obj = {};
  obj['name'] = 'tomson';
  obj['label'] = '도무송';
  obj['val'] = arr_tomson;
  obj['price'] = $('#tomson-price').val();
  obj['partner'] = '';
  obj['state'] = '0';

  arr_afterproc.push(obj);


  tot_obj['afterprocs'] = arr_afterproc;

}

function setOrderData() {
  if (goods_code == 'dbook') {
    setOrderDBook();
  } else if (goods_code == 'dposter') {
    setOrderDPoster();
  } else if (goods_code == 'dleaflet') {
    setOrderDLeaflet();
  } else if (goods_code == 'dmynamecard') {
    setOrderDNamecard();
  } else if (goods_code == 'dsticker') {
    setOrderDSticker();
  } else if (goods_code == 'dpostcard') {
    setOrderDPostcard();
  } else if (goods_code == 'dpackage') {
    setOrderPackage();
  } else if (goods_code == 'dcalendar') {
    setOrderCalendar();
  } else if (goods_code == 'obook') {
    setOrderOBook();
  } else if (goods_code == 'oposter') {
    setOrderOPoster();
  } else if (goods_code == 'oleaflet') {
    setOrderOLeaflet();
  } else if (goods_code == 'omynamecard') {
    setOrderONamecard();
  } else if (goods_code == 'osticker') {
    setOrderOSticker();
  } else if (goods_code == 'opostcard') {
    setOrderOPostcard();
  } else if (goods_code == 'oenvelope') {
    setOrderOEnvelope();
  } else if (goods_code == 'photobanner') {
    setOrderPhotobanner();
  } else if (goods_code == 'photombanner') {
    setOrderPhotoMbanner();
  } else if (goods_code == 'photohbanner') {
    setOrderPhotoHbanner();
  } else if (goods_code == 'photoprint') {
    setOrderPhotoprint();
  } else if (goods_code == 'photosticker') {
    setOrderPhotosticker();
  } else if (goods_code == 'photofabric') {
    setOrderPhotofabric();
  } else if (goods_code == 'photoframe') {
    setOrderPhotoframe();
  } else if (goods_code == 'photopaper') {
    setOrderPhotoPaper();
  } else if (goods_code == 'photosheet') {
    setOrderPhotoSheet();
  } else if( goods_code == 'denvelope') {
    setOrderDenvelope();
  } else if( goods_code == 'suncap') {
    setOrderSuncap();
  } else if( goods_code == 'dsuncap') {
    setOrderSuncap();
  } else if( goods_code == 'osuncap') {
    setOrderSuncap();
  }

  if( isNumCheck(tot_obj) > 0) {
    alert('정보가 제대로 입력되지 않았습니다.\n재주문 부탁 드립니다.');
    location.reload();
    return false;
  }
  else {
    let allforms = $('#applyform').serializeObject();
    $('#allforms').val(JSON.stringify(allforms));
    let ord_data = JSON.stringify(tot_obj);
    $('#ord-data').val(ord_data);
    $('#ord-conts').val(ord_conts);
    $('#ord-price').val($('#fp-supply').text().replace(/,/g, ''));
    $('#ord-vat').val($('#fp-vat').text().replace(/,/g, ''));
    $('#ord-total-price').val($('#fp-total').text().replace(/,/g, ''));

    return true;
  }


}


function orderCart(param) {
  var subject = $('#subject').val();
  /*
  var paper_size = $('#paper-size').val();
  var quantity = $('#quantity').val();
  var cutsize = $('#cutsize-w').val() + 'x' + $('#cutsize-h').val();
  var jobsize = $('#jobsize-w').val() + 'x' + $('#jobsize-h').val();

   */
  var goods_id = $('#goods-id').val();
  var goods_code = $('#goods-code').val();
  var goods_name = $('#goods-name').val();

  var ord_conts = $('#ord-conts').val();
  var ord_data = $('#ord-data').val();
  var total_price = $('#ord-total-price').val();
  var price = $('#ord-price').val();
  var vat = $('#ord-vat').val();
  var files = $('#files').val();
  var custom_memo = $('#custom-memo').val();
  var volume = $('#volume').val();
  var spec = $('#spec').val();
  var allforms = $('#allforms').val();

  $.ajax({
    headers: {
      'X-CSRF-TOKEN': $('input[name="_token"]').val()
    },
    type: 'POST',
    url: '/payment/insertcart',
    dataType: 'JSON',
    data: {
      'param': param,
      'subject': subject,
      'total_price': total_price,
      'price': price,
      'vat': vat,
      'goods_id': goods_id,
      'goods_code': goods_code,
      'goods_name': goods_name,
      'ord_conts': ord_conts,
      'ord_data': ord_data,
      'files': files,
      'custom_memo': custom_memo,
      'volume': volume,
      'spec': spec,
      'allforms': allforms,
      'is_mobile': 'N',
    },
    async: false,
    error: function (xhr, ajaxOptions, thrownError) {
      alert(ajaxOptions + "," + thrownError);
    },
    success: function (data, textStatus) {
      if (data['result'] == 'SUCCESS') {
        if (param == 'cart') {
          location.href = '/cart/home';
        } else if (param == 'submit') {
          $('#cart-ids').val(data['id']);
          document.applyform.submit();
        }
      } else {
        console.log(data);
        //alert('ppp=>' + data);
      }
    }
  });

}

function onResize() {
  let innerHeight = $(window).innerHeight();
  let tt = Number(innerHeight) - 430;
  $('#estimate-box').css({'height': tt + 'px', 'overflow-y': 'auto'})
}

$(function () {
  if (is_guest == '1' && _debug == 'N') {
    $('.have-foil-disp').show();
  }

  $('[data-toggle="tooltip"]').tooltip();

  $(document).on('click', '#subject', function (e) {
    if (is_guest == '0') {
      let ok = confirm('로그인 후 장바구니담기 및 주문하기가 가능합니다.\n로그인 하시겠습니까');
      if (ok) {
        location.href = '/auth/login';
      }
    }
  });

  var arrobj = _.find(arr_product, function (o) {
    return (o.idx == mcode);
  });

  $(document).prop('title', arrobj['title']);
  $('#goods-name').val(arrobj['cate'] + ' ' + arrobj['title']);
  $('.top-banner .big-title').text(arrobj['cate'] + ' ' + arrobj['title']);
  $('.top-banner .small-desc').text(arrobj['copy']);

  $('#product-name').text(arrobj['title'] + ' 견적');

  $(document).on('click', '#btn-submit', function (e) {
    e.preventDefault();

    if( goods_code == 'dbook') {
      if ($('input[name="cover_color"]:checked').val().indexOf('토너') > -1) {
        if( $('#is-uvscodix').prop('checked') || $('#is-foilscodix').prop('checked')) {
          if( $('#is-coating').prop('checked') == false) {
            alert('코팅이 필수인 조건 입니다.\n표지코팅을 선택해 주세요.');
            return;
          }
        }
      }
    }

    if (file_progress == 'Y') {
      alert('파일업로드 중입니다..');
      return;
    }

    if (is_guest == '0') {
      alert('로그인이 필요한 서비스 입니다');
      location.href = '/auth/login';
      return false;
    }

    if ($('#subject').val().length < 2) {
      alert('제목을 입력해 주세요.');
      $('#subject').focus();
      return false;
    }

    if ($('#custom-memo').val().length > 50) {
      alert('사용자메모는 50자까지 입력하실 수 있습니다.');
      return false;
    }

    //첨부파일
    let obj = {};
    let arr_files = [];
    let ok = true;
    let obj_file = {};


    if (mcode == '23' || mcode == '24' || mcode == '25' || mcode == '26' || mcode == '27' || mcode == '28' || mcode == '29' || mcode == '56' || mcode == '57') {
      if ($('#is-coating').prop('checked') == false) {
        ok = confirm('코팅을 하지 않을 경우 책자 가공 중 긁힘 현상 및 뒷묻음이 발생될 수 있으니 코팅을 선택해주세요.\n' + '코팅없이 주문하시겠습니까?');
        if (!ok) return false;
      }
    }

    if (mcode == '83' || mcode == '138') {
      if ($('#combo-bong-mising').val() != "" && $('#bong-mising-position').val() == "") {
        alert('봉미싱 방향을 선택해주시기 바랍니다.');
        $('#bong-mising-position').focus();
        return false;
      }
    }


    $('#order-uploader-queue .uploadifive-queue-item').each(function () {
      let curr_time = currTime(new Date());

      if ($(this).hasClass('complete')) {
        obj = {};
        obj['filename'] = $(this).find('.filename').text().replace(/ /g, '');
        obj['fileinfo'] = $(this).find('.fileinfo').text();
        obj['dates'] = curr_time;
        arr_files.push(obj);
        obj_file = obj;
      }
    });

    // 실사 - 조건 만족 시 템플릿 다운 팝업 -------- // TODO: 템플릿팝업으로 수정 시 주석해제 + orderquick부분 commit
    if ($.cookie('templatepop') == "dontlookyes") {
    } else {
      let timber = $('#timber').val();
      let btntype = $('#wouldyoulike-temdown-pop').data('btntype');
      if (goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype == '' ||
      goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype != 'btn-submit') {
        $('#wouldyoulike-temdown-pop').data('btntype', 'btn-submit');
        temdownpop('wouldyoulike');
        return;
      } else if ($('#wouldyoulike-temdown-pop').css('display') !== 'none' && btntype == 'btn-submit') {
        tempopclose()
        return;
      }
    }
    // --------


    if (arr_files.length == 0) {
      ok = confirm('첨부파일 없이 주문하시겠습니까?');
    }

    if (!ok) return;

    $('#files').val(JSON.stringify(arr_files));

    if (!setOrderData()) return;

    orderCart('submit');

  });

  $('#btn-template').hover(function() {
    $('.template-bubble-text').toggle();
  });

  $(document).on('click', '.btn-estimate', function (e) {
    if (!setOrderData()) return;

    window.open('', 'estimatepopup', 'width=820,height=760, scrollbars=no, resizable=yes');
    document.applyform.target = 'estimatepopup';
    document.applyform.action = '/order/form/estimate';
    document.applyform.submit();
  });

  $("input:text[numberOnly]").on("keyup", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ""));
  });

  // TODO: 템플릿팝업으로 수정 시 주석해제 + orderquick부분 commit
  $(document).on('click', '#btn-gofile', function (e) {
    let timber = $('#timber').val();
    let btntype = $('#wouldyoulike-temdown-pop').data('btntype');

    // 실사 - 조건 만족 시 템플릿 다운 팝업
    if ($.cookie('templatepop') == "dontlookyes") {
      $('#uploadifive-file-upload input[type="file"]').last().trigger('click');
    } else {
      if (goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype == '' ||
      goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype != 'btn-gofile') {
        $('#wouldyoulike-temdown-pop').data('btntype', 'btn-gofile');
        temdownpop('wouldyoulike');
        return;
      } else {
        $('#uploadifive-file-upload input[type="file"]').last().trigger('click');
      }
    }
  });

  // 템플릿팝업으로 수정 시 주석해제 + orderquick부분 commit // TODO: 템플릿팝업으로 수정 시 주석해제 + orderquick부분 commit
  $(document).on('click', '#btn-webhard', function (e) {
    let timber = $('#timber').val();
    let btntype = $('#wouldyoulike-temdown-pop').data('btntype');

    // 실사 - 조건 만족 시 템플릿 다운 팝업
    if ($.cookie('templatepop') == "dontlookyes") {
      window.open("https://only.webhard.co.kr/login");
    } else {
      if (goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype == '' ||
      goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype != 'btn-webhard') {
        $('#wouldyoulike-temdown-pop').data('btntype', 'btn-webhard');
        temdownpop('wouldyoulike');
        return;
      } else {
        window.open("https://only.webhard.co.kr/login");
        // $('#wouldyoulike-temdown-pop').hide();
      }
    }
  });

  $(document).on('click', '#btn-cart', function (e) {

    if( $('#is-today').prop('checked') || $('#is-tomorrow').prop('checked')) {
      alert('오늘출고및 내일 출고는 장바구니 담기가 불가합니다.\n바로 주문하기해주세요.');
      return;
    }

    if (file_progress == 'Y') {
      alert('파일업로드 중입니다..');
      return;
    }

    if (is_guest == '0') {
      alert('로그인이 필요한 서비스 입니다');
      location.href = '/auth/login';
      return false;
    }

    if ($('#subject').val().length < 2) {
      alert('제목을 입력해 주세요.');
      $('#subject').focus();
      return false;
    }

    //첨부파일
    let obj = {};
    let arr_files = [];
    let ok = true;

    if (mcode == '23' || mcode == '24' || mcode == '25' || mcode == '26' || mcode == '27' || mcode == '28' || mcode == '29' || mcode == '56' || mcode == '57') {
      if ($('#is-coating').prop('checked') == false) {
        ok = confirm('코팅을 하지 않을 경우 책자 가공 중 긁힘 현상 및 뒷묻음이 발생될 수 있으니 코팅을 선택해주세요.\n' + '코팅없이 주문하시겠습니까?');
        if (!ok) return false;
      }
    }

    $('#order-uploader-queue .uploadifive-queue-item').each(function () {
      let curr_time = currTime(new Date());

      obj = {};
      obj['filename'] = $(this).find('.filename').text().replace(/ /g, '');
      obj['fileinfo'] = $(this).find('.fileinfo').text();
      obj['dates'] = curr_time;
      arr_files.push(obj);
    });

    // 실사 - 조건 만족 시 템플릿 다운 팝업 -------- // TODO: 템플릿팝업으로 수정 시 주석해제 + orderquick부분 commit
    if ($.cookie('templatepop') == "dontlookyes") {
    } else {
      let timber = $('#timber').val();
      let btntype = $('#wouldyoulike-temdown-pop').data('btntype');
      if (goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype == '' ||
      goods_code == 'photohbanner' && timber != '' && timber != '없음' && btntype != 'btn-cart') {
        $('#wouldyoulike-temdown-pop').data('btntype', 'btn-cart');
        temdownpop('wouldyoulike');
        return;
      }
    }
    // --------

    if (arr_files.length == 0) {
      ok = confirm('첨부파일 없이 주문하시겠습니까?');
    }

    if (!ok) return;

    $('#files').val(JSON.stringify(arr_files));

    if (!setOrderData()) return;
    orderCart('cart');
  });

  // TODO: 템플릿팝업으로 수정 시 주석해제 + orderquick부분 commit
  $(document).on('click', '#dontlookagain', function (e) {

    if ( $("#dontlookagain").is(":checked") ) {
      $.cookie('templatepop', 'dontlookyes', { expires: 365, path: '/' });
    } else {
      $.cookie('templatepop', 'dontlookno', { expires: 365, path: '/' });
    }

    // console.log($.cookie('templatepop'));
  });

  //일반 주문파일 업로드
  $('#file-upload').uploadifive({
    'auto': true,
    'fileTypeExts': '*.gif; *.jpg; *.zip; *.pdf; *.png; *.txt; *.xls; *.xlsx; *.ai;',
    'fileSizeLimit': '409600',//400M
    'buttonText': '',
    'formData': {
      'mode': 'order',
    },
    'multi': false,
    'queueID': 'order-uploader-queue',
    'uploadScript': '/upload/store',
    'onError': function (errorType) {
      $('#file-upload').uploadifive('clearQueue');
      alert(errorType);
    },
    'onSelect': function (evt, id, obj) {
    },
    'onProgress': function (evt, id, obj, data) {
      file_progress = 'Y';
    },
    'onQueueComplete': function (uploads) {
      //$('#queue .complete').hide();
      file_progress = 'N';
    },
    'onUploadComplete': function (file, data) {
      //alert(data);
      //$('#queue .complete').hide();
      file_progress = 'N';
      // $('#wouldyoulike-temdown-pop').hide();
    },
    'onComplete': function (p) {
      file_progress = 'N';
    }
  });


  //넘버링 파일업로드
  $('#numbering-upload').uploadifive({
    'auto': true,
    'fileTypeExts': '*.gif; *.jpg; *.zip; *.pdf; *.png; *.txt; *.xls; *.xlsx; *.ai;',
    'fileSizeLimit': '409600',//400M
    'buttonText': '',
    'formData': {
      'mode': 'order',
    },
    'multi': false,
    'queueID': 'numbering-upload-queue',
    'uploadScript': '/upload/store',
    'onError': function (errorType) {
      $('#numbering-upload').uploadifive('clearQueue');
      alert(errorType);
    },
    'onProgress': function (evt, id, obj, data) {
      file_progress = 'Y';
    },
    'onQueueComplete': function (uploads) {
      file_progress = 'N';
    },
    'onUploadComplete': function (file, data) {
      const le = $('#numbering-upload-queue .uploadifive-queue-item').length;
      if (le > 1) {
        alert('넘버링용 첨부파일은 1개만 가능 합니다.');
        $('#numbering-upload-queue .uploadifive-queue-item:eq(1)').remove();
      }
      file_progress = 'N';
    },
    'onComplete': function (p) {
      file_progress = 'N';
    }
  });

  //QR코드 파일업로드
  $('#qrcode-upload').uploadifive({
    'auto': true,
    'fileTypeExts': '*.gif; *.jpg; *.zip; *.pdf; *.png; *.txt; *.xls; *.xlsx; *.ai;',
    'fileSizeLimit': '409600',//400M
    'buttonText': '',
    'formData': {
      'mode': 'order',
    },
    'multi': false,
    'queueID': 'qrcode-upload-queue',
    'uploadScript': '/upload/store',
    'onError': function (errorType) {
      $('#qrcode-upload').uploadifive('clearQueue');
      alert(errorType);
    },
    'onProgress': function (evt, id, obj, data) {
      file_progress = 'Y';
    },
    'onQueueComplete': function (uploads) {
      file_progress = 'N';
    },
    'onUploadComplete': function (file, data) {
      const le = $('#qrcode-upload-queue .uploadifive-queue-item').length;
      if (le > 1) {
        alert('QR코드용 첨부파일은 1개만 가능 합니다.');
        $('#qrcode-upload-queue .uploadifive-queue-item:eq(1)').remove();
      }
      file_progress = 'N';
    },
    'onComplete': function (p) {
      file_progress = 'N';
    }
  });

  //바코드 파일업로드
  $('#barcode-upload').uploadifive({
    'auto': true,
    'fileTypeExts': '*.gif; *.jpg; *.zip; *.pdf; *.png; *.txt; *.xls; *.xlsx; *.ai;',
    'fileSizeLimit': '409600',//400M
    'buttonText': '',
    'formData': {
      'mode': 'order',
    },
    'multi': false,
    'queueID': 'barcode-upload-queue',
    'uploadScript': '/upload/store',
    'onError': function (errorType) {
      $('#barcode-upload').uploadifive('clearQueue');
      alert(errorType);
    },
    'onProgress': function (evt, id, obj, data) {
      file_progress = 'Y';
    },
    'onQueueComplete': function (uploads) {
      file_progress = 'N';
    },
    'onUploadComplete': function (file, data) {
      const le = $('#barcode-upload-queue .uploadifive-queue-item').length;
      if (le > 1) {
        alert('바코드용 첨부파일은 1개만 가능 합니다.');
        $('#barcode-upload-queue .uploadifive-queue-item:eq(1)').remove();
      }
      file_progress = 'N';
    },
    'onComplete': function (p) {
      file_progress = 'N';
    }
  });


  //디지털 옵셋 전환시 경고메시지 출력하고 이동
  $(document).on('click', '.digital-offset', function (e) {
    let ok = confirm('선택하신 옵션들이 유지되지 않습니다.\n다른페이지로 이동하시겠습니까?');

    if (ok) {
      let link = $(this).attr('data-link');
      location.href = link;
    }
  });

  $('.staffonly').hide();
  $(document).keydown(function (e) {
    //console.log(e.which);
    //e.preventDefault();
    if ($('#staff').val() == 'Y') {
      if (e.which === 81 && e.ctrlKey) {
        //q
        $('#subject').val(arrobj['title'] + ' 주문');
      } else if (e.which === 77 && e.ctrlKey) {
        //m
        $('.staffonly').toggle();
      }
    }

  });

  //$('.staffonly').toggle();

  onResize();

  //별색가이드
  $(document).on('click', '.btn-bcolor-guide', function (e) {
    e.preventDefault();
    const xx = ($(window).width() - 1200) / 2;
    const yy = 100;
    const inner_height = parseInt(window.innerHeight) - 100;
    const menu = $(this).attr('data-menu');
    window.open('/order/form/guide?start=' + menu, 'guidepop', 'width=1200,height=' + inner_height + ',left=' + xx + ',top=' + yy + ' scrollbars=no, resizable=no, status=no');
  });

  $(document).on('click', '.btn-bcolor', function (e) {
    e.preventDefault();
    const xx = ($(window).width() - 1200) / 2;
    const yy = 100;
    const inner_height = parseInt(window.innerHeight) - 100;
    const menu = $(this).attr('data-menu');
    window.open('/order/form/guide?start=' + menu, 'guidepop', 'width=1200,height=' + inner_height + ',left=' + xx + ',top=' + yy + ' scrollbars=no, resizable=no, status=no');
  });

  $(document).on('mouseover','#print-information', function() {
    $('#print-information-img').fadeIn(150);
  })
  $(document).on('mouseleave', '#print-information', function() {
    $('#print-information-img').fadeOut(150);
  })
  $('.bcolor-guide1').css({'border': '1px solid #1279bd', 'color': '#1279bd'});
  $('.bcolor-guide2').css({'border': '1px solid #1279bd', 'color': '#1279bd'});



});
$(document).on('click', '.afterproc-info', function(e) {
  const div1 = $(this).parent('div').parent('div').parent('div').find('img').attr('id');
  const div3 = $(this).parent('div').parent('div').attr('class');
  let div2 = $('#'+div1).css('display');
  e1 = "후가공 안내&nbsp; <i class='fa-regular fa-angle-down'></i>";
  e2 = "후가공 안내&nbsp; <i class='fa-regular fa-angle-up'></i>";
  if(div2 == 'block'){
    $('#'+div1).css('display','none');
    $(this).html(e1)
  }else if(div2 == 'none'){
    $('#'+div1).css('display','block');
    $(this).html(e2)
  }
});
$(document).on('click', '.afterproc-info-img', function(e){
  var div1 = $(this).attr('id');
  var div2 = $(this).css('display');
  console.log(div1, div2)
  e1 = "후가공 안내&nbsp; <i class='fa-regular fa-angle-down'></i>";
  e2 = "후가공 안내&nbsp; <i class='fa-regular fa-angle-up'></i>";
  if(div2 == 'block'){
    $('#'+div1).css('display','none');
    $(this).html(e1)
  }else if(div2 == 'none'){
    $('#'+div1).css('display','block');
    $(this).html(e2)
  }
});
$(document).on('click', '.open_popup', function (e) {
  e.preventDefault();
  const xx = ($(window).width() - 1200) / 2;
  const yy = 100;
  const inner_height = parseInt(window.innerHeight) - 100;
  const menu = $(this).attr('data-menu');
  window.open('/order/form/guide?start=method', 'guidepop', 'width=1200,height=' + inner_height + ',left=' + xx + ',top=' + yy + ' scrollbars=no, resizable=no, status=no');
});
// guide work-guide mouse evnet
setInterval(function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $("#outer").on('click', function () {
      $('#inner').tooltip('hide');
    }).on('click', function () {
      $('#outer').tooltip('hide');
    });
    $("#inner").on('click', function () {
      $('#outer').tooltip('hide');
    }).on('click', function () {
      $('#outer').tooltip('hide');
    });
    $("#print").on('click', function () {
      $('#outer').tooltip('hide'),
        $('#inner').tooltip('hide');
    });
  } else {
    $("#inner").on('mouseover', function () {
      $('#outer').tooltip('hide');
    }).on('mouseleave', function () {
      $('#outer').tooltip('show');
    });
    $("#print").on('mouseover', function () {
      $('#outer').tooltip('hide'),
        $('#inner').tooltip('hide');
    });
  }
}, 1000);

$(document).on('click', '.nav-item', function(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:$('#custom-memo').offset().top}, 0);
});

// todo 추후 용지보기 코드수정
// paper-show popup open event
$(document).on('click', '#paper-show', function (e) {
  const cover_cate = $('select[name="cover_cate"] option:selected').val();
  const paper_name = $('select[name="cover_name"] option:selected').val();
  const paper_gram = $('select[name="cover_gram"] option:selected').val();
  const paper = $('select[name="paper"] option:selected').val();
  let cc = "normal";
  let pn = "paper_ready";
  switch (paper) {
    case '유광페트 화이트 225μ':
      cc = 'photopaper', pn = 'glossy-pet-white';
      break;
    case '유광페트 화이트 210μ':
      cc = 'photopaper', pn = 'glossy-pet-white';
      break;
    case '페트 210μ':
      cc = 'photopaper', pn = 'pet';
      break;
    case '페트 화이트 210μ':
      cc = 'photopaper', pn = 'pet-white';
      break;
    case '투명페트 215μ':
      cc = 'photopaper';
      break;
    case '투명페트 화이트 210μ':
      cc = 'photopaper', pn = 'transparencypet-pet-white';
      break;
    case '무광페트 화이트 210μ':
      cc = 'photopaper', pn = '';
      break;
    case '현수막천 150denier':
      cc = 'photopaper', pn = 'hbanner';
      break;
    case '백릿 210μ':
      cc = 'photopaper', pn = 'backlit';
      break;
    case '인화지(반광) 235μ':
      cc = 'photopaper', pn = 'photo_paper-semi_gloss';
      break;
    case '포토천 450denier':
      cc = 'photopaper', pn = 'Photopaper';
      break;
    case '포토천':
      cc = 'photopaper', pn = 'Photopaper';
      break;
    case '유포스티커(후면백색) 130μ':
      cc = 'photopaper', pn = 'U-poster-white-back';
      break;
    case '반사스티커 매트 화이트':
      cc = 'photopaper', pn = 'reflective-matte-white';
      break;
    case '반사스티커 벌집무늬':
      cc = 'photopaper', pn = 'reflective-matte-white_2';
      break;
    case '실버메탈릭 스티커 160μ':
      cc = 'photopaper', pn = 'silver_metallic';
      break;
    case '골드메탈릭 스티커 160μ':
      cc = 'photopaper', pn = 'gold_metallic';
      break;
    case '캔버스':
      cc = 'photopaper', pn = 'canvas';
      break;
    case '반투명엠보시트 90μ':
      cc = 'sheet', pn = 'translucent-emboss-sheet';
      break;
    case '백색유광시트 90μ':
      cc = 'sheet', pn = 'white-matte-sheet';
      break;
    case '백색무광시트 90μ':
      cc = 'sheet', pn = 'white-matte-sheet';
      break;
    case '블랙유광시트 90μ':
      cc = 'sheet', pn = 'black-glossy-sheet';
      break;
    case '블랙무광시트 90μ':
      cc = 'sheet', pn = 'black-matte-sheet';
      break;
      case '반사스티커 벌집무늬':
      cc = 'photopaper', pn = 'reflect_sticker_honeycomb';
      break;
  }
  switch (paper_gram) {
    case '스노우 150g':
      cc = 'normal', pn = 'snow';
      break;
    case '스노우 200g':
      cc = 'normal', pn = 'snow';
      break;
    case 'M러프 EW 160g':
      cc = 'ex-paper', pn = 'MleopeuEW';
      break;
    case 'M러프 EW 210g':
      cc = 'ex-paper', pn = 'MleopeuEW';
      break;
  }

  switch (cover_cate) {
    case '일반지':
      cc = 'normal';
      switch (paper_name) {
        case '스노우':
          pn = 'snow-paper';
          break;
        case '아트지':
          pn = 'art-paper';
          break;
        case '미색모조':
          pn = 'mojo-paper-off_white';
          break;
        case '백색모조':
          pn = 'wmojo-paper-white';
          break;
        case '뉴플러스 미색':
          pn = 'newplus-paper-off_white';
          break;
        case '뉴플러스 백색':
          pn = 'newplus-paper-white';
          break;
      }
      break;
      case '고급색지':
        switch (paper_name) {
          case '토쉐블랙':
            cc = 'ex-coloerpaper'; pn = 'Tosche_black';
            break;
          case '토쉐스칼렛':
            cc = 'ex-coloerpaper'; pn = 'Tosche_scarlett';
            break;
          case '토쉐콩코드':
            cc = 'ex-coloerpaper'; pn = 'Tosche_concord';
            break;
          case '토쉐밍크':
            cc = 'ex-coloerpaper'; pn = 'Tosche_mink';
            break;
        }
      break;
    case '고급지':
      cc = 'ex-paper';
      switch (paper_name) {
        case '랑데뷰 내츄럴':
          pn = 'rendezvous-paper-natural';
          break;
        case '랑데뷰 울트라':
          pn = 'rendezvous-paper-ultra';
          break;
        case '반누보 울트라화이트':
          pn = 'van_nouveau-paper-ultra';
          break;
        case '반누보 스노우화이트':
          pn = 'van_nouveau-paper-white';
          break;
        case '아르떼 내츄럴':
          pn = 'arte-paper-natural';
          break;
        case '아르떼 울트라':
          pn = 'arte-paper-ultra';
          break;
        case '아르떼울트라 화이트':
          pn = 'arte-paper-ultra';
          break;
        case 'M러프 EW':
          pn = 'M_rough_WE-paper';
          break;
        case '슈퍼파인 스무스':
          pn = 'superfine';
          break;
        case '썬샤인':
          pn = 'sunshine';
          break;
        case '마쉬맬로우 백색':
          pn = 'marshmallow-paper-white';
          break;
        case '뉴에이프릴 브라이드':
          pn = 'newapril_bride-paper';
          break;
        case '트윌 브라잇화이트':
          pn = 'tw-bright-w';
          break;
        case '띤또레또':
          pn = 'tintoretto-paper';
          break;
        case '켄도':
          pn = 'cando';
          break;
        case '린넨커버':
          pn = 'linen_cover-paper';
          break;
        case '문켄폴라':
          pn = 'munken_polar-paper';
          break;
        case '플로라 가드니아':
          pn = 'floragardenia-paper';
          break;
        case '(항균지)라이덜 내츄럴화이트':
          pn = 'ridernatural-paper-white';
          break;
        case '블랑 베이지 화이트':
          pn = 'blanc-paper-white';
          break;
        case '블랑 베이지 크림':
          pn = 'blanc-paper-cream';
          break;
        case '엑스트라 코튼 화이트':
          pn = 'extracotton-paper-white';
          break;
        case '바우하우스 화이트1':
          pn = 'bauhaus-paper-white1';
          break;
        case '바우하우스 화이트2':
          pn = 'bauhaus-paper-white2';
          break;
        case '썬샤인 엑스트라화이트':
          pn = 'sunshineextra-paper-white';
          break;
        case '비 화이트':
          pn = 'non-paper-white';
          break;
        case '아르떼 울트라 화이트':
          pn = 'arte_ultra_white';
          break;
        case '크라프트':
          pn = 'craft';
          break;
      }
      break;
    case '패키지':
      cc = 'package';
      switch (paper_name) {
        case '네오CCP':
          pn = 'neoccp';
          break;
        case 'MGB화이트':
          pn = 'MGB_white';
          break;
        case '로얄 아이보리':
          pn = 'royal-ivory';
          break;
        case '아이보리':
          pn = 'ivory';
          break;
        case 'SC마닐라':
          pn = 'scmanelra';
          break;
      }
      break;

    case '썬캡':
      cc = 'normal';
      switch (paper_name) {
        case '스노우':
          pn = 'snow-paper';
          break;
        case '아트지':
          pn = 'art-paper';
          break;
      }
      if(paper_name == 'CCP 백색' || paper_name == 'MGB 백색' || paper_name == 'SC마니라'){
      cc = 'package';
      switch (paper_name){
        case 'CCP 백색':
          pn = 'neoccp';
          break;
        case 'MGB 백색':
          pn = 'MGB_white';
          break;
        case 'SC마니라':
          pn = 'scmanelra';
          break;
      }
      }
    break;

    case '펄지':
      cc = 'pul';
      switch (paper_name) {
        case '스타드림 쿼츠':
          pn = 'star_dream_quartz';
          break;
        case '스타드림 크리스탈':
          pn = 'star_dream_crystal';
          break;
        case '스타드림 골드':
          pn = 'star_dream_gold';
          break;
        case '스타드림 실버':
          pn = 'star_dream_silver';
          break;
        case '시리오펄 스노우':
          pn = 'siori_pearl_sonw';
          break;
        case '시리오펄 진주':
          pn = 'siori_pearl';
          break;
        case '시리오펄 골드':
          pn = 'siori_pearl_gold';
          break;
        case '시리오펄 실버':
          pn = 'siori_pearl_silver';
          break;
        case '팝셋':
          pn = 'popset_paper';
          break;
      }
      break;
    case '딤플':
      cc = 'ex-coloerpaper';
      switch (paper_name) {
        case '딤플 블랙':
          pn = 'dimple_paper_black';
          break;
      }
      break;
    case '스튜디오컬렉션':
      cc = 'ex-coloerpaper';
      switch (paper_name) {
        case '스튜디오컬렉션 포레스트 그린':
          pn = 'studiocollection-green';
          break;
        case '스튜디오컬렉션 레드':
          pn = 'studio_paper_red';
          break;
      }
      break;
    case '고급색지':
      cc = 'colorpaper';
      switch (paper_name) {
        case '매직칼라 녹색지':
          pn = 'magiccolor-shrtor';
          break;
        case '매직칼라 적색지(분홍)':
          pn = 'magiccolor-red';
          break;
        case '매직칼라 청색지':
          pn = 'magiccolor-cjdtor';
          break;
        case '매직칼라 황색지':
          pn = 'magiccolor-ghkdtor';
          break;
        case '매직칼라 굴색':
          pn = 'magiccolor-rnftor';
          break;
        case '매직칼라 금발색':
          pn = 'magiccolor-rmaqkf';
          break;
        case '매직칼라 노랑색':
          pn = 'magiccolor-yellow';
          break;
        case '매직칼라 노른자색':
          pn = 'magiccolor-shfmswk';
          break;
        case '매직칼라 녹두색':
          pn = 'magiccolor-shren';
          break;
        case '매직칼라 녹청색':
          pn = 'magiccolor-shrcjd';
          break;
        case '매직칼라 뉴밤색':
          pn = 'magiccolor-sbqka';
          break;
        case '매직칼라 뉴주홍색':
          pn = 'magiccolor-sbwnghd';
          break;
        case '매직칼라 뉴황갈색':
          pn = 'magiccolor-sbghkdrkf';
          break;
        case '매직칼라 모래색':
          pn = 'magiccolor-send';
          break;
        case '매직칼라 밍크색':
          pn = 'magiccolor-mink';
          break;
        case '매직칼라 백색':
          pn = 'magiccolor-white';
          break;
        case '매직칼라 백옥색':
          pn = 'magiccolor-whitejade';
          break;
        case '매직칼라 벛꽃색':
          pn = 'magiccolor-Cherry';
          break;
        case '매직칼라 분홍색':
          pn = 'magiccolor-pink';
          break;
        case '매직칼라 솔잎색':
          pn = 'magiccolor-pine';
          break;
        case '매직칼라 슬레이트블루':
          pn = 'magiccolor-slateblue';
          break;
        case '매직칼라 연미색':
          pn = 'magiccolor-palepink';
          break;
        case '매직칼라 연보라색':
          pn = 'magiccolor-mauve';
          break;
        case '매직칼라 연청색':
          pn = 'magiccolor-lightblue';
          break;
        case '매직칼라 옥색':
          pn = 'magiccolor-jade';
          break;
        case '매직칼라 우유색':
          pn = 'magiccolor-milk';
          break;
        case '매직칼라 주홍색':
          pn = 'magiccolor-scarlet';
          break;
        case '매직칼라 초록색':
          pn = 'magiccolor-green';
          break;
        case '매직칼라 크림색':
          pn = 'magiccolor-cream';
          break;
        case '매직칼라 풋사과색':
          pn = 'magiccolor-greenapple';
          break;
        case '매직칼라 피색':
          pn = 'magiccolor-blood';
          break;
        case '매직칼라 황단색':
          pn = 'magiccolor-yellowish';
          break;
        case '매직칼라 회색':
          pn = 'magiccolor-grey';
          break;
        case '매직칼라 검정색':
          pn = 'magiccolor-black';
          break;
        case '매직칼라 사이엔블루':
          pn = 'magiccolor-cyenblue';
          break;
      }
      break;
    case '카드명함':
      cc = 'PETpaper';
      switch (paper_name) {
        case 'PET카드 300g':
          pn = 'PETcard300';
          break;
        case 'PET카드 200g':
          pn = 'PETcard200';
          break;
        case 'MC카드':
          pn = 'MCcard';
          break;
      }
      break;
    case '스티커':
      cc = 'sticker';
      switch (paper_name) {
        case '모조지':
          pn = 'mojo_paper_sticker';
          break;
        case '아트지':
          pn = 'art_paper_sticker';
          break;
        case '유포지':
          pn = 'upo_paper_sticker';
          break;
        case '은무 데드롱':
          pn = 'silver_sticker';
          break;
        case '투명 데드롱':
          pn = 'transparent_sticker';
          break;
      }
      break;
    case '모양스티커':
      cc = 'sticker';
      switch (paper_gram) {
        case '아트지스티커(유광코팅)':
          pn = 'art_paper_sticker';
          break;
        case '아트지스티커(무광코팅)':
          pn = 'art_paper_sticker';
          break;
        case '아트지스티커(코팅없음)':
          pn = 'art_paper_sticker';
          break;
        case '아트지강접스티커(유광코팅)':
          pn = 'art_paper_sticker';
          break;
        case '아트지초강접스티커(유광코팅)':
          pn = 'art_paper_sticker';
          break;
        case '은데드롱스티커':
          pn = 'sl-deadlong';
          break;
        case '투명데드롱스티커':
          pn = 'transparent_sticker';
          break;
        case '유포지스티커':
          pn = 'upo_paper_sticker';
          break;
        case '모조스티커':
          pn = 'mojo_paper_sticker';
          break;
        case '크라프트스티커':
          pn = 'creapt-sticker';
          break;
      }
      break;
    case '대봉투':
      cc = 'normal';
    case '소봉투':
      cc = 'normal';
    case '중봉투':
      cc = 'normal';
    case '6절봉투':
      cc = 'normal';
    case '티켓봉투':
      cc = 'normal';
    case '창봉투':
      cc = 'normal';
      switch (paper_gram) {
        case '모조지 백색 120g':
          pn = 'wmojo';
          break;
        case '모조지 백색 150g':
          pn = 'wmojo';
          break;
        case '모조지 백색 100g':
          pn = 'wmojo';
          break;
      }
      break;
  }
  console.log('log', cc, pn);

  popupWindow('/order/form/paper-show#' + cc + '@' + pn, 'paper-show', 1100, 667);

});

$(document).on('click', '.show-holder', function (e) {
  let inout =$('#holder-inout option:selected').val();
  let banner = $('#holder-banner option:selected').val();
  let holder =$('#holder option:selected').val();
  switch (banner) {
    case '원터치 알파':
      banner = 'onetouch_banner_holder';
      break;
    case '화이트배너':
      banner = 'white_banner_holder';
      break;
    case '포인트배너':
      banner = 'point_banner_holder';
      break;
    case '철제T배너 대(600mm X 1800mm용)':
      banner = 'steel_banner';
      break;
    case '철제T배너 중(500mm X 1500mm용)':
      banner = 'steel_banner';
      break;
    case '철제T배너 소(400mm X 1200mm용)':
      banner = 'steel_banner';
      break;
    case '에코드림배너 단면':
      banner = 'eco_dream_banner_holder_se';
      break;
    case '에코드림배너 양면':
      banner = 'eco_dream_banner_holder';
      break;
    case '드림배너 단면':
      banner = 'dream_banner_holder_se';
      break;
    case '드림배너 양면':
      banner = 'dream_banner_holder';
      break;
    case '브이배너 단면':
      banner = 'v_banner_holder_se';
      break;
    case '브이배너 양면':
      banner = 'v_banner_holder';
      break;
  }
  switch (inout) {
    case '실내용':
      inout = 'inner';
      break;
    case '실외용':
      inout = 'outter';
      break;
  }
  switch (holder){
    case '등신대 150cm':
      holder = 'lifesize_banner';
      break;
    case '등신대 120cm':
      holder = 'lifesize_banner';
      break;
    case '등신대 90cm':
      holder = 'lifesize_banner';
      break;
    case '등신대 75cm':
      holder = 'lifesize_banner';
      break;
    case '종이거치대 소(14cm)':
      holder = 'paper_banner';
      break;
    case '종이거치대 중(20cm)':
      holder = 'paper_banner';
      break;
    case '종이거치대 대(26cm)':
      holder = 'paper_banner';
      break;
  }
  console.log(inout)
  if(inout == null){
    if(holder == 'lifesize_banner'){
      popupWindow('/order/form/bannerholder#lifesize@' + holder, 'bannerholder', 1100, 1920);
    }else if(holder == 'paper_banner'){
      popupWindow('/order/form/bannerholder#paper@' + holder, 'bannerholder', 1100, 1920);
    }
  }else{
  popupWindow('/order/form/bannerholder#' + inout + '@' + banner, 'bannerholder', 1100, 1920);
  }
});
$(window).resize(function () {
  onResize();
});
