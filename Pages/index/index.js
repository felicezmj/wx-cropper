// Pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenRatio: getApp().data.screenRatio,
    src: '',
    canvas: {
      width: wx.getSystemInfoSync().windowWidth,
      height: wx.getSystemInfoSync().windowHeight - 150 - getApp().data.navBarHeight,
    },
    screenRatio: getApp().data.screenRatio,
    rotate: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext();
    this.cropper = this.selectComponent(".cropper");
  },
  chooseImage() {
    let _self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        _self.setData({
          src: tempFilePaths
        })
        _self.cropper.init(tempFilePaths)
      }
    })
  },
  canvasInit() {
    // 通过 SelectorQuery 获取 Canvas 节点
    const query = 
          query.select('.cropper');
          console.log(query.select('#my-canvas'))
  },
  setRotate() {
    let { rotate } = this.data;
    this.setData({
      rotate: rotate === 270 ? 0 : rotate + 90
    })
  },
  save() {
    this.cropper.save()
  },
  getUrl(e) { // 裁剪后的照片资源
    console.log(e.detail.url)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})