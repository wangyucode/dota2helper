// pages/match/match.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectDate: true,
    dev: true,
    matchDateArray: [],
    teams: [],
    hotMatches: []
  },

  dateClick: function () {
    this.setData({
      selectDate: true
    })
  },

  tiClick: function () {
    this.setData({
      selectDate: false
    })
  },


  getMatches: function () {
    wx.showLoading({
      title: '请稍后...',
    })

    wx.request({
      url: app.globalData.serverHost + '/web/api/public/dota/matches',
      success: (res) => {
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

  getTeams: function () {

    wx.request({
      url: app.globalData.serverHost + '/web/api/public/dota/teams',
      success: (res) => {
        console.log('getTeams->', res);
        if (res.data.success) {
          this.setData({
            teams: res.data.data
          })
        }
      }
    })
  },

  getHotMatches: function () {
    wx.request({
      url: app.globalData.serverHost + '/node/dota/leagues',
      success: (res) => {
        console.log('getHotMatches->', res);
        if (res.data.success) {
          this.setData({
            hotMatches: res.data.payload
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTeams();
    if (app.globalData.dataVersion !== 'dev') {
      this.getMatches();
      this.getHotMatches();
    }
    this.setData({
      dev: app.globalData.dataVersion === 'dev'
    });
  },
})