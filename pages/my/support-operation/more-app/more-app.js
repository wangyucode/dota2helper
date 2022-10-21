// pages/my/support-operation/more-app/more-app.js
const app = getApp();
Page({

    data: {
        apps:[]
    },

    onLoad: function () {
        this.getApps();
    },

    getApps: function () {
        wx.showLoading({
            title: '请稍后...',
        });
        wx.request({
            url: app.globalData.serverHost + '/node/apps',
            success: (res) => {
                console.log('apps->', res);
                if (res.data.success) {
                    this.setData({
                        apps: res.data.payload
                    })
                }
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    }
})