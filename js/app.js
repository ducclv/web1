function chartTotal(values){
    Highcharts.chart('chart-hs-1', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          backgroundColor: null
        },
        title: {
          text: "<span class='chart-num'>" + values + "</span><br/><p>hồ sơ</p>",
          align: 'center',
            verticalAlign: 'middle',
            y: -15,
            margin: 0
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Tỉ lệ',
          colorByPoint: true,
          innerSize: '85%',
          data: [
            ['Trung ương', 332],
            ['Tỉnh', 65],
            ['Huyện', 21],
            ['Xã', 9]
          ]
        }],
        legend: {
          verticalAlign: "bottom",
          itemStyle: {
            width: 80,
            float: "left",
            fontFamily: "arial, roboto",
            fontSize: "11px",
            fontWeight: "normal"
          },
          margin: 0,
          itemWidth: 85,
          width: 180
        },
        colors: [
          "#0653a1",
          "#39b54a",
          "#f7941d",
          "#00c5e0",
          "#f15c80",
          "#e4d354",
          "#2b908f",
          "#f45b5b",
          "#91e8e1"
        ]
      });  
}

function chartTotalYear(values){
    Highcharts.chart('chart-hs-year', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: "<span class='chart-num'>" + values + "</span><span class='percent'>%</span><br/><p>hồ sơ</p>",
            align: 'center',
            verticalAlign: 'middle',
            y: 10
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
        pie: {
                dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    color: 'white'
                }
            },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                size: '100%'
            }
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Tỉ lệ',
            innerSize: '85%',
            data: [
                ['Đúng hạn', 97],
                ['Quá hạn', 3]
            ]
        }],
        chart: {
            backgroundColor:''
        },
        colors: [
            "#0653a1",
            "#f7530c",
            "#82ca9c",
            "#f15c80",
            "#e4d354",
            "#2b908f",
            "#f45b5b",
            "#91e8e1"
        ]
    });  
}



