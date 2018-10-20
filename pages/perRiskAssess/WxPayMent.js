Page({
  data: {
    money:50
  },
  clickNum: function (e) {
    this.setData({
      money: e.currentTarget.dataset.money
    })
  },
  formSubmit: function(e){
    //支付金额
   const value = e.detail.value.value;
  }
}) 