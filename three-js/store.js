// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    startModelAnimation: false,
  },
  mutations: {
    setStartModelAnimation(state, value) {
      state.startModelAnimation = value;
    },
  },
});
