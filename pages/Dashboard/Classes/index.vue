<template>
  <div>
    <div class="container mx-auto">
      <h2 class="mt-4 text-2xl font-bold text-gray-800">Danh sách lớp ( 2A )</h2>
      <table class="min-w-full bg-white mt-2">
        <thead class="bg-teal-500 text-white">
          <tr>
            <th
              class="w-1/3 text-left py-3 px-4 uppercase font-semibold"
            >
              Tên học sinh
            </th>
            <th
              class="w-1/3 text-left py-3 px-4 uppercase font-semibold"
            >
              Ngày sinh
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold">
              Khối
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold">
              Lớp
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold">
              Chức năng
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="(item, index) in list" :key="item._id" :class="index % 2 == 0 ? 'bg-gray-100' : ''">
            <td class="w-1/3 text-left py-3 px-4 font-medium"> {{ item.name }} </td>
            <td class="text-left py-3 px-4"> {{ item.birthday }} </td>
            <td class="w-1/4 text-left py-3 px-4">
              Lớp {{ item.shape }}
            </td>
            <td class="w-1/4 text-left py-3 px-4">
              Lớp {{ item.classx }}
            </td>
            <td style="width: 18rem;" class="text-left py-3 px-4 flex">
              <a :href="'/dashboard/classes/view?student=' + item._id" class="focus:outline-none mx-1 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold py-1 px-4 rounded" target="_blank">Xem chi tiết</a>
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
