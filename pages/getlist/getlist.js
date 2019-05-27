// pages/getlist/getllist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      list: [
        { id: 1, productName: "特惠商品1", img: "../../static/RNB.png", productNum: 5 },
        { id: 2, productName: "特惠商品2", img: "../../static/RNB.png", productNum: 10 },
        { id: 3, productName: "特惠商品3", img: "../../static/RNB.png", productNum: 0 },
        { id: 4, productName: "特惠商品4", img: "../../static/RNB.png", productNum: 3 },   
      ]
    })
  },
  
  gotoDetail: function (e) {
    let list = this.data.list;
    var index = e.currentTarget.dataset.index;
    var id = list[index].id;
    wx.navigateTo({
      url: "../../pages/detail/detail?id=" + id
    })
  },
})