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
        <v-card>Chart</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import moment from 'moment';
import { mapGetters, mapActions } from "vuex";
export default {
  name: "WorldWide",
  computed: mapGetters(["globalSummary", "globalDate"]),
  created() {
    this.fetchGlobal();
  },
  mounted() {
    this.setData();
    // this.summary = Object.assign({}, this.globalSummary);
    console.log(this.summary.NewConfirmed);
  },
  data: () => ({
    // date: new Date().toISOString().substr(0, 10),
    date: "",
    // summary: []
    summary: {
      NewConfirmed: "",
      TotalConfirmed: "",
      NewDeaths: "",
      TotalDeaths: "",
      NewRecovered: "",
      TotalRecovered: ""
    }
  }),
  methods: {
    ...mapActions(["fetchGlobal"]),
    // getData() {
    //   this.$axios
    //     .get("https://api.covid19api.com/summary")
    //     .then(response => {
    //       this.summary = Object.assign({}, response.data.Global);
    //       // this.date = moment(response.data.Date).format("MMMM Do YYYY");
    //       // console.log(this.date);
    //     })
    //     .catch(error => {
    //       console.log("Error: " + error);
    //     });
    // }
    setData() {
      // setTimeout(() => {
        // this.summary = Object.assign({}, this.globalSummary);
      // }, 100);
    }
  }
};
</script>
