//pages/home/hero-detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'力量',
    imagePath: '',
    icon: '',
    heroName: '',

    hero:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      heroName: options.name,
      imagePath: decodeURIComponent(options.imagePath),
      icon: decodeURIComponent(options.icon),
      type: options.type
    })
    this.getHeroDetail();
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getHeroDetail: function() {
    var that = this;
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/heroDetail',
      data: {
        heroName: that.data.heroName,
      },
      success: function(res) {
        console.log('getNewsDetail->', res);
        var heroInfo = res.data.data;
        if (res.data.success) {
          that.setData({
            hero:heroInfo
          })
        }
      }
    })
  },

})