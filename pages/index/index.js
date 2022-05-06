import request from "../../services/network";

Page({
  onLoad() {
    // 1.原生的方式发送网络请求
    // this.get_data_origin()

    // 使用封装的 requset 发送网络请求
    request({
      url: "http://152.136.185.210:7878/api/hy66/recommend"
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  get_data_origin() {
    // 发送网络请求

    // 1.发送最简单的 get 请求
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/recommend',
      success(res) {
        console.log(res);
      }
    });

    // 2.发送带参数的 get 请求
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/home/data',
      data: { //拼接参数
        type: "pop",
        page: 1
      },
      success(res) {
        console.log(res);
      }
    });

    // 3.发送带参数的 post 请求
    wx.request({
      url: 'http://httpbin.org/post',
      method: "post", // 网络请求类型
      data: {
        name: "周一",
        age: 18
      },
      success(res) {
        console.log(res);
      }
    });

  }
})
