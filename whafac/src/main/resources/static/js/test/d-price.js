class Globalprice
{
  print_price = 0;
  basic_price = 0;
  paper_price = 0;
  cutting_price = 0;
  normal_price = 0;
  fixed_price = 999999999;
  spare_price = 0;

  $_machine_grid = [
    {'machine':'indigo7000','width':306,'height':445,'width2':315,'height2':465,'max':0,'maesu':0,'total_maesu':0,'paper_price':0,'print_price':0,'pp':0,'basic_price':0,'print_maesu':0,'oprice':0,'cnt':0,'dc':0,'total_price':0,'spare':0,'spare_price':0,'cutting_price':0,'coating_price':0,'total_price2':0},
    {'machine':'indigo10000','width':738,'height':508,'width2':530,'height2':750,'max':0,'maesu':0,'total_maesu':0,'paper_price':0,'print_price':0,'pp':0,'basic_price':0,'print_maesu':0,'oprice':0,'cnt':0,'dc':0,'total_price':0,'spare':0,'spare_price':0,'cutting_price':0,'coating_price':0,'total_price2':0},
    {'machine':'minolta4','width':306,'height':450,'width2':315,'height2':465,'max':0,'maesu':0,'total_maesu':0,'paper_price':0,'print_price':0,'pp':0,'basic_price':0,'print_maesu':0,'oprice':0,'cnt':0,'dc':0,'total_price':0,'spare':0,'spare_price':0,'cutting_price':0,'coating_price':0,'total_price2':0},
    {'machine':'indigoa2','width':612,'height':457,'width2':612,'height2':457,'max':0,'maesu':0,'total_maesu':0,'paper_price':0,'print_price':0,'pp':0,'basic_price':0,'print_maesu':0,'oprice':0,'cnt':0,'dc':0,'total_price':0,'spare':0,'spare_price':0,'cutting_price':0,'coating_price':0,'total_price2':0},
    {'machine':'revoria2','width':306,'height':910,'width2':315,'height2':910,'max':0,'maesu':0,'total_maesu':0,'paper_price':0,'print_price':0,'pp':0,'basic_price':0,'print_maesu':0,'oprice':0,'cnt':0,'dc':0,'total_price':0,'spare':0,'spare_price':0,'cutting_price':0,'coating_price':0,'total_price2':0},
    {'machine':'revoria3','width':304,'height':620,'width2':315,'height2':620,'max':0,'maesu':0,'total_maesu':0,'paper_price':0,'print_price':0,'pp':0,'basic_price':0,'print_maesu':0,'oprice':0,'cnt':0,'dc':0,'total_price':0,'spare':0,'spare_price':0,'cutting_price':0,'coating_price':0,'total_price2':0},
  ];

  $_hp7000 = [
    { mm:1, gugan: 0, val: 1155, total: 0 },
    { mm:5, gugan: 0, val: 1040, total: 0 },
    { mm:10, gugan: 0, val: 290, total: 0 },
    { mm:30, gugan: 0, val: 290, total: 0 },
    { mm:100, gugan: 0, val: 231, total: 0 },
    { mm:500, gugan: 0, val: 185, total: 0 },
    { mm:1000, gugan: 0, val: 162, total: 0 },
    { mm:5000, gugan: 0, val: 146, total: 0 },
    { mm:1000000, gugan: 0, val: 134, total: 0 },
  ];

  $_hp7000_cutting = [
    { mm:1, gugan: 0, val: 110, total: 0 },
    { mm:2, gugan: 0, val: 100, total: 0 },
    { mm:3, gugan: 0, val: 80, total: 0 },
    { mm:4, gugan: 0, val: 70, total: 0 },
    { mm:5, gugan: 0, val: 60, total: 0 },
    { mm:10, gugan: 0, val: 50, total: 0 },
    { mm:20, gugan: 0, val: 45, total: 0 },
    { mm:30, gugan: 0, val: 40, total: 0 },
    { mm:1000, gugan: 0, val: 30, total: 0 },
  ];

  $_hp10000 = [
    { mm:1, gugan: 0, val: 3000, total: 0 },
    { mm:5, gugan: 0, val: 700, total: 0 },
    { mm:10, gugan: 0, val: 600, total: 0 },
    { mm:30, gugan: 0, val: 500, total: 0 },
    { mm:100, gugan: 0, val: 400, total: 0 },
    { mm:500, gugan: 0, val: 350, total: 0 },
    { mm:1000, gugan: 0, val: 324, total: 0 },
    { mm:5000, gugan: 0, val: 290, total: 0 },
    { mm:1000000, gugan: 0, val: 255, total: 0 },
  ];

  $_hp10000_cutting = [
    { mm:1, gugan: 0, val: 300, total: 0 },
    { mm:2, gugan: 0, val: 200, total: 0 },
    { mm:3, gugan: 0, val: 150, total: 0 },
    { mm:4, gugan: 0, val: 140, total: 0 },
    { mm:10, gugan: 0, val: 130, total: 0 },
    { mm:30, gugan: 0, val: 100, total: 0 },
    { mm:50, gugan: 0, val: 80, total: 0 },
    { mm:100, gugan: 0, val: 70, total: 0 },
    { mm:1000, gugan: 0, val: 60, total: 0 },
  ];

  $_hpa2 = [
    { mm:1, gugan: 0, val: 3000, total: 0 },
    { mm:5, gugan: 0, val: 700, total: 0 },
    { mm:10, gugan: 0, val: 600, total: 0 },
    { mm:30, gugan: 0, val: 500, total: 0 },
    { mm:100, gugan: 0, val: 400, total: 0 },
    { mm:500, gugan: 0, val: 350, total: 0 },
    { mm:1000, gugan: 0, val: 324, total: 0 },
    { mm:5000, gugan: 0, val: 290, total: 0 },
    { mm:1000000, gugan: 0, val: 255, total: 0 },
  ];

  $_hpa2_cutting = [
    { mm:1, gugan: 0, val: 300, total: 0 },
    { mm:2, gugan: 0, val: 200, total: 0 },
    { mm:3, gugan: 0, val: 150, total: 0 },
    { mm:4, gugan: 0, val: 140, total: 0 },
    { mm:10, gugan: 0, val: 130, total: 0 },
    { mm:30, gugan: 0, val: 100, total: 0 },
    { mm:50, gugan: 0, val: 80, total: 0 },
    { mm:100, gugan: 0, val: 70, total: 0 },
    { mm:1000, gugan: 0, val: 60, total: 0 },
  ];


  $_minolta4 = [
    { mm:1, gugan: 0, val: 1000, total: 0 },
    { mm:5, gugan: 0, val: 300, total: 0 },
    { mm:10, gugan: 0, val: 200, total: 0 },
    { mm:30, gugan: 0, val: 150, total: 0 },
    { mm:100, gugan: 0, val: 130, total: 0 },
    { mm:500, gugan: 0, val: 100, total: 0 },
    { mm:1000, gugan: 0, val: 80, total: 0 },
    { mm:5000, gugan: 0, val: 70, total: 0 },
    { mm:1000000, gugan: 0, val: 60, total: 0 },
  ];

  $_minolta4_cutting = [
    { mm:1, gugan: 0, val: 110, total: 0 },
    { mm:2, gugan: 0, val: 100, total: 0 },
    { mm:3, gugan: 0, val: 80, total: 0 },
    { mm:4, gugan: 0, val: 70, total: 0 },
    { mm:5, gugan: 0, val: 60, total: 0 },
    { mm:10, gugan: 0, val: 50, total: 0 },
    { mm:20, gugan: 0, val: 45, total: 0 },
    { mm:30, gugan: 0, val: 40, total: 0 },
    { mm:1000, gugan: 0, val: 30, total: 0 },
  ];



  $_revoria2 = [
    { mm:1, gugan: 0, val: 3000, total: 0 },
    { mm:5, gugan: 0, val: 1000, total: 0 },
    { mm:20, gugan: 0, val: 800, total: 0 },
    { mm:50, gugan: 0, val: 600, total: 0 },
    { mm:100, gugan: 0, val: 400, total: 0 },
    { mm:500, gugan: 0, val: 300, total: 0 },
    { mm:1000, gugan: 0, val: 270, total: 0 },
    { mm:5000, gugan: 0, val: 230, total: 0 },
    { mm:1000000, gugan: 0, val: 220, total: 0 },
  ];

  $_revoria2_cutting = [
    { mm:1, gugan: 0, val: 400, total: 0 },
    { mm:2, gugan: 0, val: 300, total: 0 },
    { mm:3, gugan: 0, val: 200, total: 0 },
    { mm:4, gugan: 0, val: 150, total: 0 },
    { mm:10, gugan: 0, val: 140, total: 0 },
    { mm:30, gugan: 0, val: 130, total: 0 },
    { mm:50, gugan: 0, val: 100, total: 0 },
    { mm:100, gugan: 0, val: 80, total: 0 },
    { mm:1000, gugan: 0, val: 70, total: 0 },
  ];

  $_revoria3 = [
    { mm:1, gugan: 0, val: 2700, total: 0 },
    { mm:5, gugan: 0, val: 900, total: 0 },
    { mm:20, gugan: 0, val: 720, total: 0 },
    { mm:50, gugan: 0, val: 540, total: 0 },
    { mm:100, gugan: 0, val: 360, total: 0 },
    { mm:500, gugan: 0, val: 270, total: 0 },
    { mm:1000, gugan: 0, val: 243, total: 0 },
    { mm:5000, gugan: 0, val: 207, total: 0 },
    { mm:1000000, gugan: 0, val: 198, total: 0 },
  ];

  $_revoria3_cutting = [
    { mm:1, gugan: 0, val: 300, total: 0 },
    { mm:2, gugan: 0, val: 200, total: 0 },
    { mm:3, gugan: 0, val: 150, total: 0 },
    { mm:4, gugan: 0, val: 140, total: 0 },
    { mm:10, gugan: 0, val: 130, total: 0 },
    { mm:30, gugan: 0, val: 100, total: 0 },
    { mm:50, gugan: 0, val: 80, total: 0 },
    { mm:100, gugan: 0, val: 70, total: 0 },
    { mm:1000, gugan: 0, val: 60, total: 0 },
  ];

  $_coating_maesu = [
    { mm:1, gugan: 0, val: 1, total: 0 },
    { mm:10000, gugan: 0, val: 0.99, total: 0 },
    { mm:30000, gugan: 0, val: 0.95, total: 0 },
    { mm:60000, gugan: 0, val: 0.85, total: 0 },
    { mm:100000, gugan: 0, val: 0.8, total: 0 },
    { mm:150000, gugan: 0, val: 0.75, total: 0 },
    { mm:200000, gugan: 0, val: 0.72, total: 0 },
    { mm:300000, gugan: 0, val: 0.7, total: 0 },
    { mm:5000000, gugan: 0, val: 0.68, total: 0 },
  ];

  $_coating_price = [
    {"name":"단면유광","price":300},
    {"name":"단면무광","price":300},
    {"name":"양면유광","price":600},
    {"name":"양면무광","price":600},
    {"name":"단면벨벳","price":1200},
    {"name":"양면벨벳","price":2400},
  ];

  $_coating_add_price = [
    {"machine":"indigo7000","name":"단면유광","price":3000},
    {"machine":"indigo7000","name":"단면무광","price":3000},
    {"machine":"indigo7000","name":"양면무광","price":4000},
    {"machine":"indigo7000","name":"양면유광","price":4000},
    {"machine":"indigo7000","name":"단면벨벳","price":7000},
    {"machine":"indigo7000","name":"양면벨벳","price":8000},

    {"machine":"indigo10000","name":"단면유광","price":3500},
    {"machine":"indigo10000","name":"단면무광","price":3500},
    {"machine":"indigo10000","name":"양면무광","price":4500},
    {"machine":"indigo10000","name":"양면유광","price":4500},
    {"machine":"indigo10000","name":"단면벨벳","price":10000},
    {"machine":"indigo10000","name":"양면벨벳","price":10000},

    {"machine":"minolta4","name":"단면유광","price":3000},
    {"machine":"minolta4","name":"단면무광","price":3000},
    {"machine":"minolta4","name":"양면무광","price":4000},
    {"machine":"minolta4","name":"양면유광","price":4000},
    {"machine":"minolta4","name":"단면벨벳","price":7000},
    {"machine":"minolta4","name":"양면벨벳","price":8000},

    {"machine":"revoria2","name":"단면유광","price":3500},
    {"machine":"revoria2","name":"단면무광","price":3500},
    {"machine":"revoria2","name":"양면무광","price":4500},
    {"machine":"revoria2","name":"양면유광","price":4500},
    {"machine":"revoria2","name":"단면벨벳","price":7000},
    {"machine":"revoria2","name":"양면벨벳","price":8000},

    {"machine":"revoria3","name":"단면유광","price":3500},
    {"machine":"revoria3","name":"단면무광","price":3500},
    {"machine":"revoria3","name":"양면무광","price":4500},
    {"machine":"revoria3","name":"양면유광","price":4500},
    {"machine":"revoria3","name":"단면벨벳","price":7000},
    {"machine":"revoria3","name":"양면벨벳","price":8000},

    {"machine":"indigoa2","name":"단면유광","price":3500},
    {"machine":"indigoa2","name":"단면무광","price":3500},
    {"machine":"indigoa2","name":"양면무광","price":4500},
    {"machine":"indigoa2","name":"양면유광","price":4500},
    {"machine":"indigoa2","name":"단면벨벳","price":7000},
    {"machine":"indigoa2","name":"양면벨벳","price":8000},
  ];

  $_coating_job_price = [
    {"machine":"indigo7000","name":"단면유광","price":120},
    {"machine":"indigo7000","name":"단면무광","price":120},
    {"machine":"indigo7000","name":"양면무광","price":240},
    {"machine":"indigo7000","name":"양면유광","price":240},
    {"machine":"indigo7000","name":"단면벨벳","price":120},
    {"machine":"indigo7000","name":"양면벨벳","price":240},

    {"machine":"indigo10000","name":"단면유광","price":200},
    {"machine":"indigo10000","name":"단면무광","price":200},
    {"machine":"indigo10000","name":"양면무광","price":400},
    {"machine":"indigo10000","name":"양면유광","price":400},
    {"machine":"indigo10000","name":"단면벨벳","price":240},
    {"machine":"indigo10000","name":"양면벨벳","price":400},

    {"machine":"minolta4","name":"단면유광","price":120},
    {"machine":"minolta4","name":"단면무광","price":120},
    {"machine":"minolta4","name":"양면무광","price":240},
    {"machine":"minolta4","name":"양면유광","price":240},
    {"machine":"minolta4","name":"단면벨벳","price":120},
    {"machine":"minolta4","name":"양면벨벳","price":240},

    {"machine":"revoria2","name":"단면유광","price":240},
    {"machine":"revoria2","name":"단면무광","price":240},
    {"machine":"revoria2","name":"양면무광","price":400},
    {"machine":"revoria2","name":"양면유광","price":400},
    {"machine":"revoria2","name":"단면벨벳","price":240},
    {"machine":"revoria2","name":"양면벨벳","price":400},

    {"machine":"revoria3","name":"단면유광","price":240},
    {"machine":"revoria3","name":"단면무광","price":240},
    {"machine":"revoria3","name":"양면무광","price":400},
    {"machine":"revoria3","name":"양면유광","price":400},
    {"machine":"revoria3","name":"단면벨벳","price":240},
    {"machine":"revoria3","name":"양면벨벳","price":400},

    {"machine":"indigoa2","name":"단면유광","price":240},
    {"machine":"indigoa2","name":"단면무광","price":240},
    {"machine":"indigoa2","name":"양면무광","price":400},
    {"machine":"indigoa2","name":"양면유광","price":400},
    {"machine":"indigoa2","name":"단면벨벳","price":240},
    {"machine":"indigoa2","name":"양면벨벳","price":400},
  ];

  width = 0;
  height = 0;

  //jobsize
  width2 = 0;
  height2 = 0;
  maesu = 0;
  quantity = 0;
  paper_name = '';
  color = '';
  add_color = '';

  //할증
  add_rate = 1;
  dosu = 1;

  division = 0;
  print_maesu = 0;

  $_selected_arr = [];

  $_selected_one = {};

  selected_dc = null;

  if_fixed_price = 'N';

  sel_machine = '';

  constructor($spec, $paper, flag=true) {
    this.width = Number($spec.width);
    this.height = Number($spec.height);
    this.width2 = this.width + 2;
    this.height2 = this.height + 2;
    this.maesu = Number($spec.maesu);
    this.fixed_maesu = $spec.fixed_maesu;
    this.quantity = Number($spec.quantity);
    this.machine = $paper.machine;
    this.paper_name = $paper.name;
    this.color = $paper.color;
    this.color_val = Number($paper.color_val);
    this.add_color = $paper.add_color;
    this.add_color_val = Number($paper.add_color_val);
    this.is_toner = $paper.is_toner;
    this.is_indigo = $paper.is_indigo;
    this.is_fixed = $paper.is_dc;
    this.is_class = $spec.is_class;
    this.coating = $spec.coating;

    if( this.color.indexOf('양면') > -1) {
      this.dosu = 2;
    }

    this.add_rate = this.color_val + this.add_color_val;
    this.selected_paper = JSON.parse(JSON.parse(decodeURIComponent($paper.obj)));

    if( !this.howMany()) {
      console.log('지원하지 않는 용지이거나 규격입니다.');
      return;
      /*
      alert('지원하지 않는 용지이거나 규격입니다.');
      location.reload();
      */
    }

    if( flag) {
      this.paperPrice();
      this.printPrice();
      this.cuttingPrice();

      if( $paper.is_dc == 'Y') {
        if( this.machine == 'toner') {
          this.selected_dc = JSON.parse(JSON.parse(decodeURIComponent($paper.toner)));
        }
        else {
          this.selected_dc = JSON.parse(JSON.parse(decodeURIComponent($paper.indigo)));
        }
        this.dcPrice();
      }
    }
  }

  howMany() {

    //후가공별 여분 계산
    const arr_after_procs_spare = [
      { name:'is_cutting', val:0 },
      { name:'is_coating', val:2 },
      { name:'is_osi', val:5 },
      { name:'is_mising', val:5 },
      { name:'is_folding', val:5 },
      { name:'is_osifold', val:5 },
      { name:'is_rounding', val:0 },
      { name:'is_tomson', val:5 },
      { name:'is_punching', val:2 },
      { name:'is_press', val:10 },
      { name:'is_foil', val:10 },
      { name:'is_numbering', val:0 },
      { name:'is_qrcode', val:0 },
      { name:'is_quick', val:0 },
      { name:'is_embo', val:10 },
      { name:'is_barcode', val:0 },
      { name:'is_ramicoating', val:2 },
      { name:'is_uvscodix', val:3 },
      { name:'is_foilscodix', val:3 },
    ];

    let afterprocs_spare_sum = 0;


    $('input.afterproc:checkbox').each(function(e) {
      if( $(this).prop('checked')) {
        const nm = $(this).attr('name');

        const tmp = _.find(arr_after_procs_spare, function(o) {
          return (o.name == nm);
        });

        afterprocs_spare_sum += Number(tmp['val']);
      }
    });

    afterprocs_spare_sum = 0;

    for( let i=0;i<6;i++) {
      const v1 = Math.floor(this.$_machine_grid[i]['width'] / this.width2);
      const v2 = Math.floor(this.$_machine_grid[i]['height'] / this.height2);
      const v3 = Math.floor(this.$_machine_grid[i]['width'] / this.height2);
      const v4 = Math.floor(this.$_machine_grid[i]['height'] / this.width2);
      this.$_machine_grid[i]['max'] = Math.max(
        Number(v1) * Number(v2),
        Number(v3) * Number(v4)
      );

      if( afterprocs_spare_sum > 0) {
        const t_max = this.$_machine_grid[i]['max'];
        this.$_machine_grid[i]['spare'] = Math.ceil( afterprocs_spare_sum / t_max);
      }

      if( this.$_machine_grid[i]['max'] == 0) {
        this.$_machine_grid[i]['maesu'] = 0;
        this.$_machine_grid[i]['total_maesu'] = 0;
        this.$_machine_grid[i]['total_price'] = 9999999;
        this.$_machine_grid[i]['total_price2'] = 9999999;
      }
      else {
        let fixed_maesu = 'N';
        let p1 = Math.ceil(this.maesu / this.$_machine_grid[i]['max']) * this.quantity;

        this.$_machine_grid[i]['maesu'] = p1;


        /* 여분 정매적용 보류
        if( this.$_machine_grid[i]['spare'] >= 1) {
          if (this.$_machine_grid[i]['maesu'] > this.$_machine_grid[i]['spare']) {
            fixed_maesu = 'Y';
            p1 = (Math.ceil(this.maesu / this.$_machine_grid[i]['max']) + this.$_machine_grid[i]['spare']) * this.quantity;
          }
        }
        */

        this.$_machine_grid[i]['total_maesu'] = p1 * this.dosu;
        const t = this.guganPrintprice(this.$_machine_grid[i]['total_maesu'],this.$_machine_grid[i]['max'],i,this.add_rate);
        const tt2 = this.guganPrintprice(this.$_machine_grid[i]['total_maesu'],this.$_machine_grid[i]['max'],i,1);

        this.$_machine_grid[i]['print_price'] = t.toFixed(0);
        this.$_machine_grid[i]['pp'] = tt2.toFixed(0);

        this.$_machine_grid[i]['basic_price'] = t / this.add_rate;
        this.$_machine_grid[i]['print_maesu'] = (Math.ceil(this.maesu / this.$_machine_grid[i]['max']) + this.$_machine_grid[i]['spare']) * this.quantity;

        const add2 = Math.max( (p1 / 100),1);

        const tt1 = this.guganCuttingprice(this.$_machine_grid[i]['max'],p1,i,add2);

        this.$_machine_grid[i]['cutting_price'] = tt1;

        let hh = this.$_machine_grid[i];

        let obj2 = _.find(this.selected_paper, function(o) {
          return (o.height == hh['height2']);
        });

        //고시가
        let oprice = 0;
        let cnt = 0;
        let dc = 0;

        if( obj2) {
          oprice = Number(obj2['price']);
          cnt = Number(obj2['cnt']);
          dc = Number(obj2['dc']);
        }

        this.$_machine_grid[i]['oprice'] = oprice;
        this.$_machine_grid[i]['cnt'] = cnt;
        this.$_machine_grid[i]['dc'] = dc

        let spare_price = (oprice / cnt) * Number(this.$_machine_grid[i]['spare']);
        spare_price = Math.ceil(spare_price / 100) * 100;

        this.$_machine_grid[i]['spare_price'] = spare_price;

        let etc = 0;

        //indigo10000 일때만
        /*
        if( i == 1 || i == 2 || i == 4) {
          etc = 2;
        }
         */

        if( i == 1) {
          etc = 2;
        }

        /* 여분 정매적용 보류 */
        fixed_maesu = 'N';

        let m_maesu = this.$_machine_grid[i]['maesu'];
        if( fixed_maesu == 'N') {
          m_maesu = this.$_machine_grid[i]['maesu'];
        }
        else {
          m_maesu = this.$_machine_grid[i]['print_maesu'];
        }

        //etc = 0;
        const t2 = (Number(m_maesu) + etc) / cnt * oprice * dc;

        this.$_machine_grid[i]['paper_price'] = t2.toFixed(0);
        this.$_machine_grid[i]['total_price'] = Number(this.$_machine_grid[i]['paper_price']) + Number(this.$_machine_grid[i]['print_price']);


        if( this.coating == undefined || this.coating == '') {
          this.$_machine_grid[i]['coating_price'] = 0;
        }
        else {
          const coating = this.coating;
          const machine = this.$_machine_grid[i]['machine'];
          let coating_add_price = 0;
          let coating_job_price = 0;

          let table = this.$_coating_price;

          let obj = _.find(table, function(o) {
            return (o.name == coating);
          });

          const p = obj['price'];

          let m = (this.$_machine_grid[i]['width'] / 1000) * (this.$_machine_grid[i]['height'] / 1000) * p;
          m = Math.ceil(m / 10) * 10;

          table = this.$_coating_add_price;
          obj = _.find(table, function(o) {
            return (o.name == coating && o.machine == machine);
          });
          coating_add_price = obj['price'];


          table = this.$_coating_job_price;
          obj = _.find(table, function(o) {
            return (o.name == coating && o.machine == machine);
          });
          coating_job_price = obj['price'];


          const dd = Number( this.$_machine_grid[i]['max']);

          if( dd == 0) {
            this.$_machine_grid[i]['coating_price'] = 0;
          }
          else {
            const q_maesu =  (this.maesu * this.quantity) / dd;

            const p1 = (m + coating_job_price) * q_maesu + coating_add_price;
            const p2 = Math.ceil(p1 / 100) * 100;
            this.$_machine_grid[i]['coating_price'] = p2;
          }
        }

        //this.$_machine_grid[i]['total_price2'] = Number(tt1) + Number(this.$_machine_grid[i]['print_price']);
        this.$_machine_grid[i]['total_price2'] = Number(this.$_machine_grid[i]['paper_price']) + Number(this.$_machine_grid[i]['basic_price']) + Number(this.$_machine_grid[i]['cutting_price']) + Number(this.$_machine_grid[i]['coating_price']);

      }

    }

    if( this.machine == 'indigo') {
      if( this.$_machine_grid[0]['max'] != 0 && !isNaN(this.$_machine_grid[0]['paper_price'])) {
        this.$_selected_arr.push(this.$_machine_grid[0]);
      }
      if( this.$_machine_grid[1]['max'] != 0 && !isNaN(this.$_machine_grid[1]['paper_price']) ) {
        this.$_selected_arr.push(this.$_machine_grid[1]);
      }
      /* A2는 관상용
      if( this.$_machine_grid[3]['max'] != 0 && !isNaN(this.$_machine_grid[3]['paper_price']) ) {
        this.$_selected_arr.push(this.$_machine_grid[3]);
      }
      */
    }
    else if( this.machine == 'toner') {
      if( this.$_machine_grid[2]['max'] != 0 && !isNaN(this.$_machine_grid[2]['paper_price'])) {
        this.$_selected_arr.push(this.$_machine_grid[2]);
      }
      //레보리아 2개
      if( this.$_machine_grid[4]['max'] != 0 && !isNaN(this.$_machine_grid[4]['paper_price'])) {
        this.$_selected_arr.push(this.$_machine_grid[4]);
      }
      if( this.$_machine_grid[5]['max'] != 0 && !isNaN(this.$_machine_grid[5]['paper_price'])) {
        this.$_selected_arr.push(this.$_machine_grid[5]);
      }
    }

    let ret = _.sortBy(this.$_selected_arr,'total_price2');

    if(ret.length < 1) {
      return false;
    }

    this.division = ret[0]['max'];
    this.print_maesu = ret[0]['print_maesu'];

    this.$_selected_one = ret[0];

    this.sel_machine = ret[0]['machine'];

    //console.log(this.$_machine_grid);
    return true;
  }

  guganPrintprice(print_maesu,max, idx,add_rate) {
    let $data = null;

    if( idx == 0) {
      $data = this.$_hp7000;
    }
    else if( idx == 1) {
      $data = this.$_hp10000;
    }
    else if( idx == 2) {
      $data = this.$_minolta4;
    }
    else if( idx == 3) {
      $data = this.$_hpa2;
    }
    else if( idx == 4) {
      $data = this.$_revoria2;
    }
    else if( idx == 5) {
      $data = this.$_revoria3;
    }

    let total = 0;

    for( let x=0; x < 9; x++) {
      let y = x - 1;
      try {
        if( print_maesu < $data[x].mm && print_maesu > $data[y].mm) $data[x].gugan = print_maesu;
        else $data[x].gugan = $data[x].mm;
      } catch(e) {
        //console.log(e);
      }

      if( y > -1) {
        $data[x].total = Number($data[x].val) * ( Number($data[x].gugan) - Number($data[y].gugan));
      }
      else {
        $data[x].total = Number($data[x].gugan) * Number($data[x].val);
      }
    }

    for( const t in $data) {
      total += Number( $data[t]['total']);
      if( $data[t]['gugan'] == print_maesu) break;
    }

    total = total * add_rate;
    return total;
  }

  guganCuttingprice(print_maesu,total_maesu,idx,add_rate) {
    let $data = this.$_hp7000_cutting;

    if( idx == 0) {
      $data = this.$_hp7000_cutting;
    }
    else if( idx == 1) {
      $data = this.$_hp10000_cutting;
    }
    else if( idx == 2) {
      $data = this.$_minolta4_cutting;
    }
    else if( idx == 3) {
      $data = this.$_hpa2_cutting;
    }
    else if( idx == 4) {
      $data = this.$_revoria2_cutting;
    }
    else if( idx == 5) {
      $data = this.$_revoria3_cutting;
    }

    let total = 0;

    for( let x=0; x < 9; x++) {
      let y = x - 1;
      try {
        if( print_maesu < $data[x].mm && print_maesu > $data[y].mm) $data[x].gugan = print_maesu;
        else $data[x].gugan = $data[x].mm;
      } catch(e) {
        //console.log(e);
      }

      if( y > -1) {
        $data[x].total = Number($data[x].val) * ( Number($data[x].gugan) - Number($data[y].gugan));
      }
      else {
        $data[x].total = Number($data[x].gugan) * Number($data[x].val);
      }
    }

    for( const t in $data) {
      total += Number( $data[t]['total']);
      if( $data[t]['gugan'] == print_maesu) break;
    }

    total = total * add_rate;
    return Math.max(total,1000);
  }


  printPrice() {
    let ret = _.sortBy(this.$_selected_arr,'total_price2');

    //건수할증
    const p2 = (this.quantity * 1000) - 1000;
    const p3 = Number(ret[0]['print_price']) + Number(p2);
    const pp = Number(ret[0]['pp']) + Number(p2);

    const spare_price = Number(ret[0]['spare_price']);

    //엽서할인
    let post_card_sale = 0.2;
    if( this.machine == 'toner') {
      post_card_sale = 0.1;
    }

    let postcard_dc_price = 0;

    //메뉴에 관계없이 100x148, 105x148
    if( this.width == '100' && this.height == '148') {
      const p1 = Math.ceil( (p3 * post_card_sale) / 100) * 100;
      postcard_dc_price = Math.min(p1,3000);
    }

    if( this.width == '105' && this.height == '148') {
      const p1 = Math.ceil( (p3 * post_card_sale) / 100) * 100;
      postcard_dc_price = Math.min(p1,3000);
    }

    /*
    if( goods_code == 'dpostcard' && this.width == '100' && this.height == '148') {
      const p1 = Math.ceil( (p3 * post_card_sale) / 100) * 100;
      postcard_dc_price = Math.min(p1,3000);
    }

    if( goods_code == 'dpostcard' && this.width == '105' && this.height == '148') {
      const p1 = Math.ceil( (p3 * post_card_sale) / 100) * 100;
      postcard_dc_price = Math.min(p1,3000);
    }
    */

    //console.log('add_rate=>' + this.add_rate);
    //console.log('엽서할인=>' + postcard_dc_price);

    let p4 = (p3 - postcard_dc_price);
    const p5 = Math.ceil(p4 / 100) * 100 + 600;

    //console.log('p3=>' + p3);
    //console.log('pp=>' + pp);

    const ppp = Math.ceil( (p3 - pp) / 100) * 100;
    this.add_price = ppp;

    //this.add_price = Math.ceil( (p3 - p2) / 100) * 100;
    //console.log('별색비=>' + this.add_price);

    //분류비
    let class_price = 300;
    const unit_class_price = 300;

    // 분류비는 명함 && 해당 사이즈
    // 명함 분류비 다시 받는가?
    if( goods_code == 'dmynamecard')
    {
      if( this.width == '90' && this.height == '50') {
        class_price = 0;
      }
      else if( this.width == '50' && this.height == '90') {
        class_price = 0;
      }
      else if( this.width == '85' && this.height == '55') {
        class_price = 0;
      }
      else if( this.width == '55' && this.height == '85') {
        class_price = 0;
      }
      else if( this.width == '86' && this.height == '52') {
        class_price = 0;
      }
      else if( this.width == '52' && this.height == '86') {
        class_price = 0;
      }
      else {
        if( this.quantity > 1 && this.is_class == 'Y') {
          class_price = this.quantity * unit_class_price;
        }
      }
    }
    else {
      if( this.quantity > 1 && this.is_class == 'Y') {
        class_price = this.quantity * unit_class_price;
      }
    }

    this.class_price = class_price;
    this.spare_price = spare_price;
    this.print_price = p5;

    this.basicPrice();
  }

  dcPrice() {
    const $data = this.selected_dc;

    let $_gugan = [
      {'width':92,'height':52,'width2':this.width2,'height2':this.height2,'v1':0,'v2':0,'v3':0,'v4':0,'max':0,'rate':1},
      {'width':88,'height':54,'width2':this.width2,'height2':this.height2,'v1':0,'v2':0,'v3':0,'v4':0,'max':0,'rate':1},
      {'width':87,'height':57,'width2':this.width2,'height2':this.height2,'v1':0,'v2':0,'v3':0,'v4':0,'max':0,'rate':1.15},
      {'width':92,'height':54,'width2':this.width2,'height2':this.height2,'v1':0,'v2':0,'v3':0,'v4':0,'max':0,'rate':1.15},
    ];

    for( let i=0;i<4;i++) {
      $_gugan[i]['v1'] = Math.ceil($_gugan[i]['width2'] / $_gugan[i]['width']);
      $_gugan[i]['v2'] = Math.ceil($_gugan[i]['height2'] / $_gugan[i]['height']);
      $_gugan[i]['v3'] = Math.ceil($_gugan[i]['width2'] / $_gugan[i]['height']);
      $_gugan[i]['v4'] = Math.ceil($_gugan[i]['height2'] / $_gugan[i]['width']);
      const max = Math.min(
        Number($_gugan[i]['v1']) * Number($_gugan[i]['v2']),
        Number($_gugan[i]['v3']) * Number($_gugan[i]['v4'])
      ) * Number($_gugan[i]['rate']);

      $_gugan[i]['max'] = max;
    }

    const ret = _.sortBy($_gugan,'max');
    const min_max = Number(ret[0].max);

    const etc = Math.min( $_gugan[0]['max'],$_gugan[1]['max'],$_gugan[2]['max']);

    const add_cnt = (Number($data[4]['price']) / 500).toFixed(1) * etc;

    const add_price = Math.max( ((this.maesu - 480) * add_cnt),0);

    let etc_price = 0;

    if( this.dosu == 1) {
      etc_price = Math.ceil( (this.maesu * 4) / 100) * 100;
    }

    let point_maesu = 0;
    let tmp_price = 0;

    for( const t in $data) {
      if( t == 4) {
        if( this.maesu >= 385) {
          point_maesu = $data[t]['maesu'];
          tmp_price = $data[t]['price'];
          break;
        }
      }
      else {
        if( this.maesu <= Number( $data[t]['maesu'])) {
          point_maesu = $data[t]['maesu'];
          tmp_price = $data[t]['price'];
          break;
        }
      }
    }



    let t1 = min_max * (tmp_price - etc_price) + add_price;
    //let t2 = this.print_price - (this.print_price / this.add_rate);
    let t2 = 0;



    let t3 = this.cutting_price;
    //if( goods_code == 'dmynamecard') t3 = 0;

    //고정가별색
    //let x1 = Math.ceil(((this.basic_price * Number(this.add_rate)) - this.basic_price) / 100) * 100;
    const xx1 = Math.ceil(((this.basic_price * Number(this.add_rate)) - this.basic_price) / 100) * 100;
    let x1 = Math.max(xx1,0);

    this.fixed_price = Math.ceil((t1 + t2) / 100) * 100 * this.quantity + x1;

    /*
    if( Number(this.add_price) > 0) {
      this.fixed_price = Number(tmp_price) + Number(this.add_price);
    }
    else {
      this.fixed_price = Math.ceil((t1 + t2) / 100) * 100 * this.quantity + x1;
    }
     */
  }

  basicPrice() {
    let ret = _.sortBy(this.$_selected_arr,'total_price2');
    this.basic_price = Number(ret[0]['basic_price']);
  }

  paperPrice() {
    let ret = _.sortBy(this.$_selected_arr,'total_price2');
    let add_price = 0;

    if( this.paper_name.indexOf('선방용지') > -1) {
      add_price = 10000;
      this.paper_price = add_price;
    }
    else {
      this.paper_price = Math.ceil(Number(ret[0]['paper_price']) / 100) * 100 + 200 + add_price;
    }
  }

  cuttingPrice() {
    let ret = _.sortBy(this.$_selected_arr,'total_price2');
    let p1 = Math.ceil( ret[0]['cutting_price'] / 100) * 100;
    p1 = Math.max(p1,1000);


    this.cutting_price = p1;
  }

  checkFixedprice() {
    let t = this.paper_price + this.print_price;

    if( goods_code == 'dmynamecard') {
      t += this.cutting_price;
    }

    if( t < this.fixed_price) {
      return 'n';
    }
    else {
      return 'f';
    }
  }

  get get_paper_price() {
    return this.paper_price;
  }

  get get_print_price() {
    return this.print_price;
  }

  get get_basic_price() {
    return (this.print_price / this.add_rate);
  }

  get get_fixed_price() {
    return this.fixed_price;
  }

  get get_cutting_price() {
    return this.cutting_price;
  }

  get get_division() {
    return this.division;
  }

  get get_selmachine() {
    return this.sel_machine;
  }

  get get_price() {
    let tt = this.paper_price + this.print_price + this.cutting_price + this.spare_price;
    //재단비 빠진금액 재단비는 항목에 있다.
    let t = this.paper_price + this.print_price + this.class_price + this.spare_price;

    //재단건할증
    let t2 = (this.quantity -1) * 500;
    t += t2;
    tt += t2;

    this.normal_price = tt;

    let etc = this.add_price - this.cutting_price;

    let fixed_price = this.fixed_price - this.cutting_price + this.spare_price;

    if( etc > 0) {
      //fixed_price += etc;
    }

    /* 정매적용 보류
    if( this.$_machine_grid[0]['spare'] >= 1) {
      if (this.$_machine_grid[0]['maesu'] > this.$_machine_grid[0]['spare']) {
        fixed_price = 999999999;
      }
    }
    */

    //this.checklog();

    //비교할땐 재단비 포함



    let ret =  Math.min(tt,this.fixed_price);
    ret += this.class_price;
    ret -= this.cutting_price;

    //ret -= Number(this.$_selected_one['coating_price']);

    return Math.ceil( ret / 100) * 100;
  }

  get get_machine_selected() {
    return this.$_selected_one;
  }

  get get_machine_grids() {
    return this.$_machine_grid;
  }

  get get_coating_price() {

    let $data = this.$_coating_maesu;

    const print_maesu = this.$_selected_one['coating_price'];

    let total = 0;

    for( let x=0; x < 9; x++) {
      let y = x - 1;
      try {
        if( print_maesu < $data[x].mm && print_maesu > $data[y].mm) $data[x].gugan = print_maesu;
        else $data[x].gugan = $data[x].mm;
      } catch(e) {
        //console.log(e);
      }

      if( y > -1) {
        $data[x].total = Number($data[x].val) * ( Number($data[x].gugan) - Number($data[y].gugan));
      }
      else {
        $data[x].total = Number($data[x].gugan) * Number($data[x].val);
      }
    }

    for( const t in $data) {
      total += Number( $data[t]['total']);
      if( $data[t]['gugan'] == print_maesu) break;
    }

    total = Math.ceil(total / 100) * 100;
    //return this.$_selected_one['coating_price'];
    return total;
  }

  checklog() {
    console.clear();
    console.log('paper_price=>' + this.paper_price);
    console.log('print_price=>' + this.print_price);
    console.log('cutting_price=>' + this.cutting_price);
    console.log('fixed_price=>' + this.fixed_price);
    console.log('비교가격=>' + this.normal_price);
    console.log('분류비=>' + this.class_price);
    console.log('별색비=>' + this.add_price);
    console.log('selected_one=>' + JSON.stringify(this.$_selected_one));
  }
}


