<template>
  <div>
    <div class="container mx-auto">
      <div class="mt-4 flex items-center justify-between">
      <h2 class="text-xl font-bold uppercase text-gray-800">Danh sách các lớp học</h2>
      <nuxt-link to="/dashboard/classes/add" class="rounded focus:outline-none py-2 px-4 font-medium bg-teal-500 hover-teal-400 text-white">Thêm lớp học</nuxt-link>
      </div>
      <table class="min-w-full bg-white mt-2">
        <thead class="bg-teal-500 text-white rounded-t">
          <tr>
            <th
              class="w-1/3 text-left py-3 px-4 uppercase font-semibold"
            >
              Tên lớp
            </th>
            <th
              class="w-1/3 text-left py-3 px-4 uppercase font-semibold"
            >
              Thuộc khối
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold">
              Chức năng
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="my-2" v-for="(item, index) in list" :key="item._id" :class="index % 2 == 0 ? 'bg-gray-100' : ''">
            <td class="w-1/2 text-left py-3 px-4">
              Lớp {{ item.classx }}
            </td>
            <td class="w-1/2 text-left py-3 px-4">
              Khối {{ item.shape }}
            </td>
            <td style="width: 18rem;" class="w-1/4 text-left py-3 px-4 flex">
              <a :href="'/dashboard/students?classes=2A'" class="focus:outline-none mx-1 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold py-1 px-4 rounded" target="_blank">Xem chi tiết</a>
              <button class="focus:outline-none mx-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-1 px-4 rounded">Sửa</button>
              <button class="focus:outline-none ml-1 bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-1 px-4 rounded">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  layout: "dashboard",
  head() {
    return {
      title: "Danh sách học sinh trong lớp."
    };
  },
  async asyncData({ store }) {
    await store.dispatch("repositories/students/listStudent");
  },
  computed: {
    ...mapState("repositories/students", ["list"])
  }
};
</script>
