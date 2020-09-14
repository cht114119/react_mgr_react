const global = {

    serverName: process.env.REACT_APP_API, // 服务器地址
    // serverName: 'http://bvevzy.natappfree.cc/sd-admin', // 田壮服务器地址
    // serverName: 'http://hfimii.natappfree.cc/sd_admin', // 小胖服务器地址
    // serverName: 'http://172.30.88.151:8081/sd-admin', // 贾肖晨服务器地址
    // serverName: 'http://172.30.88.51:8082/sd-admin', // 李壮服务器地址
    // serverName: 'http://172.30.88.15:8081/sd-admin', // 杨飞服务器地址
    // serverName: 'http://172.30.88.139:8081/sd-admin', // 贾肖晨服务器地址
    // serverName: 'http://172.30.88.215:8088/sd-admin', // 大飞服务器地址
    // serverName: 'http://172.30.88.141:8081/sd-admin', // 小缝本地服务器
    // serverName: 'http://172.30.88.32:8080/sd-admin', // 丁成云本地
    // serverName: 'http://172.30.88.119:8081/sd-admin', // 小缝本地
    systemName: '十点课堂业务管理系统', // 系统名称

    pageSize: 10, // 分页-每页显示条数

    pageSizesList: [10, 20, 50], // 分页-每页显示条数数据

    serverEnv: process.env.NODE_ENV

}
export default global
