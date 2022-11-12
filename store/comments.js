export const state = () => ({
    comments: [],
  });
  
  export const mutations = {
    setComments(state, comments) {
      state.comments = comments;
    },
  };
  
  export const actions = {

    async FETCH_COMMENTS ({commit}, {id}) {
      return await new Promise((resolve, reject) => {
          this.$axios
          .get(this.$config.BFF_ENDPOINT+`/items/${id}/comments`)
          .then((res) => {
            console.log(res, '11')
            commit('setComments', res.data.data.comments);
            resolve(res);
          })
          .catch((error) => {
            reject(error); // reject
          });
      });
    },
  };
  