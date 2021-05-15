var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    toolDetail: {},
    components: [],
    juanZhouCost: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad->', options);
    this.data.key = options.key;
    this.getToolsDetail();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.toolDetail.name,
      imageUrl: this.data.toolDetail.img,
      path: '/pages/wiki/tool-jianjie/tool-jianjie?key=' + this.data.key
    };
  },

  getToolsDetail: function () {
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    wx.request({
      url: app.globalData.serverHost + '/node/dota/items/' + this.data.key,
      success: (res) => {
        console.log('getToolsDetail->', res);
        if (res.data.success) {
          wx.hideLoading();
          this.setData({
            toolDetail: res.data.payload
          })
          if(res.data.payload.components && res.data.payload.components.length) this.setComponents();
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '网速不佳,请稍后重试!',
            duration: 1500,
            icon: 'none'
          })
        }
      },
      fail: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '网速不佳,请稍后重试!',
          duration: 1500,
          icon: 'none'
        })
      },
    })
  },

  setComponents: function () {
    const components = []
    let juanZhouCost = this.data.toolDetail.cost;
    app.globalData.items.forEach(i => {
      this.data.toolDetail.components.forEach(c => {
        if (c == i._id) {
          components.push(i)
          juanZhouCost -= i.cost;
        }
      });
    });

    this.setData({
      components,
      juanZhouCost: juanZhouCost
    })
  },

  clickComponent: function (e) {
    this.setData({
      key: e.currentTarget.dataset.item._id
    })
    this.getToolsDetail();
  }

})