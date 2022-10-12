// pages/match/match.js
const app = getApp();
Page({

  data: {
    selectDate: true,
    preview: true,
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

  onClickMatch: function (e) {
    app.globalData.transferData = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/match/match-detail/detail',
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

  onLoad: function () {
    this.getTeams();
    if (app.globalData.dataVersion !== 'preview') {
      this.getMatches();
      this.getHotMatches();
    }
    this.setData({
      preview: app.globalData.dataVersion === 'preview'
    });
  },
})