//판,절수구하기
function setPan() {
  const _ww = Number($('#cutsize-w').val());
  const _hh = Number($('#cutsize-h').val());

  $_sizes = [
    {'pan':'a1','width':910,'height':315,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'a3','width':445,'height':306,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'a4','width':301,'height':218,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'a5','width':218,'height':148,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'a6','width':148,'height':107,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'a2','width':636,'height':465,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'b2','width':738,'height':508,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'b3','width':506,'height':366,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'b4','width':366,'height':251,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'b5','width':251,'height':181,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
    {'pan':'b6','width':181,'height':123,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0}
  ];

  //스코딕스 있을때 참조
  $_sizes_scodix = [];

  $_howmany_trnas = [
    {'pan':'a3','howmany':1},
    {'pan':'a4','howmany':2},
    {'pan':'a5','howmany':4},
    {'pan':'a6','howmany':8},
    {'pan':'a1','howmany':1},
    {'pan':'a2','howmany':1},
    {'pan':'b2','howmany':1},
    {'pan':'b3','howmany':2},
    {'pan':'b4','howmany':4},
    {'pan':'b5','howmany':8},
    {'pan':'b6','howmany':16}
  ];

  $_pan_trans = [
    {'pan':'a3','to':'a3'},
    {'pan':'a4','to':'a3'},
    {'pan':'a5','to':'a3'},
    {'pan':'a6','to':'a3'},
    {'pan':'b2','to':'b2'},
    {'pan':'b3','to':'b2'},
    {'pan':'a1','to':'b2'},
    {'pan':'b4','to':'a3'},
    {'pan':'b5','to':'a3'},
    {'pan':'b6','to':'a3'}
  ];

  if( goods_code == 'dpostcard') {
    $_sizes = [
      {'pan':'a1','width':910,'height':315,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a3','width':441,'height':301,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a4','width':301,'height':218,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a5','width':218,'height':148,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a6','width':148,'height':107,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a2','width':636,'height':465,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'b2','width':736,'height':506,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'b3','width':506,'height':366,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'b4','width':366,'height':251,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'b5','width':251,'height':181,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'b6','width':181,'height':123,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0}
    ];


    $_size_scodix = [
      {'pan':'a3','width':416,'height':286,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a4','width':286,'height':206,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a5','width':206,'height':141,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0},
      {'pan':'a6','width':141,'height':101,'w_div_cw':0,'h_div_ch':0,'w_div_ch':0,'h_div_cw':0,'max':0,'w_mul_h':0,'cw_mul_ch':0,'minus':0}
    ];

    $_pan_trans = [
      {'pan':'a3','to':'a3'},
      {'pan':'a4','to':'a3'},
      {'pan':'a5','to':'a3'},
      {'pan':'a6','to':'a3'},
      {'pan':'b2','to':'b2'},
      {'pan':'a1','to':'b2'},
      {'pan':'b3','to':'b2'},
      {'pan':'b4','to':'b2'},
      {'pan':'b5','to':'b2'},
      {'pan':'b6','to':'b2'}
    ];

    $_howmany_trnas = [
      {'pan':'a3','howmany':1},
      {'pan':'a4','howmany':2},
      {'pan':'a5','howmany':4},
      {'pan':'a6','howmany':8},
      {'pan':'b2','howmany':1},
      {'pan':'a1','howmany':1},
      {'pan':'b3','howmany':2},
      {'pan':'b4','howmany':4},
      {'pan':'b5','howmany':8},
      {'pan':'b6','howmany':16}
    ];
  }

  let arr = $_sizes;

  if( goods_code == 'dpostcard') {
    let is_scodix = false;
    let is_tomson = false;

    if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
      is_scodix = true;
    }

    if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
      is_scodix = true;
    }

    if( $('input:checkbox[name="is_tomson"]').prop('checked')) {
      is_tomson = true;
    }

    if( is_scodix || is_tomson) {
      arr = $_size_scodix;
    }
  }

  for(let i=0;i<arr.length;i++) {
    let t1 = Math.floor(arr[i]['width'] / _ww);
    let t2 = Math.floor(arr[i]['height'] / _hh);
    let t3 = Math.floor(arr[i]['width'] / _hh);
    let t4 = Math.floor(arr[i]['height'] / _ww);
    let t5 = Math.max( (t1*t2),(t3*t4));
    let t6 = 0;

    if(t5 == 0) {
      t6 = -1;
    }
    else {
      t6 = Number(arr[i]['width']) * Number(arr[i]['height']);
    }

    let t7 = Math.round(_ww * _hh);

    let t8 = 0;

    if( t5 == 0) {
      t8 = -1;
    }
    else {
      t8 = t6 - t7;
    }

    arr[i]['w_div_cw'] = t1;
    arr[i]['h_div_ch'] = t2;
    arr[i]['w_div_ch'] = t3;
    arr[i]['h_div_cw'] = t4;
    arr[i]['max'] = t5;
    arr[i]['w_mul_h'] = t6;
    arr[i]['cw_mul_ch'] = t7;
    arr[i]['minus'] = t8;
  }

  let obj = _.filter(arr, function(o) {
    return (o.minus > -1);
  });

  let ret = _.sortBy(obj,'minus');

  let tmp_pan = ret[0]['pan'];
  let tmp_pan_howmany = ret[0]['max'];

  _tmp_pan = tmp_pan;
  _tmp_pan_howmany = tmp_pan_howmany;

  let obj2 = _.find($_pan_trans, function(o) {
    return (o.pan == tmp_pan);
  });


  try {
    _pan = obj2['to'];
    _pan_ori = obj2['to'];
  } catch(e) {

  }

  obj2 = _.find($_howmany_trnas, function(o) {
    return (o.pan == tmp_pan);
  });


  let final_pan_howmany = Math.max( obj2['howmany'], _tmp_pan_howmany);
  _pan_howmany = final_pan_howmany;

  let t0 = Math.ceil(_maesu / _pan_howmany);
  _print_maesu = t0;

  t0 = Math.ceil((_maesu * _quantity) / _pan_howmany);
  _total_maesu = Math.max(t0,1);
}

