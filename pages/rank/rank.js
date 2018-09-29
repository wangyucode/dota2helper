// pages/rank/rank.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRankList();
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

  getRankList:function(){
    wx.showLoading({
      title: '请稍后...',
    })
    var that = this;
    wx.request({
      url: 'https://wycode.cn/upload/dota/leaderboard.json',
      success:function(res){
        wx.hideLoading();
        console.log('getRankList->',res);
        if (res.statusCode == 200){
          that.setData({
            rankList: res.data.leaderboard,
          })
        }else{
          wx.showToast({
            title: '网络不佳，请稍后重试！',
            icon:'none',
            duration:1500
          })
        }
      },
      fail:function(res){
        wx.showToast({
          title: '网络不佳，请稍后重试！',
          icon: 'none',
          duration: 1500
        })
      },
    })
  }

})