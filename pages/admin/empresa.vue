<template>
  <client-only placeholder="Loading...">
    <div class="height-100pc">
      <v-skeleton-loader v-if="isBusy" type="date-picker"></v-skeleton-loader>

      <v-card v-else class="py-2 height-100pc crud-card" elevation="1">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" editable step="1">
              Información Básica
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" editable step="2">
              Nosotros
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" editable> Redes Sociales </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1" class="pa-2">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-row
                    ><v-col cols="12">
                      <v-card color="#E3F2FD" class="mx-1 mb-1" flat>
                        <v-card-title class="pa-6 pb-3"> Título </v-card-title>
                        <v-card-text>
                          <v-text-field
                            dense
                            v-model="empresa.titulo"
                            :error-messages="validate.titulo"
                            persistent-placeholder
                            outlined
                            required
                            hint="5 y 70 caracteres"
                            persistent-hint
                          ></v-text-field>
                        </v-card-text>
                      </v-card> </v-col
                    ><v-col cols="12">
                      <v-row>
                        <v-col cols="12">
                          <v-card color="#EDE7F6" class="mx-1 mb-1">
                            <v-card-title class="pa-6 pb-3">
                              Descripción
                            </v-card-title>
                            <v-card-text>
                              <v-textarea
                                v-model="empresa.descripcion"
                                :error-messages="validate.descripcion"
                                label=""
                                persistent-placeholder
                                outlined
                                required
                                hint="150 y 250 caracteres"
                                persistent-hint
                                prepend-icon="mdi-comment"
                                counter="250"
                                rows="2"
                                dense
                              ></v-textarea>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-row>
                    <v-col cols="12">
                      <v-card color="#E0F2F1">
                        <v-card-title> Imágenes </v-card-title>
                        <v-card-text>
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-card class="mt-1" width="250">
                                <v-card-title>logo</v-card-title>

                                <v-divider class="mx-2"></v-divider>
                                <cargadorimg
                                  :dtos="empresa.logo"
                                  :type="type"
                                  @imgus="imagenLogo"
                                />
                              </v-card>
                            </v-col>
                            <v-col cols="12" sm="6"
                              ><v-card class="mt-1" width="250">
                                <v-card-title> Favicon </v-card-title>
                                <v-divider class="mx-1"></v-divider>
                                <cargadorimg
                                  :dtos="empresa.favicon"
                                  :type="type"
                                  @imgus="imagenFavi"
                                />
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card color="#FFF3E0" height="100%">
                    <!-- <v-card-title> Footer </v-card-title> -->
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <span class="text-h6"> Número </span>
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="footer.numero"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                        <v-col
                          ><span class="text-h6"> Dirección </span>
                          <!-- <v-text-field
                          v-model="footer.direccion"
                          :error-messages="validate.titulo"
                          persistent-placeholder
                          outlined
                          clearable
                          required
                          hint="5 y 70 caracteres"
                          persistent-hint
                          label="Dirección"
                          dense
                        ></v-text-field> -->
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="footer.direccion"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                        <v-col>
                          <span class="text-h6"> Correos </span>
                          <!-- <v-text-field
                          v-model="footer.correo"
                          :error-messages="validate.titulo"
                          persistent-placeholder
                          outlined
                          clearable
                          required
                          hint="5 y 70 caracteres"
                          persistent-hint
                          label="Correos"
                          dense
                        ></v-text-field> -->
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="footer.correo"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <div class="text-right mt-4">
                <v-btn color="primary" @click="e1 = 2"> continuar </v-btn>

                <v-btn text> Cancelar </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-row>
                <v-col cols="12">
                  <v-card color="#E0F2F1">
                    <v-card-title> Nosotros </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col>
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="etiquetas.nosotros"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card color="#E8EAF6">
                    <v-card-title> Misión </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col cols="9">
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="etiquetas.mision"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                        <v-col cols="3">
                          <div v-if="etiquetas.mision">
                            <cargadorimg
                              :dtos="etiquetas.mision"
                              :type="type"
                              @imgus="imagenMi"
                            />
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card color="#B3E5FC">
                    <v-card-title> Visión </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col cols="9">
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="etiquetas.vision"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                        <v-col cols="3">
                          <div v-if="etiquetas.vision">
                            <cargadorimg
                              :dtos="etiquetas.vision"
                              :type="type"
                              @imgus="imagenVi"
                            />
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card color="#CFD8DC">
                    <v-card-title> Historia </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col cols="9">
                          <ClientOnly>
                            <!-- Use the component in the right place of the template -->
                            <tiptap-vuetify
                              v-model="etiquetas.historia"
                              :extensions="extensions"
                            />

                            <template #placeholder> Loading... </template>
                          </ClientOnly>
                        </v-col>
                        <v-col cols="3">
                          <div v-if="etiquetas.nosotros">
                            <cargadorimg
                              :dtos="etiquetas.nosotros"
                              :type="type"
                              @imgus="imagenUS"
                            />
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>

              <div class="text-right mt-4">
                <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

                <v-btn text> Cancel </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-card-title> Redes Sociales </v-card-title>
                    <v-card-text>
                      <v-row class="mt-8">
                        <v-col
                          v-for="(icon, index) in empresa.redes"
                          :key="icon.nombre"
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            :prepend-inner-icon="icon.icono"
                            v-model="empresa.redes[index].link"
                            outlined
                            :label="icon.nombre"
                            :color="icon.color"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <div class="text-right mt-4">
                <v-btn color="primary" @click="save"> Guardar </v-btn>

                <v-btn text> Salir </v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>

      <v-snackbar
        v-model="alert.active"
        :timeout="timeout"
        :color="alert.type"
        bottom
        right
        text
      >
        {{ alert.text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="alert.active = false">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </client-only>
</template>
<script>
import cargadorimg from '~/components/theme/dashboard/img'
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
} from 'tiptap-vuetify'
export default {
  components: {
    TiptapVuetify,
    cargadorimg,
  },
  layout: 'dashboard',
  name: 'empresa',

  beforeRouteEnter(to, from, next) {
    to.meta.title = 'Info Empresa'
    next()
  },
  data() {
    return {
      extensions: [
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,

        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Link,

        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      e1: 1,
      route: '/web/1',
      empresa: [],
      footer: {},
      validate: [],
      isBusy: false,
      items: [],
      activator: null,
      attach: null,

      editing: null,
      editingIndex: -1,
      nonce: 1,

      model: [],
      x: 0,
      search: null,
      y: 0,
      redes: {},
      nosotros: [],
      mision: '',
      vision: '',
      etiquetas: {
        historia: '',
        nosotros: '',
        mision: '',
        vision: '',
      },

      network: [
        {
          nombre: 'Link Facebook',
          icono: 'mdi-facebook',
          color: '#3b5998',
          link: '',
        },
        {
          nombre: 'Link Twitter',
          icono: 'mdi-twitter',
          color: '#55acee',
          link: '',
        },
        {
          nombre: 'Link Instagram',
          icono: 'mdi-instagram',
          color: '#3b5998',
          link: '',
        },
        {
          nombre: 'Link Youtube',
          icono: 'mdi-youtube',
          color: '#bb0000',
          link: '',
        },
        {
          nombre: 'Número de WhatsApp',
          icono: 'mdi-whatsapp',
          color: '#4dc247',
          link: '',
        },
        {
          nombre: 'Nombre Página Facebook',
          icono: 'mdi-facebook-messenger',
          color: '#0078FF',
          link: '',
        },
      ],
      images: [],
      logo: null,
      uplogo: null,
      Favi: null,
      upFavi: null,
      upNosotros: null,
      upMision: null,
      upVision: null,
      loading: false,
      timeout: 2500,
      alert: {
        active: false,
        type: 'error',
        text: '',
      },
      usView: '',
      type: 'single',
    }
  },
  computed: {
    imgX() {
      return this.empresa.nosotros
    },
    logoX() {
      return this.empresa.logo
    },
    // nosotro:{
    //     get() {
    //     console.log('carga')
    //     return this.nosotros
    //   },
    //   set(value) {
    //     console.log(value, 'setea')
    //    this.nosotros = value
    //   },
    // }
  },
  // watch: {
  //   model(val, prev) {
  //     if (val.length === prev.length) return

  //     this.model = val.map((v) => {
  //       if (typeof v === 'string') {
  //         v = {
  //           text: v,
  //           color: this.colors[this.nonce - 1],
  //         }

  //         this.items.push(v)

  //         this.nonce++
  //       }

  //       return v
  //     })
  //   },
  // },
  mounted() {
    this.load()
  },

  methods: {
    async load() {
      this.isBusy = true
      try {
        let response = await this.crud('get', this.route)
        this.empresa = response.data.data
        
         this.etiquetas = this.empresa.etiquetas
        // this.mision = this.empresa.mision
        // this.vision = this.empresa.vision
        //this.footer = this.empresa.footer
        // console.log(this.empresa.nosotros, 'uno')

        if (this.empresa.redes === null) {
          this.empresa.redes = this.network
        }
        if (this.empresa.footer === null) {
          this.empresa.footer = this.footer
        } else {
          this.footer = this.empresa.footer
        }
        this.isBusy = false
        // console.log(this.empresa.redes, 'dos')
      } catch (error) {
        this.alert.active = !this.alert.active
        this.alert.type = 'red'
        this.alert.text = error.response.data.detail
        this.isBusy = false
        if (error.response.status === 401) {
          this.$auth.logout()
        }
      }
    },
    newItem() {
      this.drawer = !this.drawer
      this.addSave = 'post'
    },
    async save() {
      this.loading = true

      const data = new FormData()
      data.append('_method', 'PUT')
      data.append('titulo', this.empresa.titulo)
      data.append('descripcion', this.empresa.descripcion)
      data.append('logo', this.uplogo)
      data.append('favicon', this.upFavi)
      data.append('redes', JSON.stringify(this.empresa.redes))
      data.append('nosotros', this.empresa.nosotros)
      data.append('mision', this.empresa.mision)
      data.append('vision', this.empresa.vision)
      data.append('footer', JSON.stringify(this.footer))
      data.append('etiquetas', JSON.stringify(this.etiquetas))
      // console.log(data)
      try {
        let response = await this.crud('post', this.route, data)
        this.alert.active = true
        this.alert.type = 'success'
        this.alert.text = response.data.msg
        this.drawer = false
        this.loading = false
        this.item = {}
        this.load(1)
      } catch (error) {
        this.alert.active = true
        this.alert.text = '¡Oops! Tenemos Un Problema'
        this.alert.type = 'warning'
        this.warning = response.data.msg
        this.loading = false
      }
    },

    imagenLogo(file) {
      this.uplogo = file.target.files[0]
    },
    imagenFavi(file) {
      this.upFavi = file.target.files[0]
    },
    imagenUS(file) {
      this.nosotros = file.target.files[0]
    },
    imagenMi(file) {
      this.mision = file.target.files[0]
    },
    imagenVi(file) {
      this.vision = file.target.files[0]
    }
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
