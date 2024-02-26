var $_jongis = [];

var $_osi = null;
var $_osifold = null;
var $_mising = null;
var $_folding = null;
var _start = 0;
var _pan = 'a3';
var _pan_ori = 'a3';
var _pan_howmany = 0;
var _tmp_pan = '';
var _tmp_pan_howmany = 0;

var _print_maesu = 0;
var _total_maesu = 0;

var _maesu;
var _quantity;
var _cutsize_w;
var _cutsize_h;
var _jobsize_w;
var _jobsize_h;
var g_target_name = '';
var g_target_id = '';
var g_check_msg = '';

let arr_maesu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000];

if( goods_code == 'dmynamecard') {
  arr_maesu = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100, 1110, 1120, 1130, 1140, 1150, 1160, 1170, 1180, 1190, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1270, 1280, 1290, 1300, 1310,1320,1330,1340,1350,1360,1370,1380,1390,1400,1410,1420,1430,1440,1450,1460,1470,1480,1490,1500,1510,1520,1530,1540,1550,1560,1570,1580,1590,1600];
}

let g_division = 0;
let g_selmachine = '';

function sumAfterproc() {
  const arr_after_procs = [
    { name:'is_cutting', val:0 },
    { name:'is_coating', val:1 },
    { name:'is_osi', val:1 },
    { name:'is_mising', val:1 },
    { name:'is_folding', val:1 },
    { name:'is_osifold', val:1 },
    { name:'is_rounding', val:0 },
    { name:'is_tomson', val:11 },
    { name:'is_punching', val:1 },
    { name:'is_press', val:20 },
    { name:'is_foil', val:20 },
    { name:'is_numbering', val:17 },
    { name:'is_qrcode', val:17 },
    { name:'is_quick', val:17 },
    { name:'is_embo', val:17 },
    { name:'is_barcode', val:17 },
    { name:'is_ramicoating', val:1 },
    { name:'is_uvscodix', val:20 },
    { name:'is_foilscodix', val:20 },
  ];

  let afterprocs_sum = 0;

  $('input.afterproc:checkbox').each(function(e) {
    if( $(this).prop('checked')) {
      const nm = $(this).attr('name');

      const tmp = _.find(arr_after_procs, function(o) {
        return (o.name == nm);
      });

      afterprocs_sum += Number(tmp['val']);
    }
  });

  //console.log('sum=>' + afterprocs_sum);
  return afterprocs_sum;
}

//모바일 사이즈 직접입력
function size_input_modal(p) {
  switch(p) {
    case 'pop':
      let v = $('select[name="paper_size"] option:selected').val();
      if( v != 'free_size') return;

      $('#input-cutsize-w').val($('#cutsize-w').val());
      $('#input-cutsize-h').val($('#cutsize-h').val());

      $('#size-input-modal').css('display','flex');
      body_noscroll('Y');
      break;

    case 'close':
      $('#size-input-modal').css('display','none');
      body_noscroll('N');
      break;

    case 'selected':
      if( $('#input-cutsize-w').val().length < 2) {
        alert('가로사이즈를 입력해 주세요.');
        $('#input-cutsize-w').focus();
        return;
      }

      if( $('#input-cutsize-h').val().length < 2) {
        alert('세로사이즈를 입력해 주세요.');
        $('#input-cutsize-h').focus();
        return;
      }

      let cutsize_w = $('#input-cutsize-w').val();
      let cutsize_h = $('#input-cutsize-h').val();

      $('#cutsize-w').val(cutsize_w);
      $('#cutsize-h').val(cutsize_h);

      if (!checkPapersize()) {
        item_restore(g_target_id, g_target_name, 'checkpapersize');
        return false;
      }

      $('#paper-size-block2').show();

      $('.lb-cutsize-w').text(cutsize_w);
      $('.lb-cutsize-h').text(cutsize_h);

      $('#size-input-modal').css('display','none');

      $('#cutsize-h').change();

      body_noscroll('N');
      break;
  }
}


//글로벌 컴포넌트 변수
function makeGlobalVal() {
  _maesu = Number($('select[name="maesu"] option:selected').val());
  _quantity = Number($('select[name="quantity"] option:selected').val());
  _cutsize_w = Number($('#cutsize-w').val());
  _cutsize_h = Number($('#cutsize-h').val());
  _jobsize_w = Number($('#jobsize-w').val());
  _jobsize_h = Number($('#jobsize-h').val());

  if( goods_code == 'dmynamecard') {
    _pan_howmany = 21;
  }
}


//변화된 데이터 입력하기

function changeData() {
  _form_history = $('#applyform').serializeObject();
  _form_history['pp1'] = $('#cover-name').html();
  _form_history['pp2'] = $('#cover-gram').html();
}

//이전데이터 복구하기
function item_restore(id, nm, fn) {
  const obj = _form_history;
  const type = $('[name="' + nm + '"]').prop('type');

  if( fn == 'checkpapersize') {
    $('#paper-size').val(obj['paper_size']);
    $('#cutsize-w').val(obj['cutsize_w']);
    $('#cutsize-h').val(obj['cutsize_h']);
    $('#jobsize-w').val(obj['jobsize_w']);
    $('#jobsize-h').val(obj['jobsize_h']);
  }

  if (type == 'select-one' || type == 'text' || type == 'number') {
    $('#' + id).val(obj[nm]);
  } else if (type == 'radio') {
    $('input[name="' + nm + '"][value="' + obj[nm] + '"]').prop('checked', true);
  } else if (type == 'checkbox') {
    $('#' + id).prop('checked', false);
    const target = $('#' + id).attr('data-target');
    $('#toggle-afterproc-' + target).hide();
  }

  $('#cover-cate').val(obj['cover_cate']);
  $('#cover-name').val(obj['cover_name']);
  $('#cover-gram').val(obj['cover_gram']);

  //makeCutsize();
}


function makeCutsize() {
  var $paper_size = $('select[name="paper_size"] option:selected');
  var cutsize = $paper_size.attr('data-cutsize');
  var jobsize = $paper_size.attr('data-jobsize');
  var zoom = Number($paper_size.attr('data-zoom'));

  if ($paper_size.val() == 'free_size') {
    cutsize = $('#cutsize-w').val() + 'x' + $('#cutsize-h').val();
    jobsize = (Number($('#cutsize-w').val()) + 4) + 'x' + (Number($('#cutsize-h').val()) + 4);
  }

  let tmp = cutsize.split('x');
  let cutsize_w = Number(tmp[0]);
  let cutsize_h = Number(tmp[1]);

  // 자동 템플릿 파라미터 넘기기 ----------
  let T_phpURL = "/ui/fpdftemplate/rect-template";    // 템플릿.php 위치
  let T_jobsize_W = "?T_jobsize_W=";  // 템플릿 작업사이즈 가로
  let T_jobsize_H = "&T_jobsize_H=";  // 템플릿 작업사이즈 세로
  let jobsize_w = cutsize_w + 4;  // 작업사이즈 가로
  let jobsize_h = cutsize_h + 4;  // 작업사이즈 세로

  // ex: /order/form/rect-template?T_jobsize_W=510&T_jobsize_H=740
  let T_totalURL = T_phpURL + T_jobsize_W + jobsize_w + T_jobsize_H + jobsize_h;
  $("#autoTemplate").attr("href", T_totalURL);

  // 템플릿 끝 ----------

  $('#cutsize-w').val(cutsize_w);
  $('#cutsize-h').val(cutsize_h);
  $('#jobsize-w').val(cutsize_w + 4);
  $('#jobsize-h').val(cutsize_h + 4);


  let max = Math.max(cutsize_w, cutsize_h);
  let min = Math.min(cutsize_w, cutsize_h);

  if (max > 465 || min > 315) {
    let arr_perl = ['시리오펄 골드', '시리오펄 스노우', '시리오펄 실버', '시리오펄 진주', '스타드림 쿼츠', '스타드림 크리스탈', '스타드림 골드', '스타드림 실버'];
    let cover_name = $('#cover-name').val();

    $("#cover-name option:contains('스타드림')").prop('disabled', true);
    $("#cover-name option:contains('스타드림')").hide();
    $("#cover-name option:contains('시리오펄')").prop('disabled', true);
    $("#cover-name option:contains('시리오펄')").hide();

    if ($.inArray(cover_name, arr_perl) > -1) {
      $('#cover-name').val('팝셋');
      $('#cover-name').change();
    }
  } else {
    $("#cover-name option:contains('스타드림')").prop('disabled', false);
    $("#cover-name option:contains('스타드림')").show();
    $("#cover-name option:contains('시리오펄')").prop('disabled', false);
    $("#cover-name option:contains('시리오펄')").show();
  }

}


//용지,인쇄,재단비
function priceProduct() {
  let fixed_maesu = 'N';
  const maesu = $('select[name="maesu"] option:selected').val();
  let coating = '';

  if ($('#is-coating').prop('checked')) {
    coating = $('input[name="coating"]:checked').val();
  }

  const $spec = {
    'maesu': Number( $('#maesu').val()),
    'quantity': Number($('#quantity').val()),
    'width': Number($('#cutsize-w').val()),
    'height': Number($('#cutsize-h').val()),
    'is_class':$('select[name="is_class"] option:selected').val(),
    'coating':coating,
  };

  let color_val = $('input:radio[name="cover_color"]:checked').attr('data-val');

  if( $('input:radio[name="cover_color"]:checked').val() == '양면먹2도' ||
    $('input:radio[name="cover_color"]:checked').val() == '단면먹1도') {
    if( $('#cover-color-opt').length > 0) {
      color_val = $('select[name="cover_color_opt"] option:selected').attr('data-val');
    }
  }

  const $paper = {
    'machine' : $('input:radio[name="machine"]:checked').val(),
    'name' : $('#cover-gram').val(),
    'color' : $('input:radio[name="cover_color"]:checked').val(),
    'color_val' : color_val,
    'add_color' : $('select[name="cover_add_color"] option:selected').val(),
    'add_color_val' : $('select[name="cover_add_color"] option:selected').attr('data-val'),
    'obj' : $('select[name="cover_gram"] option:selected').attr('data-obj'),
    'toner' : $('select[name="cover_gram"] option:selected').attr('data-toner'),
    'indigo' : $('select[name="cover_gram"] option:selected').attr('data-indigo'),
    'is_dc' : $('select[name="cover_gram"] option:selected').attr('data-dc'),
    'is_toner' : $('select[name="cover_gram"] option:selected').attr('data-istoner'),
    'is_indigo' : $('select[name="cover_gram"] option:selected').attr('data-isindigo'),
  }

  let gpaper = new Globalprice($spec,$paper);

  const p1 = Math.round(gpaper.get_paper_price / 100) * 100;
  const p2 = Math.round(gpaper.get_print_price / 100) * 100;
  let p3 = Math.round(gpaper.get_cutting_price / 100) * 100;

  //gpaper.get_basic_price;
  //console.log( 'the price=>' + gpaper.get_price);

  let is_fixed = gpaper.checkFixedprice();

  if( isNaN(gpaper.get_price)) {
    //alert('지원하지 않는 규격입니다1.');
    //location.reload();
  }

  $('#fp-paper').text(comma3(gpaper.get_paper_price));
  $('#fp-print').text(comma3(gpaper.get_price));

  $('#pan-selected').val( JSON.stringify(gpaper.get_machine_selected));
  $('#pan-grids').val( JSON.stringify(gpaper.get_machine_grids));


  if ($('#is-coating').prop('checked')) {
    $('.fp-coating').text(comma3(gpaper.get_coating_price));
    $('#fp-coating').text(comma3(gpaper.get_coating_price));
  }
  else {
    $('.fp-coating').text('0');
    $('#fp-coating').text('0');
  }


  if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
    /*
    if( is_fixed == 'f') {
      $('#fp-cutting-row').hide();
      $('.fp-cutting').parent('div').hide();
      p3 = 0;
    }
    else {
      $('#fp-cutting-row').show();
      $('.fp-cutting').parent('div').show();
    }
     */

    $('#fp-cutting-row').show();
    $('.fp-cutting').parent('div').show();

    $('.fp-cutting').text(comma3(p3));
    $('#fp-cutting').text(comma3(p3));
  } else {
    $('#fp-cutting').text('0');
    $('.fp-cutting').text('0');
    $('#fp-cutting-row').hide();
  }
}

