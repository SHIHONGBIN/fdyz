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
    houseCode:'',
    houseSqure:'',
    houseArea:'',
    houseNumber:'',
    houseFloor:'',
    houseTotleFloor:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.getStorage({
      key: 'testtable2',
      success: function (res) {
        that.setData({
          region: res.data.houseAddress || '',
          houseDirectionindex: res.data.houseDirection||'',
          houseTypeindex: res.data.houseType||'',
          houseCode: res.data.houseCode||'',
          houseSqure: res.data.houseSqure||'',
          houseArea: res.data.houseArea ||'',
          houseNumber: res.data.houseNumber ||'',
          houseFloor: res.data.houseFloor ||'',
          houseTotleFloor: res.data.houseTotleFloor||''
        })
      },
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
  },
  //提交表单
  bindsubmit:function(e){
    const objVal = e.detail.value;
    console.log(objVal)
    //验证所有
    for (var x in objVal) {
      if (objVal['houseAddress'].length == 0) {
        wx.showToast({
          title: '地址未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseDirection']=='') {
        wx.showToast({
          title: '朝向未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseType'] == '') {
        wx.showToast({
          title: '户型未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseCode'] == '') {
        wx.showToast({
          title: '房产证号未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseSqure'] == '') {
        wx.showToast({
          title: '所在小区未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseArea'] == '') {
        wx.showToast({
          title: '房产面积未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseNumber'] == '') {
        wx.showToast({
          title: '门牌号未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseFloor'] == '') {
        wx.showToast({
          title: '当前楼层未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseTotleFloor'] == '') {
        wx.showToast({
          title: '总楼层未选择',
          icon: 'none'
        });
        return false
      }else {
        //提交数据表单

      }
    }
    //更新缓存
    wx.setStorage({
      key: 'testtable2',
      data: objVal,
    });
    //下一页
    wx.navigateTo({
      url: '../personalEvaluation2/personalEvaluation2',
    })
  }
})