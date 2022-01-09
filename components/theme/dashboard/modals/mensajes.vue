<template>
  <v-form ref="form">
    <v-container>
      <v-col>
        <v-card class="mx-auto">
          <v-alert text dense color="teal" icon="mdi-domain" border="left"
            >Rasón Social:
            {{ item.razonSocial }}
            <v-icon>mdi-chevron-right</v-icon> Mail: {{ item.correo }}
            <v-icon>mdi-chevron-right</v-icon>
            <v-chip class="ma-2" color="red" outlined>
              Telefono:
              {{ item.telefono }}
            </v-chip>
          </v-alert>

          <v-img
            :src="item.imagen"
          ></v-img>

          <v-card-title> {{ item.asunto }}</v-card-title>

          <v-card-subtitle> {{ item.mensaje }} </v-card-subtitle>
        </v-card>
      </v-col>
    </v-container>
  </v-form>
</template>
<script>
export default {
  props: ['item', 'validate'],
  data: () => ({
    banner: null,
    upbanner: null,

    contentHolder: '',
    category: [],
  }),
  mounted() {
    this.loadCategorias()
  },
  methods: {
    onFileChange(evt) {
      let imglogo = evt.target.files[0]
      this.item.user_id = this.$auth.user.id
      this.item.logo = imglogo
      var reader = new FileReader()

      reader.onload = (e) => {
        this.banner = e.target.result
      }
      reader.readAsDataURL(imglogo)
    },
    imglogo() {
      document.getElementById('file-logo').click()
    },
    async loadCategorias() {
      try {
        let response = await this.crud('get', 'categorias')
        this.category = response.data.data
      } catch (error) {
        // console.log(error.response.data, 'error')
      }
    },
  },
}
</script>
<style scoped>
.crud-table >>> .v-data-table__wrapper {
  overflow: hidden;
}
.image-upload > input {
  display: none;
  justify-content: center;
  align-items: center;
}
img.preview {
  max-width: 220px;
  max-height: 220px;
}
</style>
