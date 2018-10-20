// pages/fddtest/fddtest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex:0,
    config:{
      //交互名字身份证参数
      initData:{
        name:111,
        cardID:222
      },
      //表单参数
      name:'',
      cardID:'',
      loanMoney:'',
      loanDate:'',
      jjrname: '',
      //贷款期数
      loanyearArr: [
        {
          name: '1个月',
          checked: false
        }, {
          name: '3个月',
          checked: false
        }, {
          name: '6个月',
          checked: false
        }, {
          name: '9个月',
          checked: false
        }, {
          name: '12个月',
          checked: false
        }, {
          name: '36个月',
          checked: false
        }
      ],
      //经纪人列表
      jjrArr: [
        {
          id: 0,
          ischecked: false,
          headerImage: '../../images/defaultHead.png',
          name: '张佳1佳',
          cName: '武汉国佳房地资产评估有限公司',
          telNumber: '13526262626'
        },
        {
          id: 1,
          ischecked: false,
          headerImage: '../../images/defaultHead.png',
          name: '张2佳佳',
          cName: '武汉国佳房地资产评估有限公司',
          telNumber: '13526262627'
        },
        {
          id: 2,
          ischecked: false,
          headerImage: '../../images/defaultHead.png',
          name: '张佳4佳',
          cName: '武汉国佳房地资产评估有限公司',
          telNumber: '13526262628'
        },
        {
          id: 3,
          ischecked: false,
          headerImage: '../../images/defaultHead.png',
          name: '张佳7佳',
          cName: '武汉国佳房地资产评估有限公司',
          telNumber: '13526262629'
        },
        {
          id: 4,
          ischecked: false,
          headerImage: '../../images/defaultHead.png',
          name: '1张佳佳',
          cName: '武汉国佳房地资产评估有限公司',
          telNumber: '13526262610'
        }
      ],
    }, 
    pagetitle:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载传过来的title标题
    const title = options.title;
    wx.setNavigationBarTitle({
      title: title,
    });
    this.setData({
      pagetitle: title
    });
    //获取缓存经纪人名字
    const jjrname = wx.getStorageSync('jjrName');
    this.setData({
      jjrname: jjrname
    })
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
    //选择完经纪人显示页面更新经纪人名字
    
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
  formSubmit: function(e){
    const objVal = e.detail.value;
    console.log(objVal)
    //验证名字身份证批不匹配
    for (var x in objVal) {
      if (objVal['cardID'] != this.data.config.initData.cardID
        || objVal['name'] != this.data.config.initData.name
      ) {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '身份证姓名不匹配'
        })
        return false
      } 
       if (objVal['loanMoney'].trim()==''){
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '贷款金额不能为空'
        })
        return false
      } 
    }

    //提交
    setTimeout(function () {
      if(true){
        //提交成功
        wx.navigateTo({
          url: '../lightbox/lightboxS',
        });
      }else{
        //提交失败
        wx.navigateTo({
          url: '../lightbox/lightboxF',
        });
      }
    }, 500)


  },
  //选择贷款期数
  clickedBox: function (e) {
    const curid = e.currentTarget.dataset.itemid;
    //动态获取当前arr 然后直接赋值
    var name = e.currentTarget.dataset.arr;
    var arr = this.data.config[name];
    var curData='';
    arr.map(function (item, index) {
      if (index == curid) {
        item.checked = true
        curData = item.name;
      } else {
        item.checked = false
      }
    });
    var obj = this.data.config;
    //更新视图
    obj[name] = arr;
    //更新数据
    obj['loanDate'] = curData
    
    this.setData({
      config:obj
    });
    
    //赋值给hidden的input元素 赋值给value上面 
    var hiddenname = name.replace('Arr', '');
    var hiddennameobj = {};
    hiddennameobj[hiddenname] = arr[curid].name;
    this.setData(hiddennameobj)
  },
  //动态存储config数据
  bindtextinput: function(e){
    const value = e.detail.value;
    const inputtype = e.currentTarget.dataset.name;
    var obj = this.data.config;
    obj[inputtype] = value;
    this.setData({
      config: obj
    })
  },
  //接受子组件的事件 验证弹窗关闭
  closelightbox: function (e) {
    this.setData({
      wrongBox: false
    })
  },
  //选择专属经纪人
  choiceJJR: function(e){
    this.setData({
      //只要不等于0就行
      pageIndex:1
    })
  },
  //////////page2列表方法/////////
  //经纪人列表选择
  ischecked: function (e) {
    const curid = e.currentTarget.dataset.id;
    const data = this.data.config.jjrArr;
    //其他变为false
    data.map(function (item, index) {
      item.ischecked = false;
    });
    data[curid].ischecked = true;
    //切换按钮可选
    this.setData({
      isdisabled: false
    });
    var obj = this.data.config;
    //更新经纪人数组
    obj['jjrArr'] =  data;
     //保存当前经纪人名字
    obj['jjrname'] = data[curid].name;
    this.setData({
      config: obj
    });
   

  },
  //拨打电话
  callJJR: function (e) {
    const tel = e.currentTarget.dataset.tel;
    console.log(tel)
    wx.makePhoneCall({
      phoneNumber: tel
    })
  },
  returnpage: function () {
   this.setData({
     pageIndex:0
   })
  }
})