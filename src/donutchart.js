import Chart from 'react-apexcharts'
import React from 'react';

class DonutChart extends React.Component {

    constructor(props) {
      super(props);

        const games = function(val,opts) {
            if(opts.seriesIndex === 0){
                return props.c1games
            }
            else if(opts.seriesIndex === 1){
                return props.c2games
            }
            else if(opts.seriesIndex === 2){
                return props.c3games
            }
            else if(opts.seriesIndex === 3){
                return props.othergames
            }
        }
        const winratio = function(val) {
            if(val == props.othergames){
                return 'Games: ' + props.othergames
            }
            else if(val == props.c1games){
                return 'Wr: ' + props.c1wr + '%'
            }
            else if(val == props.c2games){
                return 'Wr: ' + props.c2wr + '%'
            }
            else if(val == props.c3games){
                return 'Wr: ' + props.c3wr + '%'
            }
        }

      this.state = {
        games: props.games,
        wr: props.wr,
        c1g: props.c1games,
        c2g: props.c2games,
        c3g: props.c3games,

        options: {
            
            labels: [props.c1name, props.c2name, props.c3name, 'Other'],
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            theme: {
                palette: 'palette10' // upto palette10
            },
            dataLabels: {
                enabled: true,
                formatter: games,
            },
            plotOptions: {
                pie: {
                  startAngle: 0,
                  endAngle: 360,
                  expandOnClick: true,
                  offsetX: 0,
                  offsetY: 0,
                  customScale: 1,
                  dataLabels: {
                      offset: 0,
                      minAngleToShowLabel: 10
                  }, 
                  donut: {
                    size: '65%',
                    background: 'transparent',
                    labels: {
                      show: true,
                      name: {
                        show: true,
                        fontSize: '22px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        color: undefined,
                        offsetY: -10,
                        formatter: function (val,opts) {
                            return val
                        }
                      },
                      value: {
                        show: true,
                        fontSize: '18px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 550,
                        color: undefined,
                        offsetY: 16,
                        formatter: winratio,
                      },
                      total: {
                        show: true,
                        showAlways: false,
                        label: props.donutname,
                        fontSize: '22px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        color: '#000000',
                        
                      }
                    }
                  },      
                }
              }
        },
        series: [props.c1games, props.c2games, props.c3games, props.othergames],  
        
      }
    }
  
    render() {
  
      return (
        <div className="donut">
            <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        </div>
      );
    }
  }

  export default DonutChart;