<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="item.alt"
                :counter="150"
                :error-messages="validate.alt"
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
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="item.link"
                :counter="10"
                :error-messages="validate.link"
                label="Link"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="12" >
              <v-card class="mt-4" >
                <v-card-title> Slider </v-card-title>
                <v-divider class="mx-1"></v-divider>
                <div class="image-upload mt-2">
                  <label for="file-logo">
                    <img v-if="banner" :src="banner" alt="" class="preview" />
                    <img v-else :src="item.url" class="preview" />
                  </label>

                  <input
                    id="file-logo"
                    type="file"
                    accept="image/*"
                    @change="onFileChange"
                    name="images"
                  /><v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="imglogo()">
                      <v-icon dark right>mdi-content-save-outline</v-icon>
                      Agregar </v-btn
                    ><v-spacer></v-spacer>
                  </v-card-actions>
                </div>
              </v-card>
            </v-col>
          </v-row>
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
