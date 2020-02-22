// pages/match/match.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectDate: true,
    matchDateArray:[],
    teams:[],
    hotMatches:[]
  },

  dateClick: function() {
    this.setData({
      selectDate: true
    })
  },

  tiClick: function() {
    this.setData({
      selectDate: false
    })
  },


  getMatches:function(){
    wx.showLoading({
      title: '请稍后...',
    })

    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/matches',
      success: (res)=> {
        console.log('getMatches->', res);
        if (res.data.success) {
          this.setData({
            matchDateArray: res.data.data
          })
        }
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  getTeams:function(){

    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/teams',
      success: (res)=> {
        console.log('getTeams->', res);
        if (res.data.success) {
          this.setData({
            teams: res.data.data
          })
        }
      }
    })
  },

  getHotMatches:function(){

    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/hot-matches',
      success: (res)=> {
        console.log('getHotMatches->', res);
        if (res.data.success) {
          this.setData({
            hotMatches: res.data.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMatches();
    this.getTeams();
    this.getHotMatches();
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

  }
})