//pages/my/support-operation/support-operation.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    supportInfo:'DOTA2小助手的维护更新离不开您的支持！您可以通过以下方式支持我们！',
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
      title: "查英雄、技能、物品、天梯、资讯？点这里！",
      path: "/pages/news/news",
      imageUrl: "/assets/logo.png"
    }
  },

  toRoll:function(e){
    wx.navigateToMiniProgram({
      appId: 'wxa6e870e9d665b10b',
    })
  },

  toClipboard: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx1977172112eb7b61',
    })
  },

  toFishHelp: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx1d777be6c442da17',
    })
  },

  toReward: function () {
    wx.previewImage({
      urls: ["https://wycode.cn/upload/image/fish/reward.jpg"],
    })
  }

})