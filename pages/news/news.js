// pages/news/news.js
const app = getApp()
const size = 8;
let page = 0;
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
  onLoad: function () {
    this.getPreviewStatus();
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


  getPreviewStatus: function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    wx.request({
      url: `${app.globalData.serverHost}/node/appStatus?a=dota&v=${app.globalData.appVersion}`,
      success: (res) => {
        console.log('getPreviewStatus->', res);
        if (res.data.success) {
          app.globalData.preview = res.data.payload;
          this.getNewsInfo();
        }
      }
    })
  },

  enterNewsDetail: function (e) {
    const news = e.currentTarget.dataset.item;
    console.log('enterNewsDetail->', news);
    wx.navigateTo({
      url: `/pages/news/news-detail/news-detail?href=${news.href}&date=${news.date}&title=${encodeURIComponent(news.title)}&img=${encodeURIComponent(news.img)}&content=${encodeURIComponent(news.content)}`
    });
  },

  getNewsInfo: function () {
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/news?page=${page}&size=${size}`,
      success: (res) => {
        console.log('getNewsInfo->', res);
        wx.hideLoading();
        if (res.data.success) {
          const arrayToConcat = app.globalData.preview ? res.data.payload.items.filter(item => item.preview) : res.data.payload.items;
          const newsArray = this.data.newsArray.concat(arrayToConcat);
          this.setData({
            newsArray,
            last: arrayToConcat.length < size || newsArray.length >= res.data.payload.total
          });
        }
      }
    })
  }

})