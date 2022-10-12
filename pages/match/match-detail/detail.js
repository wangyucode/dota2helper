// pages/match/match.js
const app = getApp();
Page({

  data: {},

  onLoad: function () {
    this.setData(app.globalData.transferData);
  },

  onShareAppMessage: function () {
    return {
      title: this.data.title,
      imageUrl: this.data.img
    };
  },
})