const state = {
  activeIndex: 0,
};

const mutations = {
  SET_ACTIVEINDEX: (state, index) => {
    state.activeIndex = index;
  },
};

const actions = {
  ChangeIndex(context, index) {
    context.commit("SET_ACTIVEINDEX", index);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
