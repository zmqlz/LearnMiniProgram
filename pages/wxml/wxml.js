// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "梦旗大宝贝",
    str1: '玲珑塞子安红豆',
    str2: "入骨相思知不知",
    age: 21,
    // toLocaleString 转换为本地世间格式
    nowDate: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score:45,
    movies:["海贼王","圣斗士星矢","名侦探柯南"],
    nums:[ //二维数组
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    letters:["a","b","c"]
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowDate: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
 this.setData({
   isShow:!this.data.isShow
 })
  },
  handleAddScore() {
    this.setData({
      score:this.data.score + 6
    })
  }
})