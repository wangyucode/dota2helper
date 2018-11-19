//app.js
App({
  onLaunch: function() {
    this.getDataVersion()
  },
  globalData: {
    serverUrl: 'https://wycode.cn/web',
    dataVersion: '',
    transferData:{}
  },

  getDataVersion: function () {
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/version',
      success: (res)=> {
        console.log('getDataVersion->', res);
        if (res.data.success) {
          this.globalData.dataVersion = res.data.data.version
        }
      }
    })
  },
})