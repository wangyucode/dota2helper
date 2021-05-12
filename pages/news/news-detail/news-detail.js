//pages/news/news-detail/news-detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      news: app.globalData.transferData
    })
    this.getNewsDetail()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: app.globalData.transferData.title,
      imageUrl: app.globalData.transferData.img,
      path: '/pages/news/news'
    };
  },

  getNewsDetail: function () {
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/news/${app.globalData.transferData.href}`,
      success: (res) => {
        console.log('getNewsDetail->', res);
        this.setData({
          detail: res.data.payload
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  }
})