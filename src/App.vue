<template>
  <div id="app">

    <h1>Buyer Segmentation Tool</h1>
    <nav>
      <ul>
        <li style="display:block" v-for="s in sections">
          <router-link :to="s">{{s | capitalize}}</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello, world.',
      currentTab: 'segmentation',
      sections: this.$router.options.routes.map(x=>x.path)
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: { },
  beforeMount() {
    let self = this;
    window.addEventListener('popstate', () => {
      self.currentTab = window.location.hash.slice(1)
    })
  },
}
</script>

<style lang="scss">

html, body, #app { height: 100%; font-family: Calibri, Helvetica, sans-serif; }
html, body, div, nav, ul, li, h1  { margin: 0; padding: 0 }


h1 { background: #333; color: #eee; padding: 5px; height: 40px; } /** 40+5+5 = 50px **/

h1, nav, nav a { box-shadow: 2px 2px 5px #0006; }

/** left side navigation **/
nav { background: #1d4f8b; width: 150px; height: calc(100% - (50px + 20px)); padding-top: 20px; }
nav a { display: block; padding: 10px; margin-bottom: 20px; width: 75%;
  transition: width 333ms ease, background-color 333ms ease-out;
  color: black; background: #e1e9ff; text-decoration: none; }
nav .router-link-active {
  transition: width 333ms ease, background-color 333ms ease-out;
  width: 100%; background: white; }


</style>
