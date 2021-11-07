<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

        <div class="links">
          <router-link to="/" class="link">
            Пользователи
          </router-link>

          <router-link to="/add" class="link">
            Добавить
          </router-link>

          <router-link to="/change" class="link">
            Изменить
          </router-link>

          <router-link to="/delete" class="link">
            Удалить
          </router-link>
        </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color .2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.link:hover {
  background-color: #1f91ff;
}

.link:first-child {
  margin-left: 0;
}
.link:last-child {
  margin-right: 0;
}
.router-link-exact-active {
  background-color: #1f91ff;
}
</style>