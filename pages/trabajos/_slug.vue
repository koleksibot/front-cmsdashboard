<template>
  <v-container>
    <v-row>
      <v-col> </v-col>
      <v-col cols="12" md="10" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                :src="trabajos.imagen"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="accent">{{categoria}}</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>{{ trabajos.nombre }}</h4>
                </div>

                <v-divider class="my-4"></v-divider>

                <div>
                  <p
                    class="text-subtitle-1 font-weight-medium"
                    v-html="trabajos.descripcion"
                  ></p>
                </div>

                <div class="d-flex align-center justify-space-between mt-8">
                  <div>
                    <v-row>
                      <v-col
                        class="flex-shrink-0"
                        cols="auto"
                        v-for="tag in trabajos.etiquetas"
                        :key="tag.id"
                      >
                        <v-chip color="accent">#{{ tag }}</v-chip>
                      </v-col>

                      <!-- <v-col class="flex-shrink-0" cols="auto">
                        <v-chip color="accent">#Travel</v-chip>
                      </v-col>

                      <v-col class="flex-shrink-0" cols="auto">
                        <v-chip color="accent">#Birds</v-chip>
                      </v-col> -->
                    </v-row>
                  </div>

                  <div class="text-h6">
                    <redes />
                    <!-- > Compartir en:
                    <v-btn icon large>
                      <v-icon large color="primary">mdi-facebook</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon large color="primary">mdi-twitter</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon large color="primary">mdi-linkedin</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon large color="primary">mdi-instagram</v-icon>
                    </v-btn> -->
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>

      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import redes from '~/components/theme/home/redessociales'
export default {
  layout: 'homepage',
   auth: false,
  name: 'Category',
  components: {
    redes,
  },
  data() {
    return {
      trabajos: [],
      categoria:"",
      contenido:""
    }
  },
  head() {
    return {
      title: this.$route.params.slug,
      meta: [
        {
          hid: 'descripcion',
          name: 'Descripcion',
          content: this.categoria,
        },
        {
          hid: 'Contenido',
          name: 'Contenido',
          content: this.contenido.slice(0,200),
        },
      ],
      // link: [{ rel: 'icon', type: 'image/x-icon', href: this.info.favicon }],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      let route = '/trabajo/' + this.$route.params.slug
      try {
        let response = await this.crud('get', route)
       

        this.trabajos = response.data.data
        this.contenido = response.data.data.descripcion
        this.categoria = this.trabajos.categorias.nombre
      } catch (error) {}
    },
  },
}
</script>