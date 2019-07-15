// pages/nearby/nearby.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    markers: [{
      iconPath: "/image/icon/selectNearby.png",
      id: 0,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/image/icon/selectNearby.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 30,
        height: 30
      },
      clickable: true
    }],
    isShow: false,
    show: true,
    address1: "",
    areaList: [
      { imgIsShow: false, address: "高新" },
      { imgIsShow: false, address: "武侯" },
      { imgIsShow: false, address: "万盛" },
      { imgIsShow: false, address: "春熙路" },
      { imgIsShow: false, address: "万盛" },
      { imgIsShow: false, address: "高新" },
      { imgIsShow: false, address: "武侯" },
      { imgIsShow: false, address: "春熙路" }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  onShow() {
    this.setData({
      longitude: app.globalData.longitude,
      latitude: app.globalData.latitude
    })
  },

  // 区域列表的显示和隐藏
  Hide(e){
    e.stopPropagation
    this.isShow = !this.isShow
    this.setData({
      isShow: this.isShow
    })
  },
  
  // 选择区域
  change(e) {
    e.stopPropagation
    let index = e.currentTarget.dataset['index']
    this.data.areaList.forEach(item => item.imgIsShow = false)
    this.isShow = false
    this.data.areaList[index].imgIsShow = true
    this.address1 = this.data.areaList[index].address
    this.setData({
      areaList: this.data.areaList,
      isShow: this.isShow,
      address1: this.address1
    })
  },

  // 点击出列表外的元素时让其隐藏
  hideAddressList(e){
    this.isShow = false;
    this.setData({
      isShow:false
    })
    e.stopPropagation
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

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