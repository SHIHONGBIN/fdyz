// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongBox:false,
    //pickerview
    isClick: false,
    curindex:'',
    item:[{
      // 1 ： 单选    0： 多选（多个） 2：多选（单个） 
      question:'1. 当前逾期（单选）',
      fullname:'name1',
      radio:1,
      content: [
        {id:0, name: 'radioOutDate0', value: 'r0', checked:true, question: '（1）无当前逾期' },
        {id:1, name: 'radioOutDate1', value: 'r1', checked: false, question: '（2）当前逾期，但可提供结清证明' },
        { name: 'radioOutDate2', value: 'r2', checked: false, question: '（3）当前逾期，未结清' },
      ]
    },{
        question:'2. 贷款及信用卡逾期记录（多选）',
        radio: 0,
        fullname: 'name2',
        content: [
          { id: 0, name: 'checkboxOutDate0', value: 'c0', checked: false, question: '（1）近一年内连续逾期超过3次' },
          { id: 1, name: 'checkboxOutDate1', value: 'c1', checked: false, question: '（2）近一年内累计逾期超过6次' },
          { id: 2, name: 'checkboxOutDate2', value: 'c2', checked: false, question: '（3）近两年内连续逾期超过6次' },
          { id: 3, name: 'checkboxOutDate3', value: 'c3', checked: false, question: '（4）近两年内累计逾期超过15次' },
          { id: 4, name: 'checkboxOutDate4', value: 'c4', checked: false, question: '（5）近两年内累计逾期超过20次' },
          { id: 5, name: 'checkboxOutDate5', value: 'c5', checked: false, question: '（6）近一年内单次连续逾期金额超过10万元' }
        ]
    },{
        question:'',
        fullname: 'name3',
        radio: 2,
        content: [{ id: 0, name: 'oneRadio0', value: 'o0', checked: false, question: '3. 没有过执行记录' }]
    },
      {
        question: '4. 否唯一住房（单选）',
        radio: 1,
        fullname: 'name4',
        content: [
          { id: 0, name: 'isOnlyHouse0', value: 'i0', checked: 'true', question: '（1）唯一住房' },
          { id: 1, name: 'isOnlyHouse1', value: 'i1', question: '（2）唯一住房，房屋内部装修等较差' },
          {
            id: 2, name: 'isOnlyHouse2', value: 'i2', question: '（3）唯一住房，但可提供直系亲属为担保人，担保人名下有住房'
          }, {
            id: 3,name: 'isOnlyHouse3', value: 'i3', question: '（4）不是唯一住房，可提供二套及以上房产证明'
          }
        ]
      },{
        question: '5. 偿还能力（单选）',
        radio: 1,
        fullname: 'name5',
        content: [
          {
            id: 0,name: 'repayBility0', value: 'rb0', checked: 'true', question: '（1）可提供详细的经营情况证明，企业经营或个人银行流水可覆盖一年期贷款的本息' },
          {
            id: 1,name: 'repayBility1', value: 'rb1', question: '（2）无法提供经营情况，无法提供流水等资料证明其有偿还本息的能力' },
        ]
      }, {
        question: '',
        radio: 2,
        fullname: 'name6',
        content: [{ id: 0, name: 'moreCredit', value: 'm0', checked: false, question: '6. 存在显性负债或多头民间借贷' }]
      } , {
        question: '',
        radio: 2,
        fullname: 'name7',
        content: [{ id: 0, name: 'personal0', value: 'p0', checked: false, question: '7. 离异/高龄单身' }]
      },]
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
  radioChange:function(e){
    //当前选择对象的的name的值
    //当前选择对象
    var obj = e.currentTarget.dataset.id;
    var objquestion = obj.question;
    var arr = this.data.item;
    var curindex = 0;
    //选择当前checked的radio只有一个值
    var selectArr = e.detail.value;
      //多个radio题目
      arr.map(function (item, index) {
        if (item.question == objquestion) {
          curindex = index
        }
      });
    
    //获取索引
    // //当前选择模块全部为false 然后选中的项目变为true
    obj.content.map(function (item, index) {
      let indexP = index;
      arr[curindex].content[indexP].checked = false;
      if (selectArr == item.name) {
            arr[curindex].content[indexP].checked = true
        }
    });
    // //重新赋值当前对象更新
    var obj = {};
    obj['item'] = arr;
    this.setData(obj)
  },
  checkboxChange: function(e){
    //当前选择对象
    var obj = e.currentTarget.dataset.id;
    var objquestion = obj.question;
    var arr = this.data.item;
    var curindex = 0;
    //选择当前checked数组
    var selectArr = e.detail.value;
   //只有一个checkbox题目时候
    if (objquestion == ''){
      objquestion = obj.content[0].question;
      arr.map(function (item, index) {
        if (item.content[0].question == objquestion) {
          curindex = index
        }
      });
    }else{
      //多个checkbox题目
      arr.map(function (item, index) {
        if (item.question == objquestion) {
          curindex = index
        }
      });
    }
    //获取索引
    // //当前选择模块全部为false 然后选中的项目变为true
    obj.content.map(function(item,index){
      let itemP = item;
      let indexP= index;
      arr[curindex].content[indexP].checked = false;
      if (selectArr.length != 0){
        selectArr.map(function (item, index) {
          if (item == itemP.name) {
            arr[curindex].content[indexP].checked = true
          }
        })
      }
    });
    // //重新赋值当前对象更新
    var obj=  {};
    obj['item'] = arr; 
    this.setData(obj)
  },
  //提交
  formSubmit: function(e){
    //验证
    //----------
    const objVal = e.detail.value;
    //验证所有
    for (var x in objVal) {
      if (objVal['name2'].length == 0) {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '贷款及信用卡逾期记录未选择'
        })
        return false
      } else if (objVal['name3'] == '') {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '没有过执行记录未选择'
        })
        return false
      } else if (objVal['name6'] == '') {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '存在限行负债或多头民间借贷未选择'
        })
        return false
      } else if (objVal['name7'] == '') {
        //测试不通过
        this.setData({
          wrongBox: true,
          wrongText: '离异/高龄单身未选择'
        })
        return false
      }else{
        //
      }
    }
    //获取当前表单的值
    const testtable3 = e.detail.value;
    //获取前两个表单的值
    const testtable1 = wx.getStorageSync('testtable1');
    const testtable2 = wx.getStorageSync('testtable2');


    //提交成功
    this.setData({
      successBox: true,
    });
    //下一页
    setTimeout(function () {
      //下一页
      wx.navigateTo({
        url: '../index/index',
      });
      //清空storege
      wx.clearStorageSync('testtable1,testtable2')
    }, 1000)

  },
  //接受子组件的事件 验证弹窗关闭
  closelightbox: function (e) {
    this.setData({
      wrongBox:false
    })
    
  }
})