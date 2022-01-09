<template>
  <div class="height-100pc">
    <v-card class="py-2 height-100pc crud-card" elevation="1">
      <v-data-table
        class="crud-table elevation-0"
        fixed-header
        :headers="info.headers"
        :items="datos"
        :loading="isBusy"
        loading-text="Cargando... Por favor espere..."
        :options.sync="options"
        :server-items-length="pageCount"
        hide-default-footer
        id="uno"
      >
        <template v-slot:top>
          <!--cabecera-->
          <v-row no-gutters justify="space-between" align="center" class="mx-2">
            <v-col v-if="info.view != 7">
              <v-btn
                color="primary"
                elevation="2"
                medium
                outlined
                @click.stop="newItem"
                ><v-icon dark> mdi-plus </v-icon> Nuevo
              </v-btn>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.logo="{ item }">
          <img :src="item.logo" style="height: 25px" />
        </template>
        <template v-slot:item.imagen="{ item }">
          <img :src="item.imagen" style="height: 25px" />
        </template>
        <template v-slot:item.img="{ item }">
          <img :src="item.img" style="height: 25px" />
        </template>
        <template v-slot:item.url="{ item }">
          <img :src="item.url" style="height: 25px" />
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn-toggle color="primary" dense>
            <v-btn v-if="info.view != 7" @click.stop="Edit(item)">
              <v-icon large>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn v-if="info.view == 7" @click.stop="Edit(item)">
              <v-icon large>mdi-television</v-icon>
            </v-btn>
            <v-btn @click.stop="deleteItem(item)">
              <v-icon large>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-data-table>
      <v-row
        justify="end"
        no-gutters
        class="mb-n3 mr-5 mt-4 crud-table-pagination"
        v-if="total > 1"
      >
        <!-- <v-col md="auto"> -->
        <v-pagination
          class="pa-2 page-selection v-size--small"
          v-model="pagination.page"
          :length="total"
          @input="load()"
        ></v-pagination>
        <!-- </v-col> -->
        <!-- <v-col md="auto">
          <v-text-field
            label="跳转到"
            style="width: 60px"
            type="number"
            class="mt-5"
            dense
            v-model="jumpToPage"
            @keydown="queryPage"
          />
        </v-col> -->
      </v-row>
      <v-navigation-drawer scrollable v-model="drawer" absolute temporary width="100%">
        <v-container fluid id="tres">
          <v-row>
            <v-col>
              <v-card flat class="overflow-y-auto" height="auto" id="cuatro">
                <v-card-title>
                  <span class="headline">{{ info.title }}</span>
                </v-card-title>
                <v-card-text>
                  <v-alert
                    v-model="alert.active"
                    :type="alert.type"
                    class="mb-4"
                    transition="scale-transition"
                    border="left"
                  >
                    {{ alert.text }}
                  </v-alert>
                </v-card-text>

                <v-card-text>
                  <banner
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 1"
                  />
                  <categoria
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 2"
                  />
                  <noticias
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 3"
                  />
                  <servicios
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 4"
                  />
                  <clientes
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 5"
                  />
                  <usuarios
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 6"
                  />
                  <mensajes
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 7"
                  />
                  <roles
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 8"
                  />
                  <trabajos
                    :item="item"
                    :validate="warning"
                    v-if="info.view == 9"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="success"
                    :loading="loading"
                    class="mr-4"
                    @click="save()"
                  >
                    Guardar
                  </v-btn>

                  <v-btn color="error" class="mr-4" @click="drawer = !drawer">
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-navigation-drawer>
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
</template>
<script>
import banner from '~/components/theme/dashboard/modals/banner'
import categoria from '~/components/theme/dashboard/modals/categorias'
import noticias from '~/components/theme/dashboard/modals/noticias'
import servicios from '~/components/theme/dashboard/modals/servicios'
import trabajos from '~/components/theme/dashboard/modals/trabajos'
import clientes from '~/components/theme/dashboard/modals/clientes'
import usuarios from '~/components/theme/dashboard/modals/usuarios'
import mensajes from '~/components/theme/dashboard/modals/mensajes'
import roles from '~/components/theme/dashboard/modals/roles'

