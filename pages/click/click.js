// pages/click/click.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:["罗颖","陈梅","邓媛"]
  },
  // 1.点击事件的回顾
  handleBtnClick() {
    console.log("我被点击了");
  },
  handleTouchStart() {
    console.log("handleTouchStart");
  },
  handleTouchMove() {
    console.log("handleTouchMove");
  },
  handleTouchend() {
    console.log('handleTouchend');
  },
  handleTap() {
    console.log("handleTap");
  },
  handleLongpress() {
    console.log("handleLongpress");
  },

  // 2.事件对象
  // touches 与 changedTouches 的区别
  handleEventClick(event) {
    console.log("-----",event);
  },
  handleEventEnd(event) {
    console.log("+++++",event);
  },
  // currentTarget 与 target 的区别
  handleOuter(event) {
    console.log("outer",event);
  },
  handleInner(event) {
    console.log("inner",event);
  },

  // 3.事件传参
  handleItemClick(event) {
    // console.log(event);
    console.log(event.currentTarget.dataset);
  },

  // 4.事件冒泡 与 事件捕获
  handleCapturev1() {
    console.log("handleCapturev1");
  },
  handleCapturev2() {
    console.log("handleCapturev2");
  },
  handleCapturev3() {
    console.log("handleCapturev3");
  },
  handleTapv1() {
    console.log("handleTapv1");
  },
  handleTapv2() {
    console.log("handleTapv2");
  },
  handleTapv3() {
    console.log("handleTapv3");
  } 
})