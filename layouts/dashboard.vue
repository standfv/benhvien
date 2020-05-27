<template>
  <div>
    <navbar @toggle="toggle" class="sticky top-0" style="z-index: 10" />
    <div class="flex">
      <sidebar v-if="collapsed" :style="styleCollapsed" class="sidebarLayout" />
      <nuxt class="mainLayout scroll-auto mb-6" />
    </div>
  </div>
</template>
<script>
import Navbar from "~/components/Dashboard/Navbar";
import Sidebar from "~/components/Dashboard/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
      collapsed: true,
      styleCollapsed: ''
    }
  },
  watch: {
    "$route": function(value) {
      this.styleCollapsed = "";
    }
  },
  methods: {
    toggle(value) {
      this.styleCollapsed = "display: block";
      this.collapsed = value;
    }
  }
};
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background: #f7fafc;
}
</style>
<style lang="scss">
/* Dành cho điện thoại */
@media all and (min-width: 600px) {
  .mainLayout {
    width: calc(100% - 250px);
    margin-left: 250px;
  }
  .sidebarLayout {
    display: block !important;
  }
}
@media all and (max-width: 600px) {
  .mainLayout {
    width: 100%;
    margin-left: 0px;
  }
  .sidebarLayout {
    display: none;
  }
}
</style>
