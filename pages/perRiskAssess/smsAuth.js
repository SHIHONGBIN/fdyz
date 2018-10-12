// pages/logon/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    yzmTips: '获取验证码',
    isTimeRun: false,
  
   
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
            isTimeRun: false
          });
          clearInterval(fn)
        };
      }, 1000)
    }
  },

})