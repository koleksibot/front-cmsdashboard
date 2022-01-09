<template>
  <ClientOnly>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify v-model="content" :extensions="extensions" />

    <template #placeholder> Cargando... </template>
  </ClientOnly>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from 'tiptap-vuetify'

export default {
  props: ['nosotro'],
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data() {
    return {
      extensions: [
        History,
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
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
       //content: this.nosotro,
      // starting editor's content
      // content: `
      //   <h1>Yay Headlines!</h1>
      //   <p>All these <strong>cool tags</strong> are working now.</p>
      // `,
    }
    // declare extensions you want to use
  },
  // watch: {
  //   content() {
  //     console.log('asd')
  //     this.nosotro = this.content
  //   },
  // },
  computed: {



    content: {

      get() {
        console.log(this.nosotro, 'llega')
        return this.nosotro
      },
      set(value) {
        console.log(value, 'setea')
       this.nosotro = value
      },
    },
  },
}
</script>
