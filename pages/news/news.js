// pages/news/news.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArry: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      newsArry: [{
        title: '1？春季赛中，南京赛区就上演了精彩而激烈的对抗，而在这个秋天，他们再战高校联赛。来自各大高校',
        message: '在春季赛中，南京赛区就上演了精彩而激烈的对抗，而在这个秋天，他们再战高校联赛。来自各大高校的二十四支战队展开激战，DOTA2强队渐渐凸显，春季赛冠军南京林业大学代表队成功卫冕，将再度在全国赛中代表南京争夺荣誉',
        imagePath: '/sources/icons/hero.jpg',
        time: '2018-09-19'
      }, {
        title: '2',
        message: '秋分至，享佳节，赏圆月，观联赛。完美世界全国高校联赛(秋季赛)-DOTA2，上周末于中秋小长假期间在南京、石家庄、福州三地为热爱DOTA2的小伙伴献上了一场电竞盛宴。经过一日的酣战，最终南京林业大学、河北科技大学和厦门理工学院斩获各自赛区的冠军！南京林业大学更是成功卫冕！其中南京站的亚军队伍南京工程学院也将同时代表所在赛区出战全国赛。下周正逢国庆，我们将来到郑州、沈阳、南宁，你们准备好了么？',
        imagePath: '/sources/icons/hero.jpg',
        time: '2018-09-19'
      }, {
        title: '3',
        message: '在春季赛中，南京赛区就上演了精彩而激烈的对抗，而在这个秋天，他们再战高校联赛。来自各大高校的二十四支战队展开激战，DOTA2强队渐渐凸显，春季赛冠军南京林业大学代表队成功卫冕，将再度在全国赛中代表南京争夺荣誉。决赛中南京工程学院虽然惜败，但也将作为本次亚军获得全国赛的门票。期待他们能有更好的表现吧',
        imagePath: '/sources/icons/hero.jpg',
        time: '2018-09-20'
      }, {
        title: '4',
        message: '石家庄站不仅有高校选手报名参赛，更有亲友团加油助威，现场气氛热烈。而在参赛战队中，更有女玩家大秀操作，carry全场，一路杀入决赛！最终，还是河北科技大学代表队技高一筹夺得冠军，但是胜负不是比赛的全部，参与过，就是一次难忘的经历！',
        imagePath: '/sources/icons/hero.jpg',
        time: '2018-09-21'
      }, {
        title: '5',
        message: '高校联赛的战火也在福州燃起，福建当地的高校DOTA2爱好者齐聚一堂，以DOTA2的名义相聚。在现场，我们能感受到浓厚的DOTA2气氛，每一位参赛选手都全身心地投入到比赛当中。哪里有热爱DOTA2的玩家，哪里就是我们的圣地！厦门理工学院作为春季赛厦门站的冠军本次更是在福州夺冠，尽显王者风范，这届秋季赛他们将代表福州赛区征战全国赛。',
        imagePath: '/sources/icons/hero.jpg',
        time: '2018-09-22'
      }, {
        title: '6',
        message: '55',
        imagePath: '/sources/icons/hero.jpg',
        time: '2018-09-23'
      }]
    });
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
    return {
      title: '刀塔传奇小助手',
      path: '/pages/news/news',
      imageUrl:'/sources/icons/hero.jpg'
    }
  },

  enterNewsDetail: function(e) {
    console.log('enterNewsDetail->', e);
    wx.navigateTo({
      url: '/pages/news/news-detail/news-detail?title=' +
        e.currentTarget.dataset.item.title + '&time=' +
        e.currentTarget.dataset.item.time  + '&imagePath=' +
        e.currentTarget.dataset.item.imagePath + '&message=' +
        e.currentTarget.dataset.item.message ,
    })
  }

})