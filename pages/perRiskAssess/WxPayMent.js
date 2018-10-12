


Page({
  data: {
    money:50
  },
  clickNum: function (e) {
    console.log(e.currentTarget.dataset.money)
    this.setData({
      money: e.currentTarget.dataset.money
    })
  },
 


}) 