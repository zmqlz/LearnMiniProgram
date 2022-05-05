// components/my-event/my-event.js
Component({
  //定义组件内部函数 
  methods: {
    handleAddEvent() {
      this.triggerEvent("addEvent",{},{})
    }
  }
})
