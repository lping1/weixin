const groupData = require('../../utils/groupData.js')
const Util = require('../../utils/util.js')
Page({
    data: {
        groupData: groupData
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig,
  onLoad: function() {
        
    }
})
