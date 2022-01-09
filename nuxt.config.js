import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  loading: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - esbnegocios',
    title: 'esbnegocios',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/back',

    '~/plugins/vuex-persist',
    { src: '~/plugins/TiptapVuetify', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    
    baseURL: process.env.API_URL,
   
  },
 

  // login auth module
  auth: {

    strategies: {
      local: {
        token: {
          property: 'token',
          maxAge: 3600
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: "token" },
          logout: false,
          // logout: { url: 'token/logout', method: 'post' },
          user: { url: 'user', method: 'post', propertyName: '' },
          //user: false
        },
        
        tokenRequired: true,

      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/admin'
    }

  },
  router: {
    middleware: ['auth']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', "tiptap-vuetify"]
  }
}
