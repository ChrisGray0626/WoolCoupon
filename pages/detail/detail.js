Page({
  data: {
    isWish: false,
    //是否显示面板指示点 
    autoplay: true,
    //是否自动切换 
    interval: 3000,
    //自动切换时间间隔,3s 
    duration: 1000,
    //  滑动动画时长1s 
    imgUrls: ['', '', '', '', ''],
    id: '',
    productName: '',
    productPresentation: ''
  },

  onLoad: function (option) {
    let id = option.id
    this.setData({
      id: id
    });
    console.log(id);
  },

  onShow(){
    this.setData({
      imgUrls: ["../../static/RNB.png", "../../static/RNB.png", "../../static/RNB.png", "../../static/RNB.png", "../../static/RNB.png"],
      productName: '林登万全家桶',
      productPresentation: "林登万千千万，倒下一个还会有千千万万个林登万站起来！"
    })
  },
  
  addWishList() { 
    let isWish = this.data.isWish
    if (isWish) {
      wx.showToast({
        title: '移出成功', icon: 'success', duration: 2000
      })
    }
    else{
      wx.showToast({
        title: '加入成功', icon: 'success', duration: 2000
      })
    }
    this.setData({
      isWish: !this.data.isWish
    });
  },

  immeBuy() { 
    wx.navigateTo({
      url: '',
    })
  },
  onShareAppMessage() {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})