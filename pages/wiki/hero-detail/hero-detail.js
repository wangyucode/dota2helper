//pages/home/hero-detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '力量',
    img: '',
    icon: '',
    name: '',

    hero:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      name: decodeURIComponent(options.n),
      img: decodeURIComponent(options.i),
      icon: decodeURIComponent(options.c),
      type: decodeURIComponent(options.t)
    })
    this.getHeroDetail();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: this.data.name,
      imageUrl: this.data.img,
      path: '/pages/wiki/hero-detail/hero-detail' +
      '?n=' + decodeURIComponent(this.data.name) +
      '&i=' + encodeURIComponent(this.data.img) +
      '&c=' + encodeURIComponent(this.data.icon) +
      '&t=' + encodeURIComponent(this.data.type)
    };
  },

  getHeroDetail: function() {
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/heroes/${encodeURIComponent(this.data.name)}`,
      success: (res)=> {
        console.log('getNewsDetail->', res);
        if (res.data.success) {
          this.setData({
            hero:res.data.payload
          })
        }
      }
    })
  },

})