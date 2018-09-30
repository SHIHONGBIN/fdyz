// pages/logon/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    // formData 表单数据
    tel:'',
    //初始图片验证码的值
    initYZM:1324,
    imageYZM:'',
    //初始图片验证码
    telInitYZM:'666666',
    telYZM:'',
    yzmTips:'获取验证码',
    isTimeRun:false
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
  formSubmit: function(){
    //验证手机号
    const telReg =  new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$','gi');
    const telNumber = this.data.tel;
    if (telReg.test(telNumber)){
      //测试通过
    }else{
      //测试不通过
      wx.showToast({
        title:'电话号码格式错误',
        icon: 'none'
      });
      return false
    };
    //验证图片验证码
    const initYZM = this.data.initYZM;
    const imageyzm = this.data.imageYZM;
    if (initYZM == imageyzm) {
      //测试通过
    } else {
      //测试不通过
      wx.showToast({
        title: '图片验证码错误',
        icon: 'none'
      })
      return false;
    };
    //验证手机验证码
    const telInitYZM = this.data.telInitYZM;
    const telYZM = this.data.telYZM;
    if (telYZM == telInitYZM) {
      //测试通过
    } else {
      //测试不通过
      wx.showToast({
        title: '手机验证码错误',
        icon: 'none'
      })
      return false;
    };
    //验证通过
    //测试不通过
    wx.showToast({
      title: '提交成功',
    });
    //跳转页面
    setTimeout(function(){
      //跳转到tabbar页面
      wx.switchTab({
        url: '../index/index',
      });
    },2000)
  },
  //判断可否提交
  canSubmit: function(e){
    //长度0 不可提交
    if (e.detail.cursor<1){
      this.setData({
        disabled: true,
        tel: e.detail.value
      })
    }else{
      //长度大于一 可以提交
      this.setData({
        disabled: false,
        tel: e.detail.value
      })
    }
  },
  //获取验证码
  imageYZMFn:function(e){
    this.setData({
        imageYZM: e.detail.value
    });
  },
  daojishiFn: function(){
    const initYZM = this.data.yzmTips;
    if(this.data.isTimeRun == false){
      this.setData({
        isTimeRun:true
      })
      let time = 10;
      let fn = setInterval(() => {
        --time;
        if (time > 0) {
          this.setData({
            yzmTips : `倒计时：${time}s`
          })
        }else{
          this.setData({
            yzmTips: initYZM,
            isTimeRun: false
          });
          clearInterval(fn)
        };  
      }, 1000)
    }
  },
  //验证码输入
  telYZMFn: function(e){
    this.setData({
      telYZM: e.detail.value
    })
  }
})