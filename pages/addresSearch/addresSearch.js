// pages/addresSearch/addresSearch.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[],
    isShowList:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    qqmapsdk = new QQMapWX({
      key: 'NZRBZ-ZOJ3F-GCYJE-J3Z4B-GIK7O-LJFXV'
    });
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        //你地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: (res) => {
            //console.log(res)
            self.setData({
              latitude: latitude,
              longitude: longitude,
            })
          },
        });
      },
    })
  },

  // 模糊搜索地点
  getsuggest: function (e) {
    console.log("123")
    var _this = this;
    var keyword = e.detail
    console.log(e)
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: keyword, //用户输入的关键词
      location: _this.data.latitude + ',' + _this.data.longitude,
      page_size: 15,
      page_index: 1,
      success: (res)=>{//搜索成功后的回调
      console.log(res)
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            province: res.data[i].province,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          address: sug,
          isShowList:true
        })
      },
      fail:(err)=>{
        _this.setData({
          address: [],
          isShowList:false
        })
      }
    })
  },

  // 选择地点获取中心经纬度
  chooseCenter(e){
    app.globalData.latitude = e.target.dataset.name.latitude
    app.globalData.longitude=e.target.dataset.name.longitude
    wx.navigateBack({
      delta: 1
    })
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