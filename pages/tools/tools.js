//pages/tools/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaohaopinToolArry: [],
    shuxingToolArry: [],
    junbeiToolArry: [],
    aoshuToolArry: [],
    storeToolArry: [],
    
    normalToolArry: [],
    fuzhuToolArry: [],
    faqiToolArry: [],
    fangjuToolArry: [],
    wuqiToolArry: [],
    shengwuToolArry: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      xiaohaopinToolArry: [{name: '净化药水 '}, {name: '动物信使'}, { name: '回城卷轴'}, {name: '仙灵之火'}, {name: '魔法芒果'}, { name: '侦查守卫'}, { name: ' 诡计之雾'}, {  name: '树之祭祀'}, { name: '岗哨守卫'}, { name: '治疗药膏'}, { name: '知识之书'}, { name: '显影之尘'}, { name: '魔瓶'}],

      shuxingToolArry: [{ name: '铁树枝干 ' }, { name: '力量手套' }, { name: ' 敏捷便鞋' }, { name: ' 智力斗篷' }, { name: ' 圆环' }, { name: ' 力量腰带' }, { name: '  法师长袍' }, { name: ' 精灵布带' }, { name: ' 欢欣之刃' }, { name: '食人魔之斧' }, { name: '魔力法杖' }],

      junbeiToolArry: [{ name: '守护指环 ' }, { name: '压制之刃' }, { name: '圆盾' }, { name: '凝魂之露 ' }, { name: '淬毒之珠 ' }, { name: '枯萎之石' }, { name: ' 攻击之爪' }, { name: '锁子甲' }, { name: '短棍' }, { name: '铁意头盔' }, { name: '标枪' }, { name: ' 阔剑' }, { name: ' 大剑' }, { name: ' 秘银锤' }],

      aoshuToolArry: [{ name: '魔棒 ' }, { name: '风灵之纹' }, { name: '回复戒指 ' }, { name: '贤者面罩' }, { name: '加速手套' }, { name: '速度之靴' }, { name: ' 抗魔斗篷' }, { name: '治疗指环' }, { name: '虚无宝石' }, { name: '真视宝石' }, { name: ' 吸血面具' }, { name: '暗影护符' }, { name: ' 幽魂权杖 ' }, { name: '闪烁匕首  ' }],

      storeToolArry: [{ name: '能量之球' }, { name: '活力之球' }, { name: '精气之球' }, { name: '板甲' }, { name: '闪避护符' }, { name: '振奋宝石' }, { name: '极限法球' }, { name: '恶魔刀锋' }, { name: '神秘法杖' }, { name: '掠夺者之斧' }, { name: '鹰歌弓' }, { name: '圣者遗物' }],

      normalToolArry: [{ name: '魔杖' }, { name: '怨灵系带' }, { name: '护腕' }, { name: '空灵挂件' }, { name: '灵魂之戒' }, { name: '相位鞋' }, { name: '动力鞋 (力量)' }, { name: '动力鞋 (敏捷)' }, { name: '动力鞋 (智力)' }, { name: '空明杖' }, { name: '坚韧球' }, { name: '迈达斯之手' }, { name: '远行鞋 等级1' }, { name: '远行鞋 等级2' }, { name: '银月之晶' }],

      fuzhuToolArry: [{ name: '静谧之鞋' }, { name: '王者之戒' }, { name: '恢复头巾' }, { name: '玄冥盾牌' }, { name: '影之灵龛' }, { name: '天鹰之戒' }, { name: '勇气勋章' }, { name: '奥术鞋' }, { name: '弗拉迪米尔的祭品' }, { name: '梅肯斯姆' }, { name: '魂之灵瓮' }, { name: ' 洞察烟斗' }, { name: '卫士胫甲' }],

      faqiToolArry: [{ name: '阿托斯之棍' }, { name: '微光披风' }, { name: '原力法杖' }, { name: '纷争面纱' }, { name: '以太之镜' }, { name: '死灵书等级1' }, { name: '炎阳纹章' }, { name: '达贡之神力等级1' }, { name: 'Eul的神圣法杖' }, { name: '死灵书等级2' }, { name: '达贡之神力等级2' }, { name: '紫怨' }, { name: '阿哈利姆神杖' }, { name: '否决坠饰' }, { name: '死灵书等级3' }, { name: '刷新球' }, { name: '达贡之神力等级3' }, { name: '邪恶镰刀' }, { name: '玲珑心' }, { name: '达贡之神力 等级4' }, { name: '达贡之神力等级5' }],

      fangjuToolArry: [{ name: '幻影斧' }, { name: '挑战头巾' }, { name: '镇魂石' }, { name: '先锋盾' }, { name: '刃甲' }, { name: '永恒之盘' }, { name: '赤红甲' }, { name: '黑皇杖' }, { name: '清莲宝珠' }, { name: '飓风长戟' }, { name: '希瓦的守护' }, { name: '血精石' }, { name: '林肯法球' }, { name: '恐鳌之心' }, { name: '强袭胸甲' }],

      wuqiToolArry: [{ name: '水晶剑' }, { name: '莫尔迪基安的臂章' }, { name: '陨星锤' }, { name: '影刃' }, { name: '碎颅锤' }, { name: '金箍棒' }, { name: '狂战斧' }, { name: '虚灵之刃' }, { name: '辉耀' }, { name: '代达罗斯之殇' }, { name: '蝴蝶' }, { name: '白银之锋' }, { name: '圣剑' }, { name: '深渊之刃' }, { name: '血棘' }],

      shengwuToolArry: [{ name: '疯狂面具' }, { name: '魔龙枪' }, { name: '慧光' }, { name: '支配头盔' }, { name: '夜叉' }, { name: '散华' }, { name: '回音战刃' }, { name: '漩涡' }, { name: '净魂之刃' }, { name: '黯灭' }, { name: '天堂之戟' }, { name: '散夜对剑' }, { name: '撒旦之邪力' }, { name: '斯嘉蒂之眼' }, { name: '雷神之锤' }],
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  itemClick: function(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/tools/tool-jianjie/tool-jianjie',
    })
  },
})