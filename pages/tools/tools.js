//pages/tools/tool.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataVersion: app.globalData.dataVersion,
    totalArray: {},
    xiaohaopinToolArry: [],
    shuxingToolArry: [],
    junbeiToolArry: [],
    aoshuToolArry: [],
    storeToolArry: [],

    normalToolArry: [],
    fuzhuToolArry: [],
    faqiToolArry: [],
    fangjuToolArry: [],
    wuqiToolArry: [],
    shengwuToolArry: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getToolsList();
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

  itemClick: function(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/tools/tool-jianjie/tool-jianjie?infoKey=' + e.currentTarget.dataset.item.key,
    })
  },

  getToolsList: function() {
    var that = this;
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/dota/items',
      success: function(res) {
        console.log('getToolsList->', res);
        if (res.data.success) {
          
          that.data.totalArray = res.data.data;
          app.globalData.transferData = res.data.data;
          var arryList1 = new Array();
          var arryList2 = new Array();
          var arryList3 = new Array();

          var arryList4 = new Array();
          var arryList5 = new Array();
          var arryList6 = new Array();

          var arryList7 = new Array();
          var arryList8 = new Array();
          var arryList9 = new Array();

          var arryList10 = new Array();
          var arryList11 = new Array();
          var arryList12 = new Array();

            for (var i = 0; i < that.data.totalArray.length; i++) {
              if (that.data.totalArray[i].type == '消耗品') {
                arryList1.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '属性') {
                arryList2.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '军备') {
                arryList3.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '奥术') {
                arryList4.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '常用') {
                arryList5.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '辅助') {
                arryList6.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '法器') {
                arryList7.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '武器') {
                arryList8.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '防具') {
                arryList9.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '圣物') {
                arryList10.unshift(that.data.totalArray[i]);
              } else if (that.data.totalArray[i].type == '神秘商店') {
                arryList11.unshift(that.data.totalArray[i]);
              }
            }
          that.setData({
            dataVersion: app.globalData.dataVersion,
            xiaohaopinToolArry: arryList1,
            shuxingToolArry: arryList2,
            junbeiToolArry: arryList3,
            aoshuToolArry: arryList4,

            normalToolArry: arryList5,
            fuzhuToolArry: arryList6,
            faqiToolArry: arryList7,
            fangjuToolArry: arryList9,
            wuqiToolArry: arryList8,
            shengwuToolArry: arryList10,
            storeToolArry: arryList11,
          })
          wx.hideLoading();
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

})