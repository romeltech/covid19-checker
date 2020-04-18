<template>
  <v-container style="max-width:1000px;">
    <Search />
    <v-row v-if="loading == true">
      <v-col class="text-center">
        <v-progress-circular :width="3" color="#06bacc" indeterminate></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-if="dataCount && loading == false">
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto elevation-3">
          <v-card-text>
            <div class>Confirmed</div>
            <div
              class="blue--text display-1 font-weight-bold"
            >{{dataCount.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto elevation-3" style="background-color:#04BF68;">
          <v-card-text>
            <div class="white--text">Recovered</div>
            <div
              class="white--text display-1"
            >{{dataCount.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto elevation-3" style="background-color:#C7363E;">
          <v-card-text>
            <div class="white--text">Deaths</div>
            <div
              class="white--text display-1"
            >{{dataCount.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mb-3 sm-6">
        <v-card class="mx-auto elevation-3" style="background-color:#06BACC">
          <v-card-text>
            <div class="white--text">New Cases</div>
            <div
              class="white--text display-1"
            >{{dataCount.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="dataCount" class="text-center">
        <line-chart v-if="loaded" :data="chartData"></line-chart>
      </v-col>
      <v-col v-else>
        <div class="text-center overline">NO RECORD FOUND</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      loading: true,
      // theSlug: 'philippines',
      loaded: false,
      dataCount: {
        NewConfirmed: "",
        TotalConfirmed: "",
        NewDeaths: "",
        TotalDeaths: "",
        NewRecovered: "",
        TotalRecovered: ""
      }
    };
  },
  mounted() {
    this.getData();
    this.fillData(this.$route.params.slug);
    // console.log("in country");
    // this.theSlug = this.$route.params.slug;
  },
  watch: {
    "$route.params.slug": function(slug) {
      this.loaded = false;
      this.getData();
      this.fillData(slug);
    }
  },
  methods: {
    getData() {
      this.$axios
        .get("https://api.covid19api.com/summary")
        .then(response => {
          let d = response.data.Countries.filter(obj => {
            return obj.Slug === this.$route.params.slug;
          });
          this.dataCount = d[0];
          this.loading = false;
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },
    fillData(slug) {
      // this.$route.params.slug
      // console.log(slug);
      let dateList;
      let dateData;
      this.$axios
        .get("https://api.covid19api.com/country/" + slug + "/status/confirmed")
        .then(response => {
          dateList = response.data.map(item =>
            moment(item.Date).format("MMM D")
          );
          dateData = response.data.map(item => item.Cases);
          this.loaded = true;
          this.chartData = {
            labels: dateList,
            datasets: [
              {
                label: "Confirmed Cases",
                backgroundColor: "#2196F3",
                data: dateData
              }
            ]
          };
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    }
  }
};
</script>

<style>
</style>