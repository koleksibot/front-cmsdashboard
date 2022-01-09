<template>
  <div>
    <v-container>
      <h1
        class="display-2 font-weight-bold mb-3 mt-8 text-uppercase text-center"
      >
        Noticias 
      </h1>

      <v-responsive class="mx-auto mb-10" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row justify="center">
        <v-col cols="12" md="10" xl="8">
          <v-row v-for="nota in noticias" :key="nota.id" class="py-4">
            <v-col cols="12" md="4">
              <v-card flat height="100%" :to="'noticias/' + nota.titulo">
                <v-img
                  :src="nota.img"
                  :aspect-ratio="16 / 9"
                  height="100%"
                ></v-img>
              </v-card>
            </v-col>

            <v-col>
              <div>
                <v-btn depressed color="accent">
                  {{ nota.categoria.nombre }}
                </v-btn>

                <h3 class="text-h4 font-weight-bold pt-3">
                  {{ nota.titulo }}
                </h3>

                <span
                  class="text-h6 font-weight-regular pt-3 text--secondary"
                  v-html="nota.contenido"
                >
                </span>

                <div class="d-flex align-center">
                  <v-avatar color="accent" size="36">
                    <v-icon dark>mdi-feather</v-icon>
                  </v-avatar>

                  <div class="pl-2">{{ nota.usuario.name }}</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="text-center mt-8">
        <v-pagination
          v-model="pagination.page"
          :length="total"
          @input="load()"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
   auth: false,
  data: () => ({
    noticias: [],
    pagination: {
      per_page: 10,
      page: 1,
    },
    total: null,
  }),
  head() {
    return {
      title: "Noticias",
      // meta: [
      //   {
      //     hid: 'descripcion',
      //     name: 'descripcion',
      //     content: this.info.descripcion,
      //   },
      // ],
      // link: [{ rel: 'icon', type: 'image/x-icon', href: this.info.favicon }],
    }
  },

  mounted() {
    this.load()
  },
  methods: {
    async load() {
     // console.log(this.pagination, 'pagi')
      try {
        let response = await this.crud(
          'get',
          '/noticia?page=' +
            this.pagination.page +
            '&per_page=' +
            this.pagination.per_page
        )

        this.total = response.data.meta.last_page
        this.noticias = response.data.data
      } catch (error) {}
    },
  },
}
</script>
