<template lang="pug">
div
  siteHeader
  div.container-fluid
    Nuxt
</template>

<script>

export default {
}
</script>

<style lang="stylus">
.body-class
  background-color: #fcfcfc
  height: 100%
  padding: 0
  margin: 0
  line-height: 1.75

h1
  font-size: 2.0rem
  position: relative
  margin: 15px 10px
  padding: 5px

h2
  font-size: 1.5em
  font-weight: bold
  padding-top: .3em
  padding-left: .5em
  padding-bottom: .3em
  border-left: 5px solid #343a40
  color: #343a40
  border-top: 1px solid #cccccc
  border-bottom: 1px solid #cccccc
  border-right: 1px solid #cccccc
  background-color: #fcfcfc

h3
  font-size: 1.5em
  font-weight: bold
  padding-top: .3em
  padding-bottom: .3em

.cardContainer
  display flex
  flex-wrap wrap

.nuxt-content p
  margin-left: 1.3rem
  margin-right: 1.3rem
  max-width: 100%

.nuxt-content ol
  margin-right: 1.3rem

.nuxt-content img
  max-width: 1000px
  width: 100%
  height: auto

.nuxt-content
  blockquote 
    margin-left: 1.3rem
    margin-right: 1.3rem
    position: relative
    padding-top: 25px
    padding-bottom: 15px
    padding-left: 55px
    padding-right: 55px
    border: 0px
    font-style: oblique
    color: #2b2b2b
    background: #f7f6f5

  blockquote:before
    display: inline-block
    position: absolute
    top: 0
    left: -10px
    content: "“"
    font-family: serif
    color: #dcdcdc
    font-size: 100px
    line-height: 1

  blockquote:after
    display: inline-block
    position: absolute
    bottom: -50px
    right: 20px
    content: "”"
    font-family: serif
    color: #dcdcdc
    font-size: 100px
    line-height: 1

</style>
