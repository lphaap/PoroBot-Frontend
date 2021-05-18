import Chart from 'react-apexcharts'
import React from 'react';

class WrChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [props.wrvalue],
          options: {
            chart: {
              type: 'radialBar',
              offsetY: -20,
              offsetX: +120,
              sparkline: {
                enabled: true
              }
            },
            gradient: {
                shade: "dark",
                type: "horizontal",
                gradientToColors: ["#87D4F9"],
                stops: [0, 100]
              },
            plotOptions: {
              radialBar: {
                startAngle: -180,
                endAngle: 0,
                track: {
                    
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: true,
                    fontSize: '22px'
                  },
                  value: {
                    //offsetY: 2,
                    fontSize: '22px'
                  }
                }
              }
            },
            grid: {
                show: true,
                borderColor: '#90A4AE',
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                padding: {
                    top: -20,
                    bottom: +100
                }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              },
            },
            labels: ['WR'],
          },
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" height={400} width={300}/>
    </div>
  

        );
      }
    }


  export default WrChart;