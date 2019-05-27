var WxSearch = require('../../wxSearch/wxSearch.js') ;
var app = getApp()

Page({
  data: {
    list: [],
    currentTab: '1',
    tab1: true,
  },
  
  onShow(){
    this.setData({
      list:[
        { id1: 1, productName1: '特惠产品1', productImg1: '../../static/RNB.png', id2: 2, productName2: '特惠产品2', productImg2: '../../static/RNB.png'},
        { id1: 3, productName1: '特惠产品3', productImg1: '../../static/RNB.png', id2: 4, productName2: '特惠产品4', productImg2: '../../static/RNB.png' }
      ]
    })
  },
  onLoad: function () {
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
    WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);
  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
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
  
  gotoDetail1:function(e){
    let list = this.data.list;
    var index = e.currentTarget.dataset.index;
    var id = list[index].id1;
    wx.navigateTo({
      url: "../../pages/detail/detail?id=" + id
    })
  },

  gotoDetail2: function (e) {
    let list = this.data.list;
    var index = e.currentTarget.dataset.index;
    var id = list[index].id2;
    wx.navigateTo({
      url: "../../pages/detail/detail?id=" + id
    })
  },
})
