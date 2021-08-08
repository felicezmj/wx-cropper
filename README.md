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
</br><img src="https://github.com/felicezmj/wx-cropper/blob/main/demoimg/js1.jpeg" width = "200" height = "300" alt="图片名称" align=center />
