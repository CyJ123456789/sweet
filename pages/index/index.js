// pages/movie/index.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray: [{
      // "id": "1",
      "text": "双流区"
    }, {
      // "id": "2",
      "text": "高新区"
      }, {
        // "id": "2",
        "text": "高新区"
      }, {
        // "id": "2",
        "text": "高新区"
      }, {
        // "id": "2",
        "text": "高新区"
      }],
    active: 1,
    sort:["离我最近","好评优先","人气最高"],
    choseList:["全部","中式糕点","西式甜品","广式糖水","咖啡","其他没事"],
    number: [{ name: "单人餐", ishow: false },
             { name: "双人餐",ishow: false},
             { name: "3~4人餐", ishow: false},
             { name: "5~10人餐", ishow: false},
             { name: "10人以上", ishow: false}],
    switch1: [{ text: "只看免约", checked: false },
    { text: "节假日可用", checked: false },
    { text: "只看新店", checked: false }
    ],
    imgUrls: [
      '/image/images/01.jpg',
      '/image/images/02.jpg',
      '/image/images/03.jpg'
    ],
    indicatorDots: true,
    // 轮播图是否自动滑动
    autoplay: true,
    interval: 3000,
    duration: 1000,
    title:["面包甜点","智能排序","筛选"],
    isshow:false,
    index:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  choseTitle(e){
    this.setData({
      isshow:true,
      index:e.target.dataset.index1
    })
  },
  // 开关选项
  onChange1(e){
    let index = e.target.dataset.checked
    let switch2 = this.data.switch1;
    switch2.forEach((item,index1)=>{
      if(index===index1){
        item.checked = !item.checked
      }else{
        item.checked = false
      }  
    })   
    this.setData({switch1:switch2})
  },

  // 用餐人数选择
  choseList(e){
    let index= e.target.dataset.index
    this.data.number.forEach((item)=>{
      item.ishow = false
    })
    this.data.number[index].ishow = true
    this.setData({ number: this.data.number})
  },

  switchChange(e){
    console.log(e.detail.value)
  },
  isshow2(e){
    e.stopPropagation
    this.setData({
      isshow:false
    })
  },
  jumpBread(){
    wx.navigateTo({
      url: '/pages/bread/bread',
    })
  },

  jump(){
    wx.navigateTo({
      url: '/pages/combo/combo',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        app.globalData.longitude = res.longitude
        app.globalData.latitude = res.latitude
      }
    })
    this.query().then((src)=>{
      console.log(src)
    })
  },
  query(){
    return new Promise((resolve, reject) => {
      wx.request({
        url: app.globalData.url + "/queryStore",
        success: resolve,
      })
    })
  }
  
})