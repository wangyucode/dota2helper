//pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    powerHeroArry: [],
    minjieHeroArry: [],
    zhiliHeroArry: [],
    totalArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getHerosList();
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
    return {
      title: '刀塔传奇小助手',
      path: '/pages/news/news',
      imageUrl: '/sources/icons/hero.jpg'
    }
  },

  getHerosList: function() {
    var that = this;
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/heroes',
      success: function(res) {
        console.log('getHerosList->', res);
        if (res.data.success) {
          that.data.totalArray = res.data.data;
          var arryList1 = new Array();
          var arryList2 = new Array();
          var arryList3 = new Array();
          for (var i = 0; i < that.data.totalArray.length; i++) {
            console.log('array->', i);
            if (that.data.totalArray[i].type == '力量') {
              arryList1.unshift(that.data.totalArray[i]);
            } else if (that.data.totalArray[i].type == '敏捷') {
              arryList2.unshift(that.data.totalArray[i]);
            } else {
              arryList3.unshift(that.data.totalArray[i]);
            }
          }
          that.setData({
            powerHeroArry: arryList1,
            minjieHeroArry: arryList2,
            zhiliHeroArry: arryList3,
          })
          wx.hideLoading();
        }
      },
      fail: function(res) {
        wx.hideLoading();
        wx.showToast({
          title: '网速不佳,请稍后重试!',
          duration:1500,
          icon:'none'
        })
        console.log('获取列表失败!');
      },
    })
  },

  enterDetail: function(e) {
    wx.navigateTo({
      url: '/pages/home/hero-detail/hero-detail' +
        '?name=' + e.currentTarget.dataset.item.name +
        '&imagePath=' + e.currentTarget.dataset.item.imageUrl,
    })
  },

})