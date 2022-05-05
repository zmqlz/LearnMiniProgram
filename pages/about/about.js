// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    isShow: true,
    text: '隐藏'
  },
  addEvent() {
    this.setData({
      count: this.data.count + 1
    })
  },
  handleAddCount() {
    // 1.selectComponent(class 或 id 选择器) 获取组件对象
    const my_count = this.selectComponent("#count-id")
    //  console.log(my_count);

    // 2.通过 setData 方法修改组件中的数据(不合理)
    // my_count.setData({
    //   count:my_count.data.count + 6
    // })

    // 3.通过组件中事先定义好的方法修改数据
    my_count.innermentCount(10)
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow,
      text: this.data.text == "隐藏"?"显示":"隐藏"
    })
  }
})