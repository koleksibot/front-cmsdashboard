<template>
  <div>
   
    <v-row>
      <v-col cols="12" sm="7">
        <v-row >
          
          <v-col>
            <v-card class="mx-auto" max-width="344" outlined>

              
              <v-list-item three-line>
                <v-list-item-content>
                
                   <v-list-item-title class="text-h5 mb-2"> Tipo de Cambio </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="teal lighten-4">
                  <v-icon x-large color="green"> mdi-cash-multiple</v-icon>
                </v-list-item-avatar>
              </v-list-item>
              <v-container>
                <v-row justify="center">
                  <v-col cols="12" sm="6" align-self="center">
                    <v-sheet  color="green lighten-3"
                      ><span class="ml-2">
                        COMPRA:
                        <p class="text-h5 ml-6">S/.{{ tipoacambio.Compra }}</p></span
                      >
                    </v-sheet>
                  </v-col>
                  <v-col cols="12" sm="6" align-self="center">
                    <v-sheet rounded  color="red lighten-4">
                      <span class="ml-2">
                        VENTA:
                        <p class="text-h5 ml-6">S/.{{ tipoacambio.Venta }}</p></span
                      >
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
              
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h4 mb-2"> Lima </v-list-item-title>
                  <p class="h5">{{ fecha }}</p>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                <v-row align="center">
                  <v-col class="text-h2" cols="6"> {{ clima }}&deg;C </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                      alt="Sunny image"
                      width="92"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="5"> <v-calendar> </v-calendar> </v-col
    ></v-row>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  name: 'homej',
  //   head: {
  //     title: 'Home',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'Home',
  //         content: 'Home page description'
  //       }
  //     ],
  //   },
  beforeRouteEnter(to, from, next) {
    to.meta.title = 'Inicio'
    next()
  },
  data() {
    return {
      enableMini: true,
      clima: {},
      noticias: [],
      tipoacambio: {},
    }
  },
  computed: {
    fecha() {
      var hoy = new Date()
      var fecha =
        hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear()
      var hora =
        hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
      var horas = fecha + ' ' + hora
      return horas
    },
  },

  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        //let response = await this.crud('get', '/home/')
        let response = await this.crud('get', '/dashboard')
       // console.log(response.data.data, 'yo')
        this.clima = response.data.data.Clima.ciudades[0].lima
        this.tipoacambio = response.data.data.Cambio.Cotizacion[0]
       // console.log(this.clima, 'hey')
        this.total = response.data.meta.last_page
        this.noticias = response.data.data
      } catch (error) {}
    },
  },
}
</script>