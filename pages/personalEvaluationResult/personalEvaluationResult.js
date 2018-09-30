// pages/logon/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseBasic:[{
      title:'门牌号',
      content:'武汉市江岸百步亭花园路158号百步龙庭2栋1单元101室'
    }, {
        title: '小区名称',
        content: '白布龙亭'
      }, {
        title: '门牌号',
        content: '116平方米'
      }, {
        title: '户型',
        content: '3室2厅'
      }, {
        title: '楼层/总楼层',
        content: '1/11'
      }, {
        title: '房屋用途',
        content: '住宅'
      }],
    borrowBasic: [{
      title: '评估单价',
      content: '185423/平方米'
    }, {
        title: '评估总价',
        content: '150.00万元'
      }, {
        title: '建议贷款金额',
        content: '100.00万元'
      }],
    tips: {
      title: '备注',
      content: ['股价时间点为2018年8月29日', '有效期为3个月', '不包括室内装修']
    },
      //地图信息 
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      alpha:0,
      iconPath:'../../images/add-img.png',
      callout:{
        content: '白布龙亭'|| '',
        fontSize: 14,
        color:"#ffffff",
        bgColor: "#5085f9",
        borderWidth: 1,
        borderColor: "#CCC",
        padding: 4,
        display: "ALWAYS",
        textAlign: "center"
      }
    }]
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

  }
})