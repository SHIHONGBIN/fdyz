// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    datapicker:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    sex: '',
    selectSex: '选择性别（必选）',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    PickerSlideDown: function (e) {
      const isClick = this.data.isClick;
      this.setData({
        isClick: !isClick
      })
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    bindChange: function (e) {
      const val = e.detail.value;
      this.setData({
        selectSex: this.data.sex[val]
      })
      //父组件传值
      this.triggerEvent('myevent', { paramData: this.data.sex[val]})
    }
  },
  /*ready*/
  ready: function (e) {
    this.setData({
      sex: this.properties.datapicker
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
