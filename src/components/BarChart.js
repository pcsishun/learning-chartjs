import { defineComponent, h } from 'vue'

import { Bar } from 'vue-chartjs'

import { Chart as ChartJS } from 'chart.js'

ChartJS.register()

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  props: ["dataset"],
 
  setup(props) {
    console.log(props.dataset)
    const chartData = {
      labels: [
        'index',
      ],
      datasets: [
        {
          label: 'index',
          barPercentage: 0.5,
          backgroundColor: '#FFFF10',
          data: [props.dataset,100]
        }
      ]
    }

    const chartOptions = {
    indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      borderRadius: 15,
      plugins:{
        legend:{
            display: false
        },
        title:{
            display: false
        }
      },
      scales:{
        x:{
            display: false,
            ticks: {    
                min: 0,
                max: 100,
                callback: function(value) {
                    return value + "%"
                }
            },
            scaleLabel: {
                display: true,
                labelString: "Percentage"
            }
        },
        y:{
            display: false,
        },
        xAxes: [{
            ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                    return value + "%"
                }
            },
            scaleLabel: {
                display: true,
                labelString: "Percentage"
            }
        }]
        
      }
    }

    return () =>
      h(Bar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
      })
  },
//   beforeMount(){
//     console.log(this.dataset)
//   }
})
