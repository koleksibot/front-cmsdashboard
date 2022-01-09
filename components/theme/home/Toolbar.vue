<template>
  <div>
    <v-system-bar color="#1f425d" dark>
      <v-spacer></v-spacer>

      <v-btn text to="/admin"> <v-icon>mdi-lock</v-icon></v-btn>
    </v-system-bar>
    <v-app-bar height="100" color="white" dark>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="toggle"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text large href="/">
        <v-img :src="datos.logo"></v-img>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, i) in items"
        :key="i"
        text
        class="hidden-sm-and-down"
        :to="link.path"
        color="#1f425d"
      >
        <v-icon class="mr-1">{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      absolute
      v-model="collapse"
      :mini-variant.sync="mini"
      class="d-flex d-sm-none dark"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar class="mr-10" color="grey darken-1" size="64"></v-avatar>
        </v-list-item-avatar>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>fa-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  props: ['datos'],
  data() {
    return {
      collapse: false,
      items: [
        { title: 'Inicio',  path: '/' },
        { title: 'Nosotros',  path: '/nosotros' },
        { title: 'Trabajos Realizados',  path: '/trabajos' },
        { title: 'Servicios',  path: '/servicios' },
        { title: 'Contactenos',  path: '/contactenos' },
      ],
      mini: false,
    }
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse
    },
  },
}
</script>
