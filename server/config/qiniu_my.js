const config={
    enable:true, //是否开启七牛
    accessKey:'bmonQg5KKjATZo42GzI9WeOjpfQGGLRK6BMR7WYH',
    secretKey:'aFZi2cyphBuAyVODE6R5cHkn1GRpWQrO0JqPg7O0',
    bucket:'robin-2024', //存储桶名称
    cdn:'sa099gfjq.hn-bkt.clouddn.com', //七牛配置的域名，七牛配置的测试域名只能使用一个月，记得配！
    zone:'z2',
    rootPath:'image',//存储的根路径
    size:4, //最大文件大小，不得大于4M(单位M)
    useHttps:false, //是否启用https
    useCdnDomains:false //是否启用cdn上传加速
}

module.exports=config;