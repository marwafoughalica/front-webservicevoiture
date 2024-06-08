import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
    this.drawChart()
      
    }, 500);
  }
  option: any;
  @ViewChild('bar') bar: ElementRef  ;
  
  drawChart()
  {
      var myChart = echarts.init(this.bar.nativeElement);
      window.addEventListener('resize',function(){
          myChart.resize();
      })

      
      this.option  = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          top: '15%',
          right: '3%',
          left: '5%',
          bottom: '12%'
      },
      xAxis: [{
          type: 'category',
          data: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'decembre'],
          axisLine: {
              lineStyle: {
                  color: '#111'
              }
          },
          axisLabel: {
              margin: 10,
              color: '#111',
              textStyle: {
                  fontSize: 14
              },
          },
          axisTick: {
              show: false
          }
      }],
      yAxis: [{
          axisLabel: {
              formatter: '{value}',
              color: '#111',
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#fff'
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#eee'
              }
          }
      }],
      series: [{
          type: 'bar',
          data: [80, 80, 97, 53, 95, 26, 72],
          barWidth: '28px',
          itemStyle: {
              normal: {
                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //     offset: 0,
                  //     color: 'rgba(0,244,255,1)'
                  // }, {
                  //     offset: 1,
                  //     color: 'rgba(0,77,167,1)' 
                  // }], false),
                  color: '#3259ca',
                  shadowColor: 'rgba(0,160,221,1)',
                  shadowBlur: 4,
              }
          },
          label: {
              normal: {
                  show: true,
                  lineHeight: 30,
                  formatter: '{c}',
                  position: 'top',
                  textStyle: {
                      color: '#111',
                      fontSize: 12
                  }
  
              }
          }
      }]

      }
      myChart.setOption(this.option, true);
  }
}