//재단가격
function priceCutting() {
  if( goods_code != 'dmynamecard') {
    if ($('input:checkbox[name="is_cutting"]').prop('checked')) {
      $('#fp-cutting-row').show();
      /*
      var cutting = new Cutting(_quantity, _pan, _pan_howmany, _maesu);
      const p1 = Math.round(cutting.get_price / 10) * 10;
      $('#fp-cutting').text(comma3(p1));
      $('.fp-cutting').text(comma3(p1));
       */
    } else {
      $('#fp-cutting').text('0');
      $('.fp-cutting').text('0');
      $('#fp-cutting-row').hide();
    }
  }
}


function makeOsiDisplay() {
  let maesu = $('select[name="maesu"] option:selected').val();
  let quantity = $('select[name="quantity"] option:selected').val();
  let lines = $('input:radio[name="osi_line"]:checked').attr('data-val');
  let cutsize_w = Number($('#cutsize-w').val());
  let cutsize_h = Number($('#cutsize-h').val());
  let sizemode = $('#toggle-afterproc-osi .btn-switch-psize').attr('data-sizemode');
  let big = Math.max(cutsize_w, cutsize_h);
  let small = Math.min(cutsize_w, cutsize_h);
  let tmp_pan = _tmp_pan;
  let device = 'pc';

  if( is_mobile == 'Y') device = 'mobile';

  const mg = 60;
  const bw = 170;
  const rate = bw * 100 / (big + mg) * 0.01;

  if (sizemode == 'large') {
    $('#osi-container').css({'zoom': rate, 'width': big + 'px', 'height': small + 'px'});
  } else {
    $('#osi-container').css({'zoom': rate, 'width': small + 'px', 'height': big + 'px'});
  }

  if( goods_code == 'dmynamecard') {
    $_osi = new OsiNamecard(_maesu, _quantity, lines, '#osi-item', '#osi-input', _cutsize_w, _cutsize_h, sizemode,device);
  }
  else {
    $_osi = new Osi(tmp_pan, maesu, quantity, lines, '#osi-item', '#osi-input', cutsize_w, cutsize_h, sizemode,device);
  }

}

