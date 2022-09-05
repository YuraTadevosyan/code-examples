<template>
  <v-navigation-drawer
      left
      light
      fixed
      stateless
      temporary
      touchless
      color="#3e4968"
      v-model="drawer"
      overlay-color="#EEEEEE"
      overlay-opacity="0.56"
      class="pa-6 left-sidebar"
      :hide-overlay="!$vuetify.breakpoint.xsOnly"
  >
    <div class="icon-bar d-flex justify-end px-8 px-xs-0 v-navigation-drawer--fixed">
      <v-icon
          size="27"
          color="#E0E0E0"
          @click.native.stop="toggleSidebar"
      >
        mdi-close
      </v-icon>
    </div>

    <div class="leftbar-items">
      <div
          @click="toHome"
      >
        <router-link
            to="/"
            class="text-decoration-none d-flex align-center flex-column logo-container"
        >
          <v-img
              contain
              height="188"
              @click="clearSelection"
              class="logo"
              :src="logo"
          ></v-img>
        </router-link>
      </div>

      <v-list
          nav
          dense
          class="nav-menu"
      >
        <v-list-item-group
            v-model="selection"
        >
          <router-link
              v-for="pageList in pagesList" :key="pageList.routeLink"

              :to="pageList.routeLink"
              class="text-decoration-none"
          >
            <v-list-item
                :ripple="false"
                class="list-items"
                @click="$vuetify.breakpoint.xsOnly ? toggleSidebar() : ''"
            >
              <v-list-item-title
                  class="white--text text-decoration-none list-item text-center py-5"
              >
                {{ pageList.pagesName }}
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftBar',
  data: () => ({
    drawer: true,
    logo: require('@/assets/logo.png'),
    selection: null,
    pagesList: [
      {routeLink: 'about', pagesName: 'About'},
      {routeLink: 'donation', pagesName: 'Donate'},
      {routeLink: 'faq', pagesName: 'FAQ'},
      {routeLink: 'contact', pagesName: 'Contact'},
    ],
  }),
  methods: {
    toHome() {
      this.$root.$emit('toHome', false);
      this.$vuetify.breakpoint.xsOnly ? this.toggleSidebar() : '';
    },

    toggleSidebar() {
      this.drawer = !this.drawer
      this.$emit('toggleSidebar');
    },

    toggle(value) {
      this.drawer = value;
    },

    clearSelection() {
      this.selection = null;
    }
  },
}
</script>