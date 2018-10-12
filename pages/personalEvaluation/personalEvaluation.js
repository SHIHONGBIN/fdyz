// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //pickerview
    isClick: false,
    chechedColor:'#3f9cfa',
    sexArr: [{
      name: '男士',
      checked: true
    },{
        name: '女士',
        checked: false
      }],
    region: [],
    customItem: '全部',
    workArr: ['it', '财务', '教练', '老板'],
    sexindex: '',
    isWorkArr: [{
        name: '否',
        checked: false
    },{
        name: '是',
        checked: true
      }],
      workyear:'',
    workyearArr:[{
      name:'无经验',
      checked:false
    }, {
        name: '1-2年',
        checked: false
      }, {
        name: '3-5年',
        checked: false
      }, {
        name: '6-10年',
        checked: false
      }, {
        name: '11-15年',
        checked: false
      }, {
        name: '16-20年',
        checked: false
      }, {
        name: '20年以上',
        checked: false
      }],
    isWorkIndex:'',
    sexindex: '', 
    salaryArr: [{
      name: '无',
      checked: false
    }, {
        name: '3千以下',
        checked: false
      }, {
        name: '3-6千',
        checked: false
      }, {
        name: '0.6-1.5万',
        checked: false
      }, {
        name: '1.5-2万',
        checked: false
      }, {
        name: '2万以上',
        checked: false
      }],
    salaryindex: '',
    addressPlaceholder: '请选择',
    workPlaceholder: '选择您所从事的行业',
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
        });
        //计算性别 true
        var sex = res.data.sex;
        var sexarr = that.data.sexArr;
        that.computedFn(sexarr, sex)
        that.setData({
          sexArr: sexarr
        });
        //计算是否在职
        var work = res.data.iswork;
        var workarr = that.data.isWorkArr;
        that.computedFn(workarr, work)
        that.setData({
          isWorkArr: workarr
        });
        //计算工作年限
        var year = res.data.workyear;
        var yeararr = that.data.workyearArr;
        that.computedFn(yeararr, year)
        that.setData({
          workyearArr: yeararr
        });
        //计算收入区间
        var salary = res.data.salary;
        var salaryarr = that.data.salaryArr;
        that.computedFn(salaryarr, salary)
        that.setData({
          salaryArr: salaryarr
        });
      },
    });
   
    //加载传过来的title标题
    const title = options.title;
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  computedFn: function(arr,arritem){
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
        };
        //更新缓存
        wx.setStorage({
          key: 'testtable1',
          data: objVal,
        });
        //下一页
        wx.navigateTo({
          url: '../personalEvaluation1/personalEvaluation1',
        });
  },
  //选择年份 月薪范围
  clickedBox: function (e) {
    const curid = e.currentTarget.dataset.itemid;
    //动态获取当前arr 然后直接赋值
    var name = e.currentTarget.dataset.arr;
    const arr = this.data[name];
    arr.map(function (item, index) {
      if (index == curid) {
        item.checked = true
      } else {
        item.checked = false
      }
    });
    const obj = {};
    obj[name] = arr;
    this.setData(obj);
    //赋值给hidden的input元素 赋值给value上面 
    var hiddenname = name.replace('Arr','');
    const hiddennameobj = {};
    hiddennameobj[hiddenname] = arr[curid].name;
    this.setData(hiddennameobj)
  }
})