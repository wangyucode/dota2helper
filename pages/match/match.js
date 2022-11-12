// pages/match/match.js
const app = getApp();
Page({

    data: {
        selectDate: true,
        matchDateArray: [],
        teams: [],
        hotMatches: [],
        activeTeam: 0
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

    onClickTeam: function (e) {
        this.setData({
            activeTeam: e.currentTarget.dataset.index
        });
    },

    getMatches: function () {
        wx.request({
            url: app.globalData.serverHost + '/node/dota/schedules',
            success: (res) => {
                console.log('schedules->', res);
                if (res.data.success) {
                    this.setData({
                        matchDateArray: res.data.payload
                    })
                }
            }
        })
    },

    getTeams: function () {
        wx.showLoading({
            title: '请稍后...',
        });
        wx.request({
            url: app.globalData.serverHost + '/node/dota/teams',
            success: (res) => {
                console.log('teams->', res);
                if (res.data.success) {
                    this.setData({
                        teams: res.data.payload
                    })
                }
            },
            complete: () => {
                wx.hideLoading()
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
        this.getMatches();
        this.getHotMatches();
    },
})