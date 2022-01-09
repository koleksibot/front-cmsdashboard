<template>
  <div>
    <!-- banner -->
    <v-carousel cycle delimiter-icon="mdi-minus">
      <v-carousel-item
        v-for="(item, i) in banner"
        :key="i"
        :src="item.url"
        reverse-transition="fade-transition"
        transition="fade-transition"
        class="gradient-fill"
      >
        <v-container fill-height>
          <div style="max-width: 600px">
            <div
              class="
                text-md-h2
                mb-3
                text-sm-h3 text-h5
                font-weight-black
                white--text
              "
            >
              {{ item.alt }}
            </div>
            <p class="mb-5 white--text h6">{{ item.descripcion }}</p>
            <v-btn :x-large="$vuetify.breakpoint.smAndUp" class="my-3 primary"
              >Leer más</v-btn
            >
            <span class="mx-2 my-4"></span>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <!-- banner -->

    <v-container>
      <v-row align-content="center" justify="center">
        <v-col cols="12" lg="12" xl="9" md="10">
          <v-card-title
            class="text-h4 text-uppercase text-center font-weight-light mb-xs-4"
            ><v-spacer></v-spacer>Trabajos Realizados<v-spacer></v-spacer
          ></v-card-title>
          <v-responsive class="mx-auto" width="128">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
          <v-row class="mt-2">
            <v-col cols="12" md="3" v-for="servi in trabajos" :key="servi.id">
              <v-card flat dark :to="'servicios/' + servi.nombre">
                <v-img
                  :src="servi.imagen"
                  :aspect-ratio="16 / 9"
                  gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                  height="450px"
                  class="elevation-2 fill-height"
                >
                  <div
                    class="d-flex flex-column justify-space-between fill-height"
                  >
                    <v-card-text>
                      <v-btn color="primary"
                        ><v-icon class="mr-1">
                          mdi-map-marker-radius-outline </v-icon
                        >{{ servi.lugar }}</v-btn
                      >
                    </v-card-text>

                    <v-card-text>
                      <div class="d-flex align-center">
                        <!-- <v-avatar color="primary" size="36">
                      <v-icon dark>mdi-lan</v-icon>
                    </v-avatar> -->

                        <div
                          class="text-h5 py-3 pl-2 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          {{ servi.nombre }}
                        </div>
                      </div>
                    </v-card-text>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="grey lighten-4 mt-8">
            <v-col cols="12" sm="3" align-self="center">
              <p
                :class="$vuetify.theme.dark ? 'grey--text' : null"
                class="text-h4 text-center font-weight-light mb-xs-4"
              >
                NUESTROS CLIENTES
              </p>
            </v-col>
            <v-col cols="12" sm="9">
              <v-slide-group show-arrows draggable="true">
                <template>
                  <v-slide-item v-for="cliente in clientes" :key="cliente.id">
                    <v-card
                      :class="$vuetify.theme.dark ? 'white' : 'grey lighten-4'"
                      class="mx-4 pa-0"
                      height="90"
                      width="140"
                      flat
                    >
                      <v-img height="90" contain :src="cliente.logo"></v-img>
                    </v-card>
                  </v-slide-item>
                  <v-responsive height="50" class="my-auto">
                    <v-divider vertical></v-divider>
                  </v-responsive>
                </template>
              </v-slide-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <v-card-title
                  class="
                    text-h4 text-uppercase text-center
                    font-weight-light
                    mb-xs-4
                  "
                  ><v-spacer></v-spacer>Nuestros Servicios<v-spacer></v-spacer
                ></v-card-title>
                <v-responsive class="mx-auto" width="128">
                  <v-divider class="mb-1"></v-divider>

                  <v-divider></v-divider>
                </v-responsive>
                <v-row class="mt-2">
                  <v-col
                    cols="12"
                    md="3"
                    v-for="servi in servicios"
                    :key="servi.id"
                  >
                    <v-card flat dark :to="'servicios/' + servi.nombre">
                      <v-img
                        :src="servi.imagen"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="450px"
                        class="elevation-2 fill-height"
                      >
                        <div
                          class="
                            d-flex
                            flex-column
                            justify-space-between
                            fill-height
                          "
                        >
                          <v-card-text>
                            <v-btn color="primary"
                              ><v-icon class="mr-1">
                                mdi-map-marker-radius-outline </v-icon
                              >{{ servi.lugar }}</v-btn
                            >
                          </v-card-text>

                          <v-card-text>
                            <div class="d-flex align-center">
                              <!-- <v-avatar color="primary" size="36">
                      <v-icon dark>mdi-lan</v-icon>
                    </v-avatar> -->

                              <div
                                class="text-h5 py-3 pl-2 font-weight-bold"
                                style="line-height: 1.2"
                              >
                                {{ servi.nombre }}
                              </div>
                            </div>
                          </v-card-text>
                        </div>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
                <!-- <v-row>
              <v-col v-for="(noti, i) in servicios" :key="i" cols="12" md="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      :to="'noticias/' + noti.titulo"
                    >
                      <v-img
                        :src="noti.img"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="primary" to="category"> {{noti.categoria.nombre}} </v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          {{ noti.titulo }}
                        </div>

                        <p class="text-body-1 py-4" v-html="noti.contenido"></p>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row> -->
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  auth: false,
  beforeRouteEnter(to, from, next) {
    to.meta.title = 'INICIO'
    next()
  },

  data: () => ({
    info: [],
    banner: [],
    servicios: [],
    clientes: [],
    noticias: [],
    trabajos: [],
    redes: [],
  }),
  computed: {
    footer() {
      return this.info.footer
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        let response = await this.crud('get', '/home')
        console.log(response.data.data, 'datos dsasa')
        this.info = response.Infoweb
        this.noticias = response.data.data.Noticias.data
        this.servicios = response.data.data.Servicios.Servicio
        this.banner = response.data.data.Banner
        this.trabajos = response.data.data.Trabajos.Trabajo
        this.clientes = response.data.data.Clientes.clientes
      } catch (error) {}
    },
  },
}
</script>

