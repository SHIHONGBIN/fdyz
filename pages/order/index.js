// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderConfig: {
      //搜索选项
      isclicksearch:{
        option1:false,
        option2:false
      },
      //切换房抵贷 风险测评
      iscur: [{
        cur: false,
        id: 0
      }, {
          cur: true,
          id: 1
        }],
      orderlist: [{
        number: '0000001',
        name: '长大',
        time: '2017-07-05',
        howlong: '9',
        money: '150'
      }, {
        number: '0000001',
        name: '长大',
        time: '2017-07-05',
        howlong: '9',
        money: '1505'
      }],
      orderlist2: [{
        name: 'aaa',
        applytime: '2017-07-05',
        lasttime: '9',
        status: '审核中'
      }]
    }
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
  // 切换事件测评选项卡
  changeCur:function(e){
    const id = e.currentTarget.dataset.id;
    const orderConfig = this.data.orderConfig;
    orderConfig['iscur'].map(function(item,index){
      if (index == id){
        item.cur = true
      }else{
        item.cur = false
      }
    })
    this.setData({
      orderConfig: orderConfig
    })
  },
  showSearchDetail: function(){
    var config = this.data.orderConfig;
    var isclicked = config.isclicksearch;
    var that = this;
    if (isclicked.option2==false){
      isclicked.option1 = true;
      setTimeout(function(){
        isclicked.option2 = true;
        config['isclicksearch'] = isclicked;
        that.setData({
          orderConfig: config
        })
      },500)
    }else{
      isclicked.option1 = false;
      setTimeout(function () {
        isclicked.option2 = false;
        config['isclicksearch'] = isclicked;
        that.setData({
          orderConfig: config
        })
      }, 500)
    }
    config['isclicksearch'] = isclicked;
    this.setData({
      orderConfig: config
    })
  }
})