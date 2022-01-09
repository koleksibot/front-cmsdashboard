<template>
  <v-navigation-drawer
    app
    permanent
    :expand-on-hover="drawer"
    :mini-variant="drawer"
    class="menu-navigation-drawer"
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar> <div class="text-center">

          <v-avatar v-if="user.avatar" color="grey" size="64">
            <img  :src="user.avatar" alt="John" />
          </v-avatar   >
          <v-avatar v-else >
             <img  src="/person.png" alt="John" />
          </v-avatar> </div>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title"> {{user.fullname}} </v-list-item-title>
          <v-list-item-subtitle>{{user.email}} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list dense nav shaped>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          exact-active-class="primary--text"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },

    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.$store.commit('drawer', val)
      },
    },
  },
  mounted() {
    this.Menu()
  },
  methods: {
    Menu() {
      let user = this.$auth.user.profiles_id

      switch (user) {
        case 1:
          // console.log('admin')
          return (this.items = [
            //superadmin
            {
              icon: 'mdi-briefcase-outline',
              title: 'EMPRESA',
              to: '/admin/empresa',
            },

            {
              icon: 'mdi-tooltip-image-outline',
              title: 'BANNERS',
              to: '/admin/banner',
            },
            {
              icon: 'mdi-tooltip-image-outline',
              title: 'CATEGORIAS',
              to: '/admin/categorias',
            },
            {
              icon: 'mdi-newspaper-variant-multiple-outline',
              title: 'NOTICIAS',
              to: '/admin/noticias',
            },
            {
              icon: 'mdi-account-group-outline',
              title: 'SERVICIOS',
              to: '/admin/servicios',
            },
            {
              icon: 'mdi-tooltip-image-outline',
              title: 'TRABAJOS',
              to: '/admin/trabajos',
            },
            {
              icon: 'mdi-account-network-outline',
              title: 'CLIENTES',
              to: '/admin/clientes',
            },
            // {
            //   icon: 'mdi-account-plus-outline',
            //   title: 'ROLES',
            //   to: '/admin/roles',
            // },
            {
              icon: 'mdi-account-plus-outline',
              title: 'USUARIOS',
              to: '/admin/usuarios',
            },
            {
              icon: ' mdi-email-outline',
              title: 'MENSAJES',
              to: '/admin/mensajes',
            },
          ])
          break
        case '2':
          return (this.items = [
           
            {
              icon: 'mdi-tooltip-image-outline',
              title: 'BANNERS',
              to: '/admin/banner',
            },
            {
              icon: 'mdi-tooltip-image-outline',
              title: 'CATEGORIAS',
              to: '/admin/categorias',
            },
           
            {
              icon: 'mdi-account-group-outline',
              title: 'SERVICIOS',
              to: '/admin/servicios',
            },
            {
              icon: 'mdi-account-network-outline',
              title: 'CLIENTES',
              to: '/admin/clientes',
            },
          
           
            {
              icon: ' mdi-email-outline',
              title: 'MENSAJES',
              to: '/admin/mensajes',
            },
          ])
          break
        case 'productos':
          return '/' + this.name
          break
        case 'articulo':
          return '/' + this.name
          break
      }
    },
   
  },
}
</script>
<style scoped>
.menu-navigation-drawer {
  z-index: 9999;
}
</style>