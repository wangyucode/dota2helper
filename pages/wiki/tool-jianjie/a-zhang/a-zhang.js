// pages/tools/tool-jianjie/a-zhang/a-zhang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heros: [],
    upgradeSkill: [],
    addSkill: [],
    otherSkill: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNoEffectHero();
    this.getEffectAbility();
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

  getNoEffectHero: function() {
    var that = this;

    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/noAzhangHeros',
      success: function(res) {
        console.log('getNoEffectHero->', res);
        if (res.data.success) {
          that.setData({
            heros: res.data.data
          })
        }
      }
    })
  },

  getEffectAbility: function() {
    var that = this;
    wx.showLoading({
      title: '请稍后...',
      mask: true
    })

    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/AzhangEffects',
      success: function(res) {
        console.log('getEffectAbility->', res);
        if (res.data.success) {
          that.setData({
            upgradeSkill: res.data.data.filter((skill) => {
              return skill.type == 1
            }),
            addSkill: res.data.data.filter((skill) => {
              return skill.type == 2
            }),
            otherSkill: res.data.data.filter((skill) => {
              return skill.type == 3
            })
          })
        }
      },
      complete: function() {
        wx.hideLoading()
      }

    })
  },


  clickNoEffectHero: function(e) {
    wx.navigateTo({
      url: '/pages/home/hero-detail/hero-detail' +
        '?name=' + e.currentTarget.dataset.item.name +
        '&imagePath=' + encodeURIComponent(e.currentTarget.dataset.item.imageUrl) +
        '&icon=' + encodeURIComponent(e.currentTarget.dataset.item.icon)
    })
  },


  skillClick:function(e){
    var hero = e.currentTarget.dataset.hero
    wx.navigateTo({
      url: '/pages/home/hero-detail/hero-detail' +
        '?name=' + hero.name +
        '&imagePath=' + encodeURIComponent(hero.imageUrl) +
        '&icon=' + encodeURIComponent(hero.icon)
    })
  }
})