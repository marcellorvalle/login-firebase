import Vue from 'vue'
import Vuex from 'vuex'
import {User} from "@/dtos/User";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: new User('','', ''),
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    }
  },
  actions: {
  },
  getters: {
    user: state => state.user,
    username: state => state.user.name,
    isAuthenticated: state => state.user.token != ''
  },
  modules: {
  }
})
