Page({
  data: {
    //swiper
    imgUrls: [
      '../../images/indexbanner.png',
      '../../images/indexbanner.png',
      '../../images/indexbanner.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicaorColor:'#000',
    curindicaorColor:'#fff',
    //专业服务data
    indexListArray: [{
      id:0,
      navigateUrl:'../fddtest/fddtest',
      image: '../../images/indexcontentimg3.png',
      title: '测一测你家房子能贷多少',
      subTitle: '输入小区、户型、面积即可得到完整测评报告'
    }, {
      id:1,
        navigateUrl: '',
        image: '../../images/indexcontentimg2.png',
        title: '查一查你的贷款指数',
        subTitle: '十秒知道您能否通过贷款审批'
      }, {
        id:2,
        navigateUrl: '../personalEvaluation/personalEvaluation',
        image: '../../images/indexcontentimg1.png',
        title: '一键查房价',
        subTitle: '最新房价在线查，买房卖房都靠它'
      }]
  },
  onLoad:function(){
    //设置bar的变量 红点
    // wx.setTabBarBadge({
    //   index:2,
    //   text:'3'
    // })
  },
  //跳转事件
  navigationfn:function(e){
    //获取url
    var url = e.currentTarget.dataset.url;
    //获取跳转title页面名字
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: url + '?title=' + title,
    })
  }
})