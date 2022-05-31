export const state = () => ({
  postList: [],
  postSingle: [],
  accident: [],
  commentLast: [],
});

export const mutations = {
  setPostList(state, postList) {
    state.postList = postList;
  },
  setPostSingle(state, postSingle) {
    state.postSingle = postSingle;
  },
  setAccident(state, accident) {
    state.accident = accident;
  },

  setCommentLast(state, commentLast) {
    state.commentLast = commentLast;
  },
};

export const actions = {
  async fetchPostList({ commit }, {start, post}) {
    return await new Promise((resolve, reject) => {
      this.$axios 
        .get(`/item-stream?start=${start}&ps=${post}`)
        .then((res) => {
          commit("setPostList", res.data.data);
          resolve();
          // console.log(res.data, 'postsssssssssssssss');
        })
        .catch((error) => {
          reject(error);
          // console.log(error, 'sdasdasd');
        });
    });
  },
  async fetchPostSingle({ commit }, {slug}) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/content/${slug}`)
        .then((res) => {
          commit("setPostSingle", res.data);
          // console.log(res.data, 'singleeeeeeeee')
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          // console.log(error,'errrrrrorrrrrrr');
        });
    });
  },

  async fetchAccident({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('/accidents/last')
        .then((res) => {
          commit("setAccident", res.data);
          console.log(res.data, 'accidents')
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          // console.log(error,'errrrrrorrrrrrr');
        });
    });
  },

  
  async fetchCommentLast({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('/bff/polls/last')
        .then((res) => {
          commit("setCommentLast", res.data);
          console.log(res.data, 'accidents')
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          // console.log(error,'errrrrrorrrrrrr');
        });
    });
  },
};
