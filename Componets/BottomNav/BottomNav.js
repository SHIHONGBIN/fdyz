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
    //0 未选中  1选中
    bottomNavSelect: [0, 0, 0]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /*ready*/
  ready: function (e) { 
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
