<template>
  <client-only placeholder="Loading...">
    <div id="appRoot">
      <template>
        <v-app id="inspire" class="app">
          <toolbar  />
          <drawer  />

          <v-main class="main-content">
            <v-container fluid class="height-100pc">
              <transition name="slide-left" appear>
                <nuxt class="main-router-view height-100pc" />
              </transition>
            </v-container>
            <footer></footer>
          </v-main>
        </v-app>
      </template>
    </div>
  </client-only>
</template>

<script>
import Drawer from "~/components/theme/dashboard/Drawer";
import Toolbar from "~/components/theme/dashboard/Toolbar";
import Footer from "~/components/theme/dashboard/Footer";

export default {
  name: "tema",

  components: {
    Drawer,
    Toolbar,
    Footer,
  },
  data: () => ({
    enableMini: true,
  }),

  methods: {},
};
</script>
<style scoped>
.main-content {
  background-color: #F6F7FF;
  padding-top: 86px !important;
}
.height-100pc {
    height: 100%!important;
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

