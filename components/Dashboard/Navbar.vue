<template>
  <header
    class="lg:px-6 px-6 bg-white flex flex-wrap items-center lg:py-1 py-1"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="/dashboard">
        <b class="text-3xl text-teal-600 font-extrabold">HeaCare</b>
        <small class="font-medium">school</small>
      </a>
    </div>

    <label @click="toggle" for="menu-toggle" class="pointer-cursor lg:hidden block"
      ><svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
    ></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden lg:flex lg:items-center lg:w-auto w-full">
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
        >
          <li>
            <span
              class="lg:p-4 py-3 px-0 font-medium text-sm block border-b-2 border-transparent lg:mb-0 mb-2"
              >Khối: 2 → Lớp: 2A</span
            >
          </li>
        </ul>
      </nav>
      <a
        href="#"
        class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
      >
        <img
          class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
          src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
          alt="Andy Leverenz"
        />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data () {
    return {
      isToggle: false
    }
  },
  methods: {
    toggle () {
      this.isToggle = !this.isToggle;
      this.$emit('toggle', this.isToggle);
    }
  }
};
</script>
<style>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
