<template>
  <v-app-bar class="app-bar" color="#fff" dense app>
    <v-app-bar-nav-icon small @click.stop="toggleDrawer">
      <v-icon>{{ toggleNavIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <v-breadcrumbs :items="breadCrumbs"></v-breadcrumbs>
    <v-spacer />

    <v-menu
    bottom
      offset-y
      origin="center center"
      :nudge-bottom="10"
      left
     
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#b9cdef" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="blue darken-2" x-large>mdi-account-circle</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.usuario }}</v-list-item-title>
              <v-list-item-subtitle> {{ user.correo }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list dense>
          <v-list-item @click="handleLogout">
            <!-- <v-list-item-action>
              <v-icon left> mdi-wrench </v-icon>
            </v-list-item-action> -->
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item>
        </v-list>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark small color="red" @click="handleLogout">
            Cerrar Sesión
            <v-icon right>mdi-close</v-icon>
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>

    <template v-slot:extension>
      <visited-bar />
    </template>
  </v-app-bar>
</template>
<script>
import VisitedBar from '~/components/theme/dashboard/VisitedBar'
import { createBreadCrumbs } from '~/components/theme/dashboard/utils/app'
export default {
  props: ['datos'],
  components: {
    VisitedBar,
  },
  data() {
    return {}
  },
  computed: {
    user() {
      let dato = this.$auth.user
      return dato
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.$store.commit('drawer', val)
      },
    },
    toggleNavIcon() {
      return this.drawer
        ? 'mdi-format-indent-increase'
        : 'mdi-format-indent-decrease'
    },
    breadCrumbs() {
      return createBreadCrumbs(this.$route)
    },
  },
  methods: {
    handleLogout() {
      this.$auth.logout()
    },
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
}
</script>
<style scoped>
.app-bar {
  height: auto !important;
  z-index: 999 !important;
}

.app-bar >>> .v-toolbar__extension {
  padding: 0 !important;
  height: 36px !important;
}
.app-bar >>> .v-breadcrumbs__item--disabled {
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>