export default {
  props: ['info'],
  components: {
    banner,
    categoria,
    noticias,
    servicios,
    clientes,
    usuarios,
    mensajes,
    roles,
    trabajos,
  },
  data() {
    return {
      drawer: null,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      itemsPerPages: [10, 20, 50, 100],
      alert: {
        active: false,
        type: 'error',
        text: '',
      },
      loading: false,
      item: {},
      datos: [],
      warning: {},
      pointcontrol: false,

      ruta: {},
      isBusy: false,
      timeout: 2500,
      search: '',
      options: {},
      addSave: '',
      scrollTop: 0,
      navigationHeight: 'auto',
      pagination: {
        per_page: 10,
        page: 1,
      },
      total: null,
    }
  },
  watch: {
    drawer: function (data) {
      if (data) {
        //console.log(data, 'w')
        this.handleScroll()
      }
    },
  },
  mounted() {
    this.load()
  },

  methods: {
    onScroll(e) {
      this.scrollTop = e.target.scrollTop
    },
    async load() {
      this.item = {}
      this.addSave = ''
      this.isBusy = true
      try {
        let response = await this.crud(
          'get',
          this.info.route +
            '?page=' +
            this.pagination.page +
            '&per_page=' +
            this.pagination.per_page
        )

        this.datos = response.data.data
        this.pageCount = response.data.count
        this.total = response.data.meta.last_page
        this.isBusy = false
      } catch (error) {
        this.warning = error.response.data
        this.alert.active = !this.alert.active
        this.alert.type = 'red'
        this.alert.text = error.response.data.message
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
      var ruta = this.info.route
      let datos = this.item

      const formData = new FormData()
      Object.entries(datos).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value || null)

          //console.log(key, value, 'file')
        } else if (typeof value === 'object' && value) {
          if (key === 'images') {
            for (const i of Object.keys(value)) {
              formData.append('images[]', value[i] || null)
            }

            // formData.append('images[]', value || null)
          } else {
            formData.append(key, JSON.stringify(value) || null)
          }

          //console.log(key, JSON.stringify(value), 'obj')
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value) || null)
          // console.log(key, JSON.stringify(value), 'array')
        } else {
          formData.append(key, value || null)
          // console.log(key, value, 'otros')
        }
      })
      if (this.addSave == 'Edit') {
        ruta = this.info.route + "/" + this.item.id
        formData.append('_method', 'PUT')
      }
      console.log(formData, 'fd')

      try {
        let response = await this.crud('POST', ruta, formData)
        this.alert.active = true
        this.alert.type = 'success'
        this.alert.text = 'Guardardo/Actualizado con éxito'
        this.drawer = false
        this.loading = false
        this.item = {}
        this.load()
      } catch (error) {
        this.alert.active = true
        this.alert.text = error.response.data.message
        this.alert.type = 'warning'
        this.warning = error.response.data.errors
        this.loading = false
      }
    },

    Edit(item) {
      this.addSave = 'Edit'
      this.drawer = !this.drawer
      this.item = item
    },
    closePoint() {
      this.ruta = {}

      this.pointcontrol = false

      this.load(1)
    },

    async deleteItem(item) {
      this.isBusy = true
      var file = this.info.route + item.id

      try {
        let response = await this.crud('DELETE', file)

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
    handleScroll() {
      // console.log(document.body.clientHeight)
      var uno = document.getElementById('uno')
      var dos = document.getElementById('dos')
      var tres = document.getElementById('tres')
      var cuatro = document.getElementById('cuatro')
      //console.log(uno.clientHeight,dos.clientHeight,tres.clientHeight,cuatro.clientHeight, 'datos')
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop && scrollTop !== 0) {
        this.scrollTop = scrollTop - 12
      } else {
        this.scrollTop = 0
      }
      this.navigationHeight = document.body.scrollHeight - this.scrollTop - 80
      // console.log(this.navigationHeight, 'ver', this.scrollTop, document.body.scrollHeight)
    },
  },
}
</script>
<style >
.height-100pc {
  height: 100% !important;
}
.v-dialog__content {
  height: 85%;
  overflow-y: auto;
  overflow-x: hidden;
}
body >>> .v-data-table__checkbox .mdi-checkbox-marked {
  color: #3582fb;
}
.page-selection >>> .v-pagination__item:focus {
  border: none !important;
}
.crud-table >>> .v-data-table__wrapper {
  overflow: hidden;
}
.crud-table >>> .v-icon {
  font-size: 16px;
}
.crud-table >>> .mdi-checkbox-marked {
  color: #3582fb;
}
.crud-table >>> .v-data-table__wrapper tbody tr:nth-child(2n + 1) {
  background: #f8f8f8;
}
.crud-card {
  height: 100% !important;
}
/* .crud-table >>> tbody tr:hover {
    box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
    background: #fff !important;
  } */
.crud-table >>> .crud-actons-td {
  padding: 0 1px !important;
}
.crud-table >>> .actions-menu {
  border-radius: unset !important;
}
.col-item,
.col-item-readonly {
  display: inline-block;
  font-size: 14px;
  color: #8091a5;
  cursor: pointer;
}
.col-item:hover,
.col-item:hover > * {
  color: #3582fb !important;
}
.total-count {
  color: #000;
  padding: 0 5px;
}
.per-page {
  display: inline-block;
  width: 30px;
  height: 20px;
}
.separator {
  border-right: 1px solid #dfe6ee;
  width: 1px;
  height: 18px;
  margin-left: 15px;
  margin-right: 15px;
}
.setting-title {
  min-width: 20px;
  font-size: 12px;
  color: #8091a5;
}
.setting-content {
  margin-top: 5px;
}
.setting-content span {
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin: 0 1px;
  border: 1px solid #ebebeb;
}
.setting-content span:hover {
  background: #d7e6fe;
  color: #3582fb;
  border: 1px solid #3582fb !important;
  z-index: 1;
  cursor: pointer;
}
.per-current {
  background: #d7e6fe;
  color: #3582fb;
  border: 1px solid #3582fb !important;
  z-index: 1;
  cursor: default;
}
.crud-table >>> .v-progress-linear {
  height: 1px !important;
}
.crud-table >>> .v-data-table__expanded__content {
  box-shadow: unset;
}
.import-item-box {
  margin: 10px;
  cursor: pointer;
  background-color: #fafafa;
  transition: opacity 0.4s ease-in-out;
}
.import-item-box:not(.on-hover) {
  opacity: 0.6;
}
.import-upload >>> label {
  cursor: pointer;
}
.import-item-box .text {
  color: #80abfa;
  font-weight: bold;
  padding-bottom: 10px;
}
.settable-headers {
  position: relative;
  padding: 8px 5px 8px 5px;
  margin: auto auto 2px;
  border-radius: 4px;
  font-size: 14px;
}
.settable-text {
  padding-right: 20px;
}
.settable-checkbox {
  position: absolute;
  right: 5px;
  top: 12px;
}
.settable-headers:hover {
  cursor: move;
}
.sortable-ghost {
  background-color: #ffffff;
}
.sortable-drag {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.13);
}
.nav-form {
  z-index: 99;
}
</style>
