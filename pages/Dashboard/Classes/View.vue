<template>
  <div>
    <div class="container mx-auto">
      <div class="mt-3">
        <h2 class="mt-4 text-2xl font-bold text-gray-800">
          Thông tin chi tiết
        </h2>
        <div class="mt-2 w-full">
          <div class="flex flex-col w-full bg-white rounded w-full">
            <div class="flex flex-col w-full md:flex-row">
              <div
                class="flex flex-row justify-around p-4 py-3 font-bold leading-none uppercase bg-teal-400 rounded-l md:flex-col md:items-center md:justify-center md:w-1/4"
              >
                <img src="~/assets/img/qr.png" />
              </div>
              <div class="p-4 font-normal text-gray-800 md:w-3/4">
                <h1
                  class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"
                >
                  {{ student.name }}
                </h1>
                <p style="top: -8px" class="relative leading-normal uppercase">
                  MÃ ID: {{ student._id }}
                </p>
                <p
                  style="top: -8px"
                  class="relative font-medium leading-normal text-gray-700"
                >
                  Khối: {{ student.shape }} → Lớp:
                  {{ student.classx }}
                </p>
                <p style="top: -8px" class="relative leading-normal">
                  Ngày sinh: {{ student.birthday }}
                </p>
                <hr
                  class="mb-2 border border-t-0 border-r-0 border-l-0 border-gray-200"
                />
                <div>
                  <p class="font-bold">THÔNG TIN SỨC KHỎE MỚI NHẤT</p>
                  <div v-if="measureOfStudent !== null">
                    Chiều cao: {{ measureOfStudent.measures.height
                    }}<small>cm</small> | Cân nặng:
                    {{ measureOfStudent.measures.weight }}<small>kg</small> |
                    BMI:
                    {{ measureOfStudent.measures.bmi }}
                  </div>
                  <div v-if="measureOfStudent !== null">
                    Thể trạng:
                    <div
                      class="mt-1"
                      v-html="convertBMI(measureOfStudent.measures.bmi)"
                    ></div>
                  </div>
                  <div v-else><i> Chưa có chỉ số đo sức khỏe! </i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  layout: "dashboard",
  head() {
    return {
      title: "Xem chi tiết học sinh"
    };
  },
  async asyncData({ store, query, redirect }) {
    try {
      await store.dispatch("repositories/students/infoOfIdStudent", {
        idStudent: query.student
      });
      await store.dispatch("repositories/measures/infoOfIdStudent", {
        idStudent: query.student
      });
    } catch (error) {
      return redirect("/dashboard/classes");
    }
  },
  computed: {
    ...mapState("repositories/students", ["student"]),
    ...mapState("repositories/measures", ["measureOfStudent"])
  },
  methods: {
    convertBMI(value) {
      let bmi = parseFloat(value);
      if (bmi < 16)
        return '<div class="w-56 flex items-center bg-red-600 text-white rounded text-sm font-bold px-4 py-2">GẦY ĐỘ III</div>';
      if (bmi >= 16 && bmi < 17)
        return '<div class="w-56 flex items-center bg-red-500 text-white rounded text-sm font-bold px-4 py-2">GẦY ĐỘ II</div>';
      if (bmi >= 17 && bmi < 18.5)
        return '<div class="w-56 flex items-center bg-orange-400 text-white rounded text-sm font-bold px-4 py-2">GẦY ĐỘ I</div>';
      if (bmi >= 18.5 && bmi < 25)
        return '<div class="w-56 flex items-center bg-gray-200 text-gray-800 rounded text-sm font-bold px-4 py-2">BÌNH THƯỜNG</div>';
      if (bmi >= 25 && bmi < 30)
        return '<div class="w-56 flex items-center bg-orange-400 text-white rounded text-sm font-bold px-4 py-2">THỪA CÂN</div>';
      if (bmi >= 30 && bmi < 35)
        return '<div class="w-56 flex items-center bg-red-500 text-white rounded text-sm font-bold px-4 py-2">BÉO PHÌ ĐỘ I</div>';
      if (bmi >= 35 && bmi < 40)
        return '<div class="w-56 flex items-center bg-red-600 text-white rounded text-sm font-bold px-4 py-2">BÉO PHÌ ĐỘ II</div>';
      if (bmi > 40)
        return '<div class="w-56 flex items-center bg-red-700 text-white rounded text-sm font-bold px-4 py-2">BÉO PHÌ ĐỘ III</div>';
    }
  }
};
</script>
