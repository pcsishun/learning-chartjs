<template>
  <div class="set-chart-container text-slate-50">
      <div class="text-center text-lg subpixel-antialiased pt-4">MY CHART</div>
      <div class="chart-container-content lg:grid grid-cols-2 mt-10 text-center w-10/12 m-auto gap-x-48">
          <div class="card-chart rounded-md"> 
            <div class=" w-1/6 min-w-max text-center h-16 align-bottom">
              <p class="translate-y-4 text-xl font-bold">OUT DOOR</p>
            </div>
            <div class="m-auto border-2 border-slate-50 bg-zinc-600 rounded-lg" >
              <div class="title-iaq text-left ml-8 mt-4 text-xl font-bold">
                AQI
              </div>
              <div class="iaq-doughnut mb-6 lg:flex justify-around">
                <div class="set-doughnut-chart">
                  <DoughnutChart   :chartdata="sendIndoorIAQ" :iaqdata="datasets.inDoor.AQI[0]"/>
                </div>
                <div class="set-barchart">
                  
                  <div class="set-temp-humid ml-3">
                    <div class="set-temp">
                      <div class="set-temp text-left mb-3">
                        Temperature
                      </div>
                      <div class="set-symbol flex justify-between">
                        <div class="flex"><img src="./assets/temperature.png" height="25" width="25"/>
                          <span class="ml-3 text-lg">{{datasets.outDoor.temp[0]}}</span>
                        </div>
                        <div>
                          <span style='font-size:20px;'>&#8451;</span>
                        </div>
                      </div>
                      <div class="barchart-wd">
                        <BarChartSet :dataset="datasets.outDoor.temp[0]" class="barchart-wd"/>
                      </div>
                    </div>
                    <div class="set-humid">
                      <div class="set-humid text-left mb-3">
                        Humidity
                      </div>
                      <div class="set-symbol flex justify-between">
                      <div class="flex"><img src="./assets/drop.png" height="25" width="29"/>
                        <span class="ml-3 text-lg">{{datasets.inDoor.humid[0]}}</span>
                      </div>
                      <div>
                        <span style='font-size:20px;'>&#37;</span>
                      </div>
                      </div>
                      <div class="barchart-wd">
                        <BarChartSet :dataset="datasets.inDoor.humid[0]" class="barchart-wd"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div class="card-chart">
            <div class="g w-1/6 min-w-max text-center h-16 align-bottom">
            <p class="translate-y-4 text-xl font-bold">IN DOOR</p>
          </div>
            <div class="m-auto  border-2 border-slate-50 bg-zinc-600 rounded-lg" >
              <div class="title-iaq text-left ml-8 mt-4 text-xl font-bold">
                AQI
              </div>
              <div class="iaq-doughnut mb-6 lg:flex justify-around">
                <div class="set-doughnut-chart">
                  <DoughnutChart  :chartdata="snedOutDoorIAQ" :iaqdata="datasets.outDoor.AQI[0]"/>
                </div>
                <div class="set-barchart text-left">
                  
                  <div class="set-temp-humid ml-3">
                    <div class="set-temp">
                      <div class="set-temp text-left mb-3">
                        Temperature
                      </div>
                      <div class="set-symbol flex justify-between">
                      <div class="flex"><img src="./assets/temperature.png" height="25" width="25"/>
                        <span class="ml-3 text-lg">{{datasets.inDoor.temp[0]}}</span>
                      </div>
                      <div>
                        <span style='font-size:20px;'>&#8451;</span>
                      </div>
                      </div>
                      <div class="barchart-wd">
                        <BarChartSet :dataset="datasets.inDoor.temp[0]" class="barchart-wd"/>
                      </div>
                    </div>
                    <div class="set-humid">
                      <div class="set-humid text-left mb-3">
                        Humidity
                      </div>
                      <div class="set-symbol flex justify-between">
                      <div class="flex"><img src="./assets/drop.png" height="25" width="29"/>
                        <span class="ml-3 text-lg">{{datasets.inDoor.humid[0]}}</span>
                      </div>
                      <div>
                        <span style='font-size:20px;'>&#37;</span>
                      </div>
                      </div>
                      <div class="barchart-wd">
                        <BarChartSet :dataset="datasets.inDoor.humid[0]" class="barchart-wd"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div class="setFooter"></div>
  </div>
</template>

<script>
import DoughnutChart from './components/DoughnutChart.vue'
import BarChartSet from './components/BarChart'
// setup doughnut chart //
 

export default {
  name: "App",
  components: {
    DoughnutChart,
    BarChartSet
  },
  data(){
    return{
      // mock data //
      datasets: {
        inDoor:{
          AQI:[120],
          temp:[26],
          humid:[57],
        },
        outDoor:{
          AQI:[50],
          temp:[37],
          humid:[89]
        }
      },
    sendIndoorIAQ: [],
    snedOutDoorIAQ: [],
    }
  },
  methods:{
    haddleCalPercentIAQ(){
      // must api //  datasets.inDoor.AQI[0] datasets.outDoor.AQI[0] 
      const datasetIn = this.datasets;
      const setIAQInDoor = datasetIn.inDoor.AQI[0];
      const setIAQOutDoor = datasetIn.outDoor.AQI[0];

      console.log(setIAQInDoor, setIAQOutDoor)
      const calPercentIAQInDoor = (setIAQInDoor / 500 ) * 100;
      const caloppositePercentInDoor = 100 - calPercentIAQInDoor;
      const calPercentIAQOutDoor = (setIAQOutDoor / 500) * 100;
      const caloppositePercentOutDoor = 100 - calPercentIAQOutDoor;

      this.sendIndoorIAQ.push(calPercentIAQInDoor)
      this.sendIndoorIAQ.push(caloppositePercentInDoor)

      this.snedOutDoorIAQ.push(calPercentIAQOutDoor)
      this.snedOutDoorIAQ.push(caloppositePercentOutDoor)

      console.log(this.sendIndoorIAQ);
      console.log(this.snedOutDoorIAQ)

    }
  },
  beforeMount(){
    this.haddleCalPercentIAQ();
  }

}

</script>

<style scoped>
body{
  margin:0;
  width:0;
}
.set-chart-container{
  background: rgb(40, 40, 40);
  height: 100%;
  
}

.card-chart{
  margin-top: 20px; 
}

.setFooter{
  height: 200px;
}

.set-barchart{
  width: 300px;
}
.barchart-wd{
  height: 55px;
  width: 300px;
  min-width: 150px;
}

</style>
