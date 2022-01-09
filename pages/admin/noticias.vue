<template>
  <div >
    <tables :info="datos" />
  </div>
</template>
<script>
import Tables from "~/components/theme/dashboard/Tables";
export default {
 
  layout: "dashboard",
  name: "Noticias",
  components: {
    Tables,
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = "Agregar Noticias";
    next();
  },
  data() {
    return {
      enableMini: true,
      datos: {
        title: " Noticias",
        view: 3,
        route: "noticias",
        headers: [
          { text: "Título", align: "start", sortable: false, value: "titulo" },
          { text: "Imagen", value: "img" },
          { text: "Categoria", value: "categoria.nombre" },
          { text: "etiquetas", value: "etiquetas" },
          { text: "Acciones", value: "actions", sortable: false },
        ],
      },
    };
  },
};
</script>
