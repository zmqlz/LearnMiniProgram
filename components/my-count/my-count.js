// components/my-count/my-count.js
Component({
  // 定义组件内部初始化数据
  data: {
    count: 0
  },

  //定义组件内部函数 
  methods: {
    innermentCount(num) {
      this.setData({
        count: this.data.count + num
      })
    }
  },

  // 可以监听 properties/data 的改变
  observers: {
    count:function(newVal) {  //只可以获取到最新的值
      console.log(newVal);
    }
  }
})
