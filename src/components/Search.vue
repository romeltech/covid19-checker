<template>
  <v-row>
    <div class="col-12 col-md-6 my-6 mx-auto">
      <v-combobox
        max-width="600px"
        v-model="select"
        :items="countries"
        item-text="Country"
        item-value="Slug"
        solo
        single-line
        hide-details
        label="Select Country"
        @change="goToRoute(select.Slug)"
        auto-select-first
      ></v-combobox>
    </div>
  </v-row>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    select: null,
    search: null,
    countries: []
  }),
  methods: {
    getCountries() {
      this.$axios
        .get("https://api.covid19api.com/countries")
        .then(response => {
          this.countries = response.data;
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },
    goToRoute(c) {
      // console.log(c);
      this.$router.push({ path: `/country/${c}` });
    }
  },
  mounted() {
    this.getCountries();
  }
};
</script>