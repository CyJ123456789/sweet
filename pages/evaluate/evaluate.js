// pages/evaluate/evaluate.js
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    estimateList: [
      { isshow: false, text: "差评", no: "/image/images/negative.png", select:"/image/images/selsetNegative.png", xing:"/image/images/1.png"},
      { isshow: false, text: "一般", no: "/image/images/ordinary.png", select: "/image/images/selectOrdinary.png", xing:"/image/images/2.png"},
      { isshow: false, text: "满意", no: "/image/images/satisfaction.png", select: "/image/images/selectSatisfaction.png", xing:"/image/images/3.png"},
      { isshow: false, text: "比较满意", no: "/image/images/very.png", select:"/image/images/selectVery.png", xing:"/image/images/4.png"},
      { isshow: false, text: "很满意", no: "/image/images/quit.png", select:"/image/images/selectQuit.png", xing:"/image/images/5.png"}
    ],
    content:"",
    grade:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 打分选择
  chose(e){
    let index = e.currentTarget.dataset['forch']
    this.data.estimateList.forEach(item => item.isshow = false)
    this.data.estimateList[index].isshow = true
    this.setData({
      estimateList: this.data.estimateList,
      grade:index+1
    })
  },
  
  // textarea框双向数据绑定
  changeConent(e){
    this.setData({
      content: e.detail.value
    })
  },
  // 发布
  issue(){
    if(this.data.grade){
      console.log("选了")
      if(this.data.content){
        console.log("添了")
        Toast("发布成功");
      }else{
        Toast('还未进行评价');
      }
    }else{
      Toast('还未进行打分');
    }
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