// pages/tools/tool-jianjie/a-zhang/a-zhang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heros:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNoEffectHero();
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getNoEffectHero:function(){
    var that = this;
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/noAzhangHeros',
      success: function(res) {
        console.log('getNoEffectHero->', res);
        if (res.data.success) {
          wx.hideLoading();
          that.setData({
            heros: res.data.data
          })
        } else {
          wx.hideLoading();
        }
      },
      fail: function(res) {
        wx.hideLoading();
      },
    })
  },


  clickNoEffectHero:function(e){
    wx.navigateTo({
      url: '/pages/home/hero-detail/hero-detail' +
        '?name=' + e.currentTarget.dataset.item.name +
        '&imagePath=' + encodeURIComponent(e.currentTarget.dataset.item.imageUrl) +
        '&icon=' + encodeURIComponent(e.currentTarget.dataset.item.icon)
    })
  }
})