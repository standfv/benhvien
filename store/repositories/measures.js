const getDefaultState = () => {
  return {
    list: [],
    listIdMeasures: [],
    measureOfStudent: {}
  };
};
export const state = getDefaultState;
export const mutations = {
  setListMeasure(state, data) {
    state.list = data;
  },
  setListIdMeasure(state, data) {
    state.listIdMeasures = data;
  },
  setMeasureOfStudent(state, data) {
    state.measureOfStudent = data;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};
export const actions = {
  async addMeasure({ commit, state }, payload) {
    try {
      return await this.$axios.post("api/measures/add", payload.form);
    } catch (error) {
      console.log(error);
    }
  },
  async listMeasure({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.get("api/measures/list");
      commit("setListMeasure", data.results);
    } catch (error) {
      console.log(error);
    }
  },
  async listIdMeasure({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.get("api/measures/listIdMeasure");
      commit("setListIdMeasure", data.results);
    } catch (error) {
      console.log(error);
    }
  },
  async infoOfIdStudent({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.get(`api/measures/infoOfIdStudent/${payload.idStudent}`);
      commit("setMeasureOfStudent", data.results);
    } catch (error) {
      console.log(error);
    }
  }
};
