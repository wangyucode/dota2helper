// pages/wiki/wiki.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectHero: true,

    dataVersion: "",

    cnames: {},

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
    midTool1Arry: [],
    midTool2Arry: [],
    midTool3Arry: [],
    midTool4Arry: [],
    midTool5Arry: [],
  },




  getHeroList: function () {
    wx.request({
      url: app.globalData.serverHost + '/node/dota/heroes',
      success: (res) => {
        console.log('getHerosList->', res);
        if (res.data.success) {
          var totalArray = res.data.payload;
          var arryList1 = [];
          var arryList2 = [];
          var arryList3 = [];
          for (var i = 0; i < totalArray.length; i++) {
            if (totalArray[i].type == '力量') {
              arryList1.push(totalArray[i]);
            } else if (totalArray[i].type == '敏捷') {
              arryList2.push(totalArray[i]);
            } else {
              arryList3.push(totalArray[i]);
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

  getToolsList: function () {
    wx.request({
      url: app.globalData.serverHost + '/node/dota/items',
      success: (res) => {
        console.log('getToolsList->', res);
        if (res.data.success) {
          const all = res.data.payload;
          app.globalData.items = all;

          const xiaohaopinToolArry = [];
          const shuxingToolArry = [];
          const junbeiToolArry = [];
          const aoshuToolArry = [];
          const storeToolArry = [];
          const normalToolArry = [];
          const fuzhuToolArry = [];
          const faqiToolArry = [];
          const fangjuToolArry = [];
          const wuqiToolArry = [];
          const shengwuToolArry = [];
          const midTool1Arry = [];
          const midTool2Arry = [];
          const midTool3Arry = [];
          const midTool4Arry = [];
          const midTool5Arry = [];

          for (var i = 0; i < all.length; i++) {
            if (all[i].type == '消耗品') {
              xiaohaopinToolArry.push(all[i]);
            } else if (all[i].type == '属性') {
              shuxingToolArry.push(all[i]);
            } else if (all[i].type == '军备') {
              junbeiToolArry.push(all[i]);
            } else if (all[i].type == '奥术') {
              aoshuToolArry.push(all[i]);
            } else if (all[i].type == '常用') {
              normalToolArry.push(all[i]);
            } else if (all[i].type == '辅助') {
              fuzhuToolArry.push(all[i]);
            } else if (all[i].type == '法器') {
              faqiToolArry.push(all[i]);
            } else if (all[i].type == '武器') {
              wuqiToolArry.push(all[i]);
            } else if (all[i].type == '防具') {
              fangjuToolArry.push(all[i]);
            } else if (all[i].type == '圣物') {
              shengwuToolArry.push(all[i]);
            } else if (all[i].type == '神秘商店') {
              storeToolArry.push(all[i]);
            } else if (all[i].type == '第1级') {
              midTool1Arry.push(all[i]);
            } else if (all[i].type == '第2级') {
              midTool2Arry.push(all[i]);
            } else if (all[i].type == '第3级') {
              midTool3Arry.push(all[i]);
            } else if (all[i].type == '第4级') {
              midTool4Arry.push(all[i]);
            } else if (all[i].type == '第5级') {
              midTool5Arry.push(all[i]);
            }
          }
          this.setData({
            xiaohaopinToolArry,
            shuxingToolArry,
            junbeiToolArry,
            aoshuToolArry,
            normalToolArry,
            fuzhuToolArry,
            faqiToolArry,
            fangjuToolArry,
            wuqiToolArry,
            shengwuToolArry,
            storeToolArry,
            midTool1Arry,
            midTool2Arry,
            midTool3Arry,
            midTool4Arry,
            midTool5Arry
          })
        }
      }
    })
  },

  heroDetail: function (e) {
    const hero = e.currentTarget.dataset.item;
    console.log("enterDetail->", hero)
    wx.navigateTo({
      url: 'hero-detail/hero-detail' +
        '?n=' + encodeURIComponent(hero._id) +
        '&i=' + encodeURIComponent(hero.imageUrl) +
        '&c=' + encodeURIComponent(hero.icon) +
        '&t=' + encodeURIComponent(hero.type)
    })
  },

  itemDetail: function (e) {
    const item = e.currentTarget.dataset.item;
    console.log("itemClick->", item);
    wx.navigateTo({
      url: 'tool-jianjie/tool-jianjie?key=' + item._id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请稍后...',
    });

    this.setData({
      dataVersion: app.globalData.dataVersion
    });
    this.getHeroList();
    this.getToolsList();
  },

  heroClick: function () {
    this.setData({
      selectHero: true
    })
  },

  itemClick: function () {
    this.setData({
      selectHero: false
    })
  }
})