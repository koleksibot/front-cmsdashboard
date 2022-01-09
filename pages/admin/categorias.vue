<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Categorias",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Categoría";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Categoría",
        view: 2,
        route: "categorias",
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
