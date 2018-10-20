// pages/logon/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yzmTips: '获取验证码',
    isTimeRun: false,
    searchTel:'12522222222',
    isdiabled:true ,
    txyzmMsg:'',
    dxyzmMsg:'',
    txyzm:1111,
    dxyzm:''
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
  daojishiFn: function () {
    const initYZM = this.data.yzmTips;
    if (this.data.isTimeRun == false) {
      this.setData({
        isTimeRun: true
      })
      let time = 10;
      let fn = setInterval(() => {
        --time;
        if (time > 0) {
          this.setData({
            yzmTips: `倒计时：${time}s`
          })
        } else {
          this.setData({
            yzmTips: initYZM,
            isTimeRun: false,
            //倒计时结束赋值给短信验证码
            dxyzm:222222
          });
          clearInterval(fn)
        };
      }, 1000)
    }
  },
  //输入开启验证按钮
  bindNumberInput: function(e){
    const value = e.target.value;
    if(value!=''){
      this.setData({
        isdiabled:false
      })
    }else{
      this.setData({
        isdiabled: true
      })
    }
  },
  //验证验证码
  blurtest: function (e) {
    //获取图形验证码的值
    var txyzm = this.data.txyzm;
    //获取短信授权码
    var dxyzm = this.data.dxyzm
    //传过来的value值
    const value = e.detail.value;
    //获取传过来input输入类别
    const typed = e.currentTarget.dataset.name;
    //图形验证码
    if (typed == 'txyzm') {
      this.txzymfn(value, txyzm)
    };
    //短信验证码
    if (typed == 'dxyzm') {
      this.dxzymfn(value, dxyzm)
    };
  },
  formSubmit: function(e){
    const yzmbpx = e.detail.value;
    //获取图形验证码的值
    var txyzm = this.data.txyzm;
    //获取短信授权码
    var dxyzm = this.data.dxyzm
    this.txzymfn(yzmbpx.txyzm, txyzm)
    this.dxzymfn(yzmbpx.dxyzm, dxyzm)
    //此时都正确
    if (this.data.txyzmMsg == '' && this.data.dxyzmMsg==''){
      //验证成功
      this.setData({
        successBox: true
      });
      setTimeout(function(){
        wx.redirectTo({
          url: 'WxPayMent',
        })
      },500)
    }
  },
  txzymfn: function (value, txyzm) {
    if (value == '') {
      this.setData({
        txyzmMsg: '图形验证码不能为空'
      })
      return false;
    } else {
      if (value != txyzm) {
        this.setData({
          txyzmMsg: '图形验证码输入错误'
        })
        return false;
      } else {
        this.setData({
          txyzmMsg: ''
        })
      }
    }
  },
  dxzymfn: function (value, dxyzm) {
    if (value == '') {
      this.setData({
        dxyzmMsg: '短信验证码不能为空'
      })
      return false;
    } else {
      if (value != dxyzm) {
        this.setData({
          dxyzmMsg: '短信验证码输入错误'
        })
        return false;
      } else {
        this.setData({
          dxyzmMsg: ''
        })
      }
    }
  }
})