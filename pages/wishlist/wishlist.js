// pages/wishlist/wishlist.js
const { $Message } = require('../../dist/base/index');
Page({
  data: {
    list:[],               // 购物车列表
    hasList:false,         // 列表是否有数据
    selectAllStatus:true,  // 全选状态，默认全选
    modalHidden:true,      //弹窗状态 
    telephone:"",
    actions: [
      {
        name: '删除',
        color: '#ed3f14'
      }
    ],
    visible: false
  },
  onShow() {
    this.setData({
      hasList: true,
      selectAllStatus:true,
      list:[
        { id: 1, selected: true, productName: "特惠商品1", img: "../../static/RNB.png", productNum: 5 },
        { id: 2, selected: true, productName: "特惠商品2", img: "../../static/RNB.png", productNum: 10 },
        { id: 3, selected: true, productName: "特惠商品3", img: "../../static/RNB.png", productNum: 0 },
        { id: 4, selected: true, productName: "特惠商品4", img: "../../static/RNB.png", productNum: 3 },            
      ]
    });
  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let list = this.data.list;
    const selected = list[index].selected;
    list[index].selected = !selected;
    this.setData({
      list: list
    });
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    let list = this.data.list;
    let visible = this.data.visible;
    for (let i = 0; i < list.length; i++) {
      if(list[i].selected){
        list.splice(i,1);
        i--;
      }
    }
    $Message({
      content: '已删除',
      type: 'success',
      duration: 1
    });
    this.setData({
      list: list,
      visible: false  
    });
    if(!list.length){
      this.setData({
        hasList: false
      });
    }
  },
  
  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let list = this.data.list;

    for (let i = 0; i < list.length; i++) {
      list[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      list: list
    });
  },

  gotoDetail: function (e) {
    let list = this.data.list;
    var index = e.currentTarget.dataset.index;
    var id = list[index].id;
    wx.navigateTo({
      url: "../../pages/detail/detail?id=" + id
    })
  },

  handleDelete() {
    this.setData({
      visible: true
    });
  },

  handleCancel() {
    this.setData({
      visible: false
    });
  },

  lackWarningClick(){
    this.setData({
      modalHidden: false
    })
  },

  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  modalConfirm: function () {
    let telephone = this.telephone;
    if(!telephone){
      $Message({
        content: '请输入您的手机号',
        type: 'error',
        duration: 1
      });      
    }
    else{
      $Message({
        content: '设置提醒成功',
        type: 'success',
        duration: 1
      });
      this.setData({
        modalHidden: true
      })
    }
  }
})