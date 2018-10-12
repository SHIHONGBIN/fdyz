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
    //手机验证码
    telYZM:'',
    //保存表单名字数组
    formdata: ['tel', 'imageYZM', 'telYZM'],
    yzmTips:'获取验证码',
    isTimeRun:false,
    //控制弹窗隐藏class
    isShow:false,
    //是否点击 三个input 默认false
    isClick0: false,
    isClick1: false,
    isClick2: false,
    //保存三个input名字 视图里面 data-id传过来number值 动态获取相应名字
    isClick: ['isClick0', 'isClick1','isClick2'],
    //input提示语
    inputPlaceholder0:['点击输入手机号','手机号'],
    inputPlaceholder1: ['点击输入图片验证码','图片验证码'],
    inputPlaceholder2: ['点击输入手机验证码','手机验证码'],
    inputPlaceholderArr: ['inputPlaceholder0', 'inputPlaceholder1','inputPlaceholder2'],
    //控制弹窗 success  wrong
    successBox:false,
    wrongBox: false,
    wrongText:''
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
        this.setData({
          wrongBox: true,
          wrongText: '电话号码格式错误'
        })
        
      return false; 
    };
    //验证图片验证码
    const initYZM = this.data.initYZM;
    const imageyzm = this.data.imageYZM;
    if (initYZM == imageyzm) {
      //测试通过
    } else {
      //测试不通过
      this.setData({
        wrongBox: true,
        wrongText: '请输入四位数验证码'
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
      this.setData({
        wrongBox: true,
        wrongText: '手机验证码错误'
      })
      return false;
    };
    
    //验证通过
    //测试不通过
    //测试不通过
    this.setData({
      successBox: true
    })
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
    if (e.detail.value==''){
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
  },
  showProtocolTotal: function(){
    wx.showToast({
      title: 'sss',
    })
  },
  //关闭协议
  closeModal: function(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  //打开协议
  showProtocolTotal: function(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  //点击获得焦点时候 文字上推
  placeholderAnimateUp: function (e) {
    //获取标识符 点击哪个input
    const id = e.currentTarget.dataset.id;
    const key = this.data.isClick[id];
    const placehoderText = this.data.inputPlaceholderArr[id];
    //直接改变对象 把对象传进去
    var obj = {};
    obj[key] = true;
    var obj2=  {};
    obj2[placehoderText] = this.data[placehoderText].reverse();
    const keyFormName = this.data.formdata[id];
    //动态判断三个input的value是否为零
    if (this.data[keyFormName].length == 0) {
      this.setData(obj);
      this.setData(obj2)
    }
  },
  //点击获得焦点时候 文字上推
  inputBlur: function (e) {
    //获取标识符 点击哪个input
    const id = e.currentTarget.dataset.id;
    const key = this.data.isClick[id];
    const placehoderText = this.data.inputPlaceholderArr[id];
    var obj = {};
    obj[key] = false;
    var obj2 = {};
    obj2[placehoderText] = this.data[placehoderText].reverse();
    const keyFormName = this.data.formdata[id];
    //动态判断三个input的value是否为零
    if (this.data[keyFormName].length == 0) {
      this.setData(obj)
      this.setData(obj2)
    }
  },
  //接受子组件的事件
  closelightbox: function(e){
    this.setData({
      wrongBox: false
    })
  }
})