// pages/home/home.js
// getApp() 获取 App() 产生的示例对象
const app = getApp()
console.log(app.globalData.name);

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // ----- 初始化数据 --------
  data: {
    name: "罗颖",
    age: 19,
    students: [
      { name: "陈梅", age: 22 },
      { name: '罗颖', age: 19 },
      { name: "邓媛", age: 21 },
      { name: '陈雨霄', age: 21 }
    ],
    count: 0,
    list: []
  },
  addClcik() {
    // setData 是微信小程序提供的一个内置的接口,是用于改变逻辑层中 data下的数据的
    this.setData({
      count: this.data.count + 1
    })
  },
  subtraction() {
    this.setData({
      count: this.data.count - 1
    })
  },

  // ---------- 1.监听页面的生命周期函数 --------------
  // 页面被加载出来
  onLoad() {
    // console.log("onLoad");
    // const that = this;
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/recommend',
      // 拿不到 this 为undefined,要在使用之前 保存this
      // success: function(res) {
      //   console.log(that);
      // },
      // 可以拿到 this，箭头函数中的this是最外层定义函数绑定
      success:(res) => {
        console.log(res);
        // console.log(this);
        const data = res.data.data.list;
        this.setData({
          list:data
        })
      }

    })

  },
  // 页面初次渲染完成时
  onReady() {
    console.log("onReady");
  },
  // 页面显示出来时
  onShow() {
    console.log("onShow");
  },
  // 页面隐藏起来时
  onHide() {
    console.log("onHide");
  },
  // 监听页面卸载
  onUnload() {
    console.log("onUnload");
  },

  // --------- 3.监听 wxml 相关的一些事件 ------------
  handleGetUserInfo(event) {
    console.log(event);
  },

  // ------- 4.其他事件 ------- 
  // 监听页面的滚动
  onPageScroll(scrollTop) {
    // console.log(scrollTop);
  },
  // 页面滚动到底部
  onReachBottom() {
    console.log('我滚动到底部了');
  },
  onPullDownRefresh() {
    console.log("我刷新了");
  }
})