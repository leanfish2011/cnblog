// Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
require.config({
    paths: {
        //echarts: './js'
        echarts: 'https://blog-static.cnblogs.com/files/leanfish/echarts.js'
    }
});

// Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
require(
    [
        'echarts',
        'echarts/chart/map'
    ],
    function (ec) {
        // --- 地图 ---
        var myChart2 = ec.init(document.getElementById('mainMap'));
        myChart2.setOption({
            title : {
                subtext: '黄冈\n荆州(2008.09)\n武汉(2009.01)\n北京(2011.07)\n大庆(2011.10)\n泰山(2014.06)\n天津(2014.08)\n北戴河(2014.08)\n安庆(2015.02)\n昆明(2017.11)',
                x:'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'multiple',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: 'lightgreen',
                            color: 'orange',
                            label: {
                                show: true
                            }
                        },
                        emphasis: {                 // 也是选中样式
                            borderWidth: 1,
                            borderColor: '#fff',
                            color: '#32cd32',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    data: [
                       { name: '湖北', selected: true },
                        { name: '北京', selected: true },
                        { name: '黑龙江', selected: true },
                        { name: '山东', selected: true },
                        { name: '天津', selected: true },
                        { name: '河北', selected: true },
						{ name: '安徽', selected: true },
                        { name: '云南', selected: true }],
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 5
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data: [
                            { name: '黄冈', geoCoord: [114.46, 29.92] },
                            { name: '荆州(2008.09)', geoCoord: [112.239741, 30.335165] },
                            { name: '武汉(2009.01)', geoCoord: [114.31, 30.52] },
                            { name: '北京(2011.07)', geoCoord: [116.46, 39.92] },
                            { name: '大庆(2011.10)', geoCoord: [125.03, 46.58] },
                            { name: '泰山(2014.06)', geoCoord: [117.13, 36.18] },
                            { name: '天津(2014.08)', geoCoord: [117.2, 39.13] },
                            { name: '北戴河(2014.08)', geoCoord: [119.57, 39.95]},
                            { name: '安庆(2015.02)', geoCoord: [116.63,30.41]},
                            { name: '昆明(2017.11)', geoCoord: [102.73,25.04]}
                        ]
                    }
                }
            ]
        });
    }
);