// components/ratingbar/rating-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type: Number,
      value: 5
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached: function(){
    this.setData({
      stars: new Array(this.properties.count)
    })
  }
})
