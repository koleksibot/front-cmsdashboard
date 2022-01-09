<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "TrabajosRealizados",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Trabajos";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Trabajos",
        view: 9,
        route: "trabajos",
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
