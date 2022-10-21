//pages/my/my.js

Page({

  data: {
    version: '',
  },

  onLoad: function() {
    this.setData({
      version: getApp().globalData.appVersion
    });
  },

  enterUpdateLog: function (e) {
    wx.navigateTo({
      url: '/pages/my/update-log/update-log',
    })
  },

  enterSupport: function (e) {
    wx.navigateTo({
      url: '/pages/my/support-operation/support-operation',
    })
  },

  enterFeedback: function (e) {
    wx.navigateTo({
      url: 'feedback/feedback',
    })
  },

})