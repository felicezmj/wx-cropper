
const { navBarHeight, screenRatio } = getApp().data;
// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: navBarHeight * screenRatio
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
