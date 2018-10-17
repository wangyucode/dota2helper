// pages/news/news.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArry: [],
    page: 0,
    size: 20,
    last:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNewsInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.data.page = 0;
    this.getNewsInfo();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.last == false){
      this.data.page++;
      this.getNewsInfo();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    
  },

  enterNewsDetail: function(e) {
    console.log('enterNewsDetail->', e);
    wx.navigateTo({
      url: '/pages/news/news-detail/news-detail?title=' +
        e.currentTarget.dataset.item.title + '&time=' +
        e.currentTarget.dataset.item.newsDate + '&imagePath=' +
        e.currentTarget.dataset.item.link + '&message=' +
        e.currentTarget.dataset.item.content,
    })
  },

  getNewsInfo: function() {
    var that = this;
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/news',
      data: {
        page: that.data.page,
        size: that.data.size
      },
      success: function(res) {
        wx.hideLoading();
        console.log('getNewsInfo->', res);
        if (res.data.success) {
          var items;
          if (that.data.page == 0) {
            items = res.data.data.content;
          }else{
            items = that.data.newsArry.concat(res.data.data.content);
          }
          that.setData({
            newsArry:items,
            last:res.data.data.last
          })
        }else{
          wx.showToast({
            title: '网络不佳,请稍后重试!',
            icon:'none',
            duration:1500
          })
        }
      },
      fail:function(res){
        wx.hideLoading();
        wx.showToast({
          title: '网络不佳,请稍后重试!',
          icon: 'none',
          duration: 1500
        })
      }
    })
  }

})