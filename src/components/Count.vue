<template>
  <div>
    <v-row v-if="dataCount">
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
  </div>
</template>

<script>
export default {
  props: ["dataCount"]
};
</script>