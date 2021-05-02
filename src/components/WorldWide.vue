<template>
  <v-container style="max-width:1000px;">
    <Search/>
    <Count :dataCount="summary" />
    <v-row class="text-center">
      <v-col>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              class="mb-5"
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="countries" :search="search">
            <template
              v-slot:item.current="{ item }"
            >{{ item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths }}</template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Count from "./Count";
export default {
  name: "WorldWide",
  components: {
    Count
  },
  mounted() {
    this.getData();
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Country",
        align: "start",
        sortable: false,
        value: "Country"
      },
      {
        text: "Newly Recovered",
        align: "center",
        sortable: false,
        value: "NewRecovered"
      },
      {
        text: "Total Recovered",
        align: "center",
        sortable: false,
        value: "TotalRecovered"
      },
      {
        text: "Total Deaths",
        align: "center",
        sortable: false,
        value: "TotalDeaths"
      },
      {
        text: "Total Confirmed",
        align: "center",
        sortable: false,
        value: "TotalConfirmed"
      },
      {
        text: "Current",
        align: "center",
        sortable: false,
        value: "current"
      }
    ],
    countries: [],
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
    chartOptions: null
  }),
  methods: {
    getData() {
      this.$axios
        .get("https://api.covid19api.com/summary")
        .then(response => {
          this.summary = Object.assign({}, response.data.Global);
          this.countries = response.data.Countries.sort(function(a, b) {
            return b.TotalConfirmed - a.TotalConfirmed;
          });
          // console.log(response.data.Countries);
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    }
  }
};
</script>
