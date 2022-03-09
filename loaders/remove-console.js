const reg = /(console.log()(.*)())/g;
module.exports = function(source) {
    console.log('开始执行removeConsole loader')
    source = source.replace(reg, "")
    return source
}