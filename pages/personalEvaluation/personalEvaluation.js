// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageindex:1,
    chechedColor:'#3f9cfa',
    array: ['美国', '中国', '巴西', '日本'],
    //切换地址列表
    isAddresslistshow:false,
    config:{
      //第一个表单
      age:'',
      sex:'',
      address:'',
      workyear: '',
      worktype:'',
      iswork:'',
      salary:'',
      //第二个表单
      houseaddress:'',
      houseSqure:'',
      houseNumber:'',
      houseCode:'',
      houseArea:'',
      houseFloor:'',
      houseTotleFloor:'',
      houseDirection:'',
      houseType:'',
      sexArr: [{
        name: '男士',
        checked: false
      }, {
        name: '女士',
        checked: false
      }],
      workyearArr: [{
        name: '无经验',
        checked: false
      }, {
        name: '1-2年',
        checked: false
      }, {
        name: '3-5年',
        checked: false
      }, {
        name: '6-10年',
        checked: false
      }, {
        name: '11-15年',
        checked: false
      }, {
        name: '16-20年',
        checked: false
      }, {
        name: '20年以上',
        checked: false
      }],
      isWorkArr: [{
        name: '否',
        checked: false
      }, {
        name: '是',
          checked: false
      }],
      salaryArr: [{
        name: '无',
        checked: false
      }, {
        name: '3千以下',
        checked: false
      }, {
        name: '3-6千',
        checked: false
      }, {
        name: '0.6-1.5万',
        checked: false
      }, {
        name: '1.5-2万',
        checked: false
      }, {
        name: '2万以上',
        checked: false
      }],
      worktypeArr: ['it', '财务', '教练', '老板'],
      houseDirectionArr: [
        {
          'name': '东',
          'checked': false
        },
        {
          'name': '南',
          'checked': false
        },
        {
          'name': '西',
          'checked': false
        },
        {
          'name': '北',
          'checked': false
        },
        {
          'name': '东南',
          'checked': false
        },
        {
          'name': '西北',
          'checked': false
        }
      ],
      houseTypeArr: [{
        'name': '一室',
        'checked': false
      }, {
        'name': '一室一厅',
        'checked': false
      }, {
        'name': '二室一厅',
        'checked': false
      }, {
        'name': '三室一厅',
        'checked': false
      }, {
        'name': '四室一厅',
        'checked': false
      }],
      searchData:[
       
      ],
      item: [{
        // 1 ： 单选    0： 多选（多个） 2：多选（单个） 
        question: '1. 当前逾期（单选）',
        fullname: 'name1',
        radio: 1,
        content: [
          { id: 0, name: 'radioOutDate0', value: 'r0', checked: true, question: '（1）无当前逾期' },
          { id: 1, name: 'radioOutDate1', value: 'r1', checked: false, question: '（2）当前逾期，但可提供结清证明' },
          { name: 'radioOutDate2', value: 'r2', checked: false, question: '（3）当前逾期，未结清' },
        ]
      }, {
        question: '2. 贷款及信用卡逾期记录（多选）',
        radio: 0,
        fullname: 'name2',
        content: [
          { id: 0, name: 'checkboxOutDate0', value: 'c0', checked: false, question: '（1）近一年内连续逾期超过3次' },
          { id: 1, name: 'checkboxOutDate1', value: 'c1', checked: false, question: '（2）近一年内累计逾期超过6次' },
          { id: 2, name: 'checkboxOutDate2', value: 'c2', checked: false, question: '（3）近两年内连续逾期超过6次' },
          { id: 3, name: 'checkboxOutDate3', value: 'c3', checked: false, question: '（4）近两年内累计逾期超过15次' },
          { id: 4, name: 'checkboxOutDate4', value: 'c4', checked: false, question: '（5）近两年内累计逾期超过20次' },
          { id: 5, name: 'checkboxOutDate5', value: 'c5', checked: false, question: '（6）近一年内单次连续逾期金额超过10万元' }
        ]
      }, {
        question: '',
        fullname: 'name3',
        radio: 2,
        content: [{ id: 0, name: 'oneRadio0', value: 'o0', checked: false, question: '3. 没有过执行记录' }]
      },
      {
        question: '4. 否唯一住房（单选）',
        radio: 1,
        fullname: 'name4',
        content: [
          { id: 0, name: 'isOnlyHouse0', value: 'i0', checked: 'true', question: '（1）唯一住房' },
          { id: 1, name: 'isOnlyHouse1', value: 'i1', question: '（2）唯一住房，房屋内部装修等较差' },
          {
            id: 2, name: 'isOnlyHouse2', value: 'i2', question: '（3）唯一住房，但可提供直系亲属为担保人，担保人名下有住房'
          }, {
            id: 3, name: 'isOnlyHouse3', value: 'i3', question: '（4）不是唯一住房，可提供二套及以上房产证明'
          }
        ]
      }, {
        question: '5. 偿还能力（单选）',
        radio: 1,
        fullname: 'name5',
        content: [
          {
            id: 0, name: 'repayBility0', value: 'rb0', checked: 'true', question: '（1）可提供详细的经营情况证明，企业经营或个人银行流水可覆盖一年期贷款的本息'
          },
          {
            id: 1, name: 'repayBility1', value: 'rb1', question: '（2）无法提供经营情况，无法提供流水等资料证明其有偿还本息的能力'
          },
        ]
      }, {
        question: '',
        radio: 2,
        fullname: 'name6',
        content: [{ id: 0, name: 'moreCredit', value: 'm0', checked: false, question: '6. 存在显性负债或多头民间借贷' }]
      }, {
        question: '',
        radio: 2,
        fullname: 'name7',
        content: [{ id: 0, name: 'personal0', value: 'p0', checked: false, question: '7. 离异/高龄单身' }]
      },]
    },
    wrongBox:false,
    successBox:false,
    customItem: '全部',
    addressPlaceholder: '请选择',
    workPlaceholder: '选择您所从事的行业',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载传过来的title标题
    const title = options.title;
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  computedFn: function(arr,arritem){
    arr.map(function (item, index) {
      if (item.name == arritem) {
        item.checked = true
      } else {
        item.checked = false
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  radioSexChange:function(e){
    //传入选中sex值
    const sex = e.detail.value
    const config = this.data.config;
    //更新数组
    const arr = this.data.config.sexArr;
    this.computedFn(arr, sex)
    config['sex'] = sex;
    config['sexArr'] = arr;
    this.setData({
      config: config
    });
  },
  bindRegionChange: function (e) {
    //传入选中地址值
    const address = e.detail.value
    const name = e.currentTarget.dataset.name;
    const config = this.data.config;
    config[name] = address;
    this.setData({
      config: config
    });
  },
  //传入行业
  bindWorkChange:function(e){
    //传入选中地址值
    const worktype = e.detail.value;
    const config = this.data.config;
    config['worktype'] = config.worktypeArr[worktype];
    this.setData({
      config: config
    });
  },
  isWorkChange: function (e) {
    //传入选中sex值
    const iswork = e.detail.value;
    const config = this.data.config;
    //更新数组
    const arr = this.data.config.isWorkArr;
    this.computedFn(arr, iswork)
    config['iswork'] = iswork;
    config['isWorkArr'] = arr;
    this.setData({
      config: config
    });
  },
  //下一步表单
  gotonextTable:function(e){
    const objVal = this.data.config;
        //验证三个必填 age sex address
        for (var x in objVal) {
          if (objVal['age'] == '') {
            //测试不通过
            this.setData({
              wrongBox: true,
              wrongText: '年龄不能为空'
            })
            return false
          } else if (objVal['age'] >= 65 || objVal['age'] < 18) {
            //测试不通过
            this.setData({
              wrongBox: true,
              wrongText: '年龄介于18和65之间'
            })
            return false
          } else if (objVal['address'] == '') {
            this.setData({
              wrongBox: true,
              wrongText: '地址未选择'
            })
            return false
          } else if (objVal['workyear'] == '') {
            this.setData({
              wrongBox: true,
              wrongText: '工作年限未选择'
            })
            return false
          } else if (objVal['worktype'] == null) {
            this.setData({
              wrongBox: true,
              wrongText: '从事行业未选择'
            })
            return false
          } else if (objVal['salary'] == '') {
            this.setData({
              wrongBox: true,
              wrongText: '月收入区间未选择'
            })
            return false
          } else {
            //提交数据表单

          }
        };
        this.setData({
          pageindex:1
        })
  },
  gotonextTable2: function (e) {
    const objVal = this.data.config;
    //验证三个必填 age sex address
    for (var x in objVal) {
      if (objVal['houseSqure'].trim() == '') {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '抵押物虽在小区不能为空'
        })
        return false
      } else if (objVal['houseNumber'].trim() == '') {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '楼栋及门牌号不能为空'
        })
        return false
      } else if (objVal['houseCode'].trim() == '') {
        this.setData({
          wrongBox: true,
          wrongText: '房产证号不能为空'
        })
        return false
      } else if (objVal['houseArea'].trim() == '') {
        this.setData({
          wrongBox: true,
          wrongText: '房产面积不能为空'
        })
        return false
      } else if (objVal['houseFloor'].trim() == null) {
        this.setData({
          wrongBox: true,
          wrongText: '总楼层不能为空'
        })
        return false
      } else if (objVal['houseTotleFloor'].trim() == '') {
        this.setData({
          wrongBox: true,
          wrongText: '所在楼层不能为空'
        })
        return false
      }  else {
        //提交数据表单

      }
    };
    this.setData({
      pageindex: 2
    })
  },
  //动态存储config数据
  bindtextinput: function (e) {
    const value = e.detail.value;
    const inputtype = e.currentTarget.dataset.name;
    var obj = this.data.config;
    obj[inputtype] = value;
    this.setData({
      config: obj
    });
    if(e.currentTarget.dataset.type == 'search'){
      //点击出现搜索弹窗

      this.showSearchData(value);
    }

  },
  showSearchData: function(value){
    const searchValue = value;
    var that = this;
    wx.showLoading({
      title: '正在查询',
      mask:true
    });
    var data = '';
    setTimeout(function(){
      wx.hideLoading();
      data = [{ id: 0, name: '123456' },
      { id: 1, name: '1234556' },
      { id: 2, name: '1234576' },
      { id: 3, name: '1234546' },
      { id: 4, name: '1234516' },
      { id: 5, name: '1234526' },
      { id: 6, name: '1234576' },
      { id: 7, name: '1234516' },
      { id: 0, name: '123456' },
      { id: 1, name: '1234556' },
      { id: 2, name: '1234576' },
      { id: 3, name: '1234546' },
      { id: 4, name: '1234516' },
      { id: 5, name: '1234526' },
      { id: 6, name: '1234576' },
      { id: 7, name: '1234516' }];

      var configdata = that.data.config;
      configdata['searchData'] = data;
      configdata['isAddresslistshow'] = true;
      that.setData({
        config: configdata
      });
    },1000)    
  },
  addaddress:function(e){
    const address = e.currentTarget.dataset.address;
    var configdata = this.data.config;
    console.log(address)
    configdata['houseSqure'] = address;
    configdata['isAddresslistshow'] = false;
    this.setData({
      config: configdata
    })

  },
  closeAddressList:function(){
    var configdata = this.data.config;
    configdata['isAddresslistshow'] = false;
    this.setData({
      config: configdata
    });
  },
  //选择年份 月薪范围
  clickedBox: function (e) {
    const curid = e.currentTarget.dataset.itemid;
    //动态获取当前arr 然后直接赋值
    var name = e.currentTarget.dataset.arr;
    const arr = this.data.config[name];
    var workyear='';
    arr.map(function (item, index) {
      if (index == curid) {
        item.checked = true;
        workyear = item.name;
      } else {
        item.checked = false
      }
    });
    const obj = this.data.config;
    obj[name] = arr;
    obj[name.replace('Arr','')] = workyear;
    this.setData({
      config:obj
    });
    //赋值给hidden的input元素 赋值给value上面 
    var hiddenname = name.replace('Arr','');
    const hiddennameobj = {};
    hiddennameobj[hiddenname] = arr[curid].name;
    this.setData(hiddennameobj)
  },
  //征信表单方法
  radioChange: function (e) {
    //当前选择对象的的name的值
    //当前选择对象
    var obj = e.currentTarget.dataset.id;
    var objquestion = obj.question;
    var arr = this.data.config.item;
    var curindex = 0;
    //选择当前checked的radio只有一个值
    var selectArr = e.detail.value;
    //多个radio题目
    arr.map(function (item, index) {
      if (item.question == objquestion) {
        curindex = index
      }
    });

    //获取索引
    // //当前选择模块全部为false 然后选中的项目变为true
    obj.content.map(function (item, index) {
      let indexP = index;
      arr[curindex].content[indexP].checked = false;
      if (selectArr == item.name) {
        arr[curindex].content[indexP].checked = true
      }
    });
    // //重新赋值当前对象更新
    var obj = this.data.config;
    obj['item'] = arr;
    this.setData({
      config:obj
    })
  },
  checkboxChange: function (e) {
    //当前选择对象
    var obj = e.currentTarget.dataset.id;
    var objquestion = obj.question;
    var arr = this.data.config.item;
    var curindex = 0;
    //选择当前checked数组
    var selectArr = e.detail.value;
    //只有一个checkbox题目时候
    if (objquestion == '') {
      objquestion = obj.content[0].question;
      arr.map(function (item, index) {
        if (item.content[0].question == objquestion) {
          curindex = index
        }
      });
    } else {
      //多个checkbox题目
      arr.map(function (item, index) {
        if (item.question == objquestion) {
          curindex = index
        }
      });
    }
    //获取索引
    // //当前选择模块全部为false 然后选中的项目变为true
    obj.content.map(function (item, index) {
      let itemP = item;
      let indexP = index;
      arr[curindex].content[indexP].checked = false;
      if (selectArr.length != 0) {
        selectArr.map(function (item, index) {
          if (item == itemP.name) {
            arr[curindex].content[indexP].checked = true
          }
        })
      }
    });
    // //重新赋值当前对象更新
    var obj = this.data.config;;
    obj['item'] = arr;
    this.setData({
      config:obj
    })
  },
  //接受子组件的事件 验证弹窗关闭
  closelightbox: function (e) {
    this.setData({
      wrongBox: false
    })
  },
  bindPickerChange:function(e){
    console.log(e)
  }
})