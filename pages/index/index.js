//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    year_month: '',
    week: '',
    day:'',
    lunar_calendar:'',
    summary: '',
    yi: '',
    ji: '',
    condition: '',
    animationData: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onShow: function() {
    console.log('onShow')
    var that = this;
    wx.request({
      url: 'https://passport.55188.com/huangli/huangli/getinfo', 
      success: function(res) {
        console.log(res.data.data);
        var huangli = res.data.data.huangli;
        var yi = huangli.yi;
        if (yi.length <= 1) {
          yi = '诸事不宜';
        }
        var ji = huangli.ji;
        if (ji.length <= 1) {
          ji = '诸事不忌';
        }
        
        var condition = parseInt(res.data.data.jiaoyi);
        
        that.setData({
          year_month: util.getDateData()[0],
          week: util.getDateData()[1],
          day: util.getDateData()[2],
          lunar_calendar: huangli.nongli,
          summary: res.data.data.article.summary,
          // title: '【终于等到满仓的时候终于等。。】',
          yi: yi,
          ji: ji,
          condition: condition,
        });
        
        var animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 500,
            timingFunction: 'linear',
            delay: 0
        })
        that.animation = animation;
        setTimeout(function() {
          // animation.scale(0.1,0.1).top('-446rpx').left('-1030rpx').step();
          animation.scale(0.1,0.1).step();
          that.setData({
            animationData:animation.export()
          })
        }.bind(this), 200)
      },
    })
  },

  onLoad: function () {
    console.log('onLoad')
    
  },
}) 

