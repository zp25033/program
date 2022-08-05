// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
    onShareAppMessage() {
      return {
        title: 'swiper',
        path: 'page/component/pages/swiper/swiper'
      }
    },
  
    data: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      indicatorActiveColor: "red",
      imgarr: [
        "/image/banner/banner1.jpg",
        "/image/banner/banner2.jpg",
        "/image/banner/banner3.jpg"
      ],
      articleArr: [
        "/image/jingping.png",
        "/image/jingping1.png",
        "/image/jingping.png",
        "/image/jingping1.png"
      ],
      cardArr: [
        {
          src: "/image/yilou/wuhuang1.jpg",
          text: '西餐'
        },
        {
          src: "/image/yilou/wuhuang2.jpg",
          text: '点心'
        },
        {
          src: "/image/yilou/wuhuang3.jpg",
          text: '水果'
        },
        {
          src: "/image/yilou/wuhuang3.jpg",
          text: '面食'
        },
        {
          src: "/image/yilou/wuhuang4.jpg",
          text: '蒸菜'
        },
        {
          src: "/image/yilou/wuhuang5.jpg",
          text: '火锅'
        },
        {
          src: "/image/yilou/wuhuang6.jpg",
          text: '饮品'
        },
        {
          src: "/image/yilou/wuhuang7.jpg",
          text: '面包'
        },
        {
          src: "/image/yilou/wuhuang8.jpg",
          text: '炸鸡'
        },
        {
          src: "/image/yilou/wuhuang8.jpg",
          text: '更多'
        }
      ]
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})