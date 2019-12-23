var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = [
    {name: '����', value: 9},
    {name: '������˹', value: 12},
    {name: '��Զ', value: 12},
    {name: '��ɽ', value: 12},
    {name: '�������', value: 14},
    {name: '�γ�', value: 15},
    {name: '���', value: 16},
    {name: '�ൺ', value: 18},
    {name: '��ɽ', value: 18},
    {name: '���', value: 19},
    {name: 'Ȫ��', value: 21},
    {name: '����', value: 21},
    {name: '����', value: 21},
    {name: '����', value: 22},
    {name: '��ͨ', value: 23},
    {name: '����', value: 24},
    {name: '�Ƹ�', value: 24},
    {name: '÷��', value: 25},
    {name: '�ĵ�', value: 25},
    {name: '�Ϻ�', value: 25},
    {name: '��֦��', value: 25},
    {name: '����', value: 25},
    {name: '�е�', value: 25},
    {name: '����', value: 26},
    {name: '��β', value: 26},
    {name: '����', value: 26},
    {name: '����', value: 27},
    {name: '̫��', value: 27},
    {name: '����', value: 27},
    {name: '��̨', value: 28},
    {name: '����', value: 29},
    {name: '�߷���', value: 30},
    {name: '��ī', value: 30},
    {name: '��˳', value: 31},
    {name: '��Ϫ', value: 31},
    {name: '�żҿ�', value: 31},
    {name: '��Ȫ', value: 31},
    {name: '����', value: 32},
    {name: '����', value: 32},
    {name: '��ͷ', value: 32},
    {name: '��ɽ', value: 33},
    {name: '����', value: 33},
    {name: 'տ��', value: 33},
    {name: '����', value: 34},
    {name: '�ٳ�', value: 34},
    {name: '���Ƹ�', value: 35},
    {name: '��«��', value: 35},
    {name: '����', value: 36},
    {name: '��ݸ', value: 36},
    {name: '��Դ', value: 36},
    {name: '����', value: 36},
    {name: '̩��', value: 36},
    {name: '����', value: 37},
    {name: 'Ӫ��', value: 37},
    {name: '����', value: 37},
    {name: '����', value: 37},
    {name: '����', value: 37},
    {name: '�ع�', value: 38},
    {name: '������', value: 38},
    {name: '����', value: 38},
    {name: '�Ӱ�', value: 38},
    {name: '̫ԭ', value: 39},
    {name: '��Զ', value: 39},
    {name: '��ɽ', value: 39},
    {name: '����', value: 39},
    {name: '�ٹ�', value: 40},
    {name: '�̽�', value: 40},
    {name: '����', value: 41},
    {name: '����', value: 41},
    {name: '�麣', value: 42},
    {name: '��Ǩ', value: 43},
    {name: '����', value: 43},
    {name: 'ͭ��', value: 44},
    {name: 'ƽ��', value: 44},
    {name: '��ɽ', value: 44},
    {name: '����', value: 44},
    {name: '����', value: 45},
    {name: '����', value: 45},
    {name: '����', value: 46},
    {name: '����', value: 47},
    {name: '�ٷ�', value: 47},
    {name: '�⽭', value: 47},
    {name: 'ʯ��ɽ', value: 49},
    {name: '����', value: 50},
    {name: '����', value: 50},
    {name: 'ï��', value: 50},
    {name: '����', value: 51},
    {name: '����', value: 51},
    {name: '����', value: 52},
    {name: '����', value: 52},
    {name: '�żҸ�', value: 52},
    {name: '����Ͽ', value: 53},
    {name: '����', value: 54},
    {name: '�ϲ�', value: 54},
    {name: '����', value: 54},
    {name: '����', value: 54},
    {name: '�Թ�', value: 56},
    {name: '����', value: 56},
    {name: '����', value: 57},
    {name: '����', value: 57},
    {name: '����', value: 57},
    {name: '�˱�', value: 58},
    {name: '���ͺ���', value: 58},
    {name: '�ɶ�', value: 58},
    {name: '��ͬ', value: 58},
    {name: '��', value: 59},
    {name: '����', value: 59},
    {name: '�żҽ�', value: 59},
    {name: '����', value: 59},
    {name: '����', value: 60},
    {name: '����', value: 61},
    {name: '��̳', value: 62},
    {name: '��Ӫ', value: 62},
    {name: 'ĵ����', value: 63},
    {name: '����', value: 63},
    {name: '����', value: 63},
    {name: '����', value: 64},
    {name: '����', value: 64},
    {name: 'Ϋ��', value: 65},
    {name: '����', value: 66},
    {name: '̨��', value: 67},
    {name: '�Ͼ�', value: 67},
    {name: '����', value: 70},
    {name: '����', value: 71},
    {name: '����', value: 71},
    {name: '��Ϫ', value: 71},
    {name: '��������', value: 72},
    {name: 'μ��', value: 72},
    {name: '����ɽ', value: 72},
    {name: '����', value: 72},
    {name: '����', value: 75},
    {name: '����', value: 75},
    {name: '����', value: 79},
    {name: '����', value: 79},
    {name: '��ˮ', value: 80},
    {name: '��ͷ', value: 80},
    {name: '����', value: 80},
    {name: '��³ľ��', value: 84},
    {name: '��ׯ', value: 84},
    {name: '����', value: 84},
    {name: '�Ͳ�', value: 85},
    {name: '��ɽ', value: 86},
    {name: '����', value: 86},
    {name: '�����', value: 86},
    {name: '����', value: 90},
    {name: '����', value: 90},
    {name: '����', value: 92},
    {name: '����', value: 93},
    {name: '����', value: 95},
    {name: '�Ž�', value: 96},
    {name: '����', value: 98},
    {name: '�ٰ�', value: 99},
    {name: '����', value: 99},
    {name: '����', value: 100},
    {name: '����', value: 103},
    {name: '�ϳ�', value: 104},
    {name: '���', value: 105},
    {name: '����', value: 106},
    {name: '̩��', value: 112},
    {name: '����', value: 112},
    {name: '֣��', value: 113},
    {name: '������', value: 114},
    {name: '�ĳ�', value: 116},
    {name: '�ߺ�', value: 117},
    {name: '��ɽ', value: 119},
    {name: 'ƽ��ɽ', value: 119},
    {name: '��̨', value: 119},
    {name: '����', value: 120},
    {name: '����', value: 120},
    {name: '����', value: 127},
    {name: '�˲�', value: 130},
    {name: '����', value: 132},
    {name: '��ˮ', value: 133},
    {name: '����', value: 134},
    {name: '�ػʵ�', value: 136},
    {name: '����', value: 143},
    {name: 'ʯ��ׯ', value: 147},
    {name: '����', value: 148},
    {name: '����', value: 152},
    {name: '����', value: 153},
    {name: '��̶', value: 154},
    {name: '��', value: 157},
    {name: '����', value: 169},
    {name: '��ɳ', value: 175},
    {name: '����', value: 177},
    {name: '�ȷ�', value: 193},
    {name: '����', value: 194},
    {name: '�Ϸ�', value: 229},
    {name: '�人', value: 273},
    {name: '����', value: 279}
];

