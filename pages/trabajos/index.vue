<template>
  <div>
    <v-container>
      <h1
        class="display-2 font-weight-bold mb-3 mt-8 text-uppercase text-center"
      >
        Trabajos realizados
      </h1>

      <v-responsive class="mx-auto mb-10" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row justify="center">
        <v-col cols="12" md="10" xl="8">
          <v-row class="mt-2">
            <v-col cols="12" md="3" v-for="work in trabajos" :key="work.id">
              <v-card flat dark :to="'trabajos/' + work.nombre">
                <v-img
                  :src="work.imagen"
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
                        >{{ work.lugar }}</v-btn
                      >
                    </v-card-text>

                    <v-card-text>
                      <div class="d-flex align-center">
                        <div
                          class="text-h5 py-3 pl-2 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          {{ work.nombre }}
                        </div>
                      </div>
                    </v-card-text>
                  </div>
                </v-img>
              </v-card>
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
    trabajos: [],
    pagination: {
      per_page: 10,
      page: 1,
    },
    total: null,
  }),

  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        let response = await this.crud(
          'get',
          '/trabajo?page=' +
            this.pagination.page +
            '&per_page=' +
            this.pagination.per_page
        )

        this.total = response.data.meta.last_page
        this.trabajos = response.data.data
      } catch (error) {}
    },
  },
}
</script>