function makeOsifoldDisplay() {
  let lines = $('input:radio[name="osifold_line"]:checked').attr('data-line');
  let val = $('input:radio[name="osifold_line"]:checked').val();
  var maesu = $('select[name="maesu"] option:selected').val();
  var quantity = $('select[name="quantity"] option:selected').val();
  var $dan = $('input:radio[name="osifold_line"]:checked');
  let cutsize_w = Number($('#cutsize-w').val());
  let cutsize_h = Number($('#cutsize-h').val());
  let sizemode = $('#toggle-afterproc-osifold .btn-switch-psize').attr('data-sizemode');
  let big = Math.max(cutsize_w, cutsize_h);
  let small = Math.min(cutsize_w, cutsize_h);
  let device = 'pc';

  if( is_mobile == 'Y') device = 'mobile';

  const mg = 60;
  const bw = 170;
  const rate = bw * 100 / (big + mg) * 0.01;

  if (sizemode == 'large') {
    $('#osifold-container').css({'zoom': rate, 'width': big + 'px', 'height': small + 'px'});
  } else {
    $('#osifold-container').css({'zoom': rate, 'width': small + 'px', 'height': big + 'px'});
  }

  $_osifold = new Osifold(_tmp_pan, maesu, quantity, $dan, '#osifold-item', '#osifold-input', cutsize_w, cutsize_h, sizemode, lines, val,device);
}

