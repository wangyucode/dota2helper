// pages/about/feedback/feedback.js
var content = ''
const app = getApp();
Page({

  contentInput: function (e) {
    content = e.detail.value
  },

  submit: function () {
    //内容不能为空
    if (content.length == 0) {
      wx.showToast({
        title: '建议内容不能为空！',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: app.globalData.serverHost + '/node/comments',
      method: 'POST',
      data: {
        type: 0,
        key: '6l2xpvnbuza8mn9idepvfl35nhoi2twv',
        app: 'dota',
        user: '',
        content: content,
        topic: '/feedback'
      },
      success: (res) => {
        wx.hideLoading();
        console.log('submit-->', res);
        if (res.data.success) {
          wx.showToast({
            title: '提交成功！',
            icon: 'success',
            mask: true
          });
          this.setData({
            content: ''
          })
          setTimeout(() => { wx.navigateBack({}) }, 1000);
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'error',
            mask: true
          });
        }

      },
      fail: function (res) {
        wx.showToast({
          title: res.errMsg,
          icon: 'none'
        });
        wx.hideLoading();
      }
    });
  }
})