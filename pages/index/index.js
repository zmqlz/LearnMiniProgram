// index.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 2500, //延迟时间
      icon: "loading",
      mask: true, //无法点击页面
      success() {
        console.log("展示弹窗成功");
      },
      fail() {
        console.log("展示弹窗失败");
      },
      complete() { // 点击按钮时触发
        console.log("完成弹窗");
      }
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: "我是 showModal",
      showCancel: true, //是否展示取消按钮
      cancelText: '退出', //修改 取消键 的文字
      cancelColor: 'red', // 取消键 的颜色
      success(res) {
        console.log(res);
        if (res.confirm) console.log("我点击了确定");
        if (res.cancel) console.log("我点击了取消");

      }
    })
  },

  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true // 无法点击页面
    });

    setTimeout(() => {
      // 必须调用 hideLoading 才可以取消 showLoading
      wx.hideLoading()
    }, 2000)
  },

  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ["相册", "拍照"],
      itemColor: "deeppink",
      success(res) {
        console.log(res);
      }
    })
  },

  onShareAppMessage(option) {
    return {
      title: "你相信光吗",
      path: "/pages/index/index",
      imageUrl:'https://imgm.cnmo.com/appimg/screenpic/middle/1163/1162650.jpg'
    }

  }
})
