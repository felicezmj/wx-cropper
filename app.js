App({
  data: {
    screenRatio: 750 / wx.getSystemInfoSync().screenWidth,
    navBarHeight: wx.getSystemInfoSync().statusBarHeight + 44
  },
  onLaunch: function () {

  }
})
