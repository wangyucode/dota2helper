// pages/wiki/wiki.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectHero: true,

    dataVersion: "",

    powerHeroArry: [],
    minjieHeroArry: [],
    zhiliHeroArry: [],

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


  getDataVersion: function() {
    wx.request({
      url: app.globalData.serverUrl + '/api/public/dota/version',
      success: (res) => {
        console.log('getDataVersion->', res);
        if (res.data.success) {
          this.setData({
            dataVersion: res.data.data.version
          })
        }
      }
    })
  },

  getHeroList: function() {
    wx.request({
      url: app.globalData.serverUrl + '/api/public/dota/heroes',
      success: (res) => {
        console.log('getHerosList->', res);
        if (res.data.success) {
          var totalArray = res.data.data;
          var arryList1 = new Array();
          var arryList2 = new Array();
          var arryList3 = new Array();
          for (var i = 0; i < totalArray.length; i++) {
            if (totalArray[i].type == '力量') {
              arryList1.unshift(totalArray[i]);
            } else if (totalArray[i].type == '敏捷') {
              arryList2.unshift(totalArray[i]);
            } else {
              arryList3.unshift(totalArray[i]);
            }
          }
          this.setData({
            powerHeroArry: arryList1,
            minjieHeroArry: arryList2,
            zhiliHeroArry: arryList3,
          })
          wx.hideLoading();
        }
      }
    })
  },

  getToolsList: function() {
    wx.request({
      url: app.globalData.serverUrl + '/api/public/dota/items',
      success: (res) => {
        console.log('getToolsList->', res);
        if (res.data.success) {

          var totalArray = res.data.data;
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

          for (var i = 0; i < totalArray.length; i++) {
            if (totalArray[i].type == '消耗品') {
              arryList1.unshift(totalArray[i]);
            } else if (totalArray[i].type == '属性') {
              arryList2.unshift(totalArray[i]);
            } else if (totalArray[i].type == '军备') {
              arryList3.unshift(totalArray[i]);
            } else if (totalArray[i].type == '奥术') {
              arryList4.unshift(totalArray[i]);
            } else if (totalArray[i].type == '常用') {
              arryList5.unshift(totalArray[i]);
            } else if (totalArray[i].type == '辅助') {
              arryList6.unshift(totalArray[i]);
            } else if (totalArray[i].type == '法器') {
              arryList7.unshift(totalArray[i]);
            } else if (totalArray[i].type == '武器') {
              arryList8.unshift(totalArray[i]);
            } else if (totalArray[i].type == '防具') {
              arryList9.unshift(totalArray[i]);
            } else if (totalArray[i].type == '圣物') {
              arryList10.unshift(totalArray[i]);
            } else if (totalArray[i].type == '神秘商店') {
              arryList11.unshift(totalArray[i]);
            }
          }
          this.setData({
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
        }
      }
    })
  },

  heroDetail: function(e) {
    console.log("enterDetail->", e)
    wx.navigateTo({
      url: 'hero-detail/hero-detail' +
        '?name=' + e.currentTarget.dataset.item.name +
        '&imagePath=' + encodeURIComponent(e.currentTarget.dataset.item.imageUrl) +
        '&icon=' + encodeURIComponent(e.currentTarget.dataset.item.icon) +
        '&type=' + e.currentTarget.dataset.item.type
    })
  },

  itemDetail: function(e) {
    console.log("itemClick->", e);
    wx.navigateTo({
      url: 'tool-jianjie/tool-jianjie?infoKey=' + e.currentTarget.dataset.item.key,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '请稍后...',
    });

    this.getDataVersion();
    this.getHeroList();
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

  heroClick: function() {
    this.setData({
      selectHero: true
    })
  },

  itemClick: function() {
    this.setData({
      selectHero: false
    })
  }
})