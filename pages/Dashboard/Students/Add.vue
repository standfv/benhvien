<template>
  <div>
    <div class="container mx-auto flex justify-center">
      <form
        style="width: 600px"
        class="lg:max-w-xl max-w-sm select-none mt-6 bg-white py-4 lg:mx-0 mx-2 px-5 rounded mb-6"
        @submit.prevent="submit"
      >
        <h2 class="text-2xl font-bold mb-2">Thêm học sinh</h2>
        <div class="mb-2 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Tên học sinh (Ví dụ: Trịnh Thanh Huyền )
          </label>
          <div>
            <input
              class="border-2 border-gray-200 focus:border-teal-500 focus:bg-white rounded bg-gray-200 h-12 px-4 py-2 w-full focus:outline-none"
              type="text"
              v-model="form.name"
              placeholder="Nhập họ và tên."
              required
            />
          </div>
        </div>
        <div class="mb-2 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Ngày sinh (Ví dụ: 24/07/2008 )
          </label>
          <div>
            <input
              class="border-2 border-gray-200 focus:border-teal-500 focus:bg-white rounded bg-gray-200 h-12 px-4 py-2 w-full focus:outline-none"
              type="text"
              v-model="form.birthday"
              placeholder="Nhập ngày sinh."
              required
            />
          </div>
        </div>
        <div class="mb-2 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Giới tính (Ví dụ: Nữ )
          </label>
          <div class="genderClass">
            <div class="flex items-center mr-4 mb-4">
              <input
                id="radio1"
                type="radio"
                class="hidden"
                v-model="form.gender"
                value="false"
              />
              <label
                for="radio1"
                class="flex items-center cursor-pointer text-md"
              >
                <span
                  class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink"
                ></span>
                Nam</label
              >
            </div>

            <div class="flex items-center mr-4 mb-4">
              <input
                id="radio2"
                type="radio"
                v-model="form.gender"
                class="hidden"
                value="true"
              />
              <label
                for="radio2"
                class="flex items-center cursor-pointer text-md"
              >
                <span
                  class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink"
                ></span>
                Nữ</label
              >
            </div>
          </div>
        </div>
        <div class="mb-2 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Khối (Ví dụ: Khối 2 )
          </label>
          <div>
            <input
              class="border-2 border-gray-200 focus:border-teal-500 focus:bg-white rounded bg-gray-200 h-12 px-4 py-2 w-full focus:outline-none"
              type="text"
              v-model="form.shape"
              placeholder="Nhập khối học."
              required
            />
          </div>
        </div>
        <div class="mb-2 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Lớp (Ví dụ: Lớp 2A )
          </label>
          <div>
            <input
              class="border-2 border-gray-200 focus:border-teal-500 focus:bg-white rounded bg-gray-200 h-12 px-4 py-2 w-full focus:outline-none"
              type="text"
              v-model="form.classx"
              placeholder="Nhập lớp học."
              required
            />
          </div>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="focus:outline-none bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Thêm học sinh
          </button>
          <p class="mt-3">
            <a
              class="text-sm font-medium text-teal-500 hover:text-teal-600"
              href="/dashboard/students"
              target="_blank"
              >▶ Danh sách học sinh
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
function formx() {
  return {
    name: "",
    birthday: "",
    gender: false,
    shape: "",
    classx: ""
  };
}
export default {
  layout: "dashboard",
  head () {
    return {
      title: "Thêm học sinh"
    }
  },
  data() {
    return {
      form: new formx()
    };
  },
  methods: {
    ...mapActions("repositories/students", ["addStudent"]),
    submit() {
      this.addStudent({ form: this.form })
        .then(response => {
          console.log("client :", response.data);
          this.form = new formx();
          this.$swal({
            position: "top-end",
            icon: "success",
            toast: true,
            title: "Thêm học sinh thành công!",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss">
.genderClass {
  input[type="radio"] + label span {
    transition: background 0.2s, transform 0.2s;
  }

  input[type="radio"] + label span:hover,
  input[type="radio"] + label:hover span {
    transform: scale(1.2);
  }

  input[type="radio"]:checked + label span {
    background-color: #38b2ac; //bg-blue
    box-shadow: 0px 0px 0px 2px white inset;
  }

  input[type="radio"]:checked + label {
    color: #38b2ac; //text-blue
  }
}
</style>
