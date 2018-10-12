// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //pickerview
    isClick: false,
    houseDirectionArr: [
      {
        'name': '东',
        'checked': false
      },
      {
        'name': '南',
        'checked': false
      },
      {
        'name': '西',
        'checked': false
      },
      {
        'name': '北',
        'checked': false
      },
      {
        'name': '东南',
        'checked': false
      },
      {
        'name': '西北',
        'checked': false
      }
    ],
    houseDirection:'',
    region: [],
    customItem: '全部',
    houseTypeArr: [{
      'name': '一室',
      'checked': false
    }, {
        'name': '一室一厅',
        'checked': false
      }, {
        'name': '二室一厅',
        'checked': false
      }, {
        'name': '三室一厅',
        'checked': false
      }, {
        'name': '四室一厅',
        'checked': false
      }],
    houseType: '',
    houseDirectionPlaceholder:'选择朝向',
    addressPlaceholder: '请选择',
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
          houseDirection: res.data.houseDirection||'',
          houseType: res.data.houseType||'',
          houseCode: res.data.houseCode||'',
          houseSqure: res.data.houseSqure||'',
          houseArea: res.data.houseArea ||'',
          houseNumber: res.data.houseNumber ||'',
          houseFloor: res.data.houseFloor ||'',
          houseTotleFloor: res.data.houseTotleFloor||''
        });
        //计算朝向
        var house = res.data.houseDirection;
        var housearr = that.data.houseDirectionArr;
        that.computedFn(housearr, house)
        that.setData({
          houseDirectionArr: housearr
        });
        //计算户型
        var housetype = res.data.houseType;
        var housetypearr = that.data.houseTypeArr;
        that.computedFn(housetypearr, housetype)
        that.setData({
          houseTypeArr: housetypearr
        });
      },
    })
  },
  //根据值更新相应的数组
  computedFn: function (arr, arritem) {
    arr.map(function (item, index) {
      if (item.name == arritem) {
        item.checked = true
      } else {
        item.checked = false
      }
    });
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
    //验证所有
    console.log(objVal)
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
          title: '抵押物所在小区未选择',
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
          title: '楼栋及门牌号未选择',
          icon: 'none'
        });
        return false
      } else if (objVal['houseFloor'] == '') {
        wx.showToast({
          title: '所在楼层未选择',
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
    console.log(e.detail.value)
    //更新缓存
    wx.setStorage({
      key: 'testtable2',
      data: objVal,
    });
    //下一页
    wx.navigateTo({
      url: '../personalEvaluation2/personalEvaluation2',
    })
  },
  //选择朝向 户型
  //选择年份 月薪范围
  clickedBox: function (e) {
    const curid = e.currentTarget.dataset.itemid;
    //动态获取当前arr 然后直接赋值
    var name = e.currentTarget.dataset.arr;
    const arr = this.data[name];
    arr.map(function (item, index) {
      if (index == curid) {
        item.checked = true;
      } else {
        item.checked = false
      }
    });
    const obj = {};
    obj[name] = arr;
    this.setData(obj);
    //赋值给hidden的input元素 赋值给value上面 
    var hiddenname = name.replace('Arr', '');
    const hiddennameobj = {};
    hiddennameobj[hiddenname] = arr[curid].name;
    this.setData(hiddennameobj)
  }
})