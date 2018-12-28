//获取应用实例
const app = getApp()

Page({
  data: {
  	userInfo:{}
  },
  onLoad: function (options) {

    var that = this;

    //获取用户信息


  },
  startTap:function () {
    wx.switchTab({
      url:'../index/index'
    })

  }
})
