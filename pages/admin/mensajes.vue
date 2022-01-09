<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Mensajes",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Mensajes";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Mensajes",
        view: 7,
        route: "contacto",
        headers: [
          { text: "razonSocial", align: "start", sortable: false, value: "razonSocial" },
          { text: "Asunto", value: "asunto" },
          { text: "Correo", value: "correo" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
