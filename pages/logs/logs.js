//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    author: '',
    content: '',
    fromwhere: '',
    time: '',
    title: '',
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://passport.55188.com/huangli/huangli/getinfo', 
      success: function(res) {
        var article = res.data.data.article;
        console.log(article);
        that.setData({
          author: article.author,
          content: article.content,
          fromwhere: article.fromwhere,
          time: article.time,
          title: article.title
        });
      },
    })

    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  }
})
