<template>
  <v-app v-if="vw">
    <Toolbar :datos="info" />
    <v-main>
      <Bread />
       <nuxt class="main-router-view" />
    </v-main>
    <Footer :datos="info" />
  </v-app>
</template>

<script>
import Toolbar from '~/components/theme/home/Toolbar'
import Footer from '~/components/theme/home/Footer'
import Bread from '~/components/theme/home/Breadcrumbs'

export default {
  name: 'index',
 

  components: {
    Toolbar,
    Footer,
    Bread,
  },
  data: () => ({
    enableMini: true,
    info: {},
    vw: false,
  }),


  head() {
      return {
        title: this.info.titulo ,
        meta: [
          {
            hid: 'descripcion',
            name: 'descripcion',
            content: this.info.descripcion
          }
        ],
        link: [
      { rel: 'icon', type: 'image/x-icon', href: this.info.favicon }
    ]
      }
    },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        let response = await this.crud('get', '/inicio')

        this.info = response.data.data

        this.vw = true
      } catch (error) {}
    },
  },
}
</script>
<style scoped>
.main-content {
  background-color: #f0f2f5;
  padding-top: 86px !important;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.slide-left-enter /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  top: 0;
  transform: translateX(-100%);
}

.slide-left-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  display: none;
  opacity: 0;
  top: 0;
  transform: translateX(100%);
}
</style>

