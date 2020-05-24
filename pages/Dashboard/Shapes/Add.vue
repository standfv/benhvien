<template>
  <div>
    <div
      style="height: calc(100vh - 175px)"
      class="container mx-auto flex justify-center items-center"
    >
      <form
        style="width: 400px"
        class="select-none mt-8 bg-white py-4 px-5 rounded"
        @submit.prevent="submit"
      >
        <div class="mb-4 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Tên khối (Ví dụ: Khối 1, khối 2... )
          </label>
          <div class="flex">
            <span class="flex items-center bg-gray-200 rounded-l h-12 px-4 py-2"
              >Khối
            </span>
            <input
              class="rounded-r bg-gray-200 h-12 px-4 py-2 w-full focus:outline-none"
              type="number"
              v-model="name"
              placeholder="Nhập số khối lớp..."
              required
            />
          </div>
        </div>
        <div>
          <button
            class="focus:outline-none bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Thêm khối lớp
          </button>
          <p class="mt-3">
            <a
              class="text-sm font-medium text-teal-500 hover:text-teal-600"
              href="/dashboard/shapes"
              target="_blank"
              >▶ Danh sách khối lớp
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      name: null
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: "home"
    }).on("dataSock", (data) => {
        console.log("sock: ", data)
    })
  },
  methods: {
    ...mapActions("repositories/shapes", ["add"]),
    submit() {
      this.socket.emit("sockAdd", this.name);
    //   this.add({ name: name })
    //     .then(response => {
    //       console.log("client :", response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    }
  }
};
</script>