function makefoldingDisplay() {
  let lines = $('input:radio[name="fold_line"]:checked').attr('data-line');
  let val = $('input:radio[name="fold_line"]:checked').val();
  let maesu = $('select[name="maesu"] option:selected').val();
  let quantity = $('select[name="quantity"] option:selected').val();
  let $dan = $('input:radio[name="fold_line"]:checked');
  let cutsize_w = Number($('#cutsize-w').val());
  let cutsize_h = Number($('#cutsize-h').val());
  let rate = $('select[name="paper_size"] option:selected').attr('data-zoom');
  let sizemode = $('#toggle-afterproc-folding .btn-switch-psize').attr('data-sizemode');
  let big = Math.max(cutsize_w, cutsize_h);
  let small = Math.min(cutsize_w, cutsize_h);
  let device = 'pc';

  if( is_mobile == 'Y') device = 'mobile';

  if (sizemode == 'large') {
    $('#folding-container').css({'zoom': rate, 'width': big + 'px', 'height': small + 'px'});
  } else {
    $('#folding-container').css({'zoom': rate, 'width': small + 'px', 'height': big + 'px'});
  }

  $_folding = new Folding(_tmp_pan, maesu, quantity, $dan, '#folding-item', '#folding-input', cutsize_w, cutsize_h, sizemode, lines, val,device);
}

