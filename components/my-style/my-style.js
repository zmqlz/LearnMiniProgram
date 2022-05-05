// components/my-style/my-style.js
Component({
  options:{
    // apply-shared 只有 页面 可以影响 组件
    // isolated 相互不影响
    // 使 页面 可以和 这个组件 相互影响
    styleIsolation:"shared"
  }
})
