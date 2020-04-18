<template>
  <v-app>
    <v-app-bar app color class="elevation-3" style="background-color:#ffffff;">
      <div class="d-flex align-center">
        <v-btn :to="'/'" text small class="mr-3">COVID19 CHECKER</v-btn>
        <v-btn
          :href="'https://www.who.int/emergencies/diseases/novel-coronavirus-2019'"
          target="_blank"
          text
          small
         
          class="mr-3"
        >WHO Website</v-btn>
        <!-- <v-btn :to="'/country'" text small active-class="primary" class="mr-3">Country</v-btn> -->
        <!-- <v-btn :to="'/prevention'" text small active-class="primary" class="mr-3">Prevention</v-btn> -->
        <!-- <v-btn
          :to="'/immune-system-boosters'"
          active-class="primary"
          text
          small
          class="mr-3"
        >Immune System boosters</v-btn> -->
      </div>
      <v-spacer></v-spacer>
      <v-chip class="ma-2" outlined color="primary d-xs-none d-none d-sm-flex">
        <span class="primary--text">{{globalDate}}</span>
        <v-icon right small class="primary--text">mdi-calendar</v-icon>
      </v-chip>
    </v-app-bar>
    <v-content style="background-color:#f5faff;">
      <router-view style="min-height:80vh;"></router-view>
      <div class="d-flex justify-center align-center mt-6 mb-6">
        <span class="mr-2 overline">created by:</span>
        <a href="https://mel-7.com" target="_blank">
          <v-img
            max-width="50px"
            src="https://mel-7.com/wp-content/uploads/2019/03/romel-indemne.svg"
          ></v-img>
        </a>
      </div>
    </v-content>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    date: ""
  }),
  methods: {
    ...mapActions(["fetchGlobal"])
  },
  computed: mapGetters(["globalDate"]),
  created() {
    this.fetchGlobal();
  }
};
</script>