<template lang="pug">
div
  b-navbar(toggleable="lg" type="dark" variant="dark")
    a.navbar-brand(href="/") GA4_Test_Site_for_Ecommerce
    b-collapse(id="nav-collapse" is-nav)
      b-navbar-nav
        li.nav-item
          a.nav-link(href="/cart") cart
        //li.nav-item
          a.nav-link(href="/regi") regi
        //li.nav-item
          a.nav-link(href="/purchase") purchase
</template>

<script>
export default {
}
</script>
