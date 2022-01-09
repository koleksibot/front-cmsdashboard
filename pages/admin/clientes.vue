<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Clientes",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Clientes";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Clientes",
        view: 5,
        route: "clientes",
        headers: [
          { text: "Razon Social", align: "start", sortable: false, value: "razonSocial" },
          { text: "Teléfono", value: "telefono" },
          { text: "Correo", value: "correo" },
          { text: "Logo", value: "logo" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
