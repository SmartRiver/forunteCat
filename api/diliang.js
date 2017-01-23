var Service = require('./service.js')
var Promise = Service.Promise
var StaticStrings = Service.StaticStrings

var parser = require("./parsers/haogu-parser.js")
var Util = require('../utils/util.js')

// 地量股列表 [沪、深、创业板]
function getDiliangGu() {

    var promise = Service.request({
        showLoading: false,
        showFailMsg: false,
        method: 'GET',
        url: `https://achelous.space:8705/stock/?symbol=dl_stocks`,
    }).then(function (res) {
        return res.data
    }, function (res) {
        return Promise.reject(StaticStrings.kGetDataErrorInfo)
    });
    return promise;
}

module.exports = {
    getDiliangGu: getDiliangGu
}