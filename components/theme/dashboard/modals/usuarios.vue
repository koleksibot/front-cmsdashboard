<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row no-gutters
>
            <v-col cols="12">
              <v-text-field
                v-model="item.name"
                :error-messages="validate.name"
                label="Nombres"
                required
                outlined
              ></v-text-field>
              
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="item.fullname"
                :error-messages="validate.fullname"
                label="Apellidos"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
               <v-select
                v-model="item.profiles_id"
                :items="category"
                item-value="id"
                item-text="nombre"
                label="Seleccione una Categoría"
                outlined
                :error-messages="validate.rol_id"
              ></v-select>
            </v-col>
            <v-col cols="12">
              
            <v-text-field
                v-model="item.email"
                :error-messages="validate.email"
                label="email"
                required
                outlined
              ></v-text-field>
             
            </v-col>
             <v-col cols="12">
              
            <v-text-field
                v-model="item.password"
                :error-messages="validate.password"
                label="password"
                required
                outlined
              ></v-text-field>
               <v-text-field
                v-model="item.password_confirmation"
                :error-messages="validate.password_confirmation"
                label="confirmar password "
                required
                outlined
              ></v-text-field>
             
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <v-row>
            <v-col cols="12">
              <v-card class="mt-4">
                <v-card-title> Avatar </v-card-title>
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
    
    contentHolder: '',
    category:[]
  }),
mounted() {
  this.loadCategorias()
},
  methods: {
    onFileChange(evt) {
      let imglogo = evt.target.files[0]
      this.item.user_id = this.$auth.user.id
      this.item.avatar = imglogo
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
        let response = await this.crud('get', 'roles')
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
