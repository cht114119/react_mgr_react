const commonUtil = {
    /**
     * 元转换成分
     */
    multiply: function(a, b) {
        let a1 = `${a}`,
            b1 = `${b}`,
            aArr = a1.split('.'),
            bArr = b1.split('.'),
            aNum = aArr.join(''),
            bNum = bArr.join(''),
            aLen = aArr[1] ? aArr[1].length : 0,
            bLen = bArr[1] ? bArr[1].length : 0
        return (aNum * bNum) / Math.pow(10, aLen + bLen)
    },

    /**
     * 时间戳转化成日期格式 unix时间戳转化成yyyy-MM-dd HH:mm:ss
     */
    unixDateToFormateData(unixData) {
        var date = new Date(unixData) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        return Y + M + D + h + m + s
    },

    /**
     * 获取上个月日期, 返回'YYYY-MM'
     */
    lastMonthDate() {
        let nowdate = new Date(),
            y = nowdate.getFullYear(),
            m = nowdate.getMonth()
        if (m === 0) {
            y -= 1
            m = 12
        }
        m = m.toString().padStart(2, '0')
        return y + '-' + m
    },

    //保留两位小数的价格正则校验
    priceCheck(num) {
        const reg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/
        return reg.test(num)
    },
    // 解决浮点数相乘精度丢失问题
    accMul(num1, num2) {
        var m = 0,
            s1 = num1.toString(),
            s2 = num2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {}
        try {
            m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },

    isProduction () {
        return window.location.host === 'admin.kt.sdiread.com'
    }
}

export default commonUtil
