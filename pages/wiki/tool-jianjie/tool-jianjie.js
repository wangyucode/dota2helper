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
  onLoad: function(options) {
    console.log('onLoad->', options);
    this.setData({
      key: options.infoKey
    })
    this.getToolsDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getToolsDetail: function() {
    var that = this;
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/itemDetail',
      data: {
        itemKey: that.data.key,
      },
      success: function(res) {
        console.log('getToolsDetail->', res);
        if (res.data.success) {
          wx.hideLoading();
          that.setData({
            toolDetail: res.data.data
          })
          that.setComponents();

        } else {
          wx.hideLoading();
          wx.showToast({
            title: '网速不佳,请稍后重试!',
            duration: 1500,
            icon: 'none'
          })
        }
      },
      fail: function(res) {
        wx.hideLoading();
        wx.showToast({
          title: '网速不佳,请稍后重试!',
          duration: 1500,
          icon: 'none'
        })
      },
    })
  },

  setComponents: function() {
    let components = []
    let juanZhouCost = this.data.toolDetail.cost;
    app.globalData.transferData.forEach(i => {
      this.data.toolDetail.components.forEach(c => {
        if (c == i.key) {
          components.push(i)
          juanZhouCost -= i.cost;
        }
      });
    });

    this.setData({
      components: components,
      juanZhouCost: juanZhouCost
    })
  },

  clickComponent:function(e){
    this.setData({
      key: e.currentTarget.dataset.item.key
    })
    this.getToolsDetail();
  }

})