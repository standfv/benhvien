<template>
  <div class="Measure">
    <div class="container mx-auto">
      <div class="mt-3 rounded-sm lg:px-0 px-2">
        <h2 class="text-4xl font-bold text-gray-800">Xin mời bước lên máy!</h2>
        <div class="flex flex-wrap mt-3 w-full lg:-mx-2">
          <div class="w-full lg:w-1/3 bg-white rounded p-4 list-student">
            <h3 class="text-lg font-bold text-gray-800 select-none mb-2">
              Danh sách học sinh
            </h3>
            <!-- danh sách học sinh -->
            <div class="list-student-scrollbar">
              <div v-for="item in list" :key="item._id">
                <input
                  v-model="currentStudent"
                  :value="`${item._id}|${item.name}|${item.birthday}`"
                  type="radio"
                  :id="'control_' + item._id"
                  name="select"
                />
                <label class="rounded" :for="'control_' + item._id">
                  <h2 class="font-bold">{{ item.name }}</h2>
                  <p>
                    {{ item.birthday }}
                  </p>
                  <span
                    v-if="
                      includeCheckMeasures(listIdMeasures, item._id) == true
                    "
                    class="absolute font-semibold text-sm text-teal-500"
                    style="top: 15px; right: 9px; z-index: 4"
                    >[ Đã đo ]</span
                  >
                </label>
              </div>
            </div>
            <!-- kết thúc danh sách học sinh -->
          </div>
          <div class="w-full lg:w-2/3 lg:pl-2 select-none">
            <h2 class="lg:px-3 lg:mx-0 mx-1 text-lg lg:mt-0 mt-2 lg:mb-1 mb-2 uppercase font-bold">
              <span v-if="currentStudent.length > 0">
                Đang chọn → [{{ currentStudent.split("|")[1] }} -
                {{ currentStudent.split("|")[2] }}]
              </span>
              <span v-else> Đang chọn: Không có </span>
            </h2>
            <div class="flex flex-wrap -mx-1 overflow-hidden">
              <div
                v-if="valid.success == null"
                class="lg:px-3 px-1 w-full lg:w-1/2 overflow-hidden"
              >
                <div class="flex flex-col mb-3">
                  <div class="flex bg-white p-5 rounded">
                    <span>
                      <svg
                        class="fill-current text-gray-800 w-24 h-24"
                        enable-background="new 0 0 65.5 65.5"
                        viewBox="0 0 60 60"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Page-1" fill="none" fill-rule="evenodd">
                          <g
                            id="028---Height-Restrictions"
                            fill="rgb(0,0,0)"
                            fill-rule="nonzero"
                            transform="translate(0 -1)"
                          >
                            <path
                              id="Shape"
                              d="m13 26v8c-.0013285 1.3264893.5250291 2.5990309 1.4629991 3.5370009s2.2105116 1.4643276 3.5370009 1.4629991c1.0854693-.0036768 2.1396111-.3641933 3-1.026v18.026c-.0062173 2.1566753 1.3751502 4.0727751 3.423267 4.7484261 2.0481169.675651 4.2984577-.0423886 5.576733-1.7794261.1421488.2019063.2985473.3933942.468.573 1.4311525 1.4282965 3.5816691 1.8540583 5.4490809 1.0788153 1.8674117-.7752429 3.0841066-2.5988789 3.0829191-4.6208153v-18.025c1.5068327 1.1540984 3.5390451 1.3502657 5.238807.5056965 1.699762-.8445692 2.7708704-2.5826991 2.761193-4.4806965v-8c-.0055111-4.9682782-4.0317218-8.9944889-9-9h-2.356c2.9732356-2.3937318 4.1130871-6.4026408 2.8440302-10.00258198-1.2690568-3.59994118-4.6709525-6.00778634-8.4880302-6.00778634s-7.2189734 2.40784516-8.4880302 6.00778634c-1.2690569 3.59994118-.1292054 7.60885018 2.8440302 10.00258198h-2.356c-4.9682782.0055111-8.9944889 4.0317218-9 9zm10-16c0-3.86599325 3.1340068-7 7-7s7 3.13400675 7 7c0 3.8659932-3.1340068 7-7 7-3.8641657-.0044086-6.9955914-3.1358343-7-7zm15 9c3.8641657.0044086 6.9955914 3.1358343 7 7v8c0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3v-8c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v30c0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3v-13c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v13c0 1.0717968-.5717967 2.0621779-1.5 2.5980763-.9282032.5358984-2.0717968.5358984-3 0-.9282033-.5358984-1.5-1.5262795-1.5-2.5980763v-30c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v8c0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3v-8c.0044086-3.8641657 3.1358343-6.9955914 7-7z"
                            />
                            <path
                              id="Shape"
                              d="m2 61h7c1.1045695 0 2-.8954305 2-2v-56c0-1.1045695-.8954305-2-2-2h-7c-1.1045695 0-2 .8954305-2 2v56c0 1.1045695.8954305 2 2 2zm7-58v56h-7v-3h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-2h2c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-2v-2h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-2h2c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-2v-2h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-2h2c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-2v-2h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-2h2c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-2v-2h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-2h2c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-2v-2h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-3v-2h2c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-2v-2h3c.55228475 0 1-.44771525 1-1s-.44771525-1-1-1h-3v-3z"
                            />
                            <path
                              id="Shape"
                              d="m57.8 11c.8532755.0154958 1.6374808-.4672122 2.008-1.236.3360062-.70783566.2277298-1.54668433-.277-2.146l-4.8-5.818c-.4444241-.48583267-1.0725578-.76253702-1.731-.76253702s-1.2865759.27670435-1.731.76253702l-4.8 5.818c-.5047298.59931567-.6130062 1.43816434-.277 2.146.3705192.7687878 1.1547245 1.2514958 2.008 1.236h.8v40h-.8c-.8532755-.0154958-1.6374808.4672122-2.008 1.236-.3360062.7078357-.2277298 1.5466843.277 2.146l4.8 5.818c.4318653.5074563 1.0646521.799851 1.731.799851s1.2991347-.2923947 1.731-.799851l4.8-5.818c.5047298-.5993157.6130062-1.4381643.277-2.146-.3705192-.7687878-1.1547245-1.2514958-2.008-1.236h-.8v-40zm-1.8 42h1.8c.154 0 .2.082.188.109l-4.8 5.818c-.0489108.0516154-.1168916.0808512-.188.0808512s-.1390892-.0292358-.188-.0808512l-4.812-5.827c0-.016.048-.1.2-.1h1.8c.5522847 0 1-.4477153 1-1v-42c0-.55228475-.4477153-1-1-1h-1.8c-.154 0-.2-.082-.188-.109l4.8-5.818c.0489108-.0516154.1168916-.08085119.188-.08085119s.1390892.02923579.188.08085119l4.812 5.827c0 .016-.048.1-.2.1h-1.8c-.5522847 0-1 .44771525-1 1v42c0 .5522847.4477153 1 1 1z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div class="ml-4">
                      <span class="font-medium relative" style="top: 4px">
                        Chiều cao
                      </span>
                      <div class="block text-5xl font-bold">
                        {{ health.height }}
                        <small>cm</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-5 rounded">
                  <div class="flex">
                    <span>
                      <svg
                        class="fill-current text-gray-800 w-24 h-24"
                        enable-background="new 0 0 65.5 65.5"
                        version="1.1"
                        viewBox="0 0 65.5 65.5"
                        xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m52.5 0h-39.5c-7.168 0-13 5.832-13 13v39.5c0 7.168 5.832 13 13 13h39.5c7.168 0 13-5.832 13-13v-39.5c0-7.168-5.832-13-13-13zm11 52.5c0 6.065-4.935 11-11 11h-39.5c-6.065 0-11-4.935-11-11v-39.5c0-6.065 4.935-11 11-11h39.5c6.065 0 11 4.935 11 11v39.5zm-19.221-46.525h-23.058c-3.844 0-6.971 3.127-6.971 6.971s3.127 6.971 6.971 6.971h23.059c3.844 0 6.971-3.127 6.971-6.971s-3.128-6.971-6.972-6.971zm0 11.942h-23.058c-2.741 0-4.971-2.23-4.971-4.971s2.229-4.971 4.971-4.971h23.059c2.741 0 4.971 2.23 4.971 4.971s-2.23 4.971-4.972 4.971zm-13.055-8.076 0.064 0.998c-0.329 0.021-0.656 0.049-0.981 0.084l-0.107-0.994c0.338-0.037 0.679-0.065 1.024-0.088zm-7.941 1.959 0.409 0.913c-0.298 0.134-0.593 0.274-0.885 0.422l-0.451-0.893c0.305-0.154 0.614-0.302 0.927-0.442zm-3.576 2.01 0.568 0.824c-0.271 0.186-0.537 0.378-0.798 0.575l-0.602-0.798c0.272-0.206 0.55-0.407 0.832-0.601zm7.459-3.347 0.238 0.971c-0.319 0.078-0.635 0.164-0.948 0.257l-0.283-0.959c0.327-0.098 0.658-0.187 0.993-0.269zm18.63 3.463c0.281 0.196 0.557 0.399 0.829 0.608l-0.61 0.793c-0.26-0.2-0.524-0.394-0.792-0.582l0.573-0.819zm-3.563-2.044c0.311 0.144 0.619 0.294 0.924 0.451l-0.457 0.889c-0.293-0.151-0.587-0.295-0.886-0.432l0.419-0.908zm-3.874-1.375c0.333 0.086 0.663 0.178 0.991 0.278l-0.291 0.957c-0.314-0.096-0.63-0.184-0.949-0.266l0.249-0.969zm-4.055-0.655c0.344 0.024 0.685 0.055 1.025 0.095l-0.116 0.993c-0.324-0.038-0.65-0.068-0.978-0.091l0.069-0.997zm-0.836 6.111c0.109 0.539-8e-3 0.98-0.26 0.98h-0.917c-0.252 0-0.369-0.441-0.26-0.98l0.52-2.566c0.109-0.539 0.288-0.539 0.397 0l0.52 2.566zm9.931 40.447c0 0.552-0.447 1-1 1h-19.298c-0.553 0-1-0.448-1-1s0.447-1 1-1h19.299c0.552 0 0.999 0.447 0.999 1z"
                        />
                      </svg>
                    </span>
                    <div class="ml-4">
                      <span class="font-medium relative" style="top: 4px">
                        Cân nặng
                      </span>
                      <div class="block text-5xl font-bold">
                        {{ health.weight }}
                        <small>kg</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="valid.success == null"
                class="lg:m-0 m-1 lg:mt-0 mt-3 px-3 w-full lg:w-1/2 overflow-hidden bg-white p-5 rounded flex lg:justify-center items-center"
              >
                <div class="flex">
                  <span>
                    <svg
                      class="fill-current text-gray-800 w-24 h-24"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M480,472V120a72.081,72.081,0,0,0-72-72H312V24a8,8,0,0,0-8-8H208a8,8,0,0,0-8,8V48H104a72.081,72.081,0,0,0-72,72V472a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V385.759l4.933.986,11.132,86.278A8,8,0,0,0,136,480H256v8a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8v-8h56a8,8,0,0,0,7.935-6.977l11.089-85.944L400,385.973V472a8,8,0,0,0,8,8h64A8,8,0,0,0,480,472Zm-336.966-8-9.54-73.943L256,414.559V464ZM272,480V408a8,8,0,0,0-6.431-7.845L112,369.441V337.759l16,3.2V352a8,8,0,0,0,16,0v-7.841l16,3.2V360a8,8,0,0,0,16,0v-9.441l16,3.2V368a8,8,0,0,0,16,0V356.959l16,3.2V376a8,8,0,0,0,16,0V363.359l16,3.2V376a8,8,0,0,0,16,0v-7.195a39.976,39.976,0,0,1,21.04,11.731l-8.618,4.309a8,8,0,1,0,7.156,14.31l9.957-4.978A39.791,39.791,0,0,1,304,408v8h-8a8,8,0,0,0,0,16h8v16h-8a8,8,0,0,0,0,16h8v16Zm96.966-16H320V408c0-1.418-.07-2.819-.174-4.211l58.588-13.019Zm-52.607-75.831a56.3,56.3,0,0,0-21.466-26.839L336,352.2V360a8,8,0,0,0,16,0V348.64l16-3.556V352a8,8,0,0,0,16,0V341.529l16-3.556v31.61ZM464,464H416V168a8,8,0,0,0-16,0v55.485L386.969,324.478,263.913,351.824,124.974,324.036,112,223.484V168a8,8,0,0,0-16,0V464H48V120a56.063,56.063,0,0,1,56-56h96v8a8.009,8.009,0,0,1-8,8H128a8,8,0,0,0,0,16h64a24.028,24.028,0,0,0,24-24V32h80V72a24.028,24.028,0,0,0,24,24h64a8,8,0,0,0,0-16H320a8.009,8.009,0,0,1-8-8V64h96a56.063,56.063,0,0,1,56,56Z"
                      />
                      <path
                        d="m240 208v-40a8 8 0 0 0-16 0v40a8.009 8.009 0 0 1-8 8h-48a8 8 0 0 0 0 16h48a24.028 24.028 0 0 0 24-24z"
                      />
                      <path
                        d="m344 216h-48a8.009 8.009 0 0 1-8-8v-40a8 8 0 0 0-16 0v40a24.028 24.028 0 0 0 24 24h48a8 8 0 0 0 0-16z"
                      />
                      <path
                        d="M288,272H272a8.009,8.009,0,0,1-8-8V248a8,8,0,0,0-16,0v16a8.009,8.009,0,0,1-8,8H224a8,8,0,0,0,0,16h16a23.9,23.9,0,0,0,16-6.131A23.9,23.9,0,0,0,272,288h16a8,8,0,0,0,0-16Z"
                      />
                    </svg>
                  </span>
                  <div class="ml-4">
                    <span class="font-medium relative" style="top: 4px">
                      BMI
                    </span>
                    <div class="block text-5xl font-bold break-all">
                      {{ health.bmi }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="valid.success == true"
                class="mx-3 h-56 w-full overflow-hidden bg-white p-5 rounded flex justify-center items-center"
              >
                <div>
                  <h2 class="text-teal-500 font-bold text-3xl block">
                    Lưu thành công!
                  </h2>
                  <p>Xin mời chọn học sinh tiếp theo.</p>
                </div>
              </div>
            </div>
            <div
              v-if="valid.success == null"
              class="mt-5 pl-2 lg:px-0 px-2 lg:mb-0 mb-3 rounded flex justify-between items-center"
            >
              <div>
                <!-- <label class="flex justify-start items-start py-2">
                  <div
                    class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  >
                    <input
                      v-model="autoSave"
                      type="checkbox"
                      class="opacity-0 absolute"
                    />
                    <svg
                      class="fill-current hidden w-4 h-4 text-teal-500 pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <div class="select-none cursor-pointer">
                    Lưu tự động <i>(Cần đứng yên sau 2.5 giây)</i>
                  </div>
                </label> -->
              </div>
              <div>
                <button
                  v-if="health.bmi == 0"
                  class="opacity-50 cursor-default bg-teal-500 focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                  Lưu chỉ số
                </button>
                <button
                  v-else
                  @click="saveMeasure"
                  class="bg-teal-500 focus:outline-none hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
                >
                  Lưu chỉ số
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
function healthx() {
  return {
    height: 0,
    weight: 0,
    bmi: 0
  };
}
export default {
  layout: "dashboard",
  head() {
    return {
      title: "HeaCare - Đo chỉ số"
    };
  },
  data() {
    return {
      health: new healthx(),
      autoSave: false,
      currentStudent: "",
      valid: {
        success: null
      }
    };
  },
  watch: {
    currentStudent(value) {
      this.health = new healthx();
      this.valid.success = null;
    },
    "health.weight": function (value) {
      console.log("bmi:", value);
      let bmi = value / (this.health.height * this.health.height);
      this.health.bmi = parseFloat(bmi).toFixed(2);
    },
    "health.height": function (value) {
      console.log("bmi:", value);
      let bmi = this.health.weight / (value * value);
      this.health.bmi = parseFloat(bmi).toFixed(2);
    },
    autoSave(value) {
      setTimeout(() => {
        if (value === true) {
          if (this.currentStudent.length <= 0)
            alert("Xin mời chọn học sinh bên tay trái!");
        }
      }, 1000);
    }
  },
  computed: {
    ...mapState("repositories/students", ["list"]),
    ...mapState("repositories/measures", ["listIdMeasures"])
  },
  async asyncData({ store }) {
    await store.dispatch("repositories/students/listStudent");
    await store.dispatch("repositories/measures/listIdMeasure");
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: "home"
    }).on("measure_height", data => {
      console.log('w: ', data.height / 100);
      let height = data.height / 100; // cm -> m
      this.health.height = parseFloat(data.height).toFixed(1);
    });
    this.socket = this.$nuxtSocket({
      name: "home"
    }).on("measure_weight", data => {
      console.log('h: ', data.weight);
      let weight = data.weight;
      this.health.weight = parseFloat(weight).toFixed(2);
    });
  },
  methods: {
    ...mapActions("repositories/measures", ["addMeasure", "listIdMeasure"]),
    async saveMeasure() {
      let _ctx = this;
      if (this.currentStudent.length <= 0) return alert("Chưa chọn học sinh!");
      try {
        let { data } = await _ctx.addMeasure({
          form: {
            student: _ctx.currentStudent.split("|")[0],
            measures: {
              height: _ctx.health.height, // m -> cm
              weight: _ctx.health.weight,
              bmi: _ctx.health.bmi
            }
          }
        });
        if (data.message === "success") {
          _ctx.valid.success = true;
          await _ctx.listIdMeasure();
        } else {
          alert(
            "Xảy ra lỗi không thể lưu chỉ số! Vui lòng liên hệ trung tâm hỗ trợ!"
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    includeCheckMeasures(listIdMeasures, idStudent) {
      for (var i = 0; i < listIdMeasures.length; i++) {
        if (listIdMeasures[i].student == idStudent) return true;
      }
    }
  }
};
</script>
<style lang="scss">
.Measure {
  .list-student-scrollbar {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 490px; 
  }
  input:checked + svg {
    display: block;
  }
  .list-student {
    user-select: none;
    input[type="radio"] {
      display: none;
      &:not(:disabled) ~ label {
        cursor: pointer;
      }
      &:disabled ~ label {
        color: hsla(150, 5%, 75%, 1);
        border-color: hsla(150, 5%, 75%, 1);
        box-shadow: none;
        cursor: not-allowed;
      }
    }
    label {
      height: 100%;
      display: block;
      background: white;
      border: 2px solid #38b2ac;
      padding: 0.2rem 0.5rem;
      margin-bottom: 0.3rem;
      text-align: left;
      position: relative;
      transition: all 100ms ease-in;
      &:hover {
        background: #38b2ac;
        color: hsla(215, 0%, 100%, 1);
      }
    }
    input[type="radio"]:checked + label {
      background: #38b2ac;
      color: hsla(215, 0%, 100%, 1);
      &::after {
        color: #ffffff;
        content: "✓";
        font-size: 14px;
        position: absolute;
        font-weight: 800;
        top: 12px;
        right: 0%;
        transform: translateX(-50%);
        width: 30px;
        padding: 5px;
        text-align: center;
        border-radius: 3px;
        background: #4fd1c5;
        z-index: 5;
      }
    }
    input[type="radio"]#control_05:checked + label {
      background: red;
      border-color: red;
    }
  }
}
</style>
