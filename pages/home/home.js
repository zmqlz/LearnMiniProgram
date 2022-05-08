// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    age:'',
    isShow:false
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      name:options.name,
      age:options.age
    });

    if(this.data.age) {
      this.setData({
        isShow:!this.isShow
      })
    }
  },
  onUnload() { // 页面退出时触发
    // console.log("我是 home 页面的onUnload");

    // getCurrentPages 获取当前所有活跃(栈)的页面
    const pages = getCurrentPages();
    // console.log(pages);
    const home = pages[pages.length - 2];
    home.setData({
      title:"我被home修改了"
    })
  },
  handleBack() {
    wx.navigateBack({
      delta: 1  // 返回的层级
    })
  }
})