// pages/perRiskAssess/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  nameMsg:'',
    phoneMsg:'',
    idMsg:'',
    card1Msg:'',
    isdiabled:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  //提交表单
  formSubmit:function(e){
    const objVal = e.detail.value;
    console.log(objVal)
    //验证相关信息 不一样弹窗报错
    const obj = {
      name:'1',
      phone:'1',
      cardid:'1',
      card1:'2'
    }
    for (var x in objVal) {
      if (objVal['name'] != obj.name) {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '年龄不能为空'
        })
        return false
      } else {
        //测试不通过
        this.setData({
          successBox: true
        })
        return false
      }
      }
  },
  bindNumberInput:function(e){
    const value = e.detail.value;
    if(value.length != 0){
      this.setData({
        isdiabled:false
      })
    }else{
      this.setData({
        isdiabled: true
      })
    }
  },
  blurtest: function(e){
   //传过来的value值
   const value = e.detail.value;
   //获取传过来input输入类别
   const typed = e.currentTarget.dataset.name;
    console.log(typed)
   //姓名
    if (typed == 'name') {
      if (value == '') {
        this.setData({
          nameMsg: '名字不能为空'
        })
      } else {
        this.setData({
          nameMsg: ''
        })
      }
    };
    //手机号
    if (typed == 'phone') {
      if (value == '') {
        this.setData({
          phoneMsg: '手机号不能为空'
        })
      } else {
        this.setData({
          phoneMsg: ''
        });
        //验证手机号
        const telReg = new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$', 'gi');
        if (telReg.test(value)) {
          //测试通过
        } else {
          //测试不通过
          this.setData({
            phoneMsg: '手机号位数不正确'
          })
          return false;
        };
      }
    };
    //身份证
    if (typed == 'cardid') {
      if (value == '') {
        this.setData({
          idMsg: '身份证号不能为空'
        })
      } else {
        this.setData({
          idMsg: ''
        })
      }
    };
    //银行卡号
    if (typed == 'card1') {
      if (value == '') {
        this.setData({
          card1Msg: '银行卡号1不能为空'
        })
      } else {
        this.setData({
          card1Msg: ''
        })
      }
    };
  },
  //接受子组件的事件 验证弹窗关闭
  closelightbox: function (e) {
    this.setData({
      wrongBox: false,
      successBox: false,
    })
  }
})