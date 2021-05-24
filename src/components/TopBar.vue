<template>
  <v-app-bar app flat class="topbar">
    <v-btn icon small fab class="ml-0" @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title>
      GTRSuite Tests Frontend <span v-if="routeTitle">{{ routeTitle }}</span></v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn icon small fab class="mr-0">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    routeTitle() {
      if (this.$route.name !== 'Home') {
        return ` • ${this.$route.name}`
      }
      return null
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
  },
}
</script>

<style lang="scss">
.topbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
  background-color: white !important;
}
</style>
