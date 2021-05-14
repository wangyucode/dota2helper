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
      url: app.globalData.serverHost + '/node/dota/schedules',
      success: (res) => {
        console.log('schedules->', res);
        if (res.data.success) {
          this.setData({
            matchDateArray: res.data.payload
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
      url: app.globalData.serverHost + '/node/dota/teams',
      success: (res) => {
        console.log('teams->', res);
        if (res.data.success) {
          this.setData({
            teams: res.data.payload
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