var geoCoordMap = {
    '����':[121.15,31.89],
    '������˹':[109.781327,39.608266],
    '��Զ':[120.38,37.35],
    '��ɽ':[122.207216,29.985295],
    '�������':[123.97,47.33],
    '�γ�':[120.13,33.38],
    '���':[118.87,42.28],
    '�ൺ':[120.33,36.07],
    '��ɽ':[121.52,36.89],
    '���':[102.188043,38.520089],
    'Ȫ��':[118.58,24.93],
    '����':[120.53,36.86],
    '����':[119.46,35.42],
    '����':[119.97,35.88],
    '��ͨ':[121.05,32.08],
    '����':[91.11,29.97],
    '�Ƹ�':[112.02,22.93],
    '÷��':[116.1,24.55],
    '�ĵ�':[122.05,37.2],
    '�Ϻ�':[121.48,31.22],
    '��֦��':[101.718637,26.582347],
    '����':[122.1,37.5],
    '�е�':[117.93,40.97],
    '����':[118.1,24.46],
    '��β':[115.375279,22.786211],
    '����':[116.63,23.68],
    '����':[124.37,40.13],
    '̫��':[121.1,31.45],
    '����':[103.79,25.51],
    '��̨':[121.39,37.52],
    '����':[119.3,26.08],
    '�߷���':[121.979603,39.627114],
    '��ī':[120.45,36.38],
    '��˳':[123.97,41.97],
    '��Ϫ':[102.52,24.35],
    '�żҿ�':[114.87,40.82],
    '��Ȫ':[113.57,37.85],
    '����':[119.942327,37.177017],
    '����':[120.1,30.86],
    '��ͷ':[116.69,23.39],
    '��ɽ':[120.95,31.39],
    '����':[121.56,29.86],
    'տ��':[110.359377,21.270708],
    '����':[116.35,23.55],
    '�ٳ�':[122.41,37.16],
    '���Ƹ�':[119.16,34.59],
    '��«��':[120.836932,40.711052],
    '����':[120.74,31.64],
    '��ݸ':[113.75,23.04],
    '��Դ':[114.68,23.73],
    '����':[119.15,33.5],
    '̩��':[119.9,32.49],
    '����':[108.33,22.84],
    'Ӫ��':[122.18,40.65],
    '����':[114.4,23.09],
    '����':[120.26,31.91],
    '����':[120.75,37.8],
    '�ع�':[113.62,24.84],
    '������':[98.289152,39.77313],
    '����':[113.23,23.16],
    '�Ӱ�':[109.47,36.6],
    '̫ԭ':[112.53,37.87],
    '��Զ':[113.01,23.7],
    '��ɽ':[113.38,22.52],
    '����':[102.73,25.04],
    '�ٹ�':[118.73,36.86],
    '�̽�':[122.070714,41.119997],
    '����':[113.08,36.18],
    '����':[114.07,22.62],
    '�麣':[113.52,22.3],
    '��Ǩ':[118.3,33.96],
    '����':[108.72,34.36],
    'ͭ��':[109.11,35.09],
    'ƽ��':[119.97,36.77],
    '��ɽ':[113.11,23.05],
    '����':[110.35,20.02],
    '����':[113.06,22.61],
    '����':[117.53,36.72],
    '����':[112.44,23.05],
    '����':[121.62,38.92],
    '�ٷ�':[111.5,36.08],
    '�⽭':[120.63,31.16],
    'ʯ��ɽ':[106.39,39.04],
    '����':[123.38,41.8],
    '����':[120.62,31.32],
    'ï��':[110.88,21.68],
    '����':[120.76,30.77],
    '����':[125.35,43.88],
    '����':[120.03336,36.264622],
    '����':[106.27,38.47],
    '�żҸ�':[120.555821,31.875428],
    '����Ͽ':[111.19,34.76],
    '����':[121.15,41.13],
    '�ϲ�':[115.89,28.68],
    '����':[109.4,24.33],
    '����':[109.511909,18.252847],
    '�Թ�':[104.778442,29.33903],
    '����':[126.57,43.87],
    '����':[111.95,21.85],
    '����':[105.39,28.91],
    '����':[101.74,36.56],
    '�˱�':[104.56,29.77],
    '���ͺ���':[111.65,40.82],
    '�ɶ�':[104.06,30.67],
    '��ͬ':[113.3,40.12],
    '��':[119.44,32.2],
    '����':[110.28,25.29],
    '�żҽ�':[110.479191,29.117096],
    '����':[119.82,31.36],
    '����':[109.12,21.49],
    '����':[108.95,34.27],
    '��̳':[119.56,31.74],
    '��Ӫ':[118.49,37.46],
    'ĵ����':[129.58,44.6],
    '����':[106.9,27.7],
    '����':[120.58,30.01],
    '����':[119.42,32.39],
    '����':[119.95,31.79],
    'Ϋ��':[119.1,36.62],
    '����':[106.54,29.59],
    '̨��':[121.420757,28.656386],
    '�Ͼ�':[118.78,32.04],
    '����':[118.03,37.36],
    '����':[106.71,26.57],
    '����':[120.29,31.59],
    '��Ϫ':[123.73,41.3],
    '��������':[84.77,45.59],
    'μ��':[109.5,34.52],
    '����ɽ':[118.48,31.56],
    '����':[107.15,34.38],
    '����':[113.21,35.24],
    '����':[119.16,31.95],
    '����':[116.46,39.92],
    '����':[117.2,34.26],
    '��ˮ':[115.72,37.72],
    '��ͷ':[110,40.58],
    '����':[104.73,31.48],
    '��³ľ��':[87.68,43.77],
    '��ׯ':[117.57,34.86],
    '����':[120.19,30.26],
    '�Ͳ�':[118.05,36.78],
    '��ɽ':[122.85,41.12],
    '����':[119.48,31.43],
    '�����':[86.06,41.68],
    '����':[114.35,36.1],
    '����':[114.35,34.79],
    '����':[117,36.65],
    '����':[104.37,31.13],
    '����':[120.65,28.01],
    '�Ž�':[115.97,29.71],
    '����':[114.47,36.6],
    '�ٰ�':[119.72,30.23],
    '����':[103.73,36.03],
    '����':[116.83,38.33],
    '����':[118.35,35.05],
    '�ϳ�':[106.110698,30.837793],
    '���':[117.2,39.13],
    '����':[119.95,30.07],
    '̩��':[117.13,36.18],
    '����':[120.23,29.71],
    '֣��':[113.65,34.76],
    '������':[126.63,45.75],
    '�ĳ�':[115.97,36.45],
    '�ߺ�':[118.38,31.33],
    '��ɽ':[118.02,39.63],
    'ƽ��ɽ':[113.29,33.75],
    '��̨':[114.48,37.05],
    '����':[116.29,37.45],
    '����':[116.59,35.38],
    '����':[112.239741,30.335165],
    '�˲�':[111.3,30.7],
    '����':[120.06,29.32],
    '��ˮ':[119.92,28.45],
    '����':[112.44,34.7],
    '�ػʵ�':[119.57,39.95],
    '����':[113.16,27.83],
    'ʯ��ׯ':[114.48,38.03],
    '����':[117.67,36.19],
    '����':[111.69,29.05],
    '����':[115.48,38.85],
    '��̶':[112.91,27.87],
    '��':[119.64,29.12],
    '����':[113.09,29.37],
    '��ɳ':[113,28.21],
    '����':[118.88,28.97],
    '�ȷ�':[116.7,39.53],
    '����':[115.480656,35.23375],
    '�Ϸ�':[117.27,31.86],
    '�人':[114.31,30.52],
    '����':[125.03,46.58]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function renderItem(params, api) {
    var coords = [
        [116.7,39.53],
        [103.73,36.03],
        [112.91,27.87],
        [120.65,28.01],
        [119.57,39.95]
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
        points.push(api.coord(coords[i]));
    }
    var color = api.visual('color');

    return {
        type: 'polygon',
        shape: {
            points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })
        },
        style: api.style({
            fill: color,
            stroke: echarts.color.lift(color)
        })
    };
}

option = {
    backgroundColor: 'transparent',
    title: {
        text: 'ȫ����Ҫ���п�������',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#044161"
                    }
                },
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#064f85"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#005b96",
                        "lightness": 1
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#00508b"
                    }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                        "color": "#056197",
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#029fd4"
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "all",
                    "stylers": {
                        "color": "#1a5787"
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                }
            ]
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            type: 'custom',
            coordinateSystem: 'bmap',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            animation: false,
            silent: true,
            data: [0],
            z: -10
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}