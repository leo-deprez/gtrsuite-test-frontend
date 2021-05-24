<template>
  <div class="home">
    <img :src="require('@/assets/images/logo-dark.svg')" alt="Logo GTR Suite" class="home__logo" />
    <h1 class="home__title">
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: vm => ({
    msg: vm.$t('home.title'),
  }),
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 100%;

  &__logo {
    height: 48px;
  }

  &__title {
    margin-top: 24px;
  }
}
</style>
