// 使用Mock
var Mock = require("mockjs")

Mock.Random.ctitle()
Mock.Random.color()
Mock.Random.cname()
Mock.Random.image()
var data = Mock.mock({
     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // "list|5":[{
    //     // 属性 id 是一个自增数，起始值为 1, 每次增 1
    //     "id|+1":1
    // }]
    // 生成随机的中文title，4是长度
    title:"@ctitle(4)",
    // 生成3个到10个，title长度为1到4
    "subTitle|3-10":["@ctitle(1,4)"],
    // 图片
    "caroucelList|4":[
        "@image('200x100','@color','#FFF','jpg','@cname')"
    ]
})

// 输出结果
console.log(data)