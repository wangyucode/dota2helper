// pages/news/news.js
const app = getApp()
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
  onLoad: function (options) {
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
      url: app.globalData.serverHost + '/node/config?k=CONFIG_DOTA_VERSION',
      success: (res) => {
        console.log('getDataVersion->', res);
        if (res.data.success) {
          app.globalData.dataVersion = res.data.payload.value;
          this.getNewsInfo();
          wx.hideLoading();
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
      url: `${app.globalData.serverHost}/node/dota/news?page=${page}&size=8`,
      success: (res) => {
        console.log('getNewsInfo->', res);
        if (res.data.success) {
          const newsArray = this.data.newsArray.concat(res.data.payload.items)
          this.setData({
            newsArray,
            last: res.data.payload.items.length === 0 || newsArray.length >= res.data.payload.total
          });
        }
      }
    })
  }

})