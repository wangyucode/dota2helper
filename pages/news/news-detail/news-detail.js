//pages/news/news-detail/news-detail.js
var app = getApp()
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: decodeURIComponent(options.title),
      img: decodeURIComponent(options.img),
      content: decodeURIComponent(options.content),
      date: options.date,
      href: options.href
    })
    this.getNewsDetail()
  },

  onShareAppMessage: function () {
    return {
      title: this.data.title,
      imageUrl: this.data.img,
      path: `/pages/news/news-detail/news-detail?href=${this.data.href}&date=${this.data.date}&title=${encodeURIComponent(this.data.title)}&img=${encodeURIComponent(this.data.img)}&content=${encodeURIComponent(this.data.content)}`
    };
  },

  getNewsDetail: function () {
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/news/${this.data.href}`,
      success: (res) => {
        console.log('getNewsDetail->', res);
        this.setData({
          detail: res.data.payload
        })
        setTimeout(wx.hideLoading, res.data.payload.length);
      },
      fail: () => {
        wx.hideLoading()
      }
    })
  }
})