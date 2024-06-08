import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
    this.drawChart()
      
    }, 500);
  }
  option: any;
  @ViewChild('pie') pie: ElementRef  ;
  
  drawChart()
  {
      var myChart = echarts.init(this.pie.nativeElement);
      window.addEventListener('resize',function(){
          myChart.resize();
      })

      
      this.option  = {

        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          show: false,
          orient: 'vertical',
          x: 'left',
          data:['hyundai','kia','volswagen','suzuki','ford','fiat','peugeot']
      },
      series: [
          {
              name:'',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '40%'],
  
              label: {
                  normal: {
                      position: 'inner'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:33, name:'Not Available'},
                  {value:73, name:'Available'}
              ]
          },
          {
              name:'',
              type:'pie',
              radius: ['60%', '85%'],
  
              data:[
                  {value:12, name:'kia'},
                  {value:10, name:'hyundai'},
                  {value:6, name:'fiat'},
                  {value:15, name:'ford'},
                  {value:20, name:'volswagen'},
                  {value:8, name:'peugeot'},
                  {value:2, name:'suzuki'}
              ]
          }
      ]

      }
      myChart.setOption(this.option, true);
  }
}
