// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    remainingText: 500,
    initTextLength: '',
    disabled: true,
    username: '',
    tel: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //检测textarea字数
    testInput: function (e) {
      const curLenth = e.detail.cursor;
      this.setData({
        remainingText: this.data.initTextLength - curLenth
      })
    },
    bindsubmit: function (e) {
      //验证名字 
      const username = this.data.username;
      if (username.length == 0) {
        wx.showToast({
          title: '联系人姓名不能为空',
          icon: 'none'
        });
        return false;
      }

      //验证手机号
      const telReg = new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$', 'gi');
      const telNumber = this.data.tel;
      if (telReg.test(telNumber)) {
        //测试通过
      } else {
        //测试不通过
        if (telNumber.length == 0) {
          wx.showToast({
            title: '电话号码不能为空',
            icon: 'none'
          });
        } else {
          wx.showToast({
            title: '电话号码格式错误',
            icon: 'none'
          });
        }
        return false
      };
      //获取数据
      const postData = e.detail.value;
      //post数据



    },
    testName: function (e) {
      const suername = e.detail.value;
      this.setData({
        username: suername
      });
      this.canInput();
    },
    testTel: function (e) {
      const telNumber = e.detail.value;
      this.setData({
        tel: telNumber
      });
      this.canInput();
    },
    //是否可选 禁用切换
    canInput: function () {
      if (this.data.username.length != 0 && this.data.tel.length != 0) {
        this.setData({
          disabled: false
        })
      } else {
        this.setData({
          disabled: true
        })
      }
    }
  },
  /*ready*/
  ready: function (e) {
    //初始化时候设置最大的字数保存起来
    this.setData({
      initTextLength: this.data.remainingText
    })
    //传递页面url 当前导航变色
    //     if(options.title == '业务测评'){
    //   this.setData({
    //     bottomNavSelect: [1, 0, 0]
    //   })
    // } else if (options.title == '客服') {
    //   this.setData({
    //     bottomNavSelect: [0, 1, 0]
    //   })
    // } else if (options.title == '订单') {
    //   this.setData({
    //     bottomNavSelect: [0, 0, 1]
    //   })
    // } else {
    //   this.setData({
    //     bottomNavSelect: [0, 0, 0]
    //   })
    // };
  },
})
