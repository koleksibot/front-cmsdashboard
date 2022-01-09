<template>
  <v-card>
    <tables :info="datos" />
  </v-card>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Usuarios",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Usuarios";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: "Crear Usuario",
        view: 6,
        route: "usuarios",
        headers: [
          { text: "Nombres", align: "start", sortable: false, value: "name" },
          { text: "Apellidos", value: "fullname" },
          { text: "Rol", value: "profiles.nombre" },
           { text: "Correo", value: "email" },
           { text: "Avatar", value: "avatar" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
