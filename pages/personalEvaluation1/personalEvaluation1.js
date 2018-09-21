// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //pickerview
    isClick: false,
    houseDirectionArr: ['东', '西','南','北'],
    houseDirectionindex:'',
    region: [],
    customItem: '全部',
    houseTypeArr: ['50-80', '81-100', '101-150', '151+'],
    houseTypeindex: '',
    houseDirectionPlaceholder:'选择朝向',
    addressPlaceholder: '选择抵押物所在城市',
    houseTypePlaceholder: '选择户型',
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
  bindPickerChange: function (e) {
    this.setData({
      houseDirectionindex: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindHouseTypeChange: function (e) {
    this.setData({
      houseTypeindex: e.detail.value
    })
  },
  deleteAll: function(e,obj){
    console.log(SelectorQuery.select('image'))
  }
})