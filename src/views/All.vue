<template>
  <div>
    <v-btn
      @click="fetchUser"
      color="primary"
      elevation="3"
    >Обновить</v-btn>

    <v-container>
      <v-card
        v-for="(item, index) in users"
        :key="index"
        elevation="2"
      >
        <div>Пользователь #{{ item.id }}</div>
        <div>Логин: {{ item.login }}</div>
        <div>Пароль: {{ item.password }}</div>
        <div>Почта: {{ item.email }}</div>
      </v-card>

      <div v-if="notFound">{{ message }}</div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'All',
    data() {
      return {
        users: [],
        notFound: true,
        message: ''
      }
    },

    async mounted() {
      await this.fetchUser()
    },

    methods: {
      async fetchUser() {
        await this.axios.get('http://localhost:3000/users')
          .then(res => {
            if(res.data !== "Пользователи отсутствуют" && res.data !== "[]") {
              this.notFound = false
              this.users = JSON.parse(res.data)
            }
            else {
              this.notFound = true;
              this.message = "Пользователи отсутствуют";
            }
          })
      }
    }
  }
</script>

<style scoped>
.v-card {
  padding: 15px 20px;
  margin: 10px 5px;
}

.container {
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
}
</style>