// pages/news/news.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArry: [],
    page: 1,
    last: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.data.page = 1;
    this.getNewsInfo();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.data.last) {
      this.data.page++;
      this.getNewsInfo();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  enterNewsDetail: function (e) {
    console.log('enterNewsDetail->', e);
    app.globalData.transferData = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/news/news-detail/news-detail'
    })
  },

  getNewsInfo: function () {
    var that = this;
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'https://wycode.cn/upload/dota/news/news' + this.data.page,
      success: function (res) {
        console.log('getNewsInfo->', res);
        if (res.data != null) {
          var items = [];
          if (that.data.page == 1) {
            items = res.data;
          } else {
            items = that.data.newsArry.concat(res.data);
          }
          that.setData({
            newsArry: items,
            last: that.data.page == 9
          })
        } else {
          that.setData({
            last: true
          })
        }
      },
      complete: () => {
        wx.stopPullDownRefresh()
        wx.hideLoading()
      }
    })
  }

})