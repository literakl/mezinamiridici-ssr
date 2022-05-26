export const state = () => ({
  eventsList: [],
  eventsSingle: [],
});

export const mutations = {
  setEventsList(state, eventsList) {
    state.eventsList = eventsList;
  },
  setEventsSingle(state, eventsSingle) {
    state.eventsSingle = eventsSingle;
  },
};

export const actions = {
  async fetchEventsList({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios 
        .get("/item-stream")
        .then((res) => {
          commit("setEventsList", res.data);
          resolve();
          console.log(res.data, 'postsssssssssssssss');
        })
        .catch((error) => {
          reject(error);
          console.log(error);
        });
    });
  },
  async fetchEventsSingle({ commit }, slug) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`content/${slug}`)
        .then((res) => {
          commit("setEventsSingle", res.data);
          console.log(res.data, 'singleeeeeeeee')
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          console.log(error,'errrrrrorrrrrrr');
        });
    });
  },
};
