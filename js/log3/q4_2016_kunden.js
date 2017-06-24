$(function() {
    Highcharts.setOptions({
        colors: ['#ff6c49', '#4cf0b3', '#67a5ec', '#ffc107', '#2721e3', '#0f0f0f', '#FF9655', '#FFF263', '#6AF9C4']
    });
    Highcharts.chart('container2016', {
        chart: {
            zoomType: 'x',
            type: 'line',
            borderWidth: 0,
            plotBorderWidth: 0,
            margin: [60, 75, 70, 55],
            spacingBottom: [1, 1, 1, 1],
            shadow: true


        },
        title: {
            text: 'Fritz Logistik - Log1 KPI'
        },
        subtitle: {
            text: 'BöHö1 OG - Q4'
        },
        xAxis: {
            categories: [
                '09.09.2016',
                '10.09.2016',
                '12.09.2016',
                '13.09.2016',
                '14.09.2016',
                '15.09.2016',
                '16.09.2016',
                '17.09.2016',
                '19.09.2016',
                '20.09.2016',
                '21.09.2016',
                '22.09.2016',
                '23.09.2016',
                '24.09.2016',
                '26.09.2016',
                '27.09.2016',
                '28.09.2016',
                '29.09.2016',
                '30.09.2016',
                '01.10.2016',
                '04.10.2016',
                '05.10.2016',
                '06.10.2016',
                '07.10.2016',
                '08.10.2016',
                '10.10.2016',
                '11.10.2016',
                '12.10.2016',
                '13.10.2016',
                '14.10.2016',
                '15.10.2016',
                '17.10.2016',
                '18.10.2016',
                '19.10.2016',
                '20.10.2016',
                '21.10.2016',
                '22.10.2016',
                '24.10.2016',
                '25.10.2016',
                '26.10.2016',
                '27.10.2016',
                '28.10.2016',
                '29.10.2016',
                '31.10.2016',
                '02.11.2016',
                '03.11.2016',
                '04.11.2016',
                '05.11.2016',
                '07.11.2016',
                '08.11.2016',
                '09.11.2016',
                '10.11.2016',
                '11.11.2016',
                '12.11.2016',
                '14.11.2016',
                '15.11.2016',
                '16.11.2016',
                '17.11.2016',
                '18.11.2016',
                '19.11.2016',
                '21.11.2016',
                '22.11.2016',
                '23.11.2016',
                '24.11.2016',
                '25.11.2016',
                '26.11.2016',
                '28.11.2016',
                '29.11.2016',
                '30.11.2016',
                '01.12.2016',
                '02.12.2016',
                '03.12.2016',
                '05.12.2016',
                '06.12.2016',
                '07.12.2016',
                '08.12.2016',
                '09.12.2016',
                '10.12.2016',
                '12.12.2016',
                '13.12.2016',
                '14.12.2016',
                '15.12.2016',
                '16.12.2016',
                '17.12.2016',
                '19.12.2016',
                '20.12.2016',
                '21.12.2016',
                '22.12.2016',
                '23.12.2016',
                '24.12.2016',
                '27.12.2016',
                '28.12.2016'


            ]
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[5]
                }
            },
            title: {
                text: 'Produktivitätzahl',
                style: {
                    color: Highcharts.getOptions().colors[5]
                }
            },
            /* type: 'logarithmic', */
            max: 70

        }, { // Secondary yAxis
            title: {
                text: 'Leistungsindikator',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            maxPadding: 0.05,

            opposite: true
        }],
        tooltip: {
            shared: false,
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                borderColor: 'black',
                borderRadius: 0.9,
                pointWidth: null,
                pointPadding: 0.07,
                /* groupPadding: 0, */
                /* shadow: false, */
                /* pointPlacement: 'between' 'on'*/


            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 30,
            verticalAlign: 'top',
            y: 2,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },

        series: [{
                name: 'KACO',
                type: 'column',
                /* maxPointWidth: 100000, */
                yAxis: 1,
                data: [
                    284,
                    0,
                    774,
                    576,
                    717,
                    321,
                    792,
                    0,
                    614,
                    919,
                    591,
                    737,
                    633,
                    0,
                    284,
                    767,
                    1023,
                    1168,
                    494,
                    0,
                    469,
                    631,
                    532,
                    199,
                    0,
                    679,
                    467,
                    1104,
                    875,
                    501,
                    0,
                    502,
                    605,
                    242,
                    1078,
                    563,
                    0,
                    766,
                    905,
                    492,
                    277,
                    915,
                    0,
                    743,
                    536,
                    557,
                    537,
                    0,
                    710,
                    531,
                    838,
                    479,
                    453,
                    0,
                    733,
                    344,
                    734,
                    873,
                    734,
                    0,
                    493,
                    891,
                    534,
                    565,
                    608,
                    0,
                    452,
                    1038,
                    504,
                    436,
                    155,
                    0,
                    17,
                    4,
                    18,
                    25,
                    303,
                    0,
                    492,
                    505,
                    1022,
                    628,
                    270,
                    0,
                    573,
                    505,
                    646,
                    155,
                    124,
                    0,
                    0,
                    0

                ]
            }, {
                name: 'KACO GSD',
                type: 'column',
                yAxis: 1,
                data: [
                    182,
                    0,
                    130,
                    154,
                    242,
                    46,
                    108,
                    0,
                    64,
                    438,
                    196,
                    90,
                    356,
                    0,
                    482,
                    260,
                    158,
                    12,
                    204,
                    0,
                    6,
                    20,
                    40,
                    162,
                    0,
                    72,
                    306,
                    198,
                    76,
                    104,
                    0,
                    56,
                    162,
                    76,
                    170,
                    12,
                    0,
                    138,
                    46,
                    96,
                    138,
                    422,
                    0,
                    32,
                    72,
                    24,
                    176,
                    0,
                    58,
                    50,
                    28,
                    156,
                    58,
                    0,
                    18,
                    110,
                    114,
                    26,
                    20,
                    0,
                    62,
                    126,
                    484,
                    30,
                    342,
                    0,
                    60,
                    104,
                    52,
                    106,
                    280,
                    0,
                    330,
                    58,
                    336,
                    0,
                    0,
                    0,
                    2,
                    46,
                    142,
                    54,
                    152,
                    0,
                    12,
                    20,
                    0,
                    0,
                    22,
                    0,
                    0,
                    0

                ]
            }, {
                name: 'Söhner',
                type: 'column',
                yAxis: 1,
                data: [
                    444,
                    0,
                    353,
                    570,
                    367,
                    583,
                    373,
                    0,
                    443,
                    599,
                    536,
                    397,
                    587,
                    0,
                    548,
                    492,
                    513,
                    583,
                    548,
                    0,
                    347,
                    713,
                    737,
                    767,
                    0,
                    682,
                    385,
                    838,
                    835,
                    533,
                    0,
                    515,
                    297,
                    524,
                    497,
                    606,
                    0,
                    428,
                    602,
                    587,
                    472,
                    403,
                    0,
                    293,
                    439,
                    555,
                    372,
                    0,
                    427,
                    646,
                    643,
                    538,
                    436,
                    0,
                    387,
                    376,
                    383,
                    532,
                    493,
                    0,
                    426,
                    515,
                    550,
                    359,
                    265,
                    0,
                    407,
                    338,
                    391,
                    243,
                    392,
                    0,
                    455,
                    444,
                    417,
                    386,
                    174,
                    0,
                    231,
                    498,
                    322,
                    328,
                    452,
                    0,
                    171,
                    354,
                    187,
                    411,
                    271,
                    0,
                    0,
                    0
                ]
            }, {
                name: 'LTI',
                type: 'column',
                yAxis: 1,
                data: [
                    920,
                    0,
                    1275,
                    580,
                    981,
                    1148,
                    856,
                    0,
                    1158,
                    1340,
                    891,
                    947,
                    947,
                    0,
                    1395,
                    1076,
                    1280,
                    1245,
                    1005,
                    0,
                    1351,
                    771,
                    1086,
                    1366,
                    0,
                    789,
                    1193,
                    357,
                    1421,
                    1172,
                    0,
                    758,
                    227,
                    853,
                    599,
                    720,
                    0,
                    626,
                    761,
                    1001,
                    764,
                    903,
                    0,
                    32,
                    1351,
                    759,
                    731,
                    0,
                    1248,
                    802,
                    1170,
                    794,
                    1833,
                    0,
                    833,
                    1223,
                    895,
                    1212,
                    1276,
                    0,
                    615,
                    1352,
                    1540,
                    777,
                    850,
                    0,
                    1132,
                    951,
                    447,
                    1478,
                    326,
                    0,
                    802,
                    1305,
                    1404,
                    1339,
                    611,
                    0,
                    698,
                    1249,
                    1380,
                    1705,
                    1437,
                    0,
                    1546,
                    255,
                    798,
                    42,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                name: 'Intersport',
                type: 'column',
                yAxis: 1,
                data: [
                    256,
                    0,
                    224,
                    67,
                    151,
                    323,
                    1071,
                    0,
                    229,
                    224,
                    279,
                    482,
                    75,
                    0,
                    378,
                    0,
                    150,
                    0,
                    0,
                    0,
                    99,
                    151,
                    0,
                    0,
                    0,
                    532,
                    413,
                    285,
                    972,
                    570,
                    0,
                    180,
                    292,
                    300,
                    155,
                    165,
                    0,
                    145,
                    683,
                    987,
                    113,
                    38,
                    0,
                    220,
                    105,
                    263,
                    319,
                    0,
                    338,
                    32,
                    0,
                    294,
                    578,
                    0,
                    535,
                    549,
                    802,
                    204,
                    464,
                    0,
                    121,
                    135,
                    143,
                    919,
                    268,
                    0,
                    134,
                    360,
                    358,
                    202,
                    445,
                    0,
                    59,
                    674,
                    105,
                    340,
                    293,
                    0,
                    225,
                    212,
                    36,
                    180,
                    364,
                    0,
                    451,
                    51,
                    127,
                    120,
                    0,
                    0,
                    135,
                    45

                ]
            },

            /* {
			tooltip: {
                valueSuffix: ''
            }

        }, 
		 */


            {
                name: 'Produktivitätzahl',
                type: 'spline',
                data: [
                    22,
                    0,
                    30,
                    26,
                    28,
                    33,
                    45,
                    0,
                    34,
                    43,
                    31,
                    32,
                    31,
                    0,
                    43,
                    37,
                    38,
                    35,
                    28,
                    0,
                    27,
                    25,
                    25,
                    27,
                    0,
                    32,
                    32,
                    36,
                    51,
                    40,
                    0,
                    26,
                    22,
                    21,
                    33,
                    28,
                    0,
                    26,
                    31,
                    38,
                    21,
                    35,
                    0,
                    29.5,
                    29.5,
                    25.4,
                    26.2,
                    0,
                    32,
                    22,
                    30,
                    28,
                    41,
                    0,
                    24,
                    25,
                    29,
                    31,
                    30,
                    0,
                    16,
                    31,
                    29,
                    29,
                    23,
                    0,
                    23,
                    33,
                    17,
                    27,
                    19,
                    0,
                    20,
                    32,
                    32,
                    27,
                    19,
                    0,
                    22,
                    32,
                    35,
                    36,
                    36,
                    0,
                    37,
                    16,
                    24,
                    10,
                    0,
                    0,
                    0,
                    0




                ]
            }


        ]
    });
});