<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="item.nombre"
                :counter="150"
                :error-messages="validate.nombre"
                label="Título"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="item.descripcion"
                :counter="10"
                :error-messages="validate.descripcion"
                label="Descripción"
                required
              ></v-text-field>
            </v-col>
           
        
       
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  props: ['item', 'validate'],
  data: () => ({
    banner: null,
    upbanner: null,
  }),
  
  methods: {
    onFileChange(evt) {
      let imglogo = evt.target.files[0]

      this.item.url = imglogo
      var reader = new FileReader()

      reader.onload = (e) => {
        this.banner = e.target.result
      }
      reader.readAsDataURL(imglogo)
    },
    imglogo() {
      document.getElementById('file-logo').click()
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
