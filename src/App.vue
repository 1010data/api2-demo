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

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello, world.',
      currentTab: 'segmentation',
      sections: this.$router.options.routes.map(x=>x.path.slice(1))
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

$h1-height: 50px; /** 40+5+5 = 50px **/
h1 { background: #333; color: #eee; padding: 5px; height: 40px; }

h1, nav, nav a { box-shadow: 2px 2px 2px #0005; }

/** left side navigation **/
$nav-width: 150px; $nav-pad:10px;
$nav-height: calc(100% - (#{$h1-height} + 20px));
nav { background: #1d4f8b; width: $nav-width;
      height: $nav-height; ; padding-top: 20px; }
nav a { display: block; padding: $nav-pad; margin-bottom: 20px; width: 75%;
  transition: width 333ms ease, background-color 333ms ease-out;
  color: black; background: #e1e9ff; text-decoration: none; }
nav .router-link-active {
  transition: width 333ms ease, background-color 333ms ease-out;
  width: calc(100% - #{$nav-pad}); background: white; }

/** main content **/
main { margin-left: 20px; margin-right: 20px;
  position: absolute; top: $h1-height; left: $nav-width + $nav-pad;
  height: $nav-height; width: calc(100% - #{$nav-width + 2 * ($nav-pad + 20px) }); }


/** h2 is used for tab name headers at the top  **/
h2 { background:#ddd; color: #777; padding: 5px; }

</style>
