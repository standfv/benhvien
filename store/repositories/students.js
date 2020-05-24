const getDefaultState = () => {
  return {
    list: [],
    student: {}
  };
};
export const state = getDefaultState;
export const mutations = {
  setStudent(state, data) {
    state.student = data;
  },
  setListStudent(state, data) {
    state.list = data;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};
export const actions = {
  async addStudent({ commit, state }, payload) {
    try {
      let response = await this.$axios.post("api/students/add", payload.form);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async infoOfIdStudent({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.get(`api/students/infoOfIdStudent/${payload.idStudent}`);
      commit("setStudent", data.results);
    } catch (error) {
      console.log(error);
    }
  },
  async listStudent({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.get("api/students/list");
      commit("setListStudent", data.results);
    } catch (error) {
      console.log(error);
    }
  }
};
