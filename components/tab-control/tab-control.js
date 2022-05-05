// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:['流行','新款','精选']
    }
  },
  data: {
    currentIndex : 0
  },
  methods: {
    handleItemClick(event) {
      // 1.取出 index
      const index = event.currentTarget.dataset.index;
      // console.log(index);

      // 2.修改 currentIndex 的值
      this.setData({
        currentIndex:index
      });

      // 发送点击事件给页面
      this.triggerEvent("itemClick",{index,title:this.properties.titles[index]},{})
    }
  }
})
