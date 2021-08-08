#微信小程序-Canvas实现对图片裁剪，旋转后裁剪，裁剪框可拖动#
</br><img src="https://github.com/felicezmj/wx-cropper/blob/main/demoimg/1.jpeg" width = "200" height = "300" alt="图片名称" align=center />
</br><img src="https://github.com/felicezmj/wx-cropper/blob/main/demoimg/2.jpeg" width = "200" height = "300" alt="图片名称" align=center />
</br><img src="https://github.com/felicezmj/wx-cropper/blob/main/demoimg/3.jpeg" width = "200" height = "300" alt="图片名称" align=center />
</br><img src="https://github.com/felicezmj/wx-cropper/blob/main/demoimg/4.jpeg" width = "200" height = "300" alt="图片名称" align=center />
<h2>1.使用方法</h2>

  ```
  {
    "usingComponents": {
      "cropper": "../../components/cropper/index",
      "nav": "../../components/nav/index"
    },
    "disableScroll": true
  }
  ```
<h2>2.wxml引用</h2>
```
  {
    template: `<view 
      class="canvas" 
      style="width: {{canvas.width}}px;height:{{canvas.height}}px;">
      <cropper 
        class="cropper"
        src="{{src}}"
        rotate="{{rotate}}"
        bindimgUrl="getUrl"
      ></cropper>
    </view>`
    }
```
<h2>3.数据</h2>
```
    {
      data: {
        src: '',
        canvas: {
          width: wx.getSystemInfoSync().windowWidth,
          height: wx.getSystemInfoSync().windowHeight - 150 - getApp().data.navBarHeight,
        },
        screenRatio: getApp().data.screenRatio,
        rotate: 0
      },
    }
```
<h2>3.js方法</h2>
 ```
<div>
    this.ctx = wx.createCameraContext();
    this.cropper = this.selectComponent(".cropper");
    chooseImage() {
        let _self = this;
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            const tempFilePaths = res.tempFilePaths[0];
            _self.setData({
              src: tempFilePaths
            })
            _self.cropper.init(tempFilePaths)
          }
        })
      },
      canvasInit() {
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
      getUrl(e) { 
        console.log(e.detail.url)
      }
</div>
 ```
