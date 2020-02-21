//pages/news/news-detail/news-detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    imagePath:'',
    message:'',
    time:'',
    detail:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:app.globalData.transferData.title,
      imagePath: app.globalData.transferData.image,
      message:app.globalData.transferData.content,
      time:app.globalData.transferData.date
    })
    this.getNewsDetail()
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

  getNewsDetail:function(){
    wx.showLoading({
      title: '请稍后...',
    })
    var that = this;
    wx.request({
      url: 'https://wycode.cn/upload/dota/news/'+app.globalData.transferData.detail+".json",
      success:function(res){
        console.log('getNewsDetail->',res);
        that.setData({
          detail:res.data
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  }
})