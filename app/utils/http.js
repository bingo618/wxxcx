const API_HOST = "https://api.yuanxininfo.com/dct-shop-web/kernel"

var httpProvider = (function () {
  var get = function (code, data) {
    return new Promise((resolve, reject) => {
      var params = {
        code: code,
        data: data,
        token: '8414defedc114864800301d354d75511',
        "partyId": 99
      }
      console.log(params)
      wx.request({
        url: API_HOST,
        data: {data: params},
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        }
      })
    })
  }

  return {
    get: get
  }

})()

export { httpProvider }