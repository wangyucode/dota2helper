const app = getApp();
Page({

    data: {
        teams: [],
        activeTeam: 0
    },



    onClickTeam: function (e) {
        this.setData({
            activeTeam: e.currentTarget.dataset.index
        });
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


    onLoad: function () {
        this.getTeams();
    },
})