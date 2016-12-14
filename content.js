// findAndReplaceDOMText(document.getElementById('t'), {
//   find: /Hello/,
//   wrap: 'em'
// });

// alert(words[0].simplified);





// wordlist[0].simplified

var wordlist = 
[
  {
    "Simplified": "的",
    "Traditional": "的",
    "NumeralPinYin": "de5",
    "Pinyin": "de",
    "Meaning": "indicates possession, like adding 's to a noun"
  },
  {
    "Simplified": "我",
    "Traditional": "我",
    "NumeralPinYin": "wo3",
    "Pinyin": "wǒ",
    "Meaning": "I; me"
  },
  {
    "Simplified": "你",
    "Traditional": "你",
    "NumeralPinYin": "ni3",
    "Pinyin": "nǐ",
    "Meaning": "you (singular)"
  },
  {
    "Simplified": "是",
    "Traditional": "是",
    "NumeralPinYin": "shi4",
    "Pinyin": "shì",
    "Meaning": "be; is; are; am"
  },
  {
    "Simplified": "了",
    "Traditional": "了",
    "NumeralPinYin": "le5",
    "Pinyin": "le",
    "Meaning": "indicates a completed or finished action"
  },
  {
    "Simplified": "不",
    "Traditional": "不",
    "NumeralPinYin": "bu4",
    "Pinyin": "bù",
    "Meaning": "no; not"
  },
  {
    "Simplified": "在",
    "Traditional": "在",
    "NumeralPinYin": "zai4",
    "Pinyin": "zài",
    "Meaning": "at; on; in; indicates an action in progress"
  },
  {
    "Simplified": "他",
    "Traditional": "他",
    "NumeralPinYin": "ta1",
    "Pinyin": "tā",
    "Meaning": "he; him"
  },
  {
    "Simplified": "我们",
    "Traditional": "我們",
    "NumeralPinYin": "wo3men5",
    "Pinyin": "wǒmen",
    "Meaning": "we; us"
  },
  {
    "Simplified": "好",
    "Traditional": "好",
    "NumeralPinYin": "hao3",
    "Pinyin": "hǎo",
    "Meaning": "good"
  },
  {
    "Simplified": "有",
    "Traditional": "有",
    "NumeralPinYin": "you3",
    "Pinyin": "yǒu",
    "Meaning": "have"
  },
  {
    "Simplified": "这",
    "Traditional": "這",
    "NumeralPinYin": "zhe4",
    "Pinyin": "zhè",
    "Meaning": "this"
  },
  {
    "Simplified": "会",
    "Traditional": "會",
    "NumeralPinYin": "hui4",
    "Pinyin": "huì",
    "Meaning": "know how to"
  },
  {
    "Simplified": "吗",
    "Traditional": "嗎",
    "NumeralPinYin": "ma5",
    "Pinyin": "ma",
    "Meaning": "indicates a yes/no question (added to a statement)"
  },
  {
    "Simplified": "什么",
    "Traditional": "什麼",
    "NumeralPinYin": "shen2me5",
    "Pinyin": "shénme",
    "Meaning": "what? (replaces the noun to turn a statement into a question)"
  },
  {
    "Simplified": "说",
    "Traditional": "說",
    "NumeralPinYin": "shuo1",
    "Pinyin": "shuō",
    "Meaning": "speak"
  },
  {
    "Simplified": "她",
    "Traditional": "她",
    "NumeralPinYin": "ta1",
    "Pinyin": "tā",
    "Meaning": "she"
  },
  {
    "Simplified": "想",
    "Traditional": "想",
    "NumeralPinYin": "xiang3",
    "Pinyin": "xiǎng",
    "Meaning": "think; believe; suppose; would like to"
  },
  {
    "Simplified": "一",
    "Traditional": "一",
    "NumeralPinYin": "yi1",
    "Pinyin": "yī",
    "Meaning": "one; once; a"
  },
  {
    "Simplified": "很",
    "Traditional": "很",
    "NumeralPinYin": "hen3",
    "Pinyin": "hěn",
    "Meaning": "very; quite"
  },
  {
    "Simplified": "人",
    "Traditional": "人",
    "NumeralPinYin": "ren2",
    "Pinyin": "rén",
    "Meaning": "person; man; people"
  },
  {
    "Simplified": "那",
    "Traditional": "那",
    "NumeralPinYin": "na4",
    "Pinyin": "nà",
    "Meaning": "that; then"
  },
  {
    "Simplified": "来",
    "Traditional": "來",
    "NumeralPinYin": "lai2",
    "Pinyin": "lái",
    "Meaning": "come; arrive; ever since; next"
  },
  {
    "Simplified": "都",
    "Traditional": "都",
    "NumeralPinYin": "dou1",
    "Pinyin": "dōu",
    "Meaning": "all; both"
  },
  {
    "Simplified": "个",
    "Traditional": "個",
    "NumeralPinYin": "ge5",
    "Pinyin": "ge",
    "Meaning": "general measure word"
  },
  {
    "Simplified": "能",
    "Traditional": "能",
    "NumeralPinYin": "neng2",
    "Pinyin": "néng",
    "Meaning": "can; be able"
  },
  {
    "Simplified": "去",
    "Traditional": "去",
    "NumeralPinYin": "qu4",
    "Pinyin": "qù",
    "Meaning": "go; to leave"
  },
  {
    "Simplified": "和",
    "Traditional": "和",
    "NumeralPinYin": "he2",
    "Pinyin": "hé",
    "Meaning": "and; with"
  },
  {
    "Simplified": "做",
    "Traditional": "做",
    "NumeralPinYin": "zuo4",
    "Pinyin": "zuò",
    "Meaning": "do; make"
  },
  {
    "Simplified": "上",
    "Traditional": "上",
    "NumeralPinYin": "shang4",
    "Pinyin": "shàng",
    "Meaning": "above; up"
  },
  {
    "Simplified": "没有",
    "Traditional": "沒有",
    "NumeralPinYin": "mei2you3",
    "Pinyin": "méiyǒu",
    "Meaning": "not have; there is not"
  },
  {
    "Simplified": "看",
    "Traditional": "看",
    "NumeralPinYin": "kan4",
    "Pinyin": "kàn",
    "Meaning": "see; look at; to watch"
  },
  {
    "Simplified": "怎么",
    "Traditional": "怎麼",
    "NumeralPinYin": "zen3me5",
    "Pinyin": "zěnme",
    "Meaning": "how?"
  },
  {
    "Simplified": "现在",
    "Traditional": "現在",
    "NumeralPinYin": "xian4zai4",
    "Pinyin": "xiànzài",
    "Meaning": "now"
  },
  {
    "Simplified": "点",
    "Traditional": "點",
    "NumeralPinYin": "dian3",
    "Pinyin": "diǎn",
    "Meaning": "a dot; a little; o'clock"
  },
  {
    "Simplified": "呢",
    "Traditional": "呢",
    "NumeralPinYin": "ne5",
    "Pinyin": "ne",
    "Meaning": "indicates a question; how about...?;"
  },
  {
    "Simplified": "太",
    "Traditional": "太",
    "NumeralPinYin": "tai4",
    "Pinyin": "tài",
    "Meaning": "too (much)"
  },
  {
    "Simplified": "里",
    "Traditional": "裡",
    "NumeralPinYin": "li3",
    "Pinyin": "lǐ",
    "Meaning": "inside; Chinese mile (~.5 km)"
  },
  {
    "Simplified": "听",
    "Traditional": "聽",
    "NumeralPinYin": "ting1",
    "Pinyin": "tīng",
    "Meaning": "listen; hear"
  },
  {
    "Simplified": "谁",
    "Traditional": "誰",
    "NumeralPinYin": "shei2",
    "Pinyin": "shéi",
    "Meaning": "who"
  },
  {
    "Simplified": "多",
    "Traditional": "多",
    "NumeralPinYin": "duo1",
    "Pinyin": "duō",
    "Meaning": "many"
  },
  {
    "Simplified": "时候",
    "Traditional": "時候",
    "NumeralPinYin": "shi2hou5",
    "Pinyin": "shíhou",
    "Meaning": "time"
  },
  {
    "Simplified": "下",
    "Traditional": "下",
    "NumeralPinYin": "xia4",
    "Pinyin": "xià",
    "Meaning": "fall; below"
  },
  {
    "Simplified": "谢谢",
    "Traditional": "謝謝",
    "NumeralPinYin": "xie4xie5",
    "Pinyin": "xièxie",
    "Meaning": "thank you"
  },
  {
    "Simplified": "先生",
    "Traditional": "先生",
    "NumeralPinYin": "xian1sheng5",
    "Pinyin": "xiānsheng",
    "Meaning": "Mr.; Sir"
  },
  {
    "Simplified": "喜欢",
    "Traditional": "喜歡",
    "NumeralPinYin": "xi3huan5",
    "Pinyin": "xǐhuan",
    "Meaning": "to like"
  },
  {
    "Simplified": "大",
    "Traditional": "大",
    "NumeralPinYin": "da4",
    "Pinyin": "dà, dài",
    "Meaning": "big; large"
  },
  {
    "Simplified": "东西",
    "Traditional": "東西",
    "NumeralPinYin": "dong1xi5",
    "Pinyin": "dōngxi",
    "Meaning": "things; stuff"
  },
  {
    "Simplified": "小",
    "Traditional": "小",
    "NumeralPinYin": "xiao3",
    "Pinyin": "xiǎo",
    "Meaning": "small; young"
  },
  {
    "Simplified": "叫",
    "Traditional": "叫",
    "NumeralPinYin": "jiao4",
    "Pinyin": "jiào",
    "Meaning": "to be called"
  },
  {
    "Simplified": "爱",
    "Traditional": "愛",
    "NumeralPinYin": "ai4",
    "Pinyin": "ài",
    "Meaning": "love"
  },
  {
    "Simplified": "年",
    "Traditional": "年",
    "NumeralPinYin": "nian2",
    "Pinyin": "nián",
    "Meaning": "year"
  },
  {
    "Simplified": "请",
    "Traditional": "請",
    "NumeralPinYin": "qing3",
    "Pinyin": "qǐng",
    "Meaning": "please; invite; to treat someone to something"
  },
  {
    "Simplified": "回",
    "Traditional": "回",
    "NumeralPinYin": "hui2",
    "Pinyin": "huí",
    "Meaning": "to return; to reply; to go back"
  },
  {
    "Simplified": "工作",
    "Traditional": "工作",
    "NumeralPinYin": "gong1zuo4",
    "Pinyin": "gōngzuò",
    "Meaning": "work; a job"
  },
  {
    "Simplified": "钱",
    "Traditional": "錢",
    "NumeralPinYin": "qian2",
    "Pinyin": "qián",
    "Meaning": "money; coin"
  },
  {
    "Simplified": "吃",
    "Traditional": "吃",
    "NumeralPinYin": "chi1",
    "Pinyin": "chī",
    "Meaning": "eat"
  },
  {
    "Simplified": "开",
    "Traditional": "開",
    "NumeralPinYin": "kai1",
    "Pinyin": "kāi",
    "Meaning": "to open; to start; to operate (a vehicle)"
  },
  {
    "Simplified": "家",
    "Traditional": "家",
    "NumeralPinYin": "jia1",
    "Pinyin": "jiā",
    "Meaning": "family; home"
  },
  {
    "Simplified": "哪",
    "Traditional": "哪",
    "NumeralPinYin": "na3",
    "Pinyin": "nǎa",
    "Meaning": "which; how"
  },
  {
    "Simplified": "朋友",
    "Traditional": "朋友",
    "NumeralPinYin": "peng2you5",
    "Pinyin": "péngyou",
    "Meaning": "friend"
  },
  {
    "Simplified": "妈妈",
    "Traditional": "媽媽",
    "NumeralPinYin": "ma1ma5",
    "Pinyin": "māma",
    "Meaning": "mom; mum"
  },
  {
    "Simplified": "今天",
    "Traditional": "今天",
    "NumeralPinYin": "jin1tian1",
    "Pinyin": "jīntiān",
    "Meaning": "today"
  },
  {
    "Simplified": "几",
    "Traditional": "幾",
    "NumeralPinYin": "ji3",
    "Pinyin": "jǐ",
    "Meaning": "how many; several; a few"
  },
  {
    "Simplified": "爸爸",
    "Traditional": "爸爸",
    "NumeralPinYin": "ba4ba5",
    "Pinyin": "bàba",
    "Meaning": "Dad"
  },
  {
    "Simplified": "些",
    "Traditional": "些",
    "NumeralPinYin": "xie1",
    "Pinyin": "xiē",
    "Meaning": "some; few; several"
  },
  {
    "Simplified": "怎么样",
    "Traditional": "怎麼樣",
    "NumeralPinYin": "zen3me5yang4",
    "Pinyin": "zěnmeyàng",
    "Meaning": "how about?; how is/was it?"
  },
  {
    "Simplified": "对不起",
    "Traditional": "對不起",
    "NumeralPinYin": "dui4bu5qi3",
    "Pinyin": "duìbuqǐ",
    "Meaning": "sorry"
  },
  {
    "Simplified": "住",
    "Traditional": "住",
    "NumeralPinYin": "zhu4",
    "Pinyin": "zhù",
    "Meaning": "to live; reside; to stop"
  },
  {
    "Simplified": "三",
    "Traditional": "三",
    "NumeralPinYin": "san1",
    "Pinyin": "sān",
    "Meaning": "three"
  },
  {
    "Simplified": "高兴",
    "Traditional": "高興",
    "NumeralPinYin": "gao1xing4",
    "Pinyin": "gāoxìng",
    "Meaning": "happy; glad"
  },
  {
    "Simplified": "买",
    "Traditional": "買",
    "NumeralPinYin": "mai3",
    "Pinyin": "mǎi",
    "Meaning": "to buy"
  },
  {
    "Simplified": "医生",
    "Traditional": "醫生",
    "NumeralPinYin": "yi1sheng1",
    "Pinyin": "yīshēng",
    "Meaning": "doctor"
  },
  {
    "Simplified": "哪儿",
    "Traditional": "哪兒",
    "NumeralPinYin": "na3r5",
    "Pinyin": "nǎr",
    "Meaning": "where? (Beijing accent)"
  },
  {
    "Simplified": "字",
    "Traditional": "字",
    "NumeralPinYin": "zi4",
    "Pinyin": "zì",
    "Meaning": "letter; character"
  },
  {
    "Simplified": "名字",
    "Traditional": "名字",
    "NumeralPinYin": "ming2zi5",
    "Pinyin": "míngzi",
    "Meaning": "name"
  },
  {
    "Simplified": "认识",
    "Traditional": "認識",
    "NumeralPinYin": "ren4shi5",
    "Pinyin": "rènshi",
    "Meaning": "recognize; know (a person)"
  },
  {
    "Simplified": "坐",
    "Traditional": "坐",
    "NumeralPinYin": "zuo4",
    "Pinyin": "zuò",
    "Meaning": "sit"
  },
  {
    "Simplified": "喝",
    "Traditional": "喝",
    "NumeralPinYin": "he1",
    "Pinyin": "hē",
    "Meaning": "to drink"
  },
  {
    "Simplified": "写",
    "Traditional": "寫",
    "NumeralPinYin": "xie3",
    "Pinyin": "xiě",
    "Meaning": "to write; to compose"
  },
  {
    "Simplified": "月",
    "Traditional": "月",
    "NumeralPinYin": "yue4",
    "Pinyin": "yuè",
    "Meaning": "moon; month; flesh (radical)"
  },
  {
    "Simplified": "号",
    "Traditional": "號",
    "NumeralPinYin": "hao4",
    "Pinyin": "hào",
    "Meaning": "number; day of a month"
  },
  {
    "Simplified": "狗",
    "Traditional": "狗",
    "NumeralPinYin": "gou3",
    "Pinyin": "gǒu",
    "Meaning": "dog"
  },
  {
    "Simplified": "岁",
    "Traditional": "歲",
    "NumeralPinYin": "sui4",
    "Pinyin": "suì",
    "Meaning": "years old; age"
  },
  {
    "Simplified": "看见",
    "Traditional": "看見",
    "NumeralPinYin": "kan4jian4",
    "Pinyin": "kànjiàn",
    "Meaning": "see; catch sight of"
  },
  {
    "Simplified": "打电话",
    "Traditional": "打電話",
    "NumeralPinYin": "da3 dian4hua4",
    "Pinyin": "dǎ diànhuà",
    "Meaning": "make a phone call"
  },
  {
    "Simplified": "喂",
    "Traditional": "喂",
    "NumeralPinYin": "wei4",
    "Pinyin": "wèi",
    "Meaning": "hello (on the phone)"
  },
  {
    "Simplified": "儿子",
    "Traditional": "兒子",
    "NumeralPinYin": "er2zi5",
    "Pinyin": "érzi",
    "Meaning": "son"
  },
  {
    "Simplified": "漂亮",
    "Traditional": "漂亮",
    "NumeralPinYin": "piao4liang5",
    "Pinyin": "piàoliang",
    "Meaning": "pretty; beautiful"
  },
  {
    "Simplified": "分钟",
    "Traditional": "分鐘",
    "NumeralPinYin": "fen1zhong1",
    "Pinyin": "fēnzhōng",
    "Meaning": "minute; (measure word for time)"
  },
  {
    "Simplified": "再见",
    "Traditional": "再見",
    "NumeralPinYin": "zai4jian4",
    "Pinyin": "zàijiàn",
    "Meaning": "goodbye; see you later"
  },
  {
    "Simplified": "本",
    "Traditional": "本",
    "NumeralPinYin": "ben3",
    "Pinyin": "běn",
    "Meaning": "measure word for books"
  },
  {
    "Simplified": "明天",
    "Traditional": "明天",
    "NumeralPinYin": "ming2tian1",
    "Pinyin": "míngtiān",
    "Meaning": "tomorrow"
  },
  {
    "Simplified": "少",
    "Traditional": "少",
    "NumeralPinYin": "shao3",
    "Pinyin": "shǎo",
    "Meaning": "few; little"
  },
  {
    "Simplified": "多少",
    "Traditional": "多少",
    "NumeralPinYin": "duo1shao5",
    "Pinyin": "duōshao",
    "Meaning": "how much?; how many?"
  },
  {
    "Simplified": "块",
    "Traditional": "塊",
    "NumeralPinYin": "kuai4",
    "Pinyin": "kuài",
    "Meaning": "lump; piece; sum of money"
  },
  {
    "Simplified": "女儿",
    "Traditional": "女兒",
    "NumeralPinYin": "nv3'er2",
    "Pinyin": "nǚ'ér",
    "Meaning": "daughter"
  },
  {
    "Simplified": "小姐",
    "Traditional": "小姐",
    "NumeralPinYin": "xiao3jie5",
    "Pinyin": "xiǎojie",
    "Meaning": "young lady; miss; Ms."
  },
  {
    "Simplified": "衣服",
    "Traditional": "衣服",
    "NumeralPinYin": "yi1fu5",
    "Pinyin": "yīfu",
    "Meaning": "clothes"
  },
  {
    "Simplified": "水",
    "Traditional": "水",
    "NumeralPinYin": "shui3",
    "Pinyin": "shuǐ",
    "Meaning": "water"
  },
  {
    "Simplified": "学校",
    "Traditional": "學校",
    "NumeralPinYin": "xue2xiao4",
    "Pinyin": "xuéxiào",
    "Meaning": "school"
  },
  {
    "Simplified": "电影",
    "Traditional": "電影",
    "NumeralPinYin": "dian4ying3",
    "Pinyin": "diànyǐng",
    "Meaning": "movie; film"
  },
  {
    "Simplified": "书",
    "Traditional": "書",
    "NumeralPinYin": "shu1",
    "Pinyin": "shū",
    "Meaning": "book; letter"
  },
  {
    "Simplified": "四",
    "Traditional": "四",
    "NumeralPinYin": "si4",
    "Pinyin": "sì",
    "Meaning": "four"
  },
  {
    "Simplified": "五",
    "Traditional": "五",
    "NumeralPinYin": "wu3",
    "Pinyin": "wǔ",
    "Meaning": "five"
  },
  {
    "Simplified": "医院",
    "Traditional": "醫院",
    "NumeralPinYin": "yi1yuan4",
    "Pinyin": "yīyuàn",
    "Meaning": "hospital"
  },
  {
    "Simplified": "没关系",
    "Traditional": "沒關系",
    "NumeralPinYin": "mei2 guan1xi5",
    "Pinyin": "méi guānxi",
    "Meaning": "it doesn't matter; never mind"
  },
  {
    "Simplified": "飞机",
    "Traditional": "飛機",
    "NumeralPinYin": "fei1ji1",
    "Pinyin": "fēijī",
    "Meaning": "airplane"
  },
  {
    "Simplified": "二",
    "Traditional": "二",
    "NumeralPinYin": "er4",
    "Pinyin": "èr",
    "Meaning": "two"
  },
  {
    "Simplified": "电视",
    "Traditional": "電視",
    "NumeralPinYin": "dian4shi4",
    "Pinyin": "diànshì",
    "Meaning": "television; TV"
  },
  {
    "Simplified": "读",
    "Traditional": "讀",
    "NumeralPinYin": "du2",
    "Pinyin": "dú",
    "Meaning": "to read; to study"
  },
  {
    "Simplified": "后面",
    "Traditional": "后面",
    "NumeralPinYin": "hou4mian5",
    "Pinyin": "hòumian",
    "Meaning": "back; behind"
  },
  {
    "Simplified": "昨天",
    "Traditional": "昨天",
    "NumeralPinYin": "zuo2tian1",
    "Pinyin": "zuótiān",
    "Meaning": "yesterday"
  },
  {
    "Simplified": "睡觉",
    "Traditional": "睡覺",
    "NumeralPinYin": "shui4 jiao4",
    "Pinyin": "shuì jiào",
    "Meaning": "to sleep; go to bed"
  },
  {
    "Simplified": "六",
    "Traditional": "六",
    "NumeralPinYin": "liu4",
    "Pinyin": "liù",
    "Meaning": "six"
  },
  {
    "Simplified": "老师",
    "Traditional": "老師",
    "NumeralPinYin": "lao3shi1",
    "Pinyin": "lǎoshī",
    "Meaning": "teacher"
  },
  {
    "Simplified": "星期",
    "Traditional": "星期",
    "NumeralPinYin": "xing1qi1",
    "Pinyin": "xīngqī",
    "Meaning": "week"
  },
  {
    "Simplified": "十",
    "Traditional": "十",
    "NumeralPinYin": "shi2",
    "Pinyin": "shí",
    "Meaning": "ten"
  },
  {
    "Simplified": "猫",
    "Traditional": "貓",
    "NumeralPinYin": "mao1",
    "Pinyin": "māo",
    "Meaning": "cat"
  },
  {
    "Simplified": "电脑",
    "Traditional": "電腦",
    "NumeralPinYin": "dian4nao3",
    "Pinyin": "diànnǎo",
    "Meaning": "computer"
  },
  {
    "Simplified": "热",
    "Traditional": "熱",
    "NumeralPinYin": "re4",
    "Pinyin": "rè",
    "Meaning": "heat; hot"
  },
  {
    "Simplified": "学生",
    "Traditional": "學生",
    "NumeralPinYin": "xue2sheng5",
    "Pinyin": "xuésheng",
    "Meaning": "student"
  },
  {
    "Simplified": "下午",
    "Traditional": "下午",
    "NumeralPinYin": "xia4wu3",
    "Pinyin": "xiàwǔ",
    "Meaning": "afternoon"
  },
  {
    "Simplified": "学习",
    "Traditional": "學習",
    "NumeralPinYin": "xue2xi2",
    "Pinyin": "xuéxí",
    "Meaning": "learn; to study"
  },
  {
    "Simplified": "冷",
    "Traditional": "冷",
    "NumeralPinYin": "leng3",
    "Pinyin": "lěng",
    "Meaning": "cold"
  },
  {
    "Simplified": "不客气",
    "Traditional": "不客氣",
    "NumeralPinYin": "bu2 ke4qi5",
    "Pinyin": "bú kèqi",
    "Meaning": "you're welcome; don't be polite"
  },
  {
    "Simplified": "前面",
    "Traditional": "前面",
    "NumeralPinYin": "qian2mian4",
    "Pinyin": "qiánmiàn",
    "Meaning": "in front"
  },
  {
    "Simplified": "八",
    "Traditional": "八",
    "NumeralPinYin": "ba1",
    "Pinyin": "bā",
    "Meaning": "eight"
  },
  {
    "Simplified": "中国",
    "Traditional": "中國",
    "NumeralPinYin": "Zhong1guo2",
    "Pinyin": "Zhōngguó",
    "Meaning": "China"
  },
  {
    "Simplified": "七",
    "Traditional": "七",
    "NumeralPinYin": "qi1",
    "Pinyin": "qī",
    "Meaning": "seven"
  },
  {
    "Simplified": "菜",
    "Traditional": "菜",
    "NumeralPinYin": "cai4",
    "Pinyin": "cài",
    "Meaning": "dish (type of food); vegetables"
  },
  {
    "Simplified": "桌子",
    "Traditional": "桌子",
    "NumeralPinYin": "zhuo1zi5",
    "Pinyin": "zhuōzi",
    "Meaning": "table; desk"
  },
  {
    "Simplified": "出租车",
    "Traditional": "出租車",
    "NumeralPinYin": "chu1zu1che1",
    "Pinyin": "chūzūchē",
    "Meaning": "taxi; cab"
  },
  {
    "Simplified": "天气",
    "Traditional": "天氣",
    "NumeralPinYin": "tian1qi4",
    "Pinyin": "tiānqì",
    "Meaning": "weather"
  },
  {
    "Simplified": "茶",
    "Traditional": "茶",
    "NumeralPinYin": "cha2",
    "Pinyin": "chá",
    "Meaning": "tea"
  },
  {
    "Simplified": "九",
    "Traditional": "九",
    "NumeralPinYin": "jiu3",
    "Pinyin": "jiǔ",
    "Meaning": "nine"
  },
  {
    "Simplified": "商店",
    "Traditional": "商店",
    "NumeralPinYin": "shang1dian4",
    "Pinyin": "shāngdiàn",
    "Meaning": "shop; store"
  },
  {
    "Simplified": "椅子",
    "Traditional": "椅子",
    "NumeralPinYin": "yi3zi5",
    "Pinyin": "yǐzi",
    "Meaning": "chair"
  },
  {
    "Simplified": "同学",
    "Traditional": "同學",
    "NumeralPinYin": "tong2xue2",
    "Pinyin": "tóngxué",
    "Meaning": "fellow student; schoolmate"
  },
  {
    "Simplified": "一点儿",
    "Traditional": "一點兒",
    "NumeralPinYin": "yi4dian3r5",
    "Pinyin": "yìdiǎnr",
    "Meaning": "a bit; a few"
  },
  {
    "Simplified": "苹果",
    "Traditional": "蘋果",
    "NumeralPinYin": "ping2guo3",
    "Pinyin": "píngguǒ",
    "Meaning": "apple"
  },
  {
    "Simplified": "饭店",
    "Traditional": "飯店",
    "NumeralPinYin": "fan4dian4",
    "Pinyin": "fàndiàn",
    "Meaning": "restaurant; hotel"
  },
  {
    "Simplified": "中午",
    "Traditional": "中午",
    "NumeralPinYin": "zhong1wu3",
    "Pinyin": "zhōngwǔ",
    "Meaning": "noon; midday"
  },
  {
    "Simplified": "上午",
    "Traditional": "上午",
    "NumeralPinYin": "shang4wu3",
    "Pinyin": "shàngwǔ",
    "Meaning": "late morning (before noon)"
  },
  {
    "Simplified": "水果",
    "Traditional": "水果",
    "NumeralPinYin": "shui3guo3",
    "Pinyin": "shuǐguǒ",
    "Meaning": "fruit"
  },
  {
    "Simplified": "杯子",
    "Traditional": "杯子",
    "NumeralPinYin": "bei1zi5",
    "Pinyin": "bēizi",
    "Meaning": "cup; glass"
  },
  {
    "Simplified": "下雨",
    "Traditional": "下雨",
    "NumeralPinYin": "xia4yu3",
    "Pinyin": "xiàyǔ",
    "Meaning": "to rain"
  },
  {
    "Simplified": "米饭",
    "Traditional": "米飯",
    "NumeralPinYin": "mi3fan4",
    "Pinyin": "mǐfàn",
    "Meaning": "(cooked) rice"
  },
  {
    "Simplified": "北京",
    "Traditional": "北京",
    "NumeralPinYin": "Bei3jing1",
    "Pinyin": "Běijīng",
    "Meaning": "Beijing"
  },
  {
    "Simplified": "汉语",
    "Traditional": "漢語",
    "NumeralPinYin": "Han4yu3",
    "Pinyin": "Hànyǔ",
    "Meaning": "Chinese language"
  }
]

for (var i = wordlist.length - 1; i >= 0; i--) {
    findAndReplaceDOMText(document, {
        preset: 'prose',
        find: wordlist[i].Meaning,
        replace: wordlist[i].Simplified
    })
};