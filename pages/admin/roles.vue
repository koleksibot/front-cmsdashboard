<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Roles",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Roles";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Roles",
        view: 8,
        route: "roles",
        headers: [
          { text: "Nombre", align: "start", sortable: false, value: "nombre" },
          { text: "Descripcion", value: "descripcion" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
