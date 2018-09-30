// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //pickerview
    isClick: false,
    sexArr: ['男', '女'],
    sexindex:'',
    region: [],
    customItem: '全部',
    workArr: ['it', '财务', '教练', '老板'],
    sexindex: '',
    isWorkArr: ['在职', '离职'],
    workyear:'',
    isWorkIndex:'',
    sexindex: '', 
    salaryArr: ['1000~2000', '2001~4000','4001~6000','6001~10000','10001~15000','15000以上'],
    salaryindex: '',
    sexPlaceholder:'选择性别（必选）',
    addressPlaceholder: '选择户口所在地（必选）',
    workPlaceholder: '选择您所从事的行业',
    isWorkPlaceholder: '是否在职',
    salaryPlaceholder: '选择月收入区间',
    //初始化数据
    initAge:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    //加载缓存保存数据
    wx.getStorage({
      key: 'testtable1',
      success: function (res) {
        that.setData({
          initAge:res.data.age||'',
          sexindex: res.data.sex || '',
          region: res.data.address || '',
          workyear: res.data.workyear || '',
          workindex: res.data.worktype || '',
          isWorkindex: res.data.iswork || '',
          salaryindex: res.data.salary || ''
        })
      },
    })
    //加载传过来的title标题
    const title = options.title;
    wx.setNavigationBarTitle({
      title: title,
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
      sexindex: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindWorkChange: function (e) {
    this.setData({
      workindex: e.detail.value
    })
  },
  bindisWorkChange: function (e) {
    this.setData({
      isWorkindex: e.detail.value
    })
  },
  bindSalaryChange: function (e) {
    this.setData({
      salaryindex: e.detail.value
    })
  },
  //提交表单
  formSubmit:function(e){
    const objVal = e.detail.value;
        //验证三个必填 age sex address
        for (var x in objVal) {
          if (objVal['age'] == '') {
            wx.showToast({
              title: '年龄不能为空',
              icon: 'none'
            });
            return false
          } else if (objVal['age'] >= 65 || objVal['age'] < 18) {
            wx.showToast({
              title: '年龄介于18和65之间',
              icon: 'none'
            });
            return false
          } else if (objVal['sex'] == '') {
            wx.showToast({
              title: '年龄未选择',
              icon: 'none'
            });
            return false
          } else if (objVal['address'] == '') {
            wx.showToast({
              title: '地址未选择',
              icon: 'none'
            });
            return false
          } else {
            //提交数据表单

          }
        }
        //更新缓存
        wx.setStorage({
          key: 'testtable1',
          data: objVal,
        });
        //下一页
        wx.navigateTo({
          url: '../personalEvaluation1/personalEvaluation1',
        })
  }
})