<template lang="pug">
  #app.wrapper
    header.header.header__container
      .header__logo.header__logo-container
        img( src="./assets/images/svg/Logo.svg")
      nav.header-main-nav
        router-link(
          class="header__nav-link"
          exact
          v-for="link in navigation"
          :key="link.route"
          :to="{ name: link.route }"
            ) {{ link.label }}
      .header__btn-group
          button.header__btn-number +7 (495) 823-54-12
            img( src="./assets/images/svg/telephone.svg")
          button.header__btn-basket
            img( src="./assets/images/svg/basket.svg")
    main 111
      router-view
    footer 222
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      navigation: [
        { label: 'Главная', route: 'main' },
        { label: 'Магазин', route: 'shop' },
        { label: 'О бренде', route: 'about' },
        { label: 'Контакты', route: 'contacts' }
      ]
    }
  }
}
</script>
