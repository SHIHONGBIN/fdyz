Page({
  data: {
    newsList: [{
      title: '房产税征收条例的具体内容有哪些房产税征',
      date: '2018-5-15'
    }, {
        title: '房产税征收条例的具体内容有哪些房产税征',
        date: '2018-5-17'
      }, {
        title: '房产税征收条例的具体内容有哪些房产税征',
        date: '2018-5-18'
      }],
      //显示正在加载
    isShowLoading:false,
    //加载完成图否
    isHaveData:false,

    imgUrls: [
      '../../images/banner-1.jpg',
      '../../images/banner-1.jpg',
      '../../images/banner-1.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(){
    wx.setTabBarBadge({
      index:2,
      text:'3'
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //上拉加载事件
  onReachBottom(e){
    var data = [{
      title: '房产税征收条例的具体内容有哪些房产税征',
      date: '2018-5-19'
    }, {
        title: '房产税征收条例的具体内容有哪些房产税征',
        date: '2018-5-22'
      }, {
        title: '房产税征收条例的具体内容有哪些房产税征',
        date: '2018-5-90'
      }];
    // var data = []
    //延时2s接受数据
    this.setData({
      isShowLoading:true,
      isHaveData: false
    });
    this.delatTime(2000, ()=>{
      this.setData({
        isShowLoading: false
      })
      var oldData = this.data.newsList;
      if (data.length!=0){
        this.setData({
          newsList: [].concat(oldData, data)
        })
      }else{
        this.setData({
          isHaveData: true
        })
      }
    })

  },
  delatTime(time,callback){
    setTimeout(function(){
      callback();
    },1000)
  }
})