const getDefaultState = () => {
  return {
    loading: true
  };
};
export const state = getDefaultState;
export const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};
export const actions = {
  async add({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.post("shapes/add", {
        data: payload.name
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