//토탈가격 계산
function priceTotal() {
  let fl_spec = $('select[name="paper_size"] option:selected').text();

  if ($('select[name="paper_size"] option:selected').val() == 'free_size') {
    fl_spec = 'Free (' + _cutsize_w + 'mm X ' + _cutsize_h + 'mm)';
  }

  let fl_cover_paper = $('select[name="cover_gram"] option:selected').val();
  let fl_inner_paper = $('select[name="inner_gram"] option:selected').val();
  let fl_cover_print = $('input:radio[name="cover_color"]:checked').val().replace(/인디고/g, '');

  if( $('#cover-color-opt').length > 0) {
    const o = $('select[name="cover_color_opt"] option:selected').val();
    fl_cover_print += '(해상도 ' + o + ')';
  }

  let fl_inner_print = $('input:radio[name="inner_color"]:checked').val();
  let fl_inner_pages = $('#inner-pages').val();
  let fl_quantity = $('#quantity').val();
  let fl_maesu = $('#maesu').val();
  let fl_binding = $('input:radio[name="binding"]:checked').val();

  $('#fl-spec').text(fl_spec);
  $('#fl-cover-paper').text(fl_cover_paper);
  $('#fl-inner-paper').text(fl_inner_paper);
  $('#fl-cover-print').text(fl_cover_print);
  $('#fl-inner-print').text(fl_inner_print);
  $('#fl-inner-pages').text(fl_inner_pages + 'p');

  $('#fl-quantity').text(fl_maesu + '매 ' + fl_quantity + ' 건');

  $('#fl-binding').text(fl_binding);

  let supply = 0;
  let supply_dc = 0;
  let supply_no_dc = 0;

  $('.mny').each(function () {
    var v = Number($(this).text().replace(/,/g, ''));
    supply += v;

    if( $(this).attr('id') == 'fp-print' || $(this).attr('id') == 'fp-cutting') {
      supply_dc += v;
    }
    else {
      supply_no_dc += v;
    }
  });


  supply = Math.round(supply / 100) * 100;
  let vat = Math.ceil(supply * 0.1);

  //두꺼운명함 할인
  if( mcode == '1501') {
    const dc = Math.round((supply_dc * 0.7) / 1000) * 1000;
    const dc_vat = Math.ceil((dc + supply_no_dc) * 0.1);

    $('#fp-supply0').text(comma3(supply));
    $('#fp-supply').text(comma3(dc + supply_no_dc));
    $('#fp-vat').text(comma3(dc_vat));
  }
  else {
    $('#fp-supply').text(comma3(supply));
    $('#fp-vat').text(comma3(vat));
  }


  var total = 0;
  $('.mny2').each(function () {
    if ($(this).attr('id') != 'fp-box-package') {
      let v = Number($(this).text().replace(/,/g, ''))
      total += v;
    }
  });

  //주문금액 30000 미만시 박스포장 옵션 보이게
  if (total < 30000) {
    $('#row-box-package').show();
  } else {
    //$('#box-package').val('N');
    $('#row-box-package').hide();
    $('#fp-box-package').text('0');
  }

  $('#fp-total').text(comma3(total));
}

function priceBoxpackage() {
  let v = $('select[name="box_package"] option:selected').val();

  if (v == 'Y') {
    $('#fp-box-package').text('1,000');
  } else {
    $('#fp-box-package').text('0');
  }
}

function volumeTotal() {
  let cover_gram = 0;
  let coating_gram = 0;
  let cover_height = 0;

  const cover_unit_gram = Number($('select[name="cover_gram"] option:selected').attr('data-gram'));
  const cutsize_w = Number($('#cutsize-w').val());
  const cutsize_h = Number($('#cutsize-h').val());
  const quantity = Number($('#quantity').val());
  const maesu = Number($('select[name="maesu"] option:selected').val());
  const cover_color = $('input[name="cover_color"]:checked').val();

  if ($('#is-coating').prop('checked')) {
    const coating = $('input[name="coating"]:checked').val();
    if( coating.indexOf('단면') > -1) {
      coating_gram = 0.2 * 100;
    }
    else if( coating.indexOf('양면') > -1) {
      coating_gram = 0.4 * 100;
    }
  }

  cover_gram = ((cover_unit_gram + coating_gram) / 1000) * (cutsize_w / 1000) * (cutsize_h / 1000) * maesu * quantity;
  cover_height = (cover_unit_gram + coating_gram) / 1000 * maesu * quantity;

  let weights = Number(cover_gram.toFixed(2));
  let heights = Number(cover_height.toFixed(2));

  weights = Math.max( 0.1, weights.toFixed(1));
  heights = heights.toFixed(1);

  const ret_obj = {
    'weights': weights,
    'heights': heights
  }

  return ret_obj;
}

//무게및박스계산
function priceVolume() {
  gsetVolume();

  obj = {};
  obj['method'] = '디지털';
  obj['goods'] = goods_code;
  obj['size'] = _cutsize_w + 'x' + _cutsize_h;
  obj['maesu'] = _maesu;
  obj['quantity'] = _quantity;
  $('#spec').val(JSON.stringify(obj));
}

function calcPrice() {
  if (_start < 1) return;
  //console.log('계산하기!');

  makeGlobalVal();

  priceProduct();

  //priceCutting();
  priceCoating();
  priceOsi();
  priceOsifold();
  priceFolding();
  priceMising();
  priceRounding();
  pricePunching();
  pricePress();
  priceTomson();
  priceFoil();
  priceNumbering();
  priceQRcode();
  priceBarcode();
  priceQuick();
  priceUVscodix();
  priceFoilscodix();
  priceRamicoating();
  priceEmbo();

  priceToday();
  priceTomorrow();

  priceEmergency();

  priceBoxpackage();
  priceVolume();

  setTimeout(()=>{
    priceTotal();
  },200);

}

function setMaesu() {
  const $spec = {
    'maesu': Number($('#maesu').val()),
    'quantity': Number($('#quantity').val()),
    'width': Number($('#cutsize-w').val()),
    'height': Number($('#cutsize-h').val()),
  };

  const $paper = {
    'machine' : $('input:radio[name="machine"]:checked').val(),
    'name' : $('#cover-gram').val(),
    'color' : $('input:radio[name="cover_color"]:checked').val(),
    'add_color' : $('select[name="cover_add_color"] option:selected').val(),
    'obj' : $('select[name="cover_gram"] option:selected').attr('data-obj'),
  }

  let gpaper = new Globalprice($spec,$paper,false);
  g_division = gpaper.get_division;

  g_selmachine = gpaper.get_selmachine;

  $('#maesu').empty();

  for(const m of arr_maesu) {
    const i = m * g_division;
    let h = '<option value="' + i + '">' + i + '</option>\n';
    $('#maesu').append(h);
  }
}

//시리오펄 용지 사이즈체크
function checkEtcPaper() {
  if ($('#cover-name').val() == '시리오펄 골드' || $('#cover-name').val() == '시리오펄 스노우' || $('#cover-name').val() == '시리오펄 실버' || $('#cover-name').val() == '시리오펄 진주') {
    let max = Math.max(_cutsize_w, _cutsize_h);
    let min = Math.min(_cutsize_w, _cutsize_h);

    if (max > 440 || min > 300) {
      alert('시리오펄 용지는 440mm x 300mm 이하사이즈만 제작가능합니다.');
      return false;
    }
  }
  return true;
}

//일반지 150g미만, 고급지 160g미만과 오시,오시접지
function checkAfterprocPaper() {
  //일반지 150g미만, 고급지 160g미만은 코팅안됨
  let gram = Number($('select[name="cover_gram"] option:selected').attr('data-gram'));
  if ($('#is-osi').prop('checked')) {
    if ($('#cover-cate').val() == '일반지' && gram < 150) {
      alert('오시가 안되는 용지 입니다.\n오시는 일반지 150g이상의 평량에서만 가능합니다.');
      return false;
    }
    else if ($('#cover-cate').val() == '고급지' && gram < 160) {
      alert('오시가 안되는 용지 입니다.\n오시는 고급지 160g이상의 평량에서만 가능합니다.');
      return false;
    }
  }
  else if ($('#is-osifold').prop('checked')) {
    if ($('#cover-cate').val() == '일반지' && gram < 150) {
      alert('오시접지가 안되는 용지 입니다.\n오시접지는 일반지 150g이상의 평량에서만 가능합니다.');
      return false;
    }
    else if ($('#cover-cate').val() == '고급지' && gram < 160) {
      alert('오시접지가 안되는 용지 입니다.\n오시접지는 고급지 160g이상의 평량에서만 가능합니다.');
      return false;
    }
  }
  else if ($('#is-folding').prop('checked')) {
    if ($('#cover-cate').val() == '일반지' && gram > 150) {
      alert('접지가 안되는 용지 입니다.\n접지는 일반지 150g이하 평량에서만 가능합니다.');
      return false;
    }
    else if ($('#cover-cate').val() == '고급지' && gram > 160) {
      alert('오시접지가 안되는 용지 입니다.\n접지는 고급지 160g이하 평량에서만 가능합니다.');
      return false;
    }
  }

  return true;
}


function checkOsiSize() {
  if ($('#is-osi').prop('checked')) {

    const cutsize_w = Number($('#cutsize-w').val());
    const cutsize_h = Number($('#cutsize-h').val());
    const cut_max = Math.max(cutsize_w, cutsize_h);
    const cut_min = Math.min(cutsize_w, cutsize_h);

    /*
    if (cut_max > 520) {
      alert('오시가 불가능한 사이즈입니다.');
      return false;
    }

     */
  }

  return true;
}

function checkOsifoldSize() {
  //최저 사이즈 제어
  if ($('#is-osifold').prop('checked')) {
    const osi_fold = $('input:radio[name="osifold_line"]:checked').val();
    let min = 100;
    let max = 276;

    if (osi_fold == '2단접지') {
      min = 100;
      max = 180;
    }
    else if (osi_fold == '3단접지') {
      min = 100;
      max = 276;
    }
    else if (osi_fold == '대문접지' || osi_fold == '4단접지' || osi_fold == '4단N병풍접지') {
      min = 100;
      max = 276;
    }

    const cutsize_w = Number($('#cutsize-w').val());
    const cutsize_h = Number($('#cutsize-h').val());
    const cut_max = Math.max(cutsize_w, cutsize_h);
    const cut_min = Math.min(cutsize_w, cutsize_h);

    /*
    if (cut_max > 520) {
      alert('오시접지가 불가능한 사이즈입니다.');
      return false;
    }

     */

    if (cut_min < min) {
      alert('오시접지가 불가능한 사이즈입니다.');
      return false;
    }

    if (cut_max < max) {
      alert('오시접지가 불가능한 사이즈입니다.');
      return false;
    }
  }

  return true;
}

function checkFoldingSize() {
  // 최저사이즈 제어
  if ($('#is-folding').prop('checked')) {
    const osi_fold = $('input:radio[name="folding"]:checked').val();
    let min = 100;
    let max = 276;

    if (osi_fold == '2단접지') {
      min = 100;
      max = 180;
    }
    else if (osi_fold == '3단접지') {
      min = 100;
      max = 276;
    }
    else if (osi_fold == '대문접지' || osi_fold == '4단접지' || osi_fold == '4단N병풍접지') {
      min = 100;
      max = 276;
    }

    const cutsize_w = Number($('#cutsize-w').val());
    const cutsize_h = Number($('#cutsize-h').val());
    const cut_max = Math.max(cutsize_w, cutsize_h);
    const cut_min = Math.min(cutsize_w, cutsize_h);

    if (cut_min < min) {
      alert('접지가 불가능한 사이즈 입니다1');
      return false;
    }

    if (cut_max < max) {
      alert('접지가 불가능한 사이즈 입니다2');
      return false;
    }
  }

  return true;
}

//코팅은 일반지 150g, 고급지 130g 이상부터 코팅이 됩니다.
function checkCoatingPaper() {
  if ($('#is-coating').prop('checked')) {
    let cover_cate = $('select[name="cover_cate"] option:selected').val();
    let cover_name = $('select[name="cover_name"] option:selected').val();
    let gram = Number($('select[name="cover_gram"] option:selected').attr('data-gram'));

    if (cover_cate == '일반지' && gram < 150) {
      alert('코팅은 일반지 150g 이상부터 가능합니다.');
      return false;
    }

    if (cover_cate == '고급지' && gram < 130) {
      alert('코팅은 고급지 130g 이상부터 가능합니다.');
      return false;
    }

    if (cover_name == '아트지' && gram < 180) {
      alert('아트지 코팅은 180g 이상부터 가능하므로, 스노우 150g을 선택해주시기 바랍니다.');
      return false;
    }
  }
  return true;
}


//용지 종류에 따른 제어
function checkPaperkind() {
  if ($('#is-uvscodix').prop('checked')) {
    let cover_name = $('select[name="cover_name"] option:selected').val();

    if( cover_name == '띤또레또') {
      alert('띤또레또 용지는 UV코팅이 안되는 용지 입니다.');
      return false;
    }
  }
  return true;
}

