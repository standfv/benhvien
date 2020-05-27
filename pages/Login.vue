<template>
  <div class="flex h-screen w-full items-center select-none">
    <div
      style="width: 800px"
      class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div
        class="hidden lg:block lg:w-1/2 bg-cover"
        :style="{
          backgroundImage: 'url(' + require('~/assets/img/bg-auth.jpg') + ')'
        }"
      ></div>
      <form @submit.prevent="login" class="w-full p-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">
          <b class="text-3xl text-teal-600 font-extrabold">HeaCare</b>
          <small class="text-xs font-medium">school</small>
        </h2>
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 lg:w-1/4"></span>
          <a class="text-xs text-center text-gray-500 uppercase"
            ><span class="text-gray-600 text-center"
              >Đăng nhập tới quản trị</span
            ></a
          >
          <span class="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div class="mt-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            class="bg-gray-100 font-medium text-gray-700 focus:border-teal-500 focus:bg-white focus:outline-none border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            v-model="email"
            placeholder="Hãy nhập email"
            required
          />
        </div>
        <div class="mt-4">
          <div class="flex justify-between">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Mật khẩu</label
            >
            <a href="#" class="text-xs text-gray-500">Quên mật khẩu?</a>
          </div>
          <input
            class="bg-gray-100 font-medium text-gray-700 focus:border-teal-500 focus:bg-white focus:outline-none border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            v-model="password"
            placeholder="Hãy nhập mật khẩu"
            required
          />
        </div>
        <div class="mt-8">
          <button
            type="submit"
            class="bg-teal-600 text-white focus:outline-none font-bold py-2 px-4 w-full rounded hover:bg-teal-500"
          >
            Đăng nhập
          </button>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 md:w-1/4"></span>
          <a href="#" class="text-xs text-gray-500 ">hoặc đăng ký</a>
          <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Đăng nhập"
    };
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.email === "admin@gmail.com" && this.password === "huyentrinh123") {
        this.$router.push("/dashboard");
      } else {
        this.$swal({
            position: "top-end",
            icon: "error",
            toast: true,
            title: "Tài khoản hoặc mật khẩu không đúng!",
            showConfirmButton: false,
            timer: 2500
          });
      }
    }
  }
};
</script>
