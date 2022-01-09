<template>
  <v-card >
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Banner",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Sliders";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Slider",
        view: 1,
        route: "banner",
        headers: [
          { text: "nombre", align: "start", sortable: false, value: "alt" },
          { text: "Imagen", value: "url" },
          { text: "link", value: "puntos" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
<style scoped>
  .height-100pc {
   height: 100% !important
}
</style>
