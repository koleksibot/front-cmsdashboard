<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Servicios",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Servicios";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Servicios",
        view: 4,
        route: "servicios",
        headers: [
          { text: "Nombre", align: "start", sortable: false, value: "nombre" },
          { text: "Lugar", value: "lugar" },
          { text: "categoria", value: "categoria.nombre" },
          { text: "imagen", value: "imagen" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
