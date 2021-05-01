// pages/news/news.js
var app = getApp()
var page = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArray: [],
    last: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataVersion();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.data.last) {
      page++;
      this.getNewsInfo();
    }
  },


  getDataVersion: function () {
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: app.globalData.serverHost + '/web/api/public/dota/version',
      success: (res) => {
        console.log('getDataVersion->', res);
        if (res.data.success) {
          app.globalData.dataVersion = res.data.data.version;
          if (app.globalData.dataVersion === 'dev') {
            this.setData({
              last: true
            });
          } else {
            this.getNewsInfo();
          }
        }
      }
    })
  },

  enterNewsDetail: function (e) {
    console.log('enterNewsDetail->', e);
    app.globalData.transferData = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/news/news-detail/news-detail'
    })
  },

  getNewsInfo: function () {
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/news?page=${page}&size=8`,
      success:  (res) => {
        console.log('getNewsInfo->', res);
        if (res.data.success) {
          this.setData({
            newsArray: this.data.newsArray.concat(res.data.data.data),
            last: this.data.newsArray.length >= res.data.total
          });
        } else {
          this.setData({
            last: true
          });
        }
      },
      complete: wx.hideLoading
    })
  }

})