// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "个人中心",
    lat: null,
    long: null,
    address: "",
    codeContent: ""
  },

  changedData: function () {
    this.setData({
      text: "改变个人中心"
    })
  },

  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          lat: res.latitude,
          long: res.longitude
        })
      }
    })
  },

  chooseAddress: function () {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          address: res.address
        })
      }
    })
  },
  getLoctionByWxMap: function () {
    wx.openLocation({
      latitude: this.data.lat,
      longitude: this.data.long,
      success: (res) => {
        console.log(res)
      }
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '15658162008'
    })
  },
  richScan: function () {
    wx.scanCode({
      scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
      success: (res) => {
        this.setData({
          codeContent: res.result
        })
      }
    })
  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载" + JSON.stringify(options))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    console.log("页面显示" + res)
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
    wx.stopPullDownRefresh()
    console.log("下拉刷新啦")
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