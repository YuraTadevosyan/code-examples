<template>
  <div id="header">
    <v-app-bar
        fixed
        height="73"
        color="transparent"
        class="header"
        style="left: 494px"
    >
      <v-app-bar-nav-icon
          color="#3E4968"
          @click.native.stop="openSidebar"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title
          class="flex text-center pl-0"
      >
        <span class="toolbar-title text-h6">
          Vue Base Layout
        </span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    openBar: false,
  }),
  methods: {
    openSidebar() {
      this.openBar = true;
      this.$emit('openSidebar', this.openBar);
    }
  }
}
</script>