// pages/label/label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    actions: [
      {
        color: '#fff',
        fontsize: '20',
        width: 50,
        icon: 'delete',
        background: '#2d8cf0'
      },
    ]
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
        { tag: '饮料' },
        { tag: '外套' },
        { tag: '电脑' },
      ]
    })
  },

  delete: function (e) {
    let list = this.data.list;
    var index = e.target.dataset.index;
    console.log(index);
    list.splice(index, 1);
    this.setData({
      list: list
    })
  }
})