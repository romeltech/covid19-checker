<template>
  <v-container>
    <v-row>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto">
          <v-card-text>
            <div class>Confirmed</div>
            <div
              class="blue--text display-1 font-weight-bold"
            >{{summary.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto green darken-1">
          <v-card-text>
            <div class="white--text">Recovered</div>
            <div
              class="white--text display-1"
            >{{summary.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto red darken-1">
          <v-card-text>
            <div class="white--text">Deaths</div>
            <div
              class="white--text display-1"
            >{{summary.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto light-blue darken-1">
          <v-card-text>
            <div class="white--text">New Cases</div>
            <div
              class="white--text display-1"
            >{{summary.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <!-- <Chart/> -->
        <!-- <line-chart v-if="loaded" :data="chartData"></line-chart> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WorldWide",
  mounted() {
    this.getData();
    // this.fillData();
  },
  data: () => ({
    loaded: false,
    date: "",
    summary: {
      NewConfirmed: "",
      TotalConfirmed: "",
      NewDeaths: "",
      TotalDeaths: "",
      NewRecovered: "",
      TotalRecovered: ""
    },
    chartData: null,
    chartOptions: null,
  }),
  methods: {
    getData() {
      this.$axios
        .get("https://api.covid19api.com/summary")
        .then(response => {
          this.summary = Object.assign({}, response.data.Global);
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },
    // fillData() {
    //   this.loaded = true;
    //   this.chartData = {
    //     labels: [
    //       "January",
    //       "February",
    //       "March",
    //       "April",
    //       "May",
    //       "June",
    //       "July"
    //     ],
    //     datasets: [
    //       {
    //         label: "Data One",
    //         backgroundColor: "#2196F3",
    //         data: [40, 39, 10, 40, 39, 80, 40]
    //       },
    //      {
    //         label: "Data Two",
    //         backgroundColor: "red",
    //         data: [40, 39, 10, 50, 20, 80, 40]
    //       }
    //     ]
    //   };

    // }
  }
};
</script>