function afterprocUncheck() {
  if( $('input:checkbox[name="is_coating"]').prop('checked')) {
    $('#is-coating').trigger('click');
  }

  if( $('input:checkbox[name="is_osi"]').prop('checked')) {
    $('#is-osi').trigger('click');
  }

  if( $('input:checkbox[name="is_osifold"]').prop('checked')) {
    $('#is-osifold').trigger('click');
  }

  if( $('input:checkbox[name="is_folding"]').prop('checked')) {
    $('#is-folding').trigger('click');
  }

  if( $('input:checkbox[name="is_mising"]').prop('checked')) {
    $('#is-mising').trigger('click');
  }

  if( $('input:checkbox[name="is_tomson"]').prop('checked')) {
    $('#is-tomson').trigger('click');
  }

  if( $('input:checkbox[name="is_press"]').prop('checked')) {
    $('#is-press').trigger('click');
  }

  if( $('input:checkbox[name="is_foil"]').prop('checked')) {
    $('#is-foil').trigger('click');
  }

  if( $('input:checkbox[name="is_punching"]').prop('checked')) {
    $('#is-punching').trigger('click');
  }

  if( $('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    $('#is-uvscodix').trigger('click');
  }

  if( $('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    $('#is-foilscodix').trigger('click');
  }
}


//라미넥스코팅은 일반지 150g, 고급지 130g 이상부터 코팅이 됩니다.
function checkRamiCoatingPaper() {
  if ($('#is-ramicoating').prop('checked')) {
    let cover_cate = $('select[name="cover_cate"] option:selected').val();
    let cover_name = $('select[name="cover_name"] option:selected').val();
    let gram = Number($('select[name="cover_gram"] option:selected').attr('data-gram'));

    if (cover_cate == '일반지' && gram < 150) {
      alert('라미넥스코팅은 일반지 150g 이상부터 가능합니다.');
      return false;
    }

    if (cover_cate == '고급지' && gram < 130) {
      alert('라미넥스코팅은 고급지 130g 이상부터 가능합니다.');
      return false;
    }
  }
  return true;
}


//도무송은 일반지 150g, 고급지 130g 이상부터 코팅이 됩니다.
function checkTomsonPaper() {
  if ($('#is-tomson').prop('checked')) {
    let cover_cate = $('select[name="cover_cate"] option:selected').val();
    let cover_name = $('select[name="cover_name"] option:selected').val();
    let gram = Number($('select[name="cover_gram"] option:selected').attr('data-gram'));

    let cutsize_w = Number($('#cutsize-w').val());
    let cutsize_h = Number($('#cutsize-h').val());

    $('.tomson-width').each(function () {
      if ($(this).val() > cutsize_w) {
        alert('도무송 가로사이즈가 큽니다.\n' + cutsize_w + ' 이하로 입력해 주세요.');
        $(this).val('50');
        return false;
      }
    });

    $('.tomson-height').each(function () {
      if ($(this).val() > cutsize_h) {
        alert('도무송 세로사이즈가 큽니다.\n' + cutsize_h + ' 이하로 입력해 주세요.');
        $(this).val('50');
        return false;
      }
    });


    if (cover_cate == '일반지' && gram < 150) {
      alert('도무송은 일반지 150g 이상부터 가능합니다.');
      return false;
    }

    if (cover_cate == '고급지' && gram < 130) {
      alert('도무송은 고급지 130g 이상부터 가능합니다.');
      return false;
    }
  }
  return true;
}

//442x302 이상은 오렌지별색 불가
function checkAddColorPaper() {
  //캔버스 포스터
  const max = Math.max(_cutsize_w, _cutsize_h);
  const min = Math.min(_cutsize_w, _cutsize_h);
  const v = $('#cover-add-color').val();

  if (v == '오렌지' || v == '단면 오렌지' || v == '양면 오렌지') {
    if (max > 442 || min > 302) {
      alert('442x302 사이즈 이상은 ' + v + '선택이 불가능 합니다.');
      return false;
    }
  }

  if (v == '단면 백색' || v == '양면 백색') {
    if (max > 442 || min > 302) {
      alert('442x302 사이즈 이상은 ' + v + '선택이 불가능 합니다.');
      return false;
    }
  }


  return true;
}


//스튜디오컬렉션용지 440x300 이하사이즈만 가능
function checkStudioPaper() {
  if ($('#cover-cate').val() == '스튜디오컬렉션') {
    const max = Math.max(_cutsize_w, _cutsize_h);
    const min = Math.min(_cutsize_w, _cutsize_h);

    if (max > 440 || min > 300) {
      alert('스튜디오컬렉션용지는 440mm x 300mm 이하사이즈만 제작가능합니다.');
      return false;
    }
  }
  return true;
}

//용지사이즈 제한
function checkPapersize() {
  const w = Number($('#cutsize-w').val());
  const h = Number($('#cutsize-h').val());
  const max = Math.max(w, h);
  const min = Math.min(w, h);
  const machine = $('input:radio[name="machine"]:checked').val();

  if( w < 50 || h < 50) {
    alert('용지 최소사이즈는 50mmx50mm 입니다.');
    return false;
  }

  if( goods_code == 'dpostcard') {
    if( max > 400 || min > 300) {
      alert('엽서 최대 사이즈는 400mmx300mm 입니다.');
      return false;
    }
  }
  else {
    if( mcode == '31') {
      //백색인쇄 포스터
      if( max > 441 || min > 301) {
        alert('백색인쇄 포스터 최대 사이즈는 441mmx301mm 입니다.');
        return false;
      }
    }
    else if (mcode == '33') {
      //PET 포스터
      if (max > 441 || min > 301) {
        alert('PET포스터 용지 최대사이즈는 301x441 입니다.');
        return false;
      }
    }
    else {
      if( machine == 'indigo') {
        if( min > 506 || max > 736) {
          alert('인디고인쇄가 불가능한 용지사이즈 입니다.\n가능한 용지사이즈는 506x736 입니다.');
          return false;
        }
      }
      else if( machine == 'toner') {
        const gram = $('select[name="cover_gram"] option:selected').val();

        if( gram == '스노우 200g' || gram == '아트지 200g' || gram == '랑데뷰 내츄럴 190g') {
          if( min > 300 || max > 908) {
            alert('토너인쇄가 불가능한 용지사이즈 입니다.\n가능한 용지사이즈는 300x908 입니다.');
            return false;
          }
        }
        else {
          if( min > 304 || max > 448) {
            alert('토너인쇄가 불가능한 용지사이즈 입니다.\n가능한 용지사이즈는 304x448 입니다.');
            return false;
          }
        }
      }
    }
  }

  return true;
}

//후가공선택시 체크사항
function checkAfterproc() {

  var max = Math.max(_cutsize_w, _cutsize_h);
  var min = Math.min(_cutsize_w, _cutsize_h);

  if ($('#is-uvscodix').prop('checked')) {
    let w = Number($('input[name="uvscodix_width"]').val());
    let h = Number($('input[name="uvscodix_height"]').val());

    let max_ = Math.max(w, h);
    let min_ = Math.min(w, h);

    if (max_ > 711 || min_ > 486) {
      if( _cutsize_w > _cutsize_h) {
        alert('디지털 부분UV(스코딕스는) 711mm x 456mm 까지만 가능합니다.');
      }
      else {
        alert('디지털 부분UV(스코딕스는) 486mm x 711mm 까지만 가능합니다.');
      }

      $('input[name="uvscodix_width"]').val('100');
      $('input[name="uvscodix_height"]').val('100');
      return false;
    }
  }

  if( $('#is-foilscodix').prop('checked') && $('#is-coating').prop('checked') == false) {
    if( $('input:radio[name="machine"]:checked').val() == 'toner' ) {
      alert('토너인쇄에서는 코팅이 없는 경우 디지털 박(스코딕스)이 불가합니다.');
      return false;
    }
  }

  if( $('#is-uvscodix').prop('checked') && $('#is-coating').prop('checked') == false) {
    if( $('input:radio[name="machine"]:checked').val() == 'toner' ) {
      alert('토너인쇄에서는 코팅이 없는 경우 디지털 부분UV(스코딕스)이 불가합니다.');
      return false;
    }
  }

  if( $('#is-foil').prop('checked')) {
    if( max < 70 || min < 50 ) {
      alert('동판박 최소 사이즈는 70x50 입니다.');
      return false;
    }
  }


  let paper = $('select[name="paper_size"] option:selected').val();

  if ($('#is-ramicoating').prop('checked')) {
    if (paper == 'a5' || paper == 'a4' || paper == 'a3' || paper == 'b5' || paper == 'b4') {
      return true;
    } else {
      alert('라미넥스코팅은 A5/A4/A3 와 B5/B4 사이즈만 가능합니다.');

      setTimeout(()=> {
        $('#is-ramicoating').trigger('click');
      },300);

      return false;
    }
  }

  return true;
}

function checkOsiDouble() {
  //오시,오시+접지 중복체크
  let is_osi = $('#is-osi').prop('checked') ? 'Y' : 'N';
  let is_osifold = $('#is-osifold').prop('checked') ? 'Y' : 'N';

  if (is_osi == 'Y' && is_osifold == 'Y') {
    alert('오시와 오시접지는 중복 선택하실 수 없습니다.');
    return false;
  }

  return true;
}

//선방용지는 오늘/내일출고 안되게
function checkEarlyRelease() {
  if( $('#cover-cate').val() == '선방종이입고') {
    if( $('#is-today').prop('checked')) {
      alert('선방종이입고는 오늘출고가 안됩니다.');
      $('#is-today').prop('checked',false).change();
      return false;
    }

    if( $('#is-tomorrow').prop('checked')) {
      alert('선방종이입고는 내일출고가 안됩니다.');
      $('#is-tomorrow').prop('checked',false).change();
      return false;
    }
  }
  return true;
}

//평량과 오시,접지 활성화체크
function gramAndOsi() {
  let gram = Number($('select[name="cover_gram"] option:selected').attr('data-gram'));
  const cover_cate = $('#cover-cate').val();
  let s_gram = 150;

  if( cover_cate == '일반지') {
    s_gram = 150;
  }
  else if( cover_cate == '고급지') {
    s_gram = 130;
  }
  else if( cover_cate == '선방종이입고') {
    s_gram = 150;
  }
  else {
    s_gram = 130;
  }

  if ( cover_cate != '선방종이입고' && gram < s_gram) {
    $('#is-osi').prop('checked', false);
    $('#is-osi').prop('disabled', true);
    $('label[for="is-osi"]').css('opacity', 0.3);
    $('#toggle-afterproc-osi').hide();

    $('#is-osifold').prop('checked', false);
    $('#is-osifold').prop('disabled', true);
    $('label[for="is-osifold"]').css('opacity', 0.3);
    $('#toggle-afterproc-osifold').hide();

    $('#is-folding').prop('disabled', false);
    $('label[for="is-folding"]').css('opacity', 1)
  } else {
    $('#is-osi').prop('disabled', false);
    $('label[for="is-osi"]').css('opacity', 1);

    $('#is-osifold').prop('disabled', false);
    $('label[for="is-osifold"]').css('opacity', 1);

    $('#is-folding').prop('checked', false);
    $('#is-folding').prop('disabled', true);
    $('label[for="is-folding"]').css('opacity', 0.3);
    $('#toggle-afterproc-folding').hide();
  }
}

function checkTomsonwidth() {
  //재단사이즈보다 10mm 작아야 함
  //최대 재단사이즈와 같음

  if ($('#is-tomson').prop('checked')) {
    let w = Number($('input[name="tomson_width1"]').val());
    let h = Number($('input[name="tomson_height1"]').val());

    let cut_max = Math.max(_cutsize_w, _cutsize_h);
    let custom_max = Math.max(w, h);

    if (custom_max > cut_max) {
      alert('인쇄물 가로사이즈보다 도무송 가로사이즈가 큽니다.');
      return false;
    }

    w = Number($('input[name="tomson_width2"]').val());
    h = Number($('input[name="tomson_height2"]').val());

    if (w > _cutsize_w) {
      alert('인쇄물 가로사이즈보다 도무송 가로사이즈가 큽니다.');
      return false;
    }

    if (h > _cutsize_h) {
      alert('인쇄물 세로사이즈보다 도무송 세로사이즈가 큽니다.');
      return false;
    }

    w = Number($('input[name="tomson_width3"]').val());
    h = Number($('input[name="tomson_height3"]').val());

    if (w > _cutsize_w) {
      alert('인쇄물 가로사이즈보다 도무송 가로사이즈가 큽니다.');
      return false;
    }

    if (h > _cutsize_h) {
      alert('인쇄물 세로사이즈보다 도무송 세로사이즈가 큽니다.');
      return false;
    }
  }

  return true;
}

function checkAfterpaper() {
  if( $.urlParam('work') != 'reorder') {
    if( $('#after-paper-name-wrap').length > 0) {
      if( $('#after-paper-name').val().length < 2) {
        alert('선방종이입고 용지명을 입력해 주세요.');
        $('#after-paper-name').focus();
        return false;
      }
    }

    if( $('#after-paper-gram-wrap').length > 0) {
      if( $('#after-paper-gram').val().length < 2) {
        alert('선방종이입고 평량을 입력해 주세요.(숫자만입력)');
        $('#after-paper-gram').focus();
        return false;
      }
    }
  }

  return true;
}

function checkMachine() {
  const is_toner = $('select[name="cover_gram"] option:selected').attr('data-istoner');
  const is_indigo = $('select[name="cover_gram"] option:selected').attr('data-isindigo');
  const machine = $('input:radio[name="machine"]:checked').val();

  if( $.urlParam('work') != 'reorder') {
    if( machine == 'indigo' && is_indigo == 'N') {
      alert('인디고를 지원하지 않는 용지입니다.');
      $('label[for="machine-toner"]').trigger('click');
      //$('#machine-indigo').prop('disabled',true);
      return false;
    }

    if( machine == 'toner' && is_toner == 'N') {
      alert('토너를 지원하지 않는 용지입니다.');
      $('label[for="machine-indigo"]').trigger('click');
      //$('#machine-toner').prop('disabled',true);
      return false;
    }
  }

  /*
  if( is_indigo == 'Y') $('#machine-indigo').prop('disabled',false);
  if( is_toner == 'Y') $('#machine-toner').prop('disabled',false);
  */

  return true;
}


function changeColorList(mcode,goods_code,machine) {
  if( machine == 'toner') {
    $('label[for="cover-color03"]').hide();
    $('label[for="cover-color04"]').hide();

    $('label[for="cover-color05"]').show();
    $('label[for="cover-color06"]').show();

    const h = `<option value="" data-val="">색상추가없음</option>
              <option value="금색" data-val="0.8">금색</option>
              <option value="금색베다" data-val="2">금색베다</option>
              <option value="은색" data-val="0.8">은색</option>
              <option value="은색베다" data-val="2">은색베다</option>`;

    $('#cover-add-color').html(h);
    $('#cover-add-color').val('');
  }
  else {
    $('label[for="cover-color03"]').show();
    $('label[for="cover-color04"]').show();

    $('#cover-color03').val('양면먹2도');
    $('label[for="cover-color03"]').text('양면 먹2도');
    $('#cover-color04').val('단면먹1도');
    $('label[for="cover-color04"]').text('단면 먹1도');

    $('label[for="cover-color05"]').hide();
    $('label[for="cover-color06"]').hide();

    const h = `
      <option value="" data-val="0">색상추가없음</option>
      <option value="단면 백색" data-val="0.5">단면 백색</option>
      <option value="양면 백색" data-val="1">양면 백색</option>
      <option value="단면 오렌지" data-val="0.5">단면 오렌지</option>
      <option value="양면 오렌지" data-val="1">양면 오렌지</option>`;

    $('#cover-add-color').html(h);
    $('#cover-add-color').val('');
  }

  if( goods_code == 'dpostcard' || goods_code == 'dmynamecard') {
    if( machine == 'toner') {
      $('#cover-color01').prop('checked',true).change();
      $('label[for="cover-color03"]').hide();
      $('label[for="cover-color04"]').hide();

      const h = `<option value="" data-val="">색상추가없음</option>
              <option value="금색" data-val="0.8">금색</option>
              <option value="금색베다" data-val="2">금색베다</option>
              <option value="은색" data-val="0.8">은색</option>
              <option value="은색베다" data-val="2">은색베다</option>`;

      $('#cover-add-color').html(h);
      $('#cover-add-color').val('');
    }
    else {
      $('label[for="cover-color03"]').show();
      $('label[for="cover-color04"]').show();

      const h = `
      <option value="" data-val="0">색상추가없음</option>
      <option value="단면 백색" data-val="0.5">단면 백색</option>
      <option value="양면 백색" data-val="1">양면 백색</option>
      <option value="단면 오렌지" data-val="0.5">단면 오렌지</option>
      <option value="양면 오렌지" data-val="1">양면 오렌지</option>`;

      $('#cover-add-color').html(h);
      $('#cover-add-color').val('');
    }
  }

  $('#cover-color-caution').hide();
}

function checkPetpaper() {
  /*
  const cover_name = $('select[name="cover_name"] option:selected').val();
  if( cover_name == '투명 PET지' || cover_name == '백색 PET지') {
    const t = $('input[name="cover_color"]:checked').val();

    if( t == '양면8도컬러' || t == '양면먹2도') {
      $('#cover-color02').prop('checked',true);
    }

    $('#cover-color01').attr('disabled',true);
    $('#cover-color03').attr('disabled',true);
    $('label[for="cover-color01"]').css('opacity','0.3');
    $('label[for="cover-color03"]').css('opacity','0.3');
  }
  else {
    $('#cover-color01').attr('disabled',false);
    $('#cover-color03').attr('disabled',false);
    $('label[for="cover-color01"]').css('opacity','1');
    $('label[for="cover-color03"]').css('opacity','1');
  }

   */
}

function initData() {
  const obj = _form_history;
  const job_w = Number( obj['cutsize_w']) + 4;
  const job_h = Number( obj['cutsize_h']) + 4;
  $('input:radio[name="machine"]:input[value="' + obj['machine'] + '"]').prop("checked", true);
  $('#paper-size').val(obj['paper_size']);
  $('#cutsize-w').val(obj['cutsize_w']);
  $('#cutsize-h').val(obj['cutsize_h']);
  $('#jobsize-w').val(job_w);
  $('#jobsize-h').val(job_h);
  $('#cover-cate').val(obj['cover_cate']);
  $('#cover-name').html(obj['pp1']);
  $('#cover-gram').html(obj['pp2']);
  $('#cover-name').val(obj['cover_name']);
  $('#cover-gram').val(obj['cover_gram']);

  if( obj['is_foilscodix'] == undefined) {
    $('#is-foilscodix').prop('checked',false);
    $('#toggle-afterproc-foilscodix').hide();
  }
  else {
    $('#is-foilscodix').prop('checked',true);
    $('#toggle-afterproc-foilscodix').show();
  }

  if( obj['is_uvscodix'] == undefined) {
    $('#is-uvscodix').prop('checked',false);
    $('#toggle-afterproc-uvscodix').hide();
  }
  else {
    $('#is-uvscodix').prop('checked',true);
    $('#toggle-afterproc-uvscodix').show();
  }

  if( obj['is_coating'] == undefined) {
    $('#is-coating').prop('checked',false);
    $('#toggle-afterproc-coating').hide();
  }
  else {
    $('#is-coating').prop('checked',true);
    $('#toggle-afterproc-coating').show();
  }

  $('#cover-add-color').val(obj['cover_add_color']);
  calcPrice();
}


function epriceHandler() {
  $('.eprice').each(function () {
    $(this).change(function () {
      g_target_name = $(this).attr('name');
      g_target_id = $(this).attr('id');

      makeCutsize();
      makeGlobalVal();
      gramAndOsi();

      //checkPetpaper();

      //선방종이입고 입력값체크
      if( !checkAfterpaper()) {
        item_restore(g_target_id, g_target_name, 'checkafterpaper');
        return false;
      }


      if( $.urlParam('work') != 'debug') {
        //용지사이즈 제한
        if (!checkPapersize()) {
          setTimeout(()=>{
            initData();
          },200);
          return false;
        }
      }

      if (!checkEtcPaper()) {
        setTimeout(()=>{
          initData();
        },200);
        return false;
      }

      //일반지 150g미만, 고급지 130g미만은 코팅안됨
      if (!checkCoatingPaper()) {
        setTimeout(()=>{
          initData();
        },200);
        return false;
      }

      if( !checkPaperkind()) {
        setTimeout(()=>{
          $('#is-uvscodix').trigger('click');
          initData();
        },200);
        return false;
      }

      if( $.urlParam('work') != 'debug') {
        if (!checkOsiSize()) {
          setTimeout(()=>{
            $('#is-osi').trigger('click');
            calcPrice();
          },200);
          return false;
        }
      }

      if (!checkOsiDouble()) {
        setTimeout(()=>{
          $('#is-osifold').trigger('click');
          calcPrice();
        },200);
        return false;
      }



      if (!checkOsifoldSize()) {
        setTimeout(()=>{
          $('#is-osifold').trigger('click');
          calcPrice();
        },200);
        return false;
      }

      if (!checkFoldingSize()) {
        setTimeout(()=>{
          $('#is-folding').trigger('click');
          calcPrice();
        },200);
        return false;
      }

      //일반지 150g미만, 고급지 130g미만은 라미넥스코팅안됨
      if (!checkRamiCoatingPaper()) {
        setTimeout(()=>{
          $('#is-coating').trigger('click');
          initData();
        },200);
        return false;
      }

      //일반지 150g미만, 고급지 130g미만은 도무송안됨
      if (!checkTomsonPaper()) {
        setTimeout(()=>{
          $('#is-tomson').trigger('click');
          initData();
        },200);
        return false;
      }

      //442x302 사이즈 이상은 오렌지별색 선택불가
      if (!checkAddColorPaper()) {
        setTimeout(()=>{
          initData();
        },200);
        return false;
      }

      if (!checkAfterproc()) {
        setTimeout(()=>{
          initData();
        },200);
        return false;
      }

      if( !checkEarlyRelease()) {
        item_restore(g_target_id, g_target_name, 'checkearlyrelease');
        return false;
      }

      //일반지 150g,고급지 160g 기준 오시,오시접지
      if (!checkAfterprocPaper()) {
        setTimeout(()=>{
          initData();
        },200);
        return false;
      }

      //스튜디오컬렉션용지 440x300 이하사이즈만 가능
      if (!checkStudioPaper()) {
        setTimeout(()=>{
          initData();
        },200);
        return false;
      }

      //도무송 입력사이즈 체크
      if (!checkTomsonwidth()) {
        setTimeout(()=>{
          $('#is-tomson').trigger('click');
          initData();
        },200);

        return false;
      }

      if( $.urlParam('work') != 'debug') {
        if (!checkMachine()) {
          //item_restore(g_target_id, g_target_name, 'checkmachine');
          return false;
        }
      }

      changeData();
      calcPrice();

    });
  });
}

function paperInit() {
  let paper = '스노우';
  let paper_db = $_jongis;

  if (mcode == '31') {
    paper = '딤플 블랙';
  } else if(mcode == '32') {
    paper = '무광인화지';
  } else if(mcode == '33') {
    paper = '백색 PET지';
  } else if(mcode == '34') {
    paper = '포토 캔버스';
  } else if(mcode == '37') {
    paper = '반누보 스노우화이트';
  } else if(mcode == '38') {
    paper = '스노우';
  } else if(mcode == '39') {
    //paper = '스튜디오컬렉션 블랙';
    paper = '토쉐블랙';
  } else if(mcode == '40') {
    paper = '투명 PET지';
  } else if(mcode == '41') {
    paper = '샌드위치 레드';
  } else if(mcode == '51') {
    paper = '네오CCP';
  } else if(mcode == '150') {
    paper = '반누보 스노우화이트';
  }


  let db = _.filter(paper_db, function (o) {
    return (o.paper == paper);
  });

  let $combo = $('#cover-gram');

  $combo.empty();

  for (let i = 0; i < db.length; i++) {
    const gram = db[i]['gram2'].replace('g', '');
    let sel = '';

    if( goods_code == 'dleaflet') {
      if (gram == '200') sel = 'selected';
    }
    else if( goods_code == 'dposter') {
      if (mcode == '30') {
        if (gram == '200') sel = 'selected';
      }
    }
    else if( goods_code == 'dmynamecard') {
      if( mcode == '38') {
        if( gram == '250') sel = 'selected';
      }
    }
    else if( goods_code == 'dpostcard') {
      if( gram == '300') sel = 'selected';
    }
    else if( goods_code == 'dpackage') {
      if( gram == '300') sel = 'selected';
    }

    let obj1 = encodeURIComponent(JSON.stringify(db[i]['obj']));
    let obj2 = encodeURIComponent(JSON.stringify(db[i]['toner']));
    let obj3 = encodeURIComponent(JSON.stringify(db[i]['indigo']));

    const _toner = db[i]['is_toner'];
    const _indigo = db[i]['is_indigo'];
    let is_toner = 'N';
    let is_indigo= 'N';

    if( _toner.indexOf(mcode) > -1) {
      is_toner = 'Y';
    }

    if( _indigo.indexOf(mcode) > -1) {
      is_indigo = 'Y';
    }

    $combo.append('<option ' + sel + ' value="' + db[i]['product'] + '" data-thick="' + db[i]['thick'] + '" data-gram="' + gram + '" data-max="' + db[i]['max'] + '" data-nuvera="' + db[i]['is_nuvera'] + '" data-obj="' + obj1 + '" data-toner="' + obj2 + '" data-indigo="' + obj3 + '" data-dc="' + db[i]['is_dc'] + '" data-istoner="' + is_toner + '" data-isindigo="' + is_indigo + '" data-req="' + db[i]['req_coating'] + '">' + db[i]['gram'] + '</option>\n');
  }
}

$(function() {
  $.ajax({
    headers: {
      'X-CSRF-TOKEN': $('input[name="_token"]').val()
    },
    type: 'POST',
    url: '/order/ajax',
    dataType: 'JSON',
    data: {
      'action': 'GET-PAPER',
      'mcode': mcode,
    },
    async: false,
    error: function (xhr, ajaxOptions, thrownError) {
      alert(ajaxOptions + "," + thrownError);
    },
    success: function (data, textStatus) {
      $_jongis = data['dbs'];
    }
  });

  paperInit();

  if( $.urlParam('machine') == 'toner' && mcode != '41' && mcode != '30' && mcode != '31' && mcode != '51') {
    $('#machine-toner').prop('checked',true);
    //$('label[for="machine-toner"]').trigger('click');
    changeColorList(mcode,goods_code,'toner');
  }

  setMaesu();

  // price 변화인자에 따른핸들러
  epriceHandler();

  $(document).on('change', 'input:radio[name="osi_line"]', function (e) {
    calcPrice();
  });

  $(document).on('change', 'input:radio[name="machine"]', function (e) {
    const machine = $(this).val();

    // 해상도 셀렉트박스 일단제거
    $('#cover-color-opt').remove();
    if( goods_code == 'dposter' || goods_code == 'dleaflet' || goods_code == 'dpackage') {
      $('#cover-color02').prop('checked',true);
    }

    /*
    const paper_name = $('select[name="cover_name"] option:selected').val();
    if( machine == 'toner' && paper_name == '스노우') {
      $('#cover-gram').val('스노우 200g').change();
    }
    */

    changeColorList(mcode,goods_code,machine);

    if( mcode == '48') {
      setMaesu();
    }

  });


  //먹1,2도는 추가색상 불가
  $(document).on('change', '#cover-add-color', function (e) {
    /*
    const val = $('input:radio[name="cover_color"]:checked').val();
    if( val == '양면먹2도' || val == '단면먹1도') {
      alert('추가인쇄할 수 없는 색상입니다.');
      $(this).val('');
    }

     */

    let starcolor = $('#cover-add-color').val();

    if (starcolor != '' && $('#machine-toner').prop('checked') ) {
      $('#cover-color-caution').show();
    } else {
      $('#cover-color-caution').hide();
    }

  });


  // 후가공 추가체크
  $(document).on('click', 'input.afterproc', function (e) {
    let target = $(this).attr('data-target');
    let bool = 'Y';

    if( $('#is-tomson').prop('checked')) {
      if( target == 'ramicoating' && $('#is-ramicoating').prop('checked')) {
        alert('라미넥스코팅은 도무송과같이 주문하실 수 없습니다.');
        setTimeout(() => {
          $('#is-ramicoating').trigger('click');
        },300);
      }
    }


    if( $('#is-ramicoating').prop('checked')) {
      if( target == 'tomson' && $('#is-tomson').prop('checked')) {
        alert('도무송은 라미넥스코팅과같이 주문하실 수 없습니다.');
        setTimeout(() => {
          $('#is-tomson').trigger('click');
        },300);
      }
    }

    if( $('#is-coating').prop('checked') && $('#is-embo').prop('checked')) {
      alert('코팅과 송진엠보 중복 선택시 코팅이 입혀진 면에는 송진엠보가 않입혀 질수 있습니다.');
    }

    if( $(this).prop('checked')) {
      if( sumAfterproc() > 10) {
        if( $('#is-today').prop('checked')) {
          alert('오늘출고시 후가공은 재단,코팅,오시,접지,오시+접지,미싱,라미넥스,타공만 가능합니다.');
          $(this).prop('checked',false).trigger('click');
          $('#toggle-afterproc-' + target).fadeToggle();
          bool = 'N';
          return;
        }
      }

      if( sumAfterproc() > 15) {
        if( $('#is-tomorrow').prop('checked')) {
          alert('내일출고시 후가공은 재단,코팅,오시,접지,오시+접지,미싱,라미넥스,타공,도무송만 가능합니다.');
          $(this).prop('checked',false).trigger('click');
          bool = 'N';
          $('#toggle-afterproc-' + target).fadeToggle();
          return;
        }
      }
    }


    const min = Math.min(_cutsize_w, _cutsize_h);
    const max = Math.max(_cutsize_w, _cutsize_h);

    const arr_after_procs_spare = [
      { name:'is_cutting', val:0 },
      { name:'is_coating', val:2 },
      { name:'is_osi', val:5 },
      { name:'is_mising', val:5 },
      { name:'is_folding', val:5 },
      { name:'is_osifold', val:5 },
      { name:'is_rounding', val:0 },
      { name:'is_tomson', val:0 },
      { name:'is_punching', val:0 },
      { name:'is_press', val:10 },
      { name:'is_foil', val:10 },
      { name:'is_numbering', val:0 },
      { name:'is_qrcode', val:0 },
      { name:'is_quick', val:0 },
      { name:'is_embo', val:0 },
      { name:'is_barcode', val:0 },
      { name:'is_ramicoating', val:0 },
      { name:'is_uvscodix', val:3 },
      { name:'is_foilscodix', val:3 },
    ];

    /*
      특정용지 코딩되어야만 스코딕스 할 수 있도록
    */
    const req_coating = $('select[name="cover_gram"] option:selected').attr('data-req');

    if( req_coating == 'Y') {
      if($('#is-coating').prop('checked') == false) {
        if($('#is-uvscodix').prop('checked') == true) {
          alert('디지털 부분UV시 코팅이 필요한 용지 입니다.');
          setTimeout(()=>{
            $('#is-coating').trigger('click');
          },300);
        }

        if($('#is-foilscodix').prop('checked') == true) {
          alert('디지털박 선택시 코팅이 필요한 용지 입니다.');
          setTimeout(()=>{
            $('#is-coating').trigger('click');
          },300);
        }
      }
    }


    let afterprocs_sum = 0;
    let quick_sum = 0;
    $('input.afterproc:checkbox').each(function(e) {
      if( $(this).prop('checked')) {
        const nm = $(this).attr('name');
        if( nm == 'is_rounding' || nm == 'is_cutting') {
        }
        else if( nm == 'is_quick') {
          quick_sum++;
        }
        else {
          afterprocs_sum++;
        }
      }
    });

    if( target == 'quick') {
      if( afterprocs_sum > 0) {
        alert('선택하신 후가공은 즉석명함으로 제작이 불가능합니다.');
        return false;
      }
    }
    else {
      if( target != 'rounding' && quick_sum > 0) {
        alert('선택하신 후가공은 즉석명함으로 제작이 불가능합니다.');
        return false;
      }
    }

    if (target == 'foilscodix') {
      let min2 = min - 10;
      if ($(this).prop('checked')) {
        if (min < 100) {
          $('input:text[name="foilscodix1_ww"]').val(min2);
          $('input:text[name="foilscodix1_hh"]').val(min2);
        }
      }
    }
    else if( target == 'embo') {
      if( max > 90 || min > 55 ) {
        alert('송진엠보 최대 사이즈는 90x55 입니다.');
        bool = 'N';
        return false;
      }
    }
    else if( target == 'press') {
      if( max < 70 || min < 50 ) {
        alert('형압 최소 사이즈는 70x50 입니다.');
        bool = 'N';
        return false;
      }
    }
    else if( target == 'foil') {
      if( max < 70 || min < 50 ) {
        alert('동판박 최소 사이즈는 70x50 입니다.');
        bool = 'N';
        return false;
      }
    }

    if( bool == 'Y') {
      $('#toggle-afterproc-' + target).fadeToggle();
    }

    //주문매수 달라질수 있기 때문(디지털박,디지털UV)
  });

  // 규격선택시 재단사이즈 수정
  $(document).on('change', '#paper-size', function (e) {
    var $paper_size = $('select[name="paper_size"] option:selected');

    if ($paper_size.val() == 'free_size') {
      try {
        if(is_mobile == 'Y') {
          $('#paper-size-block2').show();
        }
      } catch(e) {}

      $('#cutsize-w').attr('readonly', false);
      $('#cutsize-h').attr('readonly', false);
      $('#cutsize-w').css('background', '#f3f781');
      $('#cutsize-h').css('background', '#f3f781');
      $('#cutsize-w').focus();
    } else {
      $('#cutsize-w').attr('readonly', true);
      $('#cutsize-h').attr('readonly', true);
      $('#cutsize-w').css('background', '#e9ecef');
      $('#cutsize-h').css('background', '#e9ecef');
    }

    setMaesu();
    $('#maesu').change();

    //후가공 사이즈문제로 언체크
    afterprocUncheck();
  });

  // 용지 3단콤보1
  $(document).on('change', '.paper-cate', function (e) {
    let key = $(this).val();

    if( $('#after-paper-name-wrap').length > 0) $('#after-paper-name-wrap').remove();
    if( $('#after-paper-gram-wrap').length > 0) $('#after-paper-gram-wrap').remove();

    let db = _.filter($_jongis, {'cate': key});
    let $combo = $(this).closest('.three-combo').find('.paper-name');
    $combo.empty();

    let db2 = _.uniqBy(db, 'paper');

    for (let i = 0; i < db2.length; i++) {
      if ($combo.attr('id') == 'cover-name') {
        if (db2[i]['paper'] == '스노우' || db2[i]['paper'] == '팝셋' || db2[i]['paper'] == '딤플 블랙' || db2[i]['paper'] == 'M러프 EW' || db2[i]['paper'] == '랑데뷰 내츄럴' || db2[i]['paper'] == '선방용지') {
          $combo.append('<option value="' + db2[i]['paper'] + '" selected>' + db2[i]['paper'] + '</option>');
        } else {
          $combo.append('<option value="' + db2[i]['paper'] + '">' + db2[i]['paper'] + '</option>');
        }
      } else {
        $combo.append('<option value="' + db2[i]['paper'] + '">' + db2[i]['paper'] + '</option>');
      }
    }

    $combo.trigger('change');
  });

  //용지 3단콤보2
  $(document).on('change', '.paper-name', function (e) {
    let key = $(this).val();
    let db = _.filter($_jongis, {'paper': key});

    let $combo = $(this).closest('.three-combo').find('.paper-gram');
    $combo.empty();

    for (let i = 0; i < db.length; i++) {
      const gram = db[i]['gram2'].replace('g', '');
      let sel = '';

      if (db[i]['default'] == 'Y') {
        sel = 'selected';
      }

      let obj1 = encodeURIComponent(JSON.stringify(db[i]['obj']));
      let obj2 = encodeURIComponent(JSON.stringify(db[i]['toner']));
      let obj3 = encodeURIComponent(JSON.stringify(db[i]['indigo']));

      const _toner = db[i]['is_toner'];
      const _indigo = db[i]['is_indigo'];

      let is_toner = 'N';
      let is_indigo= 'N';

      if( _toner.indexOf(mcode) > -1) {
        is_toner = 'Y';
      }

      if( _indigo.indexOf(mcode) > -1) {
        is_indigo = 'Y';
      }

      $combo.append('<option ' + sel + ' value="' + db[i]['product'] + '" data-thick="' + db[i]['thick'] + '" data-gram="' + gram + '" data-max="' + db[i]['max'] + '" data-nuvera="' + db[i]['is_nuvera'] + '" data-obj="' + obj1 + '" data-toner="' + obj2 + '" data-indigo="' + obj3 + '" data-dc="' + db[i]['is_dc'] + '" data-istoner="' + is_toner + '" data-isindigo="' + is_indigo + '" data-req="' + db[i]['req_coating'] + '">' + db[i]['gram'] + '</option>\n');
    }

    $combo.trigger('change');

    const req_coating = $('select[name="cover_gram"] option:selected').attr('data-req');

    if( req_coating == 'Y') {
      if($('#is-coating').prop('checked') == false) {
        if($('#is-uvscodix').prop('checked') == true) {
          alert('디지털 부분UV시 코팅이 필요한 용지 입니다.');
          setTimeout(()=>{
            $('#is-coating').trigger('click');
          },300);
        }

        if($('#is-foilscodix').prop('checked') == true) {
          alert('디지털박 선택시 코팅이 필요한 용지 입니다.');
          setTimeout(()=>{
            $('#is-coating').trigger('click');
          },300);
        }
      }
    }

  });


  $(document).on('change', '.paper-gram', function (e) {
    let key = $(this).val();

    $('#cover-name').show();
    $('#cover-gram').show();
    $('#label-paper-price').text('용지금액');

    if( $('#after-paper-name-wrap').length > 0) $('#after-paper-name-wrap').remove();
    if( $('#after-paper-gram-wrap').length > 0) $('#after-paper-gram-wrap').remove();

    if( key.indexOf('선방용지') > -1) {
      $('#cover-name').hide();
      $('#cover-gram').hide();
      $('#label-paper-price').text('기타비용');

      const layer1 = `
        <div class="d-flex align-items-center" id="after-paper-name-wrap">
          <div class="col-auto">용지명</div>
          <div class="col-auto pl-3"> <input type="text" name="after_paper_name" id="after-paper-name" class="form-control" style="width:150px" /> </div>
        </div>`;

      const layer2 = `
        <div class="d-flex align-items-center" id="after-paper-gram-wrap">
          <div class="col-auto pl-3">평량</div>
          <div class="col-auto pl-3"> <input type="text" name="after_paper_gram" id="after-paper-gram" class="form-control" style="width:100px" maxlength="3" numberOnly /> </div>
          <div class="col-auto pl-2">g</div>
        </div>`;

      $('#paper-name-wrap').append(layer1);
      $('#paper-gram-wrap').append(layer2);

      $("input:text[numberOnly]").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9-]/g, ""));
      });

      if( $.urlParam('work') != 'reorder') {
        alert('선방용지명을 입력해 주세요.');
        $('#after-paper-name').focus();
      }
    }

    // 토너인쇄 && 양면먹2도 or 단면먹1도 선택시 해상도 1200/2400
    if( $(this).val() == '미색모조 80g' ||
      $(this).val() == '미색모조 100g' ||
      $(this).val() == '미색모조 120g' ||
      $(this).val() == '백색모조 80g' ||
      $(this).val() == '백색모조 100g' ||
      $(this).val() == '백색모조 120g') {
      if( $('#machine-toner').prop('checked')) {
        if( $('#cover-color-opt').length > 0) {
          $('#cover-color-opt').html( '<option value="2400" data-val="0.8">해상도 2400</option> <option value="1200" data-val="0.5">해상도 1200</option>');
          $('#cover-color-opt').change();
        }
      }
    }
    else {
      if( $('#machine-toner').prop('checked')) {
        if( $('#cover-color-opt').length > 0) {
          $('#cover-color-opt').html( '<option value="2400" data-val="0.8">해상도 2400</option>');
          $('#cover-color-opt').change();
        }
      }
    }

  });

  // 오시 가로세로 조절
  $(document).on('click', '#toggle-afterproc-osi .btn-switch-psize', function (e) {
    if ($(this).attr('data-sizemode') == 'large') {
      $(this).attr('data-sizemode', 'small');
    } else {
      $(this).attr('data-sizemode', 'large');
    }
    makeOsiDisplay();
  });

  // 오시접지 페이퍼 가로세로
  $(document).on('click', '#toggle-afterproc-osifold .btn-switch-psize', function (e) {
    if ($(this).attr('data-sizemode') == 'large') {
      $(this).attr('data-sizemode', 'small');
    } else {
      $(this).attr('data-sizemode', 'large');
    }
    makeOsifoldDisplay();
  });

  // 미싱페이퍼 가로세로
  $(document).on('click', '#toggle-afterproc-mising .btn-switch-psize', function (e) {
    if ($(this).attr('data-sizemode') == 'large') {
      $(this).attr('data-sizemode', 'small');
    } else {
      $(this).attr('data-sizemode', 'large');
    }
    makeMisingDisplay();
  });


  $(document).on('change', 'input:radio[name="cover_color"]', function (e) {
    $('#cover-add-color').prop('disabled',false);

    //양면먹2도, 단면 먹1도 선택시 추가색상 없음.
    /*
    if( $(this).val() == '양면먹2도' || $(this).val() == '단면먹1도') {
      $('#cover-add-color').val('');
      $('#cover-add-color').prop('disabled',true);
    }

     */

    /*
    const machine = $('input:radio[name="machine"]:checked').val();
    const val = $(this).val();
    if( machine == 'toner') {
      $('#cover-add-color').val('');
      $('#cover-add-color').prop('disabled',true);
    }

    const cover_name = $('select[name="cover_name"] option:selected').val();
    if( cover_name == '투명 PET지') {
    }
    else {
      if( val.indexOf('먹2도') > -1 || val.indexOf('먹1도') > -1) {
        $('#cover-add-color').val('');
        $('#cover-add-color').prop('disabled',true);
      }
    }
    */

    // 토너선택 && 양면먹2도, 단면 먹1도 선택시
    const id = $(this).attr('id');
    let h1 = '';
    $('#cover-color-opt').remove();

    if( $('#machine-toner').prop('checked')) {
      if( id == 'cover-color05' || id == 'cover-color06') {
        let opts = '<option value="2400" data-val="0.8">해상도 2400</option>';

        // 토너인쇄 && 양면먹2도 or 단면먹1도 선택시 해상도 1200/2400
        if( $('#cover-gram').val() == '미색모조 80g' ||
          $('#cover-gram').val() == '미색모조 100g' ||
          $('#cover-gram').val() == '미색모조 120g' ||
          $('#cover-gram').val() == '백색모조 80g' ||
          $('#cover-gram').val() == '백색모조 100g' ||
          $('#cover-gram').val() == '백색모조 120g') {
          opts = `<option value="2400" data-val="0.8">해상도 2400</option> <option value="1200" data-val="0.5">해상도 1200</option>`;
        }

        h1 = `<select name="cover_color_opt" class="eprice form-control ml-2" id="cover-color-opt" style="margin-top:-6px;" onChange="calcPrice()">` + opts + `</select>`;
        $('label[for="' + id + '"]').find('.opt-wrap').empty().append(h1);
        calcPrice();
      }
    }

  });



  $(document).on('change', '#cutsize-w, #cutsize-h', function (e) {
    setMaesu();
    $('#maesu').change();
    afterprocUncheck();
  });


  //후가공 UV박추가
  $(document).on('click', '#btn-add-foilscodix', function (e) {
    e.preventDefault();

    var no = $('.foilscodix-row').length+1;

    let df = 100;
    let min = Math.min( _cutsize_w,_cutsize_h);
    let min2 = min - 10;

    if( min < 100) {
      df = min2;
    }

    let html = `<div class="mb-4 foilscodix-row">
      <div class="row align-items-center mx-4">
        <div class="form-inline mr-4">
          <select name="foilscodix_way`+no+`" class="eprice foilscodix-way form-control">
            <option value="전면박" data-val="1" selected="">전면박</option>
            <option value="후면박" data-val="1">후면박</option>
            <option value="양면박" data-val="2">양면박</option>
          </select> &nbsp;
          <select name="foilscodix`+no+`" class="eprice foilscodix form-control ml-3">
            <option value="유광적금박" data-val="redgold" selected>유광적금박</option>
            <option value="유광황금박" data-val="yellowgold">유광황금박</option>
            <option value="유광은박" data-val="silver">유광은박</option>
            <option value="홀로그램박" data-val="hologram">홀로그램박</option>
            <option value="먹박" data-val="black">먹박</option>
            <option value="청박" data-val="blue">청박</option>
            <option value="적박" data-val="red">적박</option>
            <option value="녹박" data-val="green">녹박</option>
          </select>
        </div>
        <div class="form-inline">
          <span>가로</span> &nbsp; <input type="text" name="foilscodix`+no+`_ww" class="eprice foilscodix-ww form-control mr-2" data-max="100" value="`+df+`" numberOnly> ㎜ &nbsp; <i class="fal fa-times"></i> &nbsp;
          <span>세로</span> &nbsp; <input type="text" name="foilscodix`+no+`_hh" class="eprice foilscodix-hh form-control mr-2" data-max="100" value="`+df+`" numberOnly> ㎜ &nbsp; 				<a href="#" class="btn btn-danger btn-sm btn-remove-foilscodix"><i class="far fa-times"></i> 박삭제</a>
          <span class="foilscodix-price" style="display:none"></span>
        </div>
      </div>
    </div>`;

    if( is_mobile == 'Y') {
      html = `<div class="my-4 foilscodix-row p-0 pb-2" style="border-bottom:1px dashed #aaa;">
        <div class="d-flex mb-2">
          <select name="foilscodix_way`+no+`" class="eprice foilscodix-way form-select me-1">
            <option value="전면박" data-val="1" selected="">전면박</option>
            <option value="후면박" data-val="1">후면박</option>
            <option value="양면박" data-val="2">양면박</option>
          </select>
          <select name="foilscodix`+no+`" class="eprice foilscodix form-select ms-1">
            <option value="유광적금박" data-val="redgold" selected>유광적금박</option>
            <option value="유광황금박" data-val="yellowgold">유광황금박</option>
            <option value="유광은박" data-val="silver">유광은박</option>
            <option value="홀로그램박" data-val="hologram">홀로그램박</option>
            <option value="먹박" data-val="black">먹박</option>
            <option value="청박" data-val="blue">청박</option>
            <option value="적박" data-val="red">적박</option>
            <option value="녹박" data-val="green">녹박</option>
          </select>
        </div>
        <div class="d-flex justify-content-center align-items-center mb-2">
          <span>가 로</span> &nbsp; <input type="text" name="foilscodix`+no+`_ww" class="eprice foilscodix-ww form-control mr-2" data-max="100" value="`+df+`" numberOnly> &nbsp; ㎜ &nbsp; <i class="fal fa-times mx-2"></i> &nbsp;
          <span>세 로</span> &nbsp; <input type="text" name="foilscodix`+no+`_hh" class="eprice foilscodix-hh form-control mr-2" data-max="100" value="`+df+`" numberOnly> &nbsp; ㎜ &nbsp;
        </div>

        <div class="mb-2">
          <a href="#" class="btn btn-danger btn-remove-foilscodix"><i class="far fa-times"></i> 박삭제</a>
          <span class="foilscodix-price" style="display:none"></span>
        </div>
      </div>`;
    }

    $('#toggle-afterproc-foilscodix .afterproc-content').append(html);

    epriceHandler();
    calcPrice();
  });


  $(document).on('blur', '.foilscodix-ww', function (e) {
    const val = $(this).val();
    if( _cutsize_w > _cutsize_h) {
      if( val > 711) {
        alert('디지털 박(스코딕스는) 711mm x 486mm 까지만 가능합니다.');
        $(this).val('100');
      }
    }
    else {
      if( val > 486) {
        alert('디지털 박(스코딕스는) 486mm x 711mm 까지만 가능합니다.');
        $(this).val('100');
      }
    }
  });

  $(document).on('blur', '.tomson-width', function (e) {
    const val = $(this).val();
    if( _cutsize_w > _cutsize_h) {
      if( val > 715) {
        alert('도무송은 715mm x 485mm 까지만 가능합니다.');
        $(this).val('50');
      }
    }
    else {
      if( val > 485) {
        alert('도무송은 485mm x 715mm 까지만 가능합니다.');
        $(this).val('50');
      }
    }
  });



  $(document).on('blur', '.foilscodix-hh', function (e) {
    const val = $(this).val();
    if( _cutsize_h > _cutsize_w) {
      if( val > 711) {
        alert('디지털 박(스코딕스는) 711mm x 486mm 까지만 가능합니다.');
        $(this).val('100');
      }
    }
    else {
      if( val > 486) {
        alert('디지털 박(스코딕스는) 486mm x 711mm 까지만 가능합니다.');
        $(this).val('100');
      }
    }
  });


  $(document).on('blur', '.tomson-height', function (e) {
    const val = $(this).val();
    if( _cutsize_h > _cutsize_w) {
      if( val > 715) {
        alert('도무송은 715mm x 485mm 까지만 가능합니다.');
        $(this).val('50');
      }
    }
    else {
      if( val > 485) {
        alert('도무송은 485mm x 715mm 까지만 가능합니다.');
        $(this).val('50');
      }
    }
  });


  //후가공 동판박추가
  $(document).on('click', '#btn-add-foil', function (e) {
    e.preventDefault();

    var no = $('.foil-row').length+1;

    let html = `
    <div class="mb-4 foil-row" data-have="N">
      <div class="row align-items-center mx-4">
        <div class="form-inline mr-4">
          <select name="foil_way`+no+`" class="eprice form-control foil-way">
            <option value="전면박" data-val="1" selected="">전면박</option>
            <option value="후면박" data-val="1">후면박</option>
            <option value="양면박" data-val="2">양면박</option>
          </select> &nbsp;

          <select name="foil`+no+`" class="eprice form-control foil ml-3">
            <option value="무광적금박" data-val="shiny_gold" data-val2="0.1563" selected>무광적금박</option>
            <option value="유광황금박" data-val="shiny_gold" data-val2="0.1563">유광황금박</option>
            <option value="유광은박" data-val="shiny_silver" data-val2="0.1563">유광은박</option>
            <option value="무광은박" data-val="shiny_silver" data-val2="0.1563">무광은박</option>
            <option value="홀로그램박" data-val="hologram" data-val2="0.3125">홀로그램박</option>
            <option value="먹박" data-val="black" data-val2="0.1563">먹박</option>
            <option value="청박" data-val="blue" data-val2="0.1563">청박</option>
            <option value="적박" data-val="red" data-val2="0.1563">적박</option>
            <option value="녹박" data-val="green" data-val2="0.1563">녹박</option>
            <option value="펄박" data-val="perl" data-val2="0.1823">펄박</option>
          </select>
        </div>

        <div class="form-inline">
          <span>가로</span> &nbsp; <input type="text" name="foil_width`+no+`" class="eprice form-control foil-width mr-2" data-max="10" value="10" numberOnly> ㎜ &nbsp; <i class="fal fa-times"></i> &nbsp;
          <span>세로</span> &nbsp; <input type="text" name="foil_height`+no+`" class="eprice form-control foil-height mr-2" data-max="10" value="10" numberOnly> ㎜ &nbsp;
            <a href="#" class="btn btn-danger btn-sm btn-remove-foil"><i class="far fa-times"></i> 박삭제</a>`;

    if( is_guest == '1' && _debug == 'N') {
      html += `<input type="checkbox" class="have-foil" id="have-foil${no}" value="Y" /> <label for="have-foil${no}" style="margin-left:15px; padding-left:22px;">보유동판</label>`
    }

    html +=`
            <span class="foil-price" style="display:none"></span>
            <span class="pan-price" style="display:none"></span>
            <span class="film-price" style="display:none"></span>
            <span class="foil-dprice" style="display:none"></span>
            <span class="foil-workno" style="display:none"></span>
        </div>

        <div class="have-foil-row" style="display:none">
          <div class="d-flex mt-3 align-items-center">
            <div class="mr-2">기존 주문번호</div>
            <select class="have-foil-list" id="have-foil-list${no}" style="width:320px; padding:4px; border:1px solid #ced4da">
              <option value="1">1</option>
            </select>
          </div>
        </div>

      </div>
    </div>`;

    if( is_mobile == 'Y') {
      html = `
      <div class="my-4 foil-row p-0 pb-2" style="border-bottom:1px dashed #aaa;">
        <div class="d-flex mb-2">
          <select name="foil_way`+no+`" class="eprice form-select foil-way me-1">
            <option value="전면박" data-val="1" selected="">전면박</option>
            <option value="후면박" data-val="1">후면박</option>
            <option value="양면박" data-val="2">양면박</option>
          </select>
          <select name="foil`+no+`" class="eprice form-select foil ms-1">
            <option value="무광적금박" data-val="shiny_gold" data-val2="0.1563" selected>무광적금박</option>
            <option value="유광황금박" data-val="shiny_gold" data-val2="0.1563">유광황금박</option>
            <option value="유광은박" data-val="shiny_silver" data-val2="0.1563">유광은박</option>
            <option value="무광은박" data-val="shiny_silver" data-val2="0.1563">무광은박</option>
            <option value="홀로그램박" data-val="hologram" data-val2="0.3125">홀로그램박</option>
            <option value="먹박" data-val="black" data-val2="0.1563">먹박</option>
            <option value="청박" data-val="blue" data-val2="0.1563">청박</option>
            <option value="적박" data-val="red" data-val2="0.1563">적박</option>
            <option value="녹박" data-val="green" data-val2="0.1563">녹박</option>
            <option value="펄박" data-val="perl" data-val2="0.1823">펄박</option>
          </select>
        </div>

        <div class="d-flex mb-2 align-items-center justify-content-center">
          <span>가로</span> &nbsp; <input type="number" name="foil_width`+no+`" class="eprice form-control foil-width mr-2" data-max="10" value="10" style="width:80px;" numberOnly> &nbsp; ㎜ &nbsp; <i class="fal fa-times mx-2"></i> &nbsp;
          <span>세로</span> &nbsp; <input type="number" name="foil_height`+no+`" class="eprice form-control foil-height mr-2" data-max="10" value="10" style="width:80px;" numberOnly> &nbsp; ㎜ &nbsp;
        </div>

        <div>
          <a href="#" class="btn btn-danger btn-sm btn-remove-foil"><i class="far fa-times"></i> 박삭제</a>
          <span class="foil-price" style="display:none"></span>
          <span class="pan-price" style="display:none"></span>
          <span class="film-price" style="display:none"></span>
          <span class="foil-dprice" style="display:none"></span>
          <span class="foil-workno" style="display:none"></span>
        </div>
      </div>`;
    }


    $('#toggle-afterproc-foil .afterproc-content').append(html);

    epriceHandler();
    calcPrice();
  });

  // 호일스코딕스 삭제하기
  $(document).on('click', '.btn-remove-foilscodix', function (e) {
    e.preventDefault();
    $(this).closest('.foilscodix-row').remove();
    calcPrice();
  });

  // 동판박 삭제하기
  $(document).on('click', '.btn-remove-foil', function (e) {
    e.preventDefault();
    $(this).closest('.foil-row').remove();
    calcPrice();
  });

  //도무송 추가
  $(document).on('click', '#btn-add-tomson', function (e) {
    e.preventDefault();

    var no = $('.tomson-row').length+1;

    let html = `
    <div class="tomson-row mb-4 p-0 pb-2" style="border-bottom:1px dashed #aaa;">
      <div class="row align-items-center mx-4">
        <div class="form-inline mr-4">
          <label>가로</label> <input type="text" name="tomson_width`+no+`" class="eprice form-control tomson-width ml-2 mr-1" value="50" numberOnly>㎜ &nbsp; <i class="fal fa-times mx-2"></i> &nbsp;
          <label>세로</label> <input type="text" name="tomson_height`+no+`" class="eprice form-control tomson-height ml-2 mr-1" value="50" numberOnly>㎜ &nbsp;
        </div>

        <div class="form-inline">
          <label>한장에</label>
          <select name="tomson_cnt`+no+`" class="tomson-cnt form-control ml-2 mr-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select> <label>개</label> &nbsp;

          <select name="tomson_shape`+no+`" class="eprice tomson-shape form-control mx-2">
            <option value="없음" data-val="0">없음</option>
            <option value="단순모양" data-val="1" selected>단순모양</option>
            <option value="중간모양" data-val="1.2">중간모양</option>
            <option value="복잡한모양" data-val="1.5">복잡한모양</option>
            <option value="패키지복잡" data-val="2">패키지복잡</option>
            <option value="패키지단순" data-val="1.5">패키지단순</option>
          </select> &nbsp;
          <a href="#" class="btn btn-danger btn-sm btn-remove-tomson"><i class="far fa-times"></i> 도무송삭제</a>
          <span class="tomson-price" style="display:none"></span>
        </div>

      </div>
    </div>`;

    if( is_mobile == 'Y') {
      html = `
      <div class="tomson-row my-4 p-0 pb-2" style="border-bottom:1px dashed #aaa;">
        <div class="d-flex align-items-center justify-content-center mb-2">
          <div class="d-flex justify-content-center align-items-center">
            <label class="me-2">가 로</label> <input type="text" name="tomson_width`+no+`" class="eprice form-control tomson-width ml-2 mr-1" value="50" style="width:90px" numberOnly> &nbsp; ㎜ &nbsp; <i class="fal fa-times mx-2"></i> &nbsp;
            <label class="me-2">세 로</label> <input type="text" name="tomson_height`+no+`" class="eprice form-control tomson-height ml-2 mr-1" value="50" style="width:90px" numberOnly> &nbsp; ㎜ &nbsp;
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-center mb-2">
          <label class="col-auto me-2">한장에</label>
          <select name="tomson_cnt`+no+`" class="tomson-cnt form-select me-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label class="mx-1">개</label>

          <select name="tomson_shape`+no+`" class="eprice tomson-shape form-select ms-1">
            <option value="없음" data-val="0">없음</option>
            <option value="단순모양" data-val="1" selected>단순모양</option>
            <option value="중간모양" data-val="1.2">중간모양</option>
            <option value="복잡한모양" data-val="1.5">복잡한모양</option>
            <option value="패키지복잡" data-val="2">패키지복잡</option>
            <option value="패키지단순" data-val="1.5">패키지단순</option>
          </select>
        </div>

        <div class="text-center">
          <a href="#" class="btn btn-danger btn-sm btn-remove-tomson"><i class="far fa-times"></i> 도무송삭제</a>
          <span class="tomson-price" style="display:none"></span>
        </div>

      </div>`;
    }

    $('#toggle-afterproc-tomson .afterproc-content').append(html);
    calcPrice();

  });

  //도무송 삭제
  $(document).on('click', '.btn-remove-tomson', function (e) {
    e.preventDefault();
    $(this).closest('.tomson-row').remove();
    calcPrice();
  });

  //동판박&유광코팅 안됨.
  $('#is-foil').change(function (e) {
    if( $('#is-coating').prop('checked')) {
      const coating_val = $('input:radio[name="coating"]:checked').val();
      if( coating_val.indexOf('유광') > -1) {
        alert('유광코팅은 동판박이 불가능 합니다.\n무광코팅으로 선택바랍니다.');
        $(this).prop('checked',false);
        $('#toggle-afterproc-foil').hide();
        return false;
      }
    }
  });

  //모바일 처리
  if( is_mobile == 'Y') {
    $(document).on('click', 'label[for="is-foil"]', function (e) {
      if( $('#is-coating').prop('checked')) {
        const coating_val = $('input:radio[name="coating"]:checked').val();
        if( coating_val.indexOf('유광') > -1) {
          alert('유광코팅은 동판박이 불가능 합니다.\n무광코팅으로 선택바랍니다.');
          $(this).prop('checked',false);
          $('#toggle-afterproc-foil').hide();
          return false;
        }
      }
    });
  }


  // 타공 선택시 경고
  $('#is-punching').change(function (e) {
    if ($(this).is(':checked')) {
      alert("후가공 작업공정상 1mm이내의 밀림현상이 발생될 수 있습니다.\n이점 양해바랍니다.");
    }
  });

  // 후가공 형압, 동판박 선택시 경고
  $('#is-press, #is-foil, #is-embo').change(function (e) {
    if ($(this).is(':checked')) {
      alert("후가공 작업공정상 5% 혹은 10~20매의 수량이 부족할 수 있습니다.\n작업공정상 1mm이내의 밀림현상이 발생될 수 있습니다.\n이점 양해바랍니다.");
    }
  });


  // 보유동판
  $(document).on('change', '.have-foil', function (e) {
    let $me = $(this);
    let $foil_row = $me.closest('.foil-row');
    let $foil_workno = $foil_row.find('.foil-workno');
    let $have_foil_row = $foil_row.find('.have-foil-row');
    let $have_foil_list = $foil_row.find('.have-foil-list');
    let width = $foil_row.find('.foil-width').val();
    let height = $foil_row.find('.foil-height').val();

    if( $(this).prop('checked')) {
      $(this).closest('.foil-row').find('.foil-width').attr('readonly',true);
      $(this).closest('.foil-row').find('.foil-height').attr('readonly',true);

      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('input[name="_token"]').val()
        },
        type: 'POST',
        url: '/order/ajax',
        dataType: 'JSON',
        data: {
          'width': width,
          'height': height,
          'action': 'GET-AFTERPROC-FOIL',
        },
        async: false,
        error: function (xhr, ajaxOptions, thrownError) {
          alert(ajaxOptions + "," + thrownError);
        },
        success: function (data, textStatus) {
          if( data.length == 0) {
            alert('기존 주문이 없습니다.');
            $me.closest('.foil-row').find('.foil-width').attr('readonly',false);
            $me.closest('.foil-row').find('.foil-height').attr('readonly',false);

            $me.prop('checked',false);
            return;
          }

          $have_foil_row.show();

          const o_width = width;
          const o_height = height;

          let h = '<option value="">기존 주문을 선택해주세요.</option>';

          for(const i in data) {
            if( o_width == data[i]['width'] && o_height == data[i]['height']) {
              const dir = data[i]['what'].split('/')[0];
              const val = data[i]['what'].split('/')[1];
              h += '<option value="' + data[i]['work_no'] + ' ' + dir + ' ' + val + ' ' + data[i]['width'] + 'x' + data[i]['height'] + '" data-workno="' + data[i]['work_no'] + '" data-dir="' + dir + '" data-val="' + val + '" data-size="' + data[i]['width'] + 'x' + data[i]['height'] + '">' + data[i]['work_no'] + ' ' + dir + ' ' + val + ' ' + data[i]['width'] + 'x' + data[i]['height'] + '</option>';
            }
          }

          $have_foil_list.html(h);
        }
      });
    }
    else {
      $(this).closest('.foil-row').find('.foil-width').attr('readonly',false);
      $(this).closest('.foil-row').find('.foil-height').attr('readonly',false);

      $have_foil_row.hide();
      $foil_row.attr('data-have','N');
      $foil_workno.text('');
      calcPrice();
    }
  });

  $(document).on('change', '.have-foil-list', function (e) {
    if( $(this).val() == '') {
      alert('기존주문을 선택하세요.');
      return;
    }

    let $me = $(this);
    let $foil_row = $me.closest('.foil-row');
    let $foil_price = $foil_row.find('.foil-price');
    let $foil_workno = $foil_row.find('.foil-workno');
    let $width = $foil_row.find('.foil-width');
    let $height = $foil_row.find('.foil-height');
    let $foilway = $foil_row.find('.foil-way');
    let $foilval = $foil_row.find('.foil');

    const work_no = $('option:selected', this).attr('data-workno');
    const dir = $('option:selected', this).attr('data-dir');
    const val = $('option:selected', this).attr('data-val');
    const size = $('option:selected', this).attr('data-size');
    const ww = size.split('x')[0];
    const hh = size.split('x')[1];

    $foilway.val(dir);
    $foilval.val(val);

    $width.val(ww);
    $height.val(hh);

    $foil_row.attr('data-have','Y');
    //$foil_price.text('0');
    $foil_workno.text(work_no);

    $foil_row.find('.have-foil-list option[value=""]').remove();

    calcPrice();
  });


  // 보유형압
  $(document).on('change', '#have-press', function (e) {
    if( $(this).prop('checked')) {
      $('input:radio[name="press"]').addClass('prevent');
      $('input[name="press_width"]').attr('readonly',true);
      $('input[name="press_height"]').attr('readonly',true);

      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('input[name="_token"]').val()
        },
        type: 'POST',
        url: '/order/ajax',
        dataType: 'JSON',
        data: {
          'width': $('input[name="press_width"]').val(),
          'height': $('input[name="press_height"]').val(),
          'what': $('input:radio[name="press"]:checked').val(),
          'action': 'GET-AFTERPROC-PRESS',
        },
        async: false,
        error: function (xhr, ajaxOptions, thrownError) {
          alert(ajaxOptions + "," + thrownError);
        },
        success: function (data, textStatus) {
          if( data.length == 0) {
            alert('기존 주문이 없습니다.');
            $('input:radio[name="press"]').removeClass('prevent');
            $('input[name="press_width"]').attr('readonly',false);
            $('input[name="press_height"]').attr('readonly',false);
            $('#have-press').prop('checked',false);
            return;
          }

          $('#have-press-row').show();

          const o_width = $('input[name="press_width"]').val();
          const o_height = $('input[name="press_height"]').val();

          let h = '<option value="">기존 주문을 선택해주세요.</option>';

          for(const i in data) {
            if( o_width == data[i]['width'] && o_height == data[i]['height']) {
              const what = data[i]['what'];
              h += '<option value="' + data[i]['work_no'] + ' ' + what + ' ' + data[i]['width'] + 'x' + data[i]['height'] + '" data-workno="' + data[i]['work_no'] + '" data-val="' + what + '" data-size="' + data[i]['width'] + 'x' + data[i]['height'] + '">' + data[i]['work_no'] + ' ' + what + ' ' + data[i]['width'] + 'x' + data[i]['height'] + '</option>';
            }
          }

          $('#have-press-list').html(h);
        }
      });


    }
    else {
      $('input:radio[name="press"]').removeClass('prevent');
      $('input[name="press_width"]').attr('readonly',false);
      $('input[name="press_height"]').attr('readonly',false);

      $('#have-press-row').hide();
      $('.press-row:eq(0)').attr('data-have','N');
      $('.press-workno').text('');
      calcPrice();
    }
  });

  $(document).on('change', '#have-press-list', function (e) {
    if( $(this).val() == '') {
      alert('기존주문을 선택하세요.');
      return;
    }

    const work_no = $('option:selected', this).attr('data-workno');
    const val = $('option:selected', this).attr('data-val');
    const size = $('option:selected', this).attr('data-size');
    const ww = size.split('x')[0];
    const hh = size.split('x')[1];

    $('input:radio[name="press"]:input[value="' + val + '"]').attr("checked", true);

    $('input[name="press_width"]').val(ww);
    $('input[name="press_height"]').val(hh);

    $('.press-row:eq(0)').attr('data-have','Y');
    $('.press-row:eq(0) .press-workno').text(work_no);

    $('#have-press-list option[value=""]').remove();

    calcPrice();
  });

  $('input:radio[name="press"]').click(function (e) {
    if( $(this).hasClass('prevent')) {
      e.preventDefault();
      e.stopPropagation();
    }
  });


  try {
    //고급지로 링크된경우
    if (qual == 'high') {
      $('#cover-cate').val('고급지');
      $('#cover-cate').change();
    }
  } catch {}


  if (mcode == '35' || mcode == '36') {
    $('#paper-size').val('a4');
    $('#paper-size').change();
    $('#maesu').val('2');
  }

  $('#is-cutting').prop('checked',true);


  $(document).on('keyup', 'body', function (e) {
    if ((e.keyCode == 80) && e.altKey) {
      const l = $('#info-box').length;
      if( l > 0) {
        $('#info-box').remove();
        return;
      }

      const selected = JSON.parse($('#pan-selected').val());
      const arr = JSON.parse($('#pan-grids').val());

      let table = `<table class="table table-bordered bg-white"><tr> <td>기계명</td> <td>자리값</td> <td>용지가</td> <td>재단비</td> <td>인쇄수량</td> <td>인쇄비</td> <td>가로규격</td> <td>세로규격</td> <td>가로배열</td><td>세로배열</td><td>여분</td><td>주문총액</td> </tr>`;

      const arr_width = [306,738,306,612,306,304];
      const arr_height = [445,508,450,457,910,620];

      $.each(arr,function(index,item) {
        //if( index == 4) return false;
        let machine = '인디고 국4절';
        if( item.machine == 'indigo7000') machine = '인디고 국4절';
        else if( item.machine == 'indigo10000') machine = '인디고 2절';
        else if( item.machine == 'minolta4') machine = '토너 국4절';
        else if( item.machine == 'indigoa2') machine = '인디고 A2';
        else if( item.machine == 'revoria2') machine = '레보리아 2절';
        else if( item.machine == 'revoria3') machine = '레보리아 3절';

        let cut_w = Number($('#cutsize-w').val())+2;
        let cut_h = Number($('#cutsize-h').val())+2;

        let t1 = Math.floor( item.width / cut_w);
        let t2 = Math.floor( item.height / cut_h);
        let t3 = Math.floor( item.width / cut_h);
        let t4 = Math.floor( item.height / cut_w);
        let s1 = Math.max( (t1*t2),(t3*t4));
        const spare = item.spare;

        let s2 = 0;
        let s3 = 0;

        if( (t1 * t2) == s1) {
          s2 = t1
          s3 = t2;
        } else {
          s2 = t3;
          s3 = t4;
        }


        let bg = ""
        if( item.machine == selected.machine) {
          bg = 'yellow';
        }

        let t_total = 0;

        try {
          t_total = comma3(item.total_price2)
        } catch(e) {
          t_total = '<span class="text-danger">불가</span>';;
        }


        if( item.total_price2 == 9999999) {
          t_total = '<span class="text-danger">불가</span>';
        }

        try {
          item.paper_price = item.paper_price.replace('NaN','');
        } catch(e) {
        }

        let item_print_price = item.print_price;

        if( item.machine == 'indigo10000' || item.machine == 'indigoa2') {
          item_print_price = Number(item.print_price) + 1000;
        }


        table += `
          <tr style="background:` + bg + `;">
            <td class="text-center">` + machine + `</td>
            <td class="text-center">` + item.max + `</td>
            <td class="text-right">` + comma3(item.paper_price) + `</td>
            <td class="text-right">` + comma3(item.cutting_price) + `</td>
            <td class="text-center">` + comma3(item.maesu) + `</td>
            <td class="text-right">` + comma3(item_print_price) + `</td>
            <td class="text-center">`+arr_width[index]+`</td>
            <td class="text-center">`+arr_height[index]+`</td>
            <td class="text-center">`+s2+`</td>
            <td class="text-center">`+s3+`</td>
            <td class="text-center">`+spare+`</td>
            <td class="text-right">` + t_total + `</td>
          </tr>`;
      });

      table += `</table>`;

      const html = `<div style="position:absolute; width:820px; height:320px; background:#f4f4f4; padding:15px; overflow:auto; box-shadow:1px 1px 3px #666; font-size:12px; left:50%; transform:translateX(-50%); top:250px; z-index:999999;" id="info-box">` + table + `</div>`;
      $('body').append(html);
      $('#info-box').draggable();

    }
  });


  $(document).on('click', 'input:radio[name="is_rounding_way"]', function (e) {
    const v = $(this).val();
    if( v == '전체귀도리') {
      $('.rounding-dir').prop('checked',true);
    }
  });


  $(document).on('change', '.rounding-dir', function (e) {
    const v = $('input:radio[name="is_rounding_way"]:checked').val();
    if( v == '전체귀도리') {
      $(this).prop('checked',true);
    }
  });

  //건수에 따른 분류여부
  $(document).on('change', '#quantity', function (e) {
    if( Number($(this).val()) < 2) {
      $('#is-class').hide();
      $('#hoverme-sortguide-pop').hide();
      $('#is-class').val('N');
      $('#is-class option').each(function () {
        if (this.value == 'Y') {
          $(this).css({'background': '#f4f4f4'});
          $(this).prop('disabled', true);
        }
      });
    }
    else {
      $('#is-class').show();
      $('#hoverme-sortguide-pop').show();
      $('#is-class option').each(function () {
        if (this.value == 'Y') {
          $(this).css({'background': '#fff'});
          $(this).prop('disabled', false);
        }
      });
    }
  });


  $(document).on('change', '#is-today', function (e) {
    if( $('#is-tomorrow').prop('checked')) {
      //alert('내일출고가 이미 선택되어 있습니다.');
      setTimeout(()=>{
        $(this).prop('checked',false).change();
      },500);
      return;
    }

    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    let afterprocs_sum = 0;
    $('input.afterproc:checkbox').each(function(e) {
      if( $(this).prop('checked')) {
        const nm = $(this).attr('name');
        if( nm != 'is_cutting') afterprocs_sum++;
      }
    });

    if( $(this).prop('checked')) {
      if( hours > 11) {
        alert('오늘출고는 오전 12시까지 주문하셔야 합니다.');
        $(this).prop('checked',false).change();
        return;
      }


      if( sumAfterproc() > 10) {
        alert('오늘출고시 후가공은 재단,코팅,오시,접지,오시+접지,미싱,라미넥스,타공만 가능합니다.');
        $(this).prop('checked',false).change();
      }
    }
  });


  $(document).on('change', '#is-tomorrow', function (e) {
    if( $('#is-today').prop('checked')) {
      //alert('오늘출고가 이미 선택되어 있습니다.');
      setTimeout(()=>{
        $(this).prop('checked',false).change();
      },500);
      return;
    }

    const t = sumAfterproc();

    if( $(this).prop('checked')) {
      if( t > 16) {
        alert('후가공은 재단,코팅,오시,접지,오시+접지,미싱,라미넥스,타공,도무송만 가능합니다.');
        setTimeout(()=>{
          $(this).prop('checked',false).change();
        },500);
      }
    }
  });


  $(document).on('mouseover', '#icon-today-tomorrow', function (e) {
    var offset = $(this).offset();
    const xx = offset.left + 30;
    const yy = offset.top;

    let h = `<div style="position:absolute; padding:10px; width:470px; left:${ xx }px; top:${ yy }px; z-index:800; background: #fff; box-shadow: 1px 1px 3px #999;" id="icon-info1">
              <div class="row align-items-center justify-content-between mb-3" style="width:100%; background:#1c78b9; color:#fff">
                <div class="col text-white pl-2">
                  <i class="fal fa-alarm-clock"></i> 출고옵션 안내
                </div>
                <div class="col text-right pr-2">
                  <h3 class="text-white">&times</h3>
                </div>
              </div>

              <table class="table table-bordered w-100">
                <tr>
                  <td class="text-center w-50" style="background:#dceaf4; border-top:2px solid #797979; border-bottom:1px solid #797979; border-right:1px solid #797979;">오늘출고</td>
                  <td class="text-center" style="background:#dceaf4; border-top:2px solid #797979; border-bottom:1px solid #797979;">내일출고</td>
                </tr>

                <tr>
                  <td class="text-center" style="vertical-align:middle; border-bottom:1px solid #797979; border-right:1px solid #797979;">재단,코팅,오시,접지,오시+접지,<br />미싱,라미넥스,타공</td>
                  <td class="text-center" style="border-bottom:1px solid #797979;">재단,코팅,오시,접지,오시+접지,<br />미싱,라미넥스,타공,도무송</td>
                </tr>

                <tr>
                  <td class="text-center" style="border-bottom:2px solid #797979; border-right:1px solid #797979;"><span style="color:#fc5f5d;">낮12시 이전 결제완료</span> <br />하면 오후에 출고</td>
                  <td class="text-center" style="border-bottom:2px solid #797979;"><span style="color:#fc5f5d;">주문일 기준 24시까지 결제 완료</span> <br />하면 결제일 기준 다음날 출고<br />(토,일,공휴일 제외)</td>
                </tr>
              </table>
              <div class="p-2" style="color:#fc5f5d; font-size:12px;">
              * 파일에 이상이 없는 경우 오늘출고 또는 내일출고가 가능합니다.<br />
              * 아래의 경우 오늘 또는 내일출고가 불가능할 수 있으며 추가금만 환불 처리됩니다. <br />
              &nbsp;&nbsp;1) 파일에 이상이 있어 인쇄 진행이 지체되는 경우<br />
              &nbsp;&nbsp;2) 주문 수량이 대량인 경우<br />
              &nbsp;&nbsp;3) 제작 공정상의 이유로 납품이 지연되는 경우<br />
              &nbsp;&nbsp;4) 토너 별색인쇄를 선택하신 경우 당일 출고가 불가능하며, 20시 이후의 주문 건은 <span style="padding-left: 20px; color: #fc5f5d;">1일 더 소요돼요.</span>
              </div>

            </div>`;

    if( $('#icon-info1').length == 0) {
      $('body').append(h);
    }
  });

  $(document).on('mouseleave', '#icon-today-tomorrow', function (e) {
    $('#icon-info1').remove();
  });

  $(document).on('click', '#cover-color-opt', function (e) {
    $('#cover-add-color').prop('disabled',false);
    const v = $(this).val();
    if( v == '1200') {
      $('#cover-add-color').prop('disabled',true);
      $('#cover-add-color').val('');
    }
  });

  //휴일은 당일추고 미노출
  if( $.urlParam('work') != 'reorder') {
    if (is_holiday == 'Y') {
      $('label[for="is-today"]').hide();
    }
  }

  changeData();
  _start = 1;
  calcPrice();

  if( $.urlParam('work') != 'reorder') {
    let ctoday = new Date();
    let curr_hours = ctoday.getHours();

    if( Number(curr_hours) > 11 && Number(curr_hours) < 24) {
      $('label[for="is-today"]').hide();
    }
  }

});
