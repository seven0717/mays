	//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('http://msi.cn',
	[
		{
			"name":"@name",
			"img":"@dataImage('30x30')",
			"km|1-100.1-10": 30,
			"bool|1": true,
			"step|1-7000": 10,
      		"date":"@date('MM-dd')",
			"time":"@time('HH:mm')",
			"UP|1-99":20,
			"tim":"@time",
			"text":"@cparagraph()",
			"site":"'@county(true)",
			"title":"@csentence(5)",
			"price|20-3000":120
		},
		{
			"name":"@name",
			"img":"@dataImage('30x30')",
			"km|1-100.1-10": 30,
			"bool|1": true,
			"step|1-7000": 10,
      		"date":"@date('MM-dd')",
			"time":"@time('HH:mm')",
			"UP|1-99":20,
			"tim":"@time",
			"text":"@cparagraph()",
			"site":"'@county(true)",
			"title":"@csentence(5)",
			"price|20-3000":120
		},
		
		{
			"name":"@name",
			"img":"@dataImage('30x30')",
			"km|1-100.1-10": 30,
			"bool|1": true,
			"step|1-7000": 10,
      		"date":"@date('MM-dd')",
			"time":"@time('HH:mm')",
			"UP|1-99":20,
			"tim":"@time",
			"text":"@cparagraph()",
			"site":"'@county(true)",
			"title":"@csentence(5)",
			"price|20-3000":120
		},
		{
			"name":"@name",
			"img":"@dataImage('30x30')",
			"km|1-100.1-10": 30,
			"bool|1": true,
			"step|1-7000": 10,
      		"date":"@date('MM-dd')",
			"time":"@time('HH:mm')",
			"UP|1-99":20,
			"tim":"@time",
			"text":"@cparagraph()",
			"site":"'@county(true)",
			"title":"@csentence(5)",
			"price|20-3000":120
		},
		{
			"name":"@name",
			"img":"@dataImage('30x30')",
			"km|1-100.1-10": 30,
			"bool|1": true,
			"step|1-7000": 10,
      		"date":"@date('MM-dd')",
			"time":"@time('HH:mm')",
			"UP|1-99":20,
			"tim":"@time",
			"text":"@cparagraph()",
			"site":"'@county(true)",
			"title":"@csentence(5)",
			"price|20-3000":120
		},
	]
)
