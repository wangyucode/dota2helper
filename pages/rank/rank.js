// pages/rank/rank.js
const app = getApp();
let page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:[],
    last: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRankList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
   onReachBottom: function () {
    if (!this.data.last) {
      page++;
      this.getRankList();
    }
  },

  getRankList:function(){
    wx.request({
      url: `${app.globalData.serverHost}/node/dota/leaderboard?page=${page}&size=30`,
      success:(res)=>{
        console.log('getRankList->',res);
        if (res.data.success){
          const rankList = this.data.rankList.concat(res.data.payload.items)
          this.setData({
            rankList,
            last: res.data.payload.items.length === 0 || rankList.length >= res.data.payload.total
          });
        }
      }
    })
  }

})