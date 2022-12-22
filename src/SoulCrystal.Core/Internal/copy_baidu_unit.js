$('.c-dropdown2-menubox').each(function (i, v) {
    if ($($(this).children('li').get(0)).text() !== "ȫ��") {
        var systemType = 0;
        $(this).children('li').each(function () {
            if ($(this).attr('class') == 'c-dropdown2-group') {
                switch ($(this).text()) {
                    case "����": systemType = 0; break;
                    case "Ӣ��": systemType = 1; break;
                    case "����": systemType = 2; break;
                    default: systemType = 3;
                }
            } else {
                if ($(this).text() !== "��ѡ��") {
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
        "name": "����������ķ",
        "normalizedCode": "AED, U.A.E. Dirham"
    },
    {
        "code": "AFN",
        "name": "��������",
        "normalizedCode": "AFN, Afghani"
    },
    {
        "code": "ALL",
        "name": "�����������п�",
        "normalizedCode": "ALL, Albanian Lek"
    },
    {
        "code": "AMD",
        "name": "�������ǵ���ķ",
        "normalizedCode": "AMD, Armenian Dram"
    },
    {
        "code": "ANG",
        "name": "������",
        "normalizedCode": "ANG, Netherlands Antillian Guilder"
    },
    {
        "code": "AOA",
        "name": "����������",
        "normalizedCode": "AOA, Kwanza"
    },
    {
        "code": "ARS",
        "name": "����͢����",
        "normalizedCode": "ARS, Argentine Peso"
    },
    {
        "code": "AUD",
        "name": "�Ĵ�����Ԫ",
        "normalizedCode": "AUD, Australian Dollar"
    },
    {
        "code": "AWG",
        "name": "��³�Ͷ�",
        "normalizedCode": "AWG, Aruban Guilder"
    },
    {
        "code": "AZN",
        "name": "�����ݽ���������",
        "normalizedCode": "AZN, Azerbaijanian Manat"
    },
    {
        "code": "BAM",
        "name": "��˹���Ǻͺ�����ά�ǿ�",
        "normalizedCode": "BAM, Convertible Mark"
    },
    {
        "code": "BBD",
        "name": "�ͰͶ�˹Ԫ",
        "normalizedCode": "BBD, Barbados Dollar"
    },
    {
        "code": "BDT",
        "name": "�ϼ���������",
        "normalizedCode": "BDT, Taka"
    },
    {
        "code": "BGN",
        "name": "������������",
        "normalizedCode": "BGN, Bulgarian Lev"
    },
    {
        "code": "BHD",
        "name": "���ֵ��ɶ�",
        "normalizedCode": "BHD, Bahraini Dinar"
    },
    {
        "code": "BIF",
        "name": "��¡�Ϸ���",
        "normalizedCode": "BIF, Burundi Franc"
    },
    {
        "code": "BMD",
        "name": "��Ľ��Ԫ",
        "normalizedCode": "BMD, Bermudian Dollar"
    },
    {
        "code": "BND",
        "name": "����Ԫ",
        "normalizedCode": "BND, Brunei Dollar"
    },
    {
        "code": "BOB",
        "name": "����ά��ŵ",
        "normalizedCode": "BOB, Boliviano"
    },
    {
        "code": "BRL",
        "name": "�������Ƕ�",
        "normalizedCode": "BRL, Brazilian Real"
    },
    {
        "code": "BSD",
        "name": "�͹���Ԫ",
        "normalizedCode": "BSD, Bahamian Dollar"
    },
    {
        "code": "BTN",
        "name": "����Ŭ��ķ",
        "normalizedCode": "BTN, Ngultrum"
    },
    {
        "code": "BWP",
        "name": "������������",
        "normalizedCode": "BWP, Pula"
    },
    {
        "code": "BYN",
        "name": "�׶���˹¬��",
        "normalizedCode": "BYN, Belarusian Ruble"
    },
    {
        "code": "BYR",
        "name": "�׶���˹¬��",
        "normalizedCode": "BYR, Belarussian Ruble"
    },
    {
        "code": "BZD",
        "name": "������Ԫ",
        "normalizedCode": "BZD, Belize Dollar"
    },
    {
        "code": "CAD",
        "name": "���ô�Ԫ",
        "normalizedCode": "CAD, Canadian Dollar"
    },
    {
        "code": "CDF",
        "name": "�չ�����",
        "normalizedCode": "CDF, Franc Congolais"
    },
    {
        "code": "CHF",
        "name": "��ʿ����",
        "normalizedCode": "CHF, Swiss Franc"
    },
    {
        "code": "CLF",
        "name": "����˹����",
        "normalizedCode": "CLF, Chilean Peso"
    },
    {
        "code": "CLP",
        "name": "��������",
        "normalizedCode": "CLP, Chilean Peso"
    },
    {
        "code": "CNH",
        "name": "�밶�����",
        "normalizedCode": "CNH, Offshore RMB"
    },
    {
        "code": "CNY",
        "name": "�����",
        "normalizedCode": "CNY, Yuan Renminbi",
        "displayOrder": 10,
        "isActive": true
    },
    {
        "code": "COP",
        "name": "���ױ��Ǳ���",
        "normalizedCode": "COP, Colombian Peso"
    },
    {
        "code": "CRC",
        "name": "��˹����ӿ���",
        "normalizedCode": "CRC, Costa Rican Colon"
    },
    {
        "code": "CUC",
        "name": "�ŰͿɶһ�����",
        "normalizedCode": "CUC, Cuban Conv Peso"
    },
    {
        "code": "CUP",
        "name": "�Űͱ���",
        "normalizedCode": "CUP, Cuban Peso"
    },
    {
        "code": "CVE",
        "name": "��ýǰ�˹���",
        "normalizedCode": "CVE, Cape Verdi Escudo"
    },
    {
        "code": "CZK",
        "name": "�ݿ˿���",
        "normalizedCode": "CZK, Czech Koruna"
    },
    {
        "code": "DJF",
        "name": "�����ᷨ��",
        "normalizedCode": "DJF, Djibouti Franc"
    },
    {
        "code": "DKK",
        "name": "�������",
        "normalizedCode": "DKK, Danish Krone"
    },
    {
        "code": "DOP",
        "name": "������ӱ���",
        "normalizedCode": "DOP, Dominican Peso"
    },
    {
        "code": "DZD",
        "name": "���������ǵ��ɶ�",
        "normalizedCode": "DZD, Algerian Dinar"
    },
    {
        "code": "EGP",
        "name": "������",
        "normalizedCode": "EGP, Egyptian Pound"
    },
    {
        "code": "ERN",
        "name": "����������",
        "normalizedCode": "ERN, Nafka"
    },
    {
        "code": "ETB",
        "name": "��������Ǳȶ�",
        "normalizedCode": "ETB, Ethiopian Birr"
    },
    {
        "code": "EUR",
        "name": "ŷԪ",
        "normalizedCode": "EUR, Euro"
    },
    {
        "code": "FJD",
        "name": "쳼�Ԫ",
        "normalizedCode": "FJD, Fiji Dollar"
    },
    {
        "code": "FKP",
        "name": "������Ⱥ����",
        "normalizedCode": "FKP, Falkland Islands Pound"
    },
    {
        "code": "GBP",
        "name": "Ӣ��",
        "normalizedCode": "GBP, Pound Sterling"
    },
    {
        "code": "GEL",
        "name": "��³��������",
        "normalizedCode": "GEL, Lari"
    },
    {
        "code": "GHS",
        "name": "��������",
        "normalizedCode": "GHS, Cedi"
    },
    {
        "code": "GIP",
        "name": "ֱ�����Ӱ�",
        "normalizedCode": "GIP, Gibraltar Pound"
    },
    {
        "code": "GMD",
        "name": "�Ա��Ǵ�����",
        "normalizedCode": "GMD, Dalasi"
    },
    {
        "code": "GNF",
        "name": "�����Ƿ���",
        "normalizedCode": "GNF, Guinea Franc"
    },
    {
        "code": "GTQ",
        "name": "Σ����������",
        "normalizedCode": "GTQ, Guatemala Quetzal"
    },
    {
        "code": "GYD",
        "name": "������Ԫ",
        "normalizedCode": "GYD, Guyanese Dollar"
    },
    {
        "code": "HKD",
        "name": "�۱�",
        "normalizedCode": "HKD, Hong Kong Dollar"
    },
    {
        "code": "HNL",
        "name": "�鶼��˹��Ƥ��",
        "normalizedCode": "HNL, Honduras Lempira"
    },
    {
        "code": "HRK",
        "name": "���޵��ǿ���",
        "normalizedCode": "HRK, Croatia Kuna"
    },
    {
        "code": "HTG",
        "name": "���عŵ�",
        "normalizedCode": "HTG, Haitian Gourde"
    },
    {
        "code": "HUF",
        "name": "����������",
        "normalizedCode": "HUF, Forint"
    },
    {
        "code": "IDR",
        "name": "ӡ�������Ƕ�",
        "normalizedCode": "IDR, Rupiah"
    },
    {
        "code": "ILS",
        "name": "��ɫ��л�˶�",
        "normalizedCode": "ILS, New Israeli Sheqel"
    },
    {
        "code": "INR",
        "name": "ӡ��¬��",
        "normalizedCode": "INR, Indian Rupee"
    },
    {
        "code": "IQD",
        "name": "�����˵��ɶ�",
        "normalizedCode": "IQD, Iraqi Dinar"
    },
    {
        "code": "IRR",
        "name": "�������Ƕ�",
        "normalizedCode": "IRR, Iranian Rial"
    },
    {
        "code": "ISK",
        "name": "��������",
        "normalizedCode": "ISK, Iceland Krona"
    },
    {
        "code": "JMD",
        "name": "�����Ԫ",
        "normalizedCode": "JMD, Jamaican Dollar"
    },
    {
        "code": "JOD",
        "name": "Լ�����ɶ�",
        "normalizedCode": "JOD, Jordanian Dinar"
    },
    {
        "code": "JPY",
        "name": "��Ԫ",
        "normalizedCode": "JPY, Yen"
    },
    {
        "code": "KES",
        "name": "����������",
        "normalizedCode": "KES, Kenyan Shilling"
    },
    {
        "code": "KGS",
        "name": "������˹��ķ",
        "normalizedCode": "KGS, Som"
    },
    {
        "code": "KHR",
        "name": "����կ���",
        "normalizedCode": "KHR, Cambodia Riel"
    },
    {
        "code": "KMF",
        "name": "��Ħ�޷���",
        "normalizedCode": "KMF, Comoro Franc"
    },
    {
        "code": "KPW",
        "name": "����Ԫ",
        "normalizedCode": "KPW, Korean dollar"
    },
    {
        "code": "KRW",
        "name": "����Ԫ",
        "normalizedCode": "KRW, Won"
    },
    {
        "code": "KWD",
        "name": "�����ص��ɶ�",
        "normalizedCode": "KWD, Kuwaiti Dinar"
    },
    {
        "code": "KYD",
        "name": "����Ⱥ��Ԫ",
        "normalizedCode": "KYD, Cayman Islands Dollar"
    },
    {
        "code": "KZT",
        "name": "������˹̹���",
        "normalizedCode": "KZT, Tenge"
    },
    {
        "code": "LAK",
        "name": "���λ���",
        "normalizedCode": "LAK, Kip"
    },
    {
        "code": "LBP",
        "name": "����۰�",
        "normalizedCode": "LBP, Lebanese Pound"
    },
    {
        "code": "LKR",
        "name": "˹������¬��",
        "normalizedCode": "LKR, Sri Lanka Rupee"
    },
    {
        "code": "LRD",
        "name": "��������Ԫ",
        "normalizedCode": "LRD, Liberian Dollar"
    },
    {
        "code": "LSL",
        "name": "����������",
        "normalizedCode": "LSL, Loti"
    },
    {
        "code": "LTL",
        "name": "����������",
        "normalizedCode": "LTL, Lithunianian Litas"
    },
    {
        "code": "LVL",
        "name": "����ά������",
        "normalizedCode": "LVL, Latvia Platt"
    },
    {
        "code": "LYD",
        "name": "�����ǵ��ɶ�",
        "normalizedCode": "LYD, Libyan Dinar"
    },
    {
        "code": "MAD",
        "name": "Ħ������ķ",
        "normalizedCode": "MAD, Moroccan Dirham"
    },
    {
        "code": "MDL",
        "name": "Ħ����������",
        "normalizedCode": "MDL, Moldovia Leu"
    },
    {
        "code": "MGA",
        "name": "����˹�Ӱ�������",
        "normalizedCode": "MGA, Malagasy Ariary"
    },
    {
        "code": "MKD",
        "name": "����ٵ��ɶ�",
        "normalizedCode": "MKD, Denar"
    },
    {
        "code": "MMK",
        "name": "��Ԫ",
        "normalizedCode": "MMK, Myanmar Kyat"
    },
    {
        "code": "MNT",
        "name": "�ɹ�ͼ�����",
        "normalizedCode": "MNT, Tugrik"
    },
    {
        "code": "MOP",
        "name": "���ű�",
        "normalizedCode": "MOP, Pataca"
    },
    {
        "code": "MRO",
        "name": "ë���������ڼ���",
        "normalizedCode": "MRO, Ouguiya"
    },
    {
        "code": "MRU",
        "name": "MRU",
        "normalizedCode": "MRU, Ouguiya(new)"
    },
    {
        "code": "MUR",
        "name": "ë����˹¬��",
        "normalizedCode": "MUR, Mauritius Rupee"
    },
    {
        "code": "MVR",
        "name": "�������������",
        "normalizedCode": "MVR, Rufiyaa"
    },
    {
        "code": "MWK",
        "name": "����ά���߲�",
        "normalizedCode": "MWK, Kwacha"
    },
    {
        "code": "MXN",
        "name": "ī�������",
        "normalizedCode": "MXN, Mexican Peso"
    },
    {
        "code": "MYR",
        "name": "���������ּ���",
        "normalizedCode": "MYR, Malaysian Ringgit"
    },
    {
        "code": "MZN",
        "name": "Īɣ�ȿ�÷�ٿ���",
        "normalizedCode": "MZN, Metical"
    },
    {
        "code": "NAD",
        "name": "���ױ���Ԫ",
        "normalizedCode": "NAD, Dollar"
    },
    {
        "code": "NGN",
        "name": "�������ǵ��ɶ�",
        "normalizedCode": "NGN, Naira"
    },
    {
        "code": "NIO",
        "name": "������Ͽƶ��",
        "normalizedCode": "NIO, Nicaragua Cordoba Oro"
    },
    {
        "code": "NOK",
        "name": "Ų������",
        "normalizedCode": "NOK, Norwegian Krone"
    },
    {
        "code": "NPR",
        "name": "�Ჴ��¬��",
        "normalizedCode": "NPR, Nepalese Rupee"
    },
    {
        "code": "NZD",
        "name": "������Ԫ",
        "normalizedCode": "NZD, New Zealand Dollar"
    },
    {
        "code": "OMR",
        "name": "�������Ƕ�",
        "normalizedCode": "OMR, Rial Omani"
    },
    {
        "code": "PAB",
        "name": "������Ͳ���",
        "normalizedCode": "PAB, Panamanian Balboa"
    },
    {
        "code": "PEN",
        "name": "��³������",
        "normalizedCode": "PEN, Nuevo Sol"
    },
    {
        "code": "PGK",
        "name": "�¼����ǻ��ǻ���",
        "normalizedCode": "PGK, Kina"
    },
    {
        "code": "PHP",
        "name": "���ɱ�����",
        "normalizedCode": "PHP, Philippine Peso"
    },
    {
        "code": "PKR",
        "name": "�ͻ�˹̹¬��",
        "normalizedCode": "PKR, Pakistan Rupee"
    },
    {
        "code": "PLN",
        "name": "����������",
        "normalizedCode": "PLN, Zloty"
    },
    {
        "code": "PYG",
        "name": "�����������",
        "normalizedCode": "PYG, Paraguay Guarani"
    },
    {
        "code": "QAR",
        "name": "���������Ƕ�",
        "normalizedCode": "QAR, Qatari Rial"
    },
    {
        "code": "RON",
        "name": "������������",
        "normalizedCode": "RON, LEU"
    },
    {
        "code": "RSD",
        "name": "����ά�ǵ��ɶ�",
        "normalizedCode": "RSD, Serbian Dinar"
    },
    {
        "code": "RUB",
        "name": "����˹¬��",
        "normalizedCode": "RUB, Russian Ruble"
    },
    {
        "code": "RWF",
        "name": "¬���﷨��",
        "normalizedCode": "RWF, Rwanda Franc"
    },
    {
        "code": "SAR",
        "name": "ɳ�ذ��������Ƕ�",
        "normalizedCode": "SAR, Saudi Riyal"
    },
    {
        "code": "SBD",
        "name": "������Ⱥ��Ԫ",
        "normalizedCode": "SBD, Solomon Islands Dollar"
    },
    {
        "code": "SCR",
        "name": "�����¬��",
        "normalizedCode": "SCR, Seychelles Rupee"
    },
    {
        "code": "SDG",
        "name": "�յ���",
        "normalizedCode": "SDG, Sudanese Pound"
    },
    {
        "code": "SEK",
        "name": "������",
        "normalizedCode": "SEK, Swedish Krona"
    },
    {
        "code": "SGD",
        "name": "�¼���Ԫ",
        "normalizedCode": "SGD, Singapore Dollar"
    },
    {
        "code": "SHP",
        "name": "ʥ�����ð�",
        "normalizedCode": "SHP, St. Helena Pound"
    },
    {
        "code": "SLL",
        "name": "������������",
        "normalizedCode": "SLL, Leone"
    },
    {
        "code": "SOS",
        "name": "����������",
        "normalizedCode": "SOS, Somalia Shilling"
    },
    {
        "code": "SRD",
        "name": "������Ԫ",
        "normalizedCode": "SRD, Suriname Dollar"
    },
    {
        "code": "STD",
        "name": "ʥ�����಼��",
        "normalizedCode": "STD, Dobra"
    },
    {
        "code": "SVC",
        "name": "�����߶����",
        "normalizedCode": "SVC, El Salvador Col��n"
    },
    {
        "code": "SYP",
        "name": "�����ǰ�",
        "normalizedCode": "SYP, Syrian Pound"
    },
    {
        "code": "SZL",
        "name": "˹��ʿ����������",
        "normalizedCode": "SZL, Lilangeni"
    },
    {
        "code": "THB",
        "name": "̩��",
        "normalizedCode": "THB, Baht"
    },
    {
        "code": "TJS",
        "name": "������˹̹��Ī��",
        "normalizedCode": "TJS, Somoni"
    },
    {
        "code": "TMT",
        "name": "������˹̹������",
        "normalizedCode": "TMT, New Manat"
    },
    {
        "code": "TND",
        "name": "ͻ��˹���ɶ�",
        "normalizedCode": "TND, Tunisian Dinar"
    },
    {
        "code": "TOP",
        "name": "TOP",
        "normalizedCode": "TOP, Pa'anga"
    },
    {
        "code": "TRY",
        "name": "����������",
        "normalizedCode": "TRY, Turkish Lira"
    },
    {
        "code": "TTD",
        "name": "�������Ͷ�͸�Ԫ",
        "normalizedCode": "TTD, Trinidad & Tobago Dollar"
    },
    {
        "code": "TWD",
        "name": "̨��",
        "normalizedCode": "TWD, New Taiwan Dollar"
    },
    {
        "code": "TZS",
        "name": "̹ɣ��������",
        "normalizedCode": "TZS, Tanzanian Shilling"
    },
    {
        "code": "UAH",
        "name": "�ڿ����������",
        "normalizedCode": "UAH, Ukrainian Hryvnia"
    },
    {
        "code": "UGX",
        "name": "�ڸɴ�����",
        "normalizedCode": "UGX, Uganda Shilling"
    },
    {
        "code": "USD",
        "name": "��Ԫ",
        "normalizedCode": "USD, U.S.Dollar"
    },
    {
        "code": "UYU",
        "name": "���������",
        "normalizedCode": "UYU, Peso Uruguayo"
    },
    {
        "code": "UZS",
        "name": "���ȱ��˹̹��ķ",
        "normalizedCode": "UZS, Uzbekistan Sum"
    },
    {
        "code": "VEF",
        "name": "ί�����������߶�",
        "normalizedCode": "VEF, Bolivar Fuerte"
    },
    {
        "code": "VES",
        "name": "ί�����������߶�",
        "normalizedCode": "VES, Bol��var Soberano"
    },
    {
        "code": "VND",
        "name": "Խ�϶�",
        "normalizedCode": "VND, Dong"
    },
    {
        "code": "VUV",
        "name": "��Ŭ��ͼ��ͼ",
        "normalizedCode": "VUV, Vatu"
    },
    {
        "code": "WST",
        "name": "��Ħ������",
        "normalizedCode": "WST, Tala"
    },
    {
        "code": "XAF",
        "name": "�зǷ���",
        "normalizedCode": "XAF, CFA Franc BEAC"
    },
    {
        "code": "XCD",
        "name": "�����ձ�Ԫ",
        "normalizedCode": "XCD, East Carribean Dollar"
    },
    {
        "code": "XDR",
        "name": "�ر����Ȩ�����ʻ��һ���",
        "normalizedCode": "XDR, IMF"
    },
    {
        "code": "XOF",
        "name": "���Ƿ���",
        "normalizedCode": "XOF, CFA Franc BCEAO"
    },
    {
        "code": "XPF",
        "name": "̫ƽ����",
        "normalizedCode": "XPF, CFP Franc"
    },
    {
        "code": "YER",
        "name": "Ҳ�����Ƕ�",
        "normalizedCode": "YER, Yemeni Rial"
    },
    {
        "code": "ZAR",
        "name": "�Ϸ�����",
        "normalizedCode": "ZAR, Rand"
    },
    {
        "code": "ZMW",
        "name": "�ޱ��ǿ��߲�",
        "normalizedCode": "ZMW, New Zambian Kwacha"
    },
    {
        "code": "ZWL",
        "name": "��Ͳ�ΤԪ",
        "normalizedCode": "ZWL, Zimbabwe dollar"
    }
];