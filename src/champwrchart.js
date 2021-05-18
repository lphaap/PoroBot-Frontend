import Chart from 'react-apexcharts'
import React from 'react';

class ChampWrChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [props.c1wr,props.c2wr,props.c3wr],
          options: {
              
            chart: {
              height: 390,
              type: 'radialBar',
            },
            plotOptions: {
                theme: {
                    palette: 'palette10' // upto palette10
                },
              radialBar: {
                offsetY:26 ,
                offsetX:-110 ,
                startAngle: 0,
                endAngle: 200,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: true,
                  }
                }
              }
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E'],
            //labels: [props.c1name, props.c2name, props.c3name],
            labels: ["Wr-%", "Wr-%", "Wr-%"],
            legend: {
              show: true,
              floating: true,
              fontSize: '14px',
              position: 'left',
              offsetX: -50,
              offsetY: 36,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                size: 0
              },
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                vertical: 3
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                    show: false
                }
              }
            }]
          },
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="radialBar"  width={380}/>
    </div>
  

        );
      }
    }


  export default ChampWrChart;