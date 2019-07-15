// pages/bread/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 3.5,
    num: 1314,
    punctuality: '准时达',
    bird: '蜂鸟专送',
    setMeal: [
      { meal: '1人招牌套餐', imageSrc: '/image/images/01.jpg', content: '周末超值冰淇淋，爽口美食的必备，立享特色双人套餐', sales: 3566 },
      { meal: '2人招牌套餐', imageSrc: '/image/images/02.jpg', content: '周末超值冰淇淋，爽口美食的必备，立享特色双人套餐', sales: 3566 },
      { meal: '4人招牌套餐', imageSrc: '/image/images/03.jpg', content: '周末超值冰淇淋，爽口美食的必备，立享特色双人套餐', sales: 3566 }
    ]
  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  jumpCombo(){
    wx.navigateTo({
      url: '/pages/combo/combo',
    })
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