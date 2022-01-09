<template>
  <div>
    <div class="image-upload">
      <v-btn
        color="blue-grey"
        
        class="ma-1 white--text"
        @click="selectImage"
      >
        Subir Imagen
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
      <!-- <label for="fileInput">
        <img src="/image.jpg " class="preview" @click="selectImage" />
      </label> -->
      <input ref="fileInput" type="file" @input="pickFile" />
    </div>
    <div v-for="image in images" class="mx-auto">
      <v-card class="mt-4" width="250">
        <img :src="image.image_path" class="preview" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="view" icon @click="deleteImg(image)">
            <v-icon dark right>mdi-cancel</v-icon> Borrar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </div>

    <!-- <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${preview})` }"
      @click="selectImage"
    ></div> -->
  </div>
</template>
<script>
export default {
  props: ['dtos', 'type'],
  data() {
    return {
      previewImage: null,
      images: [],
      view: true,
    }
  },

  mounted() {
      console.log(this.dtos)
    this.images = []
    if (this.dtos === null) {
      this.dtos = '/image.jpg'
    }
    if (this.type == 'single') {
      var imgs = {
        image_path: this.dtos,
      }
      this.images.push(imgs)
      //  console.log(imgs, 'dfsasredqw')
      this.view = false
      //console.log(this.images, 'uiy')
    } else {
      this.view = true
      this.images = this.dtos
      //console.log(this.images)
    }
  },

  methods: {
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile(e) {
      var imgAll = []

      console.log(e, 'dsf')

      let fileList = Array.prototype.slice.call(e.target.files)

      fileList.forEach((f) => {
        if (!f.type.match('image.*')) {
          return
        }

        let reader = new FileReader()
        let formData = new FormData()
        formData.append('file', f)
        let that = this
        reader.onload = function (e) {
          var imgs = {
            image_path: e.target.result,
          }
          that.images.push(imgs)

          imgAll.push({
            name: e.name,
            path: e.target.result,
            highlight: 0,
            default: 0,
          })
        }
        reader.readAsDataURL(f)
        console.log(formData, '---', imgAll)
        this.$emit('imgus', e)
      })
    },
    async deleteImg(item) {
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

<style scoped lang="scss">
.imagePreviewWrapper {
  width: 200px;
  height: 200px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
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