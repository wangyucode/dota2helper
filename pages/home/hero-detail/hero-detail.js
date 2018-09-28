//pages/home/hero-detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '',
    heroName: '',
    attackType:'',
    otherName:'',
    heroStory:'',
    strengthStart:0,
    strengthGrow:0,
    agilityStart:0,
    agilityGrow:0,
    intelligenceStart:0,
    intelligenceGrow:0,
    attackPower:0,
    attackSpeed:0,
    armor:0,
    speed:0,
    talent25Left:'',
    talent25Right:'',
    talent20Left:'',
    talent20Right:'',
    talent15Left:'',
    talent15Right:'',
    talent10Left:'',
    talent10Right:'',
    skillArray:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      heroName: options.name,
      imagePath: options.imagePath,
    })
    this.getNewsDetail();
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

  getNewsDetail: function() {
    var that = this;
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/heroDetail',
      data: {
        heroName: that.data.heroName,
      },
      success: function(res) {
        console.log('getNewsDetail->', res);
        var heroInfo = res.data.data;
        if (res.data.success) {
          that.setData({
            attackType: heroInfo.attackType,
            otherName: heroInfo.otherName,
            heroStory: heroInfo.story,
            strengthStart: heroInfo.strengthStart,
            strengthGrow: heroInfo.strengthGrow,
            agilityStart: heroInfo.agilityStart,
            agilityGrow: heroInfo.agilityGrow,
            intelligenceStart: heroInfo.intelligenceStart,
            intelligenceGrow: heroInfo.intelligenceGrow,

            attackPower: heroInfo.attackPower,
            attackSpeed: heroInfo.attackSpeed,
            armor: heroInfo.armor,
            speed: heroInfo.speed,

            talent25Left: heroInfo.talent25Left,
            talent25Right: heroInfo.talent25Right,
            talent20Left: heroInfo.talent20Left,
            talent20Right: heroInfo.talent20Right,
            talent15Left: heroInfo.talent15Left,
            talent15Right: heroInfo.talent15Right,
            talent10Left: heroInfo.talent10Left,
            talent10Right: heroInfo.talent10Right,

            skillArray: heroInfo.abilities,
          })
        }
      }
    })
  },

})