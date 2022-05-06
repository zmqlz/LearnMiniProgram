// 三个版本 网络请求

// 最终版本
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success:resolve,
      fail:reject
    })
  })
}


// 进阶版本
// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success(res) {
//         resolve(res)
//       },
//       fail(err) {
//         reject(err)
//       }
//     })
//   })
// }

// 初级版本
// export default function request(options) {
//   wx.request({
//     url: options.url,
//     method: options.method || 'get',
//     data:options.data || {},
//     success(res) {
//       console.log(res);
//     },
//     fail(err) {
//       console.log(err);
//     }
//   })
// }