<template>
  <div>
    <v-text-field v-model="id" type="number" label="id пользователя"></v-text-field>
    <v-text-field v-model="login" type="text" label="Новый логин"></v-text-field>
    <v-text-field v-model="password" type="password" label="Новый пароль"></v-text-field>
    <v-text-field v-model="email" type="email" label="Новый email"></v-text-field>

    <v-btn
      @click="addUser"
      color="primary"
      elevation="3"
    >Изменить</v-btn>


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
    name: 'Change',

    data() {
      return {
        id: '',
        login: '',
        email: '',
        password: '',
        dialog: false,
        message: "Введите данные для изменения (хотя бы 1 значение)",
        status: 'Ошибка'
      }
    },

    methods: {
      async addUser() {

        if(!this.id) {
          this.message = "Введите айди пользователя"
          this.status = 'Ошибка'
          this.dialog = true
          return
        }
        else {
            if(!this.login && !this.password && !this.email) {
                this.message = "Введите данные для изменения (хотя бы 1 значение)"
                this.status = 'Ошибка'
                this.dialog = true
                return
            }
        }

        await this.axios({
          method: 'put',
          url: 'http://localhost:3000/users',
          data: {
            id: Number(this.id),
            login: this.login,
            password: this.password,
            email: this.email,
          }
        }).then(res => {
          this.id = ''
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