Component({
  //  让使用者可以给组件传递数据
  properties: {
    // 传递数据
    title: {
      type: String,
      value: "我是my-props",
      observer(newVal, oldVal) {
        console.log("新值:", newVal, "旧值:", oldVal);
      }
    },
  },
  // 传递 class样式
  externalClasses: ['titleclass'],

  // 定义组件内部初始化数据
  data: {

  },

  //定义组件内部函数 
  methods:{

  },

  // 定义组件的配置选项
  options:{
     
  },

  // 可以监听 properties/data 的改变
  observers:{

  },

  // 组件中监听生命周期函数

  // 1.监听所在页面的生命周期
  pageLifetimes:{
    show() {
      console.log("监听组件所在页面 显示 出来时");
    },
    hide() {
      console.log("监听组件所在页面 隐藏 出来时");
    },
    resize() {
      console.log("监听组件所在页面 尺寸 的改变");
    }
  },

  // 2.监听组件本身的生命周期
  lifetimes: {
     created() {
      console.log("组件被 创建 出来");
     },
     attached() {
      console.log("组件别 添加 到 页面/组件");
     },
     ready() {
       console.log("组件被 渲染 出来");
     },
     moved() {
       console.log("组件被 移动 到 另外一个节点");
     },
     detached() {
       console.log("组件被 移除");
     }
  }

})
