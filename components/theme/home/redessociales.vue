<template>
  <v-card class="flex" flat tile>
    <v-card-text class="py-2 text-center">
   
      <span class="text-subtitle-1">Compartir en :</span>
      <v-btn
        v-for="icon in redes"
        :key="icon.icon"
        class="mx-4"
        large
        icon
        :href="icon.link"
        color="primary"
        target="_blank"
      >
        <v-icon large size="32px">{{ icon.icon }}</v-icon>
      </v-btn>
      
    </v-card-text>
    
  </v-card>
</template>
<script>
export default {
  name: "redes",

  data: () => {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-whatsapp"],
    };
  },
  computed: {
    redes() {
      let red = [];
      this.icons.forEach((redes, index) => {
        const Obj = {};

        Obj.icon = redes;
        Obj.link = this.link(redes);

        red.push(Obj);
      });
      //console.log(red);
      return red;
    },
  },
  methods: {
    link(redes) {
      switch (redes) {
        case "mdi-facebook":
          return (
            "https://www.facebook.com/sharer.php?u=" + window.location.href
          );
          break;
        case "mdi-twitter":
          return (
            "https://twitter.com/intent/tweet?text=&url=" + window.location.href
          );
          break;
        case "mdi-whatsapp":
          return (
            "https://api.whatsapp.com/send?text=Lee esta publicación en: " +
            window.location.href
          );
          break;
      }
    },
  },
};
</script>