<template>
  <v-app class="primary">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4" lg="3">
          <v-card>
            <v-toolbar color="primary" flat>
              <v-btn icon large to="/" nuxt>
                <v-avatar size="32" item>
                  <v-img src="/v.png" alt="Vuetify"></v-img>
                </v-avatar>
              </v-btn>
              <v-toolbar-title class="ml-0 pl-3">
                <span class="hidden-sm-and-down">ESB NEGPRO</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text
              ><v-alert
                v-model="alert.active"
                type="error"
                outlined
                dense
                close-text="Close Alert"
                dismissible
              >
                {{ alert.text }}
              </v-alert>
              <v-form ref="form">
                <v-text-field
                  v-model="user.email"
                   outlined
                clearable
                 prepend-icon="mdi-account"
                 
                  maxlength="25"
                  
                  label="Usuario"
                  
                  
                  :error-messages="validate.username"
                ></v-text-field>
                <v-text-field
                  v-model="user.password"
                  outlined
                clearable
                  type="password"
                  name="password"
                  label="Contraseña"
                  prepend-icon="mdi-lock"
                  maxlength="25"
                  :error-messages="validate.password"
                  @keypress.enter="userLogin"
                ></v-text-field>

                <!-- <v-checkbox dense label="remember me"></v-checkbox> -->
                <v-btn
                  color="primary"
                  :loading="loading"
                  @click="userLogin"
                  class="submit-button"
                  block
                  >&nbsp;&nbsp;&nbsp;&nbsp;Iniciar
                  Sesión&nbsp;&nbsp;&nbsp;&nbsp;</v-btn
                >
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn icon color="primary" title="wechat sign in">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon color="primary" title="github sign in">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn icon color="primary" title="sign up">
                <v-icon>mdi-account-plus-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </v-app>
</template>
<script>
export default {
  auth: "guest",
  
  data() {
    return {
      loading: false,
      alert: { active: false, text: "Revise todos los campos" },
      validate: [],
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      this.loading = true; 
      try {
       // console.log('login')
        let response = await this.$auth.loginWith("local", {
          data: this.user,
        });
       // console.log(response)
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.alert = {
          active: true,
          text: err.response.data.data,
        };

        this.validate = err.response.data;
      }
    },
  },
};
</script>


