//pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appName:'DOTA2小助手 V1.0.0',
    appTipInfo: '玩DOTA2，查资讯，查询各个英雄属性、技能，道具。用刀塔传奇小助手就够了！',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    return {
      title: '刀塔传奇小助手',
      path: '/pages/news/news',
      imageUrl: '/sources/icons/hero.jpg'
    }
  },

  enterUpdateLog:function(e){
    wx.navigateTo({
      url: '/pages/my/update-log/update-log',
    })
  },

  enterSupportOoperation: function (e) {
    wx.navigateTo({
      url: '/pages/my/support-operation/support-operation',
    })
  },

})