function makeMisingDisplay() {
  let maesu = $('select[name="maesu"] option:selected').val();
  let quantity = $('select[name="quantity"] option:selected').val();
  let lines = $('input:radio[name="mising_line"]:checked').attr('data-val');
  let cutsize_w = Number($('#cutsize-w').val());
  let cutsize_h = Number($('#cutsize-h').val());
  let sizemode = $('#toggle-afterproc-mising .btn-switch-psize').attr('data-sizemode');
  let big = Math.max(cutsize_w, cutsize_h);
  let small = Math.min(cutsize_w, cutsize_h);
  let tmp_pan = _tmp_pan;
  let device = 'pc';

  if( is_mobile == 'Y') device = 'mobile';


  const mg = 60;
  const bw = 170;
  const rate = bw * 100 / (big + mg) * 0.01;

  if (sizemode == 'large') {
    $('#mising-container').css({'zoom': rate, 'width': big + 'px', 'height': small + 'px'});
  } else {
    $('#mising-container').css({'zoom': rate, 'width': small + 'px', 'height': big + 'px'});
  }

  if( goods_code == 'dmynamecard') {
    $_mising = new MisingNamecard(_maesu, _quantity, lines, '#mising-item', '#mising-input', _cutsize_w, _cutsize_h, sizemode,device);
  }
  else {
    $_mising = new Mising(tmp_pan, maesu, quantity, lines, '#mising-item', '#mising-input', cutsize_w, cutsize_h, sizemode,device);
  }

}

//코팅 가격계산
function priceCoating() {
  if ($('input:checkbox[name="is_coating"]').prop('checked')) {
    $('#fp-coating-row').show();

    /*
    setPan();

    let coating = null;
    const val = $('input:radio[name="coating"]:checked').attr('data-val');

    const $spec = {
      'maesu': Number($('#maesu').val()),
      'quantity': Number($('#quantity').val()),
      'cutwidth': Number($('#cutsize-w').val()),
      'cutheight': Number($('#cutsize-h').val()),
    };

    coating = new Coating($spec, val,g_division);

    $('#fp-coating').text(comma3(coating.get_price));
    $('.fp-coating').text(comma3(coating.get_price));

     */
  }
  else {
    $('#fp-coating').text('0');
    $('.fp-coating').text('0');
    $('#fp-coating-row').hide();
  }
}

