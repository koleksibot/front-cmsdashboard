<template>
  <div>
    <v-card color="#31A2C7">
      <v-container>
        <v-row class="mt-4" no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4">
                <v-icon class="display-2">mdi-map-marker-outline</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <span class="font-weight-light" v-html="patas.direccion"></span>
                <p class="font-weight-thin">dirección</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4">
                <v-icon class="display-2">mdi-email-outline</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <span class="font-weight-light" v-html="patas.correo" ></span>
                <p class="font-weight-thin">correo</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <span class="font-weight-light" v-html="patas.numero"></span>
                <p class="font-weight-thin">teléfono</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container> </v-card
    ><v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="foot">
          <strong class="subheading">Nuestras redes sociales.</strong>

          <v-spacer></v-spacer>
          <div v-for="icon in datos.redes" :key="icon.id">
            <v-btn
              v-if="icon.link"
              class="mx-4"
              large
              icon
              :href="icon.link"
              target="_blank"
            >
              <v-icon large size="32px">{{ icon.icono }}</v-icon>
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>{{ datos.titulo }} </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  props: ['datos'],
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      patas: {},
    }
  },

  mounted() {
    this.patas = this.datos.footer
  },
}
</script>
<style>
.foot {
  background-color: #1f415d !important;
  border-color: #1f415d !important;
}
</style>
