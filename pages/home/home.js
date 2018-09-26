//pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    powerHeroArry:[],
    minjieHeroArry: [],
    zhiliHeroArry: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      powerHeroArry: [{ name: '末日', imagePath: '/sources/icons/mori.jpeg' }, { name: '电狗', imagePath: '/sources/icons/diangou.jpeg' }, { name: '军团', imagePath: '/sources/icons/juntuan.jpeg' }, { name: '小小', imagePath: '/sources/icons/xiaoxiao.jpeg' }, { name: '炼魂人', imagePath: '/sources/icons/liehunren.jpeg' }],

      minjieHeroArry: [{ name: '幽鬼', imagePath: '/sources/icons/yougui.jpg' },{ name: '幻影刺客', imagePath: '/sources/icons/huanyingcike.jpg' }, { name: '熊战士', imagePath: '/sources/icons/xiongzhanshi.jpg' }, { name: '嗜血狂魔', imagePath: '/sources/icons/shixuekuangmo.jpg' }, { name: '巨魔战将', imagePath: '/sources/icons/jumozhanjiang.jpg' }, { name: '剧毒术士', imagePath: '/sources/icons/judushushi.jpg' }, { name: '狙击手', imagePath: '/sources/icons/jujishou.jpg' }],

      zhiliHeroArry: [{ name: '瘟疫法师', imagePath: '/sources/icons/wenyifashi.jpeg' }, { name: '修补匠', imagePath: '/sources/icons/xiubujiang.jpeg' }, { name: '祈求者', imagePath: '/sources/icons/qiqiuzhe.jpeg' }, ],

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
    
  },

  enterDetail:function(e){

    wx.navigateTo({
      url: '/pages/home/hero-detail/hero-detail' + 
      '?name=' + e.currentTarget.dataset.item.name + 
      '&imagePath=' + e.currentTarget.dataset.item.imagePath,
    })
  },

})