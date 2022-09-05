<template>
  <v-app>
    <left-bar @toggleSidebar="toggleSidebar" ref="leftBarComponent"/>

    <Header
        @openSidebar="openSideBar"
        ref="headerComponent"
        :class="{isFullScreen : isFullScreen}"
    />

    <v-main
        id="main"
        :class="{isFullScreen : isFullScreen}"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header";
import LeftBar from "./components/layout/LeftBar";

export default {
  name: 'App',
  components: {
    Header,
    LeftBar
  },
  data: () => ({
    active: 'active',
    isFullScreen: false,
  }),
  computed: {
  },
  methods: {
    openSideBar(value) {
      this.isFullScreen = !value;
      this.$refs.leftBarComponent.toggle(value)
    },
    toggleSidebar(value) {
      this.isFullScreen = !this.isFullScreen;
      this.$refs.leftBarComponent.toggle(value)
    },
  }
}
</script>