//오시 가격계산
function priceOsi() {
  setPan();

  if ($('input:checkbox[name="is_osi"]').prop('checked')) {
    $('#fp-osi-row').show();
    makeOsiDisplay();

    $('#fp-osi').text(comma3($_osi.get_price));
    $('.fp-osi').text(comma3($_osi.get_price));
  } else {
    $('#fp-osi').text('0');
    $('.fp-osi').text('0');
    $('#fp-osi-row').hide();
  }
}

//미싱 가격계산
function priceMising() {
  setPan();

  if ($('input:checkbox[name="is_mising"]').prop('checked')) {
    $('#fp-mising-row').show();
    makeMisingDisplay();
    $('#fp-mising').text(comma3($_mising.get_price));
    $('.fp-mising').text(comma3($_mising.get_price));
  } else {
    $('#fp-mising').text('0');
    $('.fp-mising').text('0');
    $('#fp-mising-row').hide();
  }
}

//도무송 가격계산
function priceTomson() {
  setPan();

  if ($('input:checkbox[name="is_tomson"]').prop('checked')) {
    $('#fp-tomson-row').show();

    var tomson_total = 0;

    let no = 1;

    $('#toggle-afterproc-tomson .tomson-row').each(function () {
      let $width = $(this).find('.tomson-width');
      let $height = $(this).find('.tomson-height');
      let $unit_cnt = $(this).find('.tomson-cnt');
      let $shape = $(this).find('.tomson-shape option:selected');
      let is_scodix = false;

      if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
        is_scodix = true;
      }

      if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
        is_scodix = true;
      }

      let tomson = null

      /*
      if( goods_code == 'dmynamecard') {
        tomson = new TomsonNamecard(_pan, _pan_howmany, _cutsize_w, _cutsize_h, _maesu, _quantity, $width, $height, $unit_cnt, $shape, is_scodix,no);
      }
      else {
        tomson = new Tomson(_pan, _pan_howmany, _cutsize_w, _cutsize_h, _maesu, _quantity, $width, $height, $unit_cnt, $shape, is_scodix,no);
      }
       */
      tomson = new Tomson(_pan, _pan_howmany, _cutsize_w, _cutsize_h, _maesu, _quantity, $width, $height, $unit_cnt, $shape, is_scodix,no);

      no++;

      $(this).find('.fp-tomson').text(comma3(tomson.get_price));

      tomson_total += Number(tomson.get_price);

      $(this).find('.tomson-price').text(tomson.get_price);
    });

    const p1 = Math.round(tomson_total / 100) * 100;

    $('#fp-tomson').text(comma3(p1));
    $('.fp-tomson').text(comma3(p1));
  } else {
    $('#fp-tomson').text('0');
    $('.fp-tomson').text('0');
    $('#fp-tomson-row').hide();
  }
}

//타공 가격계산
function pricePunching() {
  if ($('input:checkbox[name="is_punching"]').prop('checked')) {
    $('#fp-punching-row').show();

    let cnt = $('select[name="punching_cnt"] option:selected').val();

    let punching = null;

    /*
    if( goods_code == 'dmynamecard') {
      punching = new PunchingNamecard(_maesu, cnt, _quantity);
    }
    else {
      punching = new Punching(_maesu, cnt, _quantity);
    }

     */

    punching = new Punching(_maesu, cnt, _quantity);

    $('#fp-punching').text(comma3(punching.get_price));
    $('.fp-punching').text(comma3(punching.get_price));
  } else {
    $('#fp-punching').text('0');
    $('.fp-punching').text('0');
    $('#fp-punching-row').hide();
  }
}

//형압 가격계산
function pricePress() {

  if ($('input:checkbox[name="is_press"]').prop('checked')) {
    $('#fp-press-row').show();

    let $way = null;
    let $kind = null;
    let width = $('input[name="press_width"]').val();
    let height = $('input[name="press_height"]').val();
    const cutsize_w = $('#cutsize-w').val();
    const cutsize_h = $('#cutsize-h').val();
    const is_have = $('#toggle-afterproc-press .press-row').attr('data-have');
    const paper = $('#cover-gram').val();

    let press = new Bak(_maesu, $way, $kind, width, height, _quantity, cutsize_w, cutsize_h,'Y',paper);

    let price = press.get_price;

    if( price <= 0) {
      alert('형압 가능한 사이즈가 아닙니다.');
      $('#toggle-afterproc-press').hide();
      $('input:checkbox[name="is_press"]').prop('checked',false).change();
      return false;
    }

    const dongpan_price = press.get_dongpan_price;
    const film_price = press.get_film_price;

    if( is_have == 'Y') {
      price = price - dongpan_price;
    }

    $('#toggle-afterproc-press .pan-price').text(dongpan_price);
    $('#toggle-afterproc-press .film-price').text(film_price);

    $('#fp-press').text(comma3(price));
    $('.fp-press').text(comma3(price));
  } else {
    $('#fp-press').text('0');
    $('.fp-press').text('0');
    $('#fp-press-row').hide();
  }
}

//귀도리 가격계산
function priceRounding() {
  if ($('input:checkbox[name="is_rounding"]').prop('checked')) {
    $('#fp-rounding-row').show();

    let width = $('input[name="press_width"]').val();
    let height = $('input[name="press_height"]').val();

    let rounding = new Rounding(_maesu, _quantity);

    $('#fp-rounding').text(comma3(rounding.get_price));
    $('.fp-rounding').text(comma3(rounding.get_price));
  } else {
    $('#fp-rounding').text('0');
    $('.fp-rounding').text('0');
    $('#fp-rounding-row').hide();
  }
}

//동판박 가격계산
function priceFoil() {
  if ($('input:checkbox[name="is_foil"]').prop('checked')) {
    $('#fp-foil-row').show();
    let total_price = 0;
    $('.foil-row').each(function () {

      let $way = $(this).find('.foil-way option:selected');
      let $kind = $(this).find('.foil option:selected');
      let width = $(this).find('.foil-width').val();
      let height = $(this).find('.foil-height').val();
      const cutsize_w = $('#cutsize-w').val();
      const cutsize_h = $('#cutsize-h').val();

      const is_have = $(this).attr('data-have');
      const paper = $('#cover-gram').val();

      let foil = new Bak(_maesu, $way, $kind, width, height, _quantity, cutsize_w, cutsize_h,'N',paper);

      let price = foil.get_price;

      if( price <= 0) {
        alert('동판박 가능한 사이즈가 아닙니다.');
        $('#toggle-afterproc-foil').hide();
        $('input:checkbox[name="is_foil"]').prop('checked',false).change();
        return false;
      }

      const dongpan_price = foil.get_dongpan_price;
      const film_price = foil.get_film_price;

      if( is_have == 'Y') {
        price = price - dongpan_price;
      }

      total_price += price;

      $(this).find('.foil-price').text(price);
      $(this).find('.pan-price').text(dongpan_price);
      $(this).find('.film-price').text(film_price);
    });

    $('#fp-foil').text(comma3(total_price));
    $('.fp-foil').text(comma3(total_price));
  }
  else {
    $('#fp-foil').text('0');
    $('.fp-foil').text('0');
    $('#fp-foil-row').hide();
  }
}

//즉석명함 가격계산
function priceQuick() {
  if ($('input:checkbox[name="is_quick"]').prop('checked')) {
    $('#fp-quick-mynamecard-row').show();

    let quick = new QuickBusinessCard(_maesu, _quantity);

    $('#fp-quick-mynamecard').text(comma3(quick.get_price));
    $('.fp-quick-mynamecard').text(comma3(quick.get_price));
  } else {
    $('#fp-quick-mynamecard-row').hide();

    $('#fp-quick-mynamecard').text('0');
    $('.fp-quick-mynamecard').text('0');
  }
}

//넘버링 가격계산
function priceNumbering() {
  if ($('input:checkbox[name="is_numbering"]').prop('checked')) {
    $('#fp-numbering-row').show();
    let numbering = new Numbering(_maesu, _quantity);
    $('#fp-numbering').text(comma3(numbering.get_price));
    $('.fp-numbering').text(comma3(numbering.get_price));
  } else {
    $('#fp-numbering').text('0');
    $('.fp-numbering').text('0');
    $('#fp-numbering-row').hide();
  }
}

//바코드 가격계산
function priceBarcode() {
  if ($('input:checkbox[name="is_barcode"]').prop('checked')) {
    $('#fp-barcode-row').show();

    let barcode = new Barcode(_maesu, _quantity);
    $('#fp-barcode').text(comma3(barcode.get_price));
    $('.fp-barcode').text(comma3(barcode.get_price));
  } else {
    $('#fp-barcode').text('0');
    $('.fp-barcode').text('0');
    $('#fp-barcode-row').hide();
  }
}

