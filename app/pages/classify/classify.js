// pages/classify/classify.js
import { httpProvider } from "../../utils/http.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var params = { "data": {}, "numPerPage": 10, "pageNum": 1 }
    httpProvider.get("0404056", params).then((res) => {
      this.setData({
        goodsList: res.data.data.goodsListPage.data
      })
    }, (error) => {
      console.log(error)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


})