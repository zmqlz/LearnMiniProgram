// index.js
Page({
  data:{
    title:"我是index"
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/home/home?name=陈梅&age=23',
    })
  }
})
