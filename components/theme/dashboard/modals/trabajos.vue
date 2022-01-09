<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="item.nombre"
                :error-messages="validate.nombre"
                label="Nombre"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <!-- <client-only placeholder="loading...">
                <ckeditor-nuxt
                  v-model="item.descripcion"
                  :config="editorConfig"
                />
              </client-only> -->
              <v-textarea
                v-model="item.descripcion"
                :error-messages="validate.descripcion"
                label="Descripción"
                required
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <v-row dense>
            <v-col>
              <v-text-field
                v-model="item.lugar"
                :error-messages="validate.lugar"
                label="Lugar"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="item.categoria_id"
                :items="category"
                item-value="id"
                item-text="nombre"
                label="Seleccione una Categoría"
                outlined
                :error-messages="validate.categoria_id"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="item.etiquetas"
                label="Etiquetas"
                multiple
                chips
                outlined
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-card class="mt-4">
                <v-card-title> Slider </v-card-title>
                <v-divider class="mx-1"></v-divider>
                <div class="image-upload mt-2">
                  <label for="file-logo">
                    <img v-if="banner" :src="banner" alt="" class="preview" />
                    <img v-else :src="item.imagen" class="preview" />
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
      <v-row>
        <div v-for="image in images" class="mx-auto">
          <v-card class="mt-4" width="250">
            <img :src="image.image_path" class="preview" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="deleteImg(image)">
                <v-icon dark right>mdi-cancel</v-icon> Borrar
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>

        <v-card class="mt-4" width="250">
          <div class="image-upload">
            <label for="file-input">
              <img src="/image.jpg " class="preview" />
            </label>

            <input
              id="file-input"
              type="file"
              multiple
              accept="image/*"
              @change="handleSelects"
              name="images"
            />
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="removeImage()">
              <v-icon dark right>mdi-content-save-outline</v-icon>
              Agregar </v-btn
            ><v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
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

    contentHolder: '',
    category: [],
    images: [],
    imgs: [],
    pics: [],
  }),
  mounted() {
    this.loadCategorias()
  },
  watch: {
    item() {
      if(this.item != null) {
        this.loadImagenes()
      }
      
    },
  },
  methods: {
    async loadImagenes() {
      try {
        let response = await this.crud('get', 'imagenes/' + this.item.id)
        this.images = response.data.data
      } catch (error) {}
    },
    onFileChange(evt) {
      let imglogo = evt.target.files[0]
      this.item.user_id = this.$auth.user.id
      this.item.imagen = imglogo
      var reader = new FileReader()

      reader.onload = (e) => {
        this.banner = e.target.result
      }
      reader.readAsDataURL(imglogo)
    },

    handleSelects(e) {
      var ds = e.target.files
      this.item.images = e.target.files

      let fileList = Array.prototype.slice.call(e.target.files)

      fileList.forEach((f) => {
        if (!f.type.match('image.*')) {
          return
        }

        let reader = new FileReader()
        let that = this
        reader.onload = function (e) {
          that.images.push(e.target.result)
          that.imgs.push(f)
        }
        reader.readAsDataURL(f)
      })
    },

    imglogo() {
      document.getElementById('file-logo').click()
    },
    removeImage() {
      document.getElementById('file-logo').click()
    },
    async loadCategorias() {
      try {
        let response = await this.crud('get', 'categorias')
        this.category = response.data.data
      } catch (error) {}
    },
    async deleteImg(item) {
      this.isBusy = true
      var file = '' + item.id

      try {
        let response = await this.crud('DELETE', 'deleteimg/' + item.id)

        this.alert.active = !this.alert.active
        this.alert.type = 'success'
        this.alert.text = response.data.msg
        this.isBusy = false

        this.isBusy = false
        this.load()
      } catch (error) {
        this.warning = error.response.data
        this.alert.active = !this.alert.active
        this.alert.type = 'red'
        this.alert.text = error.response.data.msg
        this.isBusy = false
        if (error.response.status === 401) {
          this.$auth.logout()
        }
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
