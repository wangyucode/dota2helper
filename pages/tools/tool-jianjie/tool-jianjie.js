Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipInfo:'一个简易但实用的魔杖，能够补充使用者的能量--巫师学徒和高级术士都喜欢。',
    name:'魔杖',
    infoTitle:'额外信息',
    infoText1:'对于力量英雄，可以获得67.5点生命值，2.06%生命恢复加深，0.3%魔法抗性，0.48点护甲，3点攻击速度，0.15%移动速度，36点魔法值，5.4%魔法恢复加深，0.21%技能伤害和3点攻击力。',
    infoText2:'对于敏捷英雄，可以获得54点生命值，1.65%生命恢复加深，0.24%魔法抗性，0.6点护甲，3.75点攻击速度，0.19%移动速度，36点魔法值，5.4%魔法恢复加深，0.21%技能伤害和3点攻击力。',
    infoText3:'对于智力英雄，可以获得54点生命值，1.65%生命恢复加深，0.24%魔法抗性，0.48点护甲，3点攻击速度，0.15%移动速度，45点魔法值，6.75%魔法恢复加深，0.26%技能伤害和3点攻击力。',
    skillTitle:'技能',
    path:'/sources/icons/handle.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  maxImage:function(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/tools/tool-maxImage/tool-maxImage' + '?imagePath=' + e.currentTarget.dataset.imagepath + '&name=' + e.currentTarget.dataset.name,
    })

  },

})