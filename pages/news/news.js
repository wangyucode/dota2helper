// pages/news/news.js
var app = getApp()
var page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArray: [],
    last: false
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
      mask: true
    });
    wx.request({
      url: app.globalData.serverHost + '/node/config?k=CONFIG_DOTA_VERSION',
      success: (res) => {
        console.log('getDataVersion->', res);
        if (res.data.success) {
          app.globalData.dataVersion = res.data.payload.value;
          this.getNewsInfo(app.globalData.dataVersion);
        }
      }
    })
  },

  enterNewsDetail: function (e) {
    console.log('enterNewsDetail->', e);
    app.globalData.transferData = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/news/news-detail/news-detail'
    })
  },

  getNewsInfo: function (version) {
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/news?page=${page}&size=8&verison=${version}`,
      success: (res) => {
        console.log('getNewsInfo->', res);
        if (res.data.success) {
          this.setData({
            newsArray: this.data.newsArray.concat(res.data.payload.items),
            last: res.data.payload.items.length === 0 || this.data.newsArray.length >= res.data.payload.total
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