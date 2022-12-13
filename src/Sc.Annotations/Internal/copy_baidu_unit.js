$('.c-dropdown2-menubox').each(function (i, v) {
    if ($($(this).children('li').get(0)).text() !== "全部") {
        var systemType = 0;
        $(this).children('li').each(function () {
            if ($(this).attr('class') == 'c-dropdown2-group') {
                switch ($(this).text()) {
                    case "公制": systemType = 0; break;
                    case "英制": systemType = 1; break;
                    case "市制": systemType = 2; break;
                    default: systemType = 3;
                }
            } else {
                if ($(this).text() !== "请选择") {
                    var name = $(this).data('value');
                    var code = $(this).text().substring((parseInt($(this).text().indexOf('(')) + 1), $(this).text().indexOf(')'))
                    data.push({
                        "name": name,
                        "code": code,
                        "unitType": i / 2 + 1,
                        "systemType": systemType,
                        "displayOrder": 10,
                    });
                }
            }
        })
    }
})

var data = [
    {
        "code": "AED",
        "name": "阿联酋迪拉姆",
        "normalizedCode": "AED, U.A.E. Dirham"
    },
    {
        "code": "AFN",
        "name": "阿富汗尼",
        "normalizedCode": "AFN, Afghani"
    },
    {
        "code": "ALL",
        "name": "阿尔巴尼亚列克",
        "normalizedCode": "ALL, Albanian Lek"
    },
    {
        "code": "AMD",
        "name": "亚美尼亚德拉姆",
        "normalizedCode": "AMD, Armenian Dram"
    },
    {
        "code": "ANG",
        "name": "荷兰盾",
        "normalizedCode": "ANG, Netherlands Antillian Guilder"
    },
    {
        "code": "AOA",
        "name": "安哥拉宽扎",
        "normalizedCode": "AOA, Kwanza"
    },
    {
        "code": "ARS",
        "name": "阿根廷披索",
        "normalizedCode": "ARS, Argentine Peso"
    },
    {
        "code": "AUD",
        "name": "澳大利亚元",
        "normalizedCode": "AUD, Australian Dollar"
    },
    {
        "code": "AWG",
        "name": "阿鲁巴盾",
        "normalizedCode": "AWG, Aruban Guilder"
    },
    {
        "code": "AZN",
        "name": "阿塞拜疆新马纳特",
        "normalizedCode": "AZN, Azerbaijanian Manat"
    },
    {
        "code": "BAM",
        "name": "波斯尼亚和黑塞哥维那可",
        "normalizedCode": "BAM, Convertible Mark"
    },
    {
        "code": "BBD",
        "name": "巴巴多斯元",
        "normalizedCode": "BBD, Barbados Dollar"
    },
    {
        "code": "BDT",
        "name": "孟加拉国塔卡",
        "normalizedCode": "BDT, Taka"
    },
    {
        "code": "BGN",
        "name": "保加利亚列瓦",
        "normalizedCode": "BGN, Bulgarian Lev"
    },
    {
        "code": "BHD",
        "name": "巴林第纳尔",
        "normalizedCode": "BHD, Bahraini Dinar"
    },
    {
        "code": "BIF",
        "name": "布隆迪法郎",
        "normalizedCode": "BIF, Burundi Franc"
    },
    {
        "code": "BMD",
        "name": "百慕大元",
        "normalizedCode": "BMD, Bermudian Dollar"
    },
    {
        "code": "BND",
        "name": "文莱元",
        "normalizedCode": "BND, Brunei Dollar"
    },
    {
        "code": "BOB",
        "name": "玻利维亚诺",
        "normalizedCode": "BOB, Boliviano"
    },
    {
        "code": "BRL",
        "name": "巴西雷亚尔",
        "normalizedCode": "BRL, Brazilian Real"
    },
    {
        "code": "BSD",
        "name": "巴哈马元",
        "normalizedCode": "BSD, Bahamian Dollar"
    },
    {
        "code": "BTN",
        "name": "不丹努扎姆",
        "normalizedCode": "BTN, Ngultrum"
    },
    {
        "code": "BWP",
        "name": "博茨瓦纳普拉",
        "normalizedCode": "BWP, Pula"
    },
    {
        "code": "BYN",
        "name": "白俄罗斯卢布",
        "normalizedCode": "BYN, Belarusian Ruble"
    },
    {
        "code": "BYR",
        "name": "白俄罗斯卢布",
        "normalizedCode": "BYR, Belarussian Ruble"
    },
    {
        "code": "BZD",
        "name": "伯利兹元",
        "normalizedCode": "BZD, Belize Dollar"
    },
    {
        "code": "CAD",
        "name": "加拿大元",
        "normalizedCode": "CAD, Canadian Dollar"
    },
    {
        "code": "CDF",
        "name": "刚果法郎",
        "normalizedCode": "CDF, Franc Congolais"
    },
    {
        "code": "CHF",
        "name": "瑞士法郎",
        "normalizedCode": "CHF, Swiss Franc"
    },
    {
        "code": "CLF",
        "name": "智利斯开法",
        "normalizedCode": "CLF, Chilean Peso"
    },
    {
        "code": "CLP",
        "name": "智利比索",
        "normalizedCode": "CLP, Chilean Peso"
    },
    {
        "code": "CNH",
        "name": "离岸人民币",
        "normalizedCode": "CNH, Offshore RMB"
    },
    {
        "code": "CNY",
        "name": "人民币",
        "normalizedCode": "CNY, Yuan Renminbi",
        "displayOrder": 10,
        "isActive": true
    },
    {
        "code": "COP",
        "name": "哥伦比亚比索",
        "normalizedCode": "COP, Colombian Peso"
    },
    {
        "code": "CRC",
        "name": "哥斯达黎加科朗",
        "normalizedCode": "CRC, Costa Rican Colon"
    },
    {
        "code": "CUC",
        "name": "古巴可兑换比索",
        "normalizedCode": "CUC, Cuban Conv Peso"
    },
    {
        "code": "CUP",
        "name": "古巴比索",
        "normalizedCode": "CUP, Cuban Peso"
    },
    {
        "code": "CVE",
        "name": "佛得角埃斯库多",
        "normalizedCode": "CVE, Cape Verdi Escudo"
    },
    {
        "code": "CZK",
        "name": "捷克克朗",
        "normalizedCode": "CZK, Czech Koruna"
    },
    {
        "code": "DJF",
        "name": "吉布提法郎",
        "normalizedCode": "DJF, Djibouti Franc"
    },
    {
        "code": "DKK",
        "name": "丹麦克朗",
        "normalizedCode": "DKK, Danish Krone"
    },
    {
        "code": "DOP",
        "name": "多米尼加比索",
        "normalizedCode": "DOP, Dominican Peso"
    },
    {
        "code": "DZD",
        "name": "阿尔及利亚第纳尔",
        "normalizedCode": "DZD, Algerian Dinar"
    },
    {
        "code": "EGP",
        "name": "埃及镑",
        "normalizedCode": "EGP, Egyptian Pound"
    },
    {
        "code": "ERN",
        "name": "厄立特里亚",
        "normalizedCode": "ERN, Nafka"
    },
    {
        "code": "ETB",
        "name": "埃塞俄比亚比尔",
        "normalizedCode": "ETB, Ethiopian Birr"
    },
    {
        "code": "EUR",
        "name": "欧元",
        "normalizedCode": "EUR, Euro"
    },
    {
        "code": "FJD",
        "name": "斐济元",
        "normalizedCode": "FJD, Fiji Dollar"
    },
    {
        "code": "FKP",
        "name": "福克兰群岛镑",
        "normalizedCode": "FKP, Falkland Islands Pound"
    },
    {
        "code": "GBP",
        "name": "英镑",
        "normalizedCode": "GBP, Pound Sterling"
    },
    {
        "code": "GEL",
        "name": "格鲁吉亚拉里",
        "normalizedCode": "GEL, Lari"
    },
    {
        "code": "GHS",
        "name": "加纳塞地",
        "normalizedCode": "GHS, Cedi"
    },
    {
        "code": "GIP",
        "name": "直布罗陀镑",
        "normalizedCode": "GIP, Gibraltar Pound"
    },
    {
        "code": "GMD",
        "name": "冈比亚达拉西",
        "normalizedCode": "GMD, Dalasi"
    },
    {
        "code": "GNF",
        "name": "几内亚法郎",
        "normalizedCode": "GNF, Guinea Franc"
    },
    {
        "code": "GTQ",
        "name": "危地马拉格查尔",
        "normalizedCode": "GTQ, Guatemala Quetzal"
    },
    {
        "code": "GYD",
        "name": "圭亚那元",
        "normalizedCode": "GYD, Guyanese Dollar"
    },
    {
        "code": "HKD",
        "name": "港币",
        "normalizedCode": "HKD, Hong Kong Dollar"
    },
    {
        "code": "HNL",
        "name": "洪都拉斯伦皮拉",
        "normalizedCode": "HNL, Honduras Lempira"
    },
    {
        "code": "HRK",
        "name": "克罗地亚库纳",
        "normalizedCode": "HRK, Croatia Kuna"
    },
    {
        "code": "HTG",
        "name": "海地古德",
        "normalizedCode": "HTG, Haitian Gourde"
    },
    {
        "code": "HUF",
        "name": "匈牙利福林",
        "normalizedCode": "HUF, Forint"
    },
    {
        "code": "IDR",
        "name": "印度尼西亚盾",
        "normalizedCode": "IDR, Rupiah"
    },
    {
        "code": "ILS",
        "name": "以色列谢克尔",
        "normalizedCode": "ILS, New Israeli Sheqel"
    },
    {
        "code": "INR",
        "name": "印度卢比",
        "normalizedCode": "INR, Indian Rupee"
    },
    {
        "code": "IQD",
        "name": "伊拉克第纳尔",
        "normalizedCode": "IQD, Iraqi Dinar"
    },
    {
        "code": "IRR",
        "name": "伊朗里亚尔",
        "normalizedCode": "IRR, Iranian Rial"
    },
    {
        "code": "ISK",
        "name": "冰岛克朗",
        "normalizedCode": "ISK, Iceland Krona"
    },
    {
        "code": "JMD",
        "name": "牙买加元",
        "normalizedCode": "JMD, Jamaican Dollar"
    },
    {
        "code": "JOD",
        "name": "约旦第纳尔",
        "normalizedCode": "JOD, Jordanian Dinar"
    },
    {
        "code": "JPY",
        "name": "日元",
        "normalizedCode": "JPY, Yen"
    },
    {
        "code": "KES",
        "name": "肯尼亚先令",
        "normalizedCode": "KES, Kenyan Shilling"
    },
    {
        "code": "KGS",
        "name": "吉尔吉斯索姆",
        "normalizedCode": "KGS, Som"
    },
    {
        "code": "KHR",
        "name": "柬埔寨瑞尔",
        "normalizedCode": "KHR, Cambodia Riel"
    },
    {
        "code": "KMF",
        "name": "科摩罗法郎",
        "normalizedCode": "KMF, Comoro Franc"
    },
    {
        "code": "KPW",
        "name": "朝鲜元",
        "normalizedCode": "KPW, Korean dollar"
    },
    {
        "code": "KRW",
        "name": "韩国元",
        "normalizedCode": "KRW, Won"
    },
    {
        "code": "KWD",
        "name": "科威特第纳尔",
        "normalizedCode": "KWD, Kuwaiti Dinar"
    },
    {
        "code": "KYD",
        "name": "开曼群岛元",
        "normalizedCode": "KYD, Cayman Islands Dollar"
    },
    {
        "code": "KZT",
        "name": "哈萨克斯坦坚戈",
        "normalizedCode": "KZT, Tenge"
    },
    {
        "code": "LAK",
        "name": "老挝基普",
        "normalizedCode": "LAK, Kip"
    },
    {
        "code": "LBP",
        "name": "黎巴嫩镑",
        "normalizedCode": "LBP, Lebanese Pound"
    },
    {
        "code": "LKR",
        "name": "斯里兰卡卢比",
        "normalizedCode": "LKR, Sri Lanka Rupee"
    },
    {
        "code": "LRD",
        "name": "利比里亚元",
        "normalizedCode": "LRD, Liberian Dollar"
    },
    {
        "code": "LSL",
        "name": "莱索托洛提",
        "normalizedCode": "LSL, Loti"
    },
    {
        "code": "LTL",
        "name": "立陶宛立特",
        "normalizedCode": "LTL, Lithunianian Litas"
    },
    {
        "code": "LVL",
        "name": "拉脱维亚拉特",
        "normalizedCode": "LVL, Latvia Platt"
    },
    {
        "code": "LYD",
        "name": "利比亚第纳尔",
        "normalizedCode": "LYD, Libyan Dinar"
    },
    {
        "code": "MAD",
        "name": "摩洛哥迪拉姆",
        "normalizedCode": "MAD, Moroccan Dirham"
    },
    {
        "code": "MDL",
        "name": "摩尔多瓦列伊",
        "normalizedCode": "MDL, Moldovia Leu"
    },
    {
        "code": "MGA",
        "name": "马达加斯加阿里亚里",
        "normalizedCode": "MGA, Malagasy Ariary"
    },
    {
        "code": "MKD",
        "name": "马其顿第纳尔",
        "normalizedCode": "MKD, Denar"
    },
    {
        "code": "MMK",
        "name": "缅元",
        "normalizedCode": "MMK, Myanmar Kyat"
    },
    {
        "code": "MNT",
        "name": "蒙古图格里克",
        "normalizedCode": "MNT, Tugrik"
    },
    {
        "code": "MOP",
        "name": "澳门币",
        "normalizedCode": "MOP, Pataca"
    },
    {
        "code": "MRO",
        "name": "毛里塔尼亚乌吉亚",
        "normalizedCode": "MRO, Ouguiya"
    },
    {
        "code": "MRU",
        "name": "MRU",
        "normalizedCode": "MRU, Ouguiya(new)"
    },
    {
        "code": "MUR",
        "name": "毛里求斯卢比",
        "normalizedCode": "MUR, Mauritius Rupee"
    },
    {
        "code": "MVR",
        "name": "马尔代夫拉菲亚",
        "normalizedCode": "MVR, Rufiyaa"
    },
    {
        "code": "MWK",
        "name": "马拉维克瓦查",
        "normalizedCode": "MWK, Kwacha"
    },
    {
        "code": "MXN",
        "name": "墨西哥比索",
        "normalizedCode": "MXN, Mexican Peso"
    },
    {
        "code": "MYR",
        "name": "马来西亚林吉特",
        "normalizedCode": "MYR, Malaysian Ringgit"
    },
    {
        "code": "MZN",
        "name": "莫桑比克梅蒂卡尔",
        "normalizedCode": "MZN, Metical"
    },
    {
        "code": "NAD",
        "name": "纳米比亚元",
        "normalizedCode": "NAD, Dollar"
    },
    {
        "code": "NGN",
        "name": "尼日利亚第纳尔",
        "normalizedCode": "NGN, Naira"
    },
    {
        "code": "NIO",
        "name": "尼加拉瓜科多巴",
        "normalizedCode": "NIO, Nicaragua Cordoba Oro"
    },
    {
        "code": "NOK",
        "name": "挪威克朗",
        "normalizedCode": "NOK, Norwegian Krone"
    },
    {
        "code": "NPR",
        "name": "尼泊尔卢比",
        "normalizedCode": "NPR, Nepalese Rupee"
    },
    {
        "code": "NZD",
        "name": "新西兰元",
        "normalizedCode": "NZD, New Zealand Dollar"
    },
    {
        "code": "OMR",
        "name": "阿曼里亚尔",
        "normalizedCode": "OMR, Rial Omani"
    },
    {
        "code": "PAB",
        "name": "巴拿马巴波亚",
        "normalizedCode": "PAB, Panamanian Balboa"
    },
    {
        "code": "PEN",
        "name": "秘鲁新索尔",
        "normalizedCode": "PEN, Nuevo Sol"
    },
    {
        "code": "PGK",
        "name": "新几内亚基那基那",
        "normalizedCode": "PGK, Kina"
    },
    {
        "code": "PHP",
        "name": "菲律宾比索",
        "normalizedCode": "PHP, Philippine Peso"
    },
    {
        "code": "PKR",
        "name": "巴基斯坦卢比",
        "normalizedCode": "PKR, Pakistan Rupee"
    },
    {
        "code": "PLN",
        "name": "波兰兹罗提",
        "normalizedCode": "PLN, Zloty"
    },
    {
        "code": "PYG",
        "name": "巴拉圭瓜拉尼",
        "normalizedCode": "PYG, Paraguay Guarani"
    },
    {
        "code": "QAR",
        "name": "卡塔尔里亚尔",
        "normalizedCode": "QAR, Qatari Rial"
    },
    {
        "code": "RON",
        "name": "罗马尼亚列伊",
        "normalizedCode": "RON, LEU"
    },
    {
        "code": "RSD",
        "name": "塞尔维亚第纳尔",
        "normalizedCode": "RSD, Serbian Dinar"
    },
    {
        "code": "RUB",
        "name": "俄罗斯卢布",
        "normalizedCode": "RUB, Russian Ruble"
    },
    {
        "code": "RWF",
        "name": "卢旺达法郎",
        "normalizedCode": "RWF, Rwanda Franc"
    },
    {
        "code": "SAR",
        "name": "沙特阿拉伯里亚尔",
        "normalizedCode": "SAR, Saudi Riyal"
    },
    {
        "code": "SBD",
        "name": "所罗门群岛元",
        "normalizedCode": "SBD, Solomon Islands Dollar"
    },
    {
        "code": "SCR",
        "name": "塞舌尔卢比",
        "normalizedCode": "SCR, Seychelles Rupee"
    },
    {
        "code": "SDG",
        "name": "苏丹镑",
        "normalizedCode": "SDG, Sudanese Pound"
    },
    {
        "code": "SEK",
        "name": "瑞典克朗",
        "normalizedCode": "SEK, Swedish Krona"
    },
    {
        "code": "SGD",
        "name": "新加坡元",
        "normalizedCode": "SGD, Singapore Dollar"
    },
    {
        "code": "SHP",
        "name": "圣赫勒拿镑",
        "normalizedCode": "SHP, St. Helena Pound"
    },
    {
        "code": "SLL",
        "name": "塞拉利昂利昂",
        "normalizedCode": "SLL, Leone"
    },
    {
        "code": "SOS",
        "name": "索马里先令",
        "normalizedCode": "SOS, Somalia Shilling"
    },
    {
        "code": "SRD",
        "name": "苏里南元",
        "normalizedCode": "SRD, Suriname Dollar"
    },
    {
        "code": "STD",
        "name": "圣多美多布拉",
        "normalizedCode": "STD, Dobra"
    },
    {
        "code": "SVC",
        "name": "萨尔瓦多科朗",
        "normalizedCode": "SVC, El Salvador Colón"
    },
    {
        "code": "SYP",
        "name": "叙利亚镑",
        "normalizedCode": "SYP, Syrian Pound"
    },
    {
        "code": "SZL",
        "name": "斯威士兰里兰吉尼",
        "normalizedCode": "SZL, Lilangeni"
    },
    {
        "code": "THB",
        "name": "泰铢",
        "normalizedCode": "THB, Baht"
    },
    {
        "code": "TJS",
        "name": "塔吉克斯坦索莫尼",
        "normalizedCode": "TJS, Somoni"
    },
    {
        "code": "TMT",
        "name": "土库曼斯坦马纳特",
        "normalizedCode": "TMT, New Manat"
    },
    {
        "code": "TND",
        "name": "突尼斯第纳尔",
        "normalizedCode": "TND, Tunisian Dinar"
    },
    {
        "code": "TOP",
        "name": "TOP",
        "normalizedCode": "TOP, Pa'anga"
    },
    {
        "code": "TRY",
        "name": "土耳其里拉",
        "normalizedCode": "TRY, Turkish Lira"
    },
    {
        "code": "TTD",
        "name": "特立尼达和多巴哥元",
        "normalizedCode": "TTD, Trinidad & Tobago Dollar"
    },
    {
        "code": "TWD",
        "name": "台币",
        "normalizedCode": "TWD, New Taiwan Dollar"
    },
    {
        "code": "TZS",
        "name": "坦桑尼亚先令",
        "normalizedCode": "TZS, Tanzanian Shilling"
    },
    {
        "code": "UAH",
        "name": "乌克兰格里夫纳",
        "normalizedCode": "UAH, Ukrainian Hryvnia"
    },
    {
        "code": "UGX",
        "name": "乌干达先令",
        "normalizedCode": "UGX, Uganda Shilling"
    },
    {
        "code": "USD",
        "name": "美元",
        "normalizedCode": "USD, U.S.Dollar"
    },
    {
        "code": "UYU",
        "name": "乌拉圭比索",
        "normalizedCode": "UYU, Peso Uruguayo"
    },
    {
        "code": "UZS",
        "name": "乌兹别克斯坦索姆",
        "normalizedCode": "UZS, Uzbekistan Sum"
    },
    {
        "code": "VEF",
        "name": "委内瑞拉玻利瓦尔",
        "normalizedCode": "VEF, Bolivar Fuerte"
    },
    {
        "code": "VES",
        "name": "委内瑞拉玻利瓦尔",
        "normalizedCode": "VES, Bolívar Soberano"
    },
    {
        "code": "VND",
        "name": "越南盾",
        "normalizedCode": "VND, Dong"
    },
    {
        "code": "VUV",
        "name": "瓦努阿图瓦图",
        "normalizedCode": "VUV, Vatu"
    },
    {
        "code": "WST",
        "name": "萨摩亚塔拉",
        "normalizedCode": "WST, Tala"
    },
    {
        "code": "XAF",
        "name": "中非法郎",
        "normalizedCode": "XAF, CFA Franc BEAC"
    },
    {
        "code": "XCD",
        "name": "东加勒比元",
        "normalizedCode": "XCD, East Carribean Dollar"
    },
    {
        "code": "XDR",
        "name": "特别提款权（国际货币基金）",
        "normalizedCode": "XDR, IMF"
    },
    {
        "code": "XOF",
        "name": "西非法郎",
        "normalizedCode": "XOF, CFA Franc BCEAO"
    },
    {
        "code": "XPF",
        "name": "太平洋法郎",
        "normalizedCode": "XPF, CFP Franc"
    },
    {
        "code": "YER",
        "name": "也门里亚尔",
        "normalizedCode": "YER, Yemeni Rial"
    },
    {
        "code": "ZAR",
        "name": "南非兰特",
        "normalizedCode": "ZAR, Rand"
    },
    {
        "code": "ZMW",
        "name": "赞比亚克瓦查",
        "normalizedCode": "ZMW, New Zambian Kwacha"
    },
    {
        "code": "ZWL",
        "name": "津巴布韦元",
        "normalizedCode": "ZWL, Zimbabwe dollar"
    }
];