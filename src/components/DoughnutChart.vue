<template>
  <!-- <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  /> -->
  <div class="warp-doughnut">
      <Doughnut  :chart-options="chartOptions" :chart-data="chartData">
    </Doughnut>
    <div class="text-info text-2xl">
        <div :class="cssIAQ+' '+'mb-1'">{{iaqdata}}</div>
        <div :class="cssIAQ">{{isIAQ}}</div>
    </div>
  </div>

</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { VueScreenSizeMixin } from 'vue-screen-size';

import {
  Chart as ChartJS,
  // Title,
  // Tooltip,
  Legend, // ชื่อ tags label
  ArcElement,
  registerables
  // CategoryScale
} from 'chart.js'


ChartJS.register( Legend, ArcElement, ...registerables)
 

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  mixins:[VueScreenSizeMixin],
  props: ["chartdata", "iaqdata"],
  data() {
    return {

        sWidth:null,
        isIAQ:"",
        chartData: {
        // labels: ['VueJs','ReactJs'],
        datasets: [
          {
              backgroundColor: (ctx) => {
            //   const canvas = ctx.chart.ctx;
            //   const gradient = canvas.createLinearGradient(0,0,0,160);

            //   gradient.addColorStop(0, 'cyan');
            //   gradient.addColorStop(0.5, 'red');
            //   gradient.addColorStop(1, 'cyan');

                if(this.iaqdata <= 50){
                    return ["#00D4FF",'rgb(60, 60, 60)'];
                }
                else if(this.iaqdata <= 100){
                    return ["#E5E500",'rgb(60, 60, 60)'];
                }else if(this.iaqdata <= 150){
                    return ["#E29E03",'rgb(60, 60, 60)'];
                }else if(this.iaqdata <= 200){
                    return ["#E25403",'rgb(60, 60, 60)'];
                }else if(this.iaqdata >= 300){
                    return ["#57006A",'rgb(60, 60, 60)'];
                }
            },
            // backgroundColor: [ '#00D8FF', '#DD1B16'],
            data: this.chartdata,
            
          }
        ]
      },
      chartOptions: {
        responsive: true,
 
        cutout: window.innerWidth > 1200 ?105: 110,
        radius: '90%',
        plugins: {
 
        },
        elements: {
          arc: {
            borderWidth: 0,
            borderRadius: 30
          }
        }
      },
      cssIAQ:"text-content"
    }
  },
  methods:{
    resultIAQ(){
        if(this.iaqdata <= 50){
            this.isIAQ = "Good"
            this.cssIAQ = "text-content text-teal-300"
        }else if(this.iaqdata <= 100){
            this.isIAQ = "Normal"
            this.cssIAQ = "text-content text-amber-300"
        }else if(this.iaqdata <= 150){
            this.isIAQ = "Poor"
            this.cssIAQ = "text-content text-amber-700"
        }else if(this.iaqdata <= 200){
            this.isIAQ = "Bad"
            this.cssIAQ = "text-content text-red-700"
        }else if(this.iaqdata >= 300){
            this.isIAQ = "Danger"
            this.cssIAQ = "text-content text-purple-600"
            // console.log(this.cssIAQ)
        }
    }
  },
  mounted(){
    this.resultIAQ();
    this.sWidth = window.innerWidth


    
  },
  updated(){
    // console.log("first action => ",this.$vssWidth);
    if(this.sWidth !== window.innerWidth){
        this.sWidth = window.innerWidth
        // console.log("sec action => ",window.innerWidth);
    }
  }
}
</script>

<style scoped>
    .text-info{
        transform: translateY(-120px);
    }

    .warp-doughnut{
        width: 250px;
        height:250px;
    }

@media screen  and (max-width: 1024px){
  .warp-doughnut{
    margin: auto;
  }
}
</style>
