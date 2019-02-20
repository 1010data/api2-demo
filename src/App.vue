<template>
  <div id="app">

    <h1>Buyer Segmentation Tool</h1>
    <nav>
      <ul>
        <li style="display:block" v-for="s in sections">
          <router-link :to="s" :class="sectionClass(s)">{{s | capitalize}}</router-link>
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
      // TODO: calculate from this.$router.options.routes
      sections: ['segmentation','what','when','where','who','review','debug']
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    sectionClass(section) { return section === this.$route.path.slice(1) ? 'active' :  '' },
  },
  beforeMount() {
    let self = this;
    window.addEventListener('popstate', () => {
      self.currentTab = window.location.hash.slice(1)
    })
  },
}
</script>

<style lang="scss">

html, body, #app { height: 100% }
html, body, div, nav, ul, li, h1  { margin: 0; padding: 0 }
h1 { background: silver; color: black; padding: 5px; height: 40px; } /** 40+5+5 = 50px **/
nav { background: #1d4f8b; width: 150px; height: calc(100% - (50px + 20px)); padding-top: 20px; }
nav a { display: block; padding: 10px; margin-bottom: 20px; width: 75%;
  color: black; background: #ccc; text-decoration: none; }
nav a.active { width: 100%; background: white; }


</style>
