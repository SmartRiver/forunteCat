// pages/diliang/diliagn.js
var Api = require('../../api/api.js');
var Util = require('../../utils/util.js');


Page({
  data: {
    sh_stocks : '', //沪
    sz_stocks : '', //深
    sc_stocks : '', //创业板 
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.test();
    this.getData();
  },

  onReady: function () {
    // 页面渲染完成
  },

  onShow: function () {
    // 页面显示
  },

  onHide: function () {
    // 页面隐藏
  },

  onUnload: function () {
    // 页面关闭
  },

  onPullDownRefresh: function () {
  },

  onShareAppMessage: function () {
    return {
      title: '地量股',
      desc: `${getApp().globalData.shareDesc}`,
      path: `/pages/diliang/diliang`
    }
  },
  test: function () {
    console.log('--------------test--------------')
    wx.request({
      url: 'https://baotou.bingdou.tv:8705/stock/?symbol=dl_stocks', //仅为示例，并非真实的接口地址
      
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        console.log(res)
      },
    })
  },
  getData: function () {
    console.log('-----------------11-----------')
    var that = this
    Api.diliang.getDiliangGu().then(function (results) {
      wx.stopPullDownRefresh()
      that.setData({
        sh_stocks : results.sh,
        sz_stocks : results.sz,
        sc_stocks : results.sc
      })
      console.log('-----------------22-----------')
      console.log(that.data.sh_stocks)
    }, function (res) {
      wx.stopPullDownRefresh()
    })
  },

  onStockDetailEvent: function (e) {
    var stock = e.currentTarget.dataset.stock
    Util.gotoQuote(stock.goodsId, stock.name, stock.code)
  },

  onStockSearchEvent: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})