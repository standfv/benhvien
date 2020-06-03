<template>
  <div
    class="Sidebar border py-6 border-t-0 border-l-0 border-b-0 border-gray-200 bg-gray-100"
  >
    <div class="text-xs text-gray-700 font-medium px-4">MENU CHÍNH</div>
    <nuxt-link
      to="/dashboard"
      class="bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
          /></svg></span
      ><span class="font-medium"> Trang chủ </span></nuxt-link
    >
    <nuxt-link
      to="/dashboard/measures"
      class="bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
          />
        </svg> </span
      ><span class="font-medium"> Kiểm tra sức khỏe </span></nuxt-link
    >
    <nuxt-link
      to="/dashboard/shapes"
      class="bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"
          /></svg></span
      ><span class="font-medium"> Quản lý khối lớp</span></nuxt-link
    >
    <nuxt-link
      to="/dashboard/classes"
      class="bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z"
          />
        </svg> </span
      ><span class="font-medium"> Quản lý lớp học</span></nuxt-link
    >
    <nuxt-link
      to="/dashboard/students"
      class="bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
          />
        </svg> </span
      ><span class="font-medium"> Quản lý học sinh </span></nuxt-link
    >
    <div class="text-xs text-gray-700 font-medium px-4">MENU PHỤ</div>
    <a
      class="cursor-pointer bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          /></svg></span
      ><span class="font-medium"> Cấu hình tài khoản </span></a
    >
    <a
      class="cursor-pointer bg-transparent hover:text-teal-700 text-gray-900 flex items-center py-2 px-4 w-full my-1"
    >
      <span
        style="top: -1px"
        class="relative block mr-3 w-8 h-8 bg-teal-500 text-white rounded-md flex justify-center items-center"
      >
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"
          /></svg></span
      ><span class="font-medium"> Đăng xuất </span></a
    >
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.Sidebar {
  height: calc(100vh - 55px);
  position: fixed;
  width: 250px;
  top: 55px;
  left: 0px;
  bottom: 0px;
  z-index: 2;
}
</style>
