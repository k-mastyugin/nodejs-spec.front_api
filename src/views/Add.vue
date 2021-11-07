<template>
  <div>
    <v-text-field v-model="login" type="text" label="Логин"></v-text-field>
    <v-text-field v-model="password" type="password" label="Пароль"></v-text-field>
    <v-text-field v-model="email" type="email" label="Email"></v-text-field>

    <v-btn
      @click="addUser"
      color="primary"
      elevation="3"
    >Добавить</v-btn>


    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            {{ status }}
          </v-card-title>

          <v-card-text style="margin-top: 30px">
            {{ message }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Понял
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Add',

    data() {
      return {
        login: '',
        email: '',
        password: '',
        dialog: false,
        message: "Введите данные во все поля",
        status: 'Ошибка'
      }
    },

    methods: {
      async addUser() {

        if(!this.login || !this.password || !this.email) {
          this.message = "Введите данные во все поля"
          this.status = 'Ошибка'
          this.dialog = true
          return
        }

        await this.axios({
          method: 'post',
          url: 'http://localhost:3000/users',
          data: {
            login: this.login,
            password: this.password,
            email: this.email,
          }
        }).then(res => {
          this.login = ''
          this.password = ''
          this.email = ''
          this.dialog = true;
          this.message = res.data
          this.status = 'Успешно'
        })
      }
    }
  }
</script>
