//pages/home/hero-detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:'',
    name:'',
    detailInfo: '《刀塔2》也被称作《DOTA2》，由《DOTA》的地图核心制作者IceFrog（冰蛙）联手美国Valve公司研发的一款游戏，于2013年4月28日开始测试，发布中文名为“刀塔”，是该系列的第二部作品。\n\n《刀塔2》邀请了央视86版《西游记》孙悟空配音演员李世宏为新英雄齐天大圣配音。\n\n《刀塔2》完整继承了原作《DotA》一百多位的英雄，并脱离了上一代作品《DOTA》所依赖的《魔兽争霸Ⅲ》引擎的多人即时对战游戏，《刀塔2》的世界由天辉和夜魇两个阵营所辖区域组成，有上、中、下三条主要的作战道路相连接，中间以河流为界。每个阵营分别由五位玩家所扮演的英雄担任守护者，他们将以守护己方远古遗迹并摧毁敌方远古遗迹为使命，通过提升等级、赚取金钱、购买装备和击杀敌方英雄等手段达成胜利。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name,
      imagePath: options.imagePath
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})