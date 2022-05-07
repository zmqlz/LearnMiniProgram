// 保存常量 
const TOKEN = "token";

App({
  globalData: {
    token: ''
  },
  onLaunch() {
    // 1.先从缓存中取出 token
    const token = wx.getStorageSync(TOKEN)

    // 2.判断 token 是否有值
    if (token && token.length !== 0) { // 已经有token,在验证 token 是否过期
      // 验证 token 是否过期
      this.check_token(token)

    } else { // 没有 token 进行登入操作
      this.login()
    }

  },
  
  // 验证
  check_token(token) {
    console.log("执行了验证token操作");
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:"POST",
      header:{
        token
      },
      success: (res) => {
        console.log("token有效");
        console.log(res);
        if(!res.data.errCode) { // 报错才有 errCode
          this.globalData.token = token;
        }else {
          this.login()
        }
      },
      fail:(err) => {
        console.log(err);
      }
    })
  },

  // 登入
  login() {
    console.log("执行了登入操作");
    // 登入操作
    wx.login({
      // code 只有五分钟的有效期
      success: (res) => {
        // 1.获取 code
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code
          },
          success: (res) => {
            // console.log(res);
            // 2.取出 token
            const token = res.data.token;

            // 2.将取出的 token 保存在 globalData 中
            this.globalData.token = token;

            // 3.进行本地保
            wx.setStorageSync(TOKEN, token) // 异步操作
          }
        })
      }
    })
  }
})