//QR코드 가격계산
function priceQRcode() {
  if ($('input:checkbox[name="is_qrcode"]').prop('checked')) {
    $('#fp-qrcode-row').show();
    let qrcode = new QRCode(_maesu, _quantity);
    $('#fp-qrcode').text(comma3(qrcode.get_price));
    $('.fp-qrcode').text(comma3(qrcode.get_price));
  } else {
    $('#fp-qrcode').text('0');
    $('.fp-qrcode').text('0');
    $('#fp-qrcode-row').hide();
  }
}

//송진엠보 가겨계산
function priceEmbo() {
  if ($('input:checkbox[name="is_embo"]').prop('checked')) {
    $('#fp-embo-row').show();
    let sides = $('input:radio[name="embo"]:checked').attr('data-sides');
    let embo = new Embo(_maesu, _quantity, sides);
    $('#fp-embo').text(comma3(embo.get_price));
    $('.fp-embo').text(comma3(embo.get_price));
  } else {
    $('#fp-embo').text('0');
    $('.fp-embo').text('0');
    $('#fp-embo-row').hide();
  }
}

//오시+접지가격
function priceOsifold() {
  setPan();

  if ($('input:checkbox[name="is_osifold"]').prop('checked')) {
    $('#fp-osifold-row').show();
    makeOsifoldDisplay();
    const p1 = Math.round($_osifold.get_price / 10) * 10;
    $('#fp-osifold').text(comma3(p1));
    $('.fp-osifold').text(comma3(p1));
  } else {
    $('#fp-osifold').text('0');
    $('.fp-osifold').text('0');
    $('#fp-osifold-row').hide();
  }
}

//접지가격
function priceFolding() {
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    $('#fp-folding-row').show();
    makefoldingDisplay();
    const p1 = Math.round($_folding.get_price / 10) * 10;
    $('#fp-folding').text(comma3(p1));
    $('.fp-folding').text(comma3(p1));
  } else {
    $('#fp-folding').text('0');
    $('.fp-folding').text('0');
    $('#fp-folding-row').hide();
  }

  /*
  if ($('input:checkbox[name="is_folding"]').prop('checked')) {
    $('#fp-folding-row').show();
    let price = $('input:radio[name="folding"]:checked').attr('data-price');
    let quantity = $('#quantity').val();
    let maesu = $('#maesu').val();

    var folding = new Folding(_tmp_pan, quantity, maesu, price);
    $('#fp-folding').text(comma3(folding.get_price));
    $('.fp-folding').text(comma3(folding.get_price));
  } else {
    $('#fp-folding').text('0');
    $('.fp-folding').text('0');
    $('#fp-folding-row').hide();
  }
  */
}

function priceUVscodix() {
  setPan();

  if ($('input:checkbox[name="is_uvscodix"]').prop('checked')) {
    $('#fp-uvscodix-row').show();

    const ww = $('input[name="uvscodix_width"]').val();
    const hh = $('input[name="uvscodix_height"]').val();

    const cutwidth = Number($('#cutsize-w').val());
    const cutheight = Number($('#cutsize-h').val());
    const maesu = Number($('#maesu').val());
    const quantity = Number($('#quantity').val());

    const $spec = {
      'cutwidth':cutwidth,
      'cutheight':cutheight,
      'maesu':maesu,
      'quantity':quantity,
    }

    const uvscodix = new UVscodix($spec,ww, hh);

    if( uvscodix.get_error) {
      alert('지원하지 않는 사이즈 입니다.(디지털 부분UV)');
      setTimeout(()=>{
        $('#is-uvscodix').trigger('click');
      },200);
    }
    else {
      $('#fp-uvscodix').text(comma3(uvscodix.get_price));
      $('.fp-uvscodix').text(comma3(uvscodix.get_price));
    }
  } else {
    $('#fp-uvscodix').text('0');
    $('.fp-uvscodix').text('0');
    $('#fp-uvscodix-row').hide();
  }

}

//스코딕스박 가격계산
function priceFoilscodix() {
  setPan();
  if ($('input:checkbox[name="is_foilscodix"]').prop('checked')) {
    $('#fp-foilscodix-row').show();
    let total_price = 0;

    $('.foilscodix-row').each(function () {
      const sides = $(this).find('.foilscodix-way option:selected').attr('data-val');
      const foil = $(this).find('.foilscodix option:selected').attr('data-val');
      const ww = $(this).find('.foilscodix-ww').val();
      const hh = $(this).find('.foilscodix-hh').val();

      const cutwidth = Number($('#cutsize-w').val());
      const cutheight = Number($('#cutsize-h').val());
      const maesu = Number($('#maesu').val());
      const quantity = Number($('#quantity').val());

      const $spec = {
        'cutwidth':cutwidth,
        'cutheight':cutheight,
        'maesu':maesu,
        'quantity':quantity,
      }

      const foilcodix = new Foilscodix($spec,sides, foil, ww, hh);

      if( foilcodix.get_error) {
        alert('지원하지 않는 사이즈 입니다.(디지털 박)');
        setTimeout(()=>{
          $('#is-foilscodix').trigger('click');
          return false;
        },200);
      }
      else {
        $(this).find('.foilscodix-price').text(foilcodix.get_price);
        total_price += foilcodix.get_price;
      }
    });

    const p1 = Math.round(total_price / 100) * 100;
    $('#fp-foilscodix').text(comma3(p1));
    $('.fp-foilscodix').text(comma3(p1));
  } else {
    $('#fp-foilscodix').text('0');
    $('.fp-foilscodix').text('0');
    $('#fp-foilscodix-row').hide();
  }
}

//라미넥스코팅가격
function priceRamicoating() {
  setPan();

  if ($('input:checkbox[name="is_ramicoating"]').prop('checked')) {
    $('#fp-ramicoating-row').show();
    const ww = $('#jobsize-w').val();
    const hh = $('#jobsize-h').val();
    const maesu = $('select[name="maesu"] option:selected').val();
    const quantity = $('select[name="quantity"] option:selected').val();
    //var coating = new Ramicoating(_pan_ori, _total_maesu, val,maesu,quantity);
    var coating = new Ramicoating(ww,hh,maesu,quantity);

    $('#fp-ramicoating').text(comma3(coating.get_price));
    $('.fp-ramicoating').text(comma3(coating.get_price));
  } else {
    $('#fp-ramicoating').text('0');
    $('.fp-ramicoating').text('0');
    $('#fp-ramicoating-row').hide();
  }
}

function priceToday() {
  if ($('input:checkbox[name="is_today"]').prop('checked')) {
    $('#fp-todayprice-row').show();

    let supply = 0;

    $('.mny').each(function () {
      let v = Number($(this).text().replace(/,/g, ''));
      if( $(this).attr('id') == 'fp-todayprice' || $(this).attr('id') == 'fp-tomorrowprice') {
      }
      else {
        supply += v;
      }
    });

    const price = Math.ceil( (supply * 0.1 + 1000) / 100) * 100;

    $('#fp-todayprice').text(comma3(price));
    $('.fp-todayprice').text(comma3(price));
  } else {
    $('#fp-todayprice').text('0');
    $('.fp-todayprice').text('0');
    $('#fp-todayprice-row').hide();
  }
}


function priceTomorrow() {
  if ($('input:checkbox[name="is_tomorrow"]').prop('checked')) {
    $('#fp-tomorrowprice-row').show();
    let supply = 0;

    $('.mny').each(function () {
      let v = Number($(this).text().replace(/,/g, ''));
      if( $(this).attr('id') == 'fp-todayprice' || $(this).attr('id') == 'fp-tomorrowprice') {
      }
      else {
        supply += v;
      }
    });

    const price = Math.ceil( (supply * 0.1 + 1000) / 100) * 100;

    $('#fp-tomorrowprice').text(comma3(price));
    $('.fp-tomorrowprice').text(comma3(price));
  } else {
    $('#fp-tomorrowprice').text('0');
    $('.fp-tomorrowprice').text('0');
    $('#fp-tomorrowprice-row').hide();
  }
}


function priceEmergency() {
  if ($('input:checkbox[name="is_emerprice"]').prop('checked')) {
    $('#fp-emerprice-row').show();

    let supply = 0;

    $('.mny').each(function () {
      let v = Number($(this).text().replace(/,/g, ''));
      if( $(this).attr('id') == 'fp-todayprice' || $(this).attr('id') == 'fp-tomorrowprice' || $(this).attr('id') == 'fp-emerprice') {
      }
      else {
        supply += v;
      }
    });

    let price = Math.ceil( (supply * 0.1 + 1000) / 100) * 100;
    price = Math.max(price,1000);

    $('#fp-emerprice').text(comma3(price));
    $('.fp-emerprice').text(comma3(price));
  } else {
    $('#fp-emerprice').text('0');
    $('.fp-emerprice').text('0');
    $('#fp-emerprice-row').hide();
  }
}
