<template>
  <header
    class="lg:px-10 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="/">
        <b class="text-3xl text-teal-600 font-extrabold">HeaCare</b>
        <small class="font-medium">school</small>
      </a>
    </div>

    <label for="menu-toggle" class="pointer-cursor lg:hidden block"
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

    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
        >
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="#"
              >Features</a
            >
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="#"
              >Pricing</a
            >
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="#"
              >Documentation</a
            >
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
              href="#"
              >Support</a
            >
          </li>
        </ul>
      </nav>
      <nuxt-link
        to="/login"
        class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
      >
        Đăng nhập
      </nuxt-link>
    </div>
  </header>
</template>
<script>
export default {};
</script>
