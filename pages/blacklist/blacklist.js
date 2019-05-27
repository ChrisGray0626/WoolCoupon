// pages/blacklist/blacklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '1',
    tab1: true,
    labelList: [],
    produceList: [],
    actions: [
      {
        color : '#fff',
        fontsize : '20',
        width : 50,
        icon : 'delete',
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
      labelList: [
        { id: 0, tag: '饮料' },
        { id: 1, tag: '外套' },
        { id: 2, tag: '电脑' },
      ],
      produceList: [
        { id: 1, productName: "特惠商品1", img: "../../static/RNB.png", productNum: 5 },
        { id: 2, productName: "特惠商品2", img: "../../static/RNB.png", productNum: 10 },
        { id: 3, productName: "特惠商品3", img: "../../static/RNB.png", productNum: 0 },
        { id: 4, productName: "特惠商品4", img: "../../static/RNB.png", productNum: 3 },
      ]
    })
  },

  tabHandleChange({ detail }) {
    var index = detail.key
    this.setData({
      currentTab: detail.key
    });
    if (index == 1) {
      this.setData({
        tab1: true,
        tab2: false
      })
    } else if (index == 2) {
      this.setData({
        tab1: false,
        tab2: true
      })
    }
  },

  delete:function(e){
    let list = this.data.labelList;
    var index = e.target.dataset.index;
    console.log(index);
    list.splice(index, 1);
    this.setData({
      labelList: list
    })
  },

  gotoDetail: function (e) {
    let list = this.data.produceList;
    var index = e.currentTarget.dataset.index;
    var id = list[index].id;
    wx.navigateTo({
      url: "../../pages/detail/detail?id=" + id
    })
  },  
})