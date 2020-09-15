import users from '../../data/users';

const state = {
  users: []
};

const mutations = {
  'SET_LEVELS'(state, users) {
    state.users = users;
  }
};

const actions = {
  initUsers: ({
    commit
  }) => {
    commit('SET_LEVELS', users);
  }
};

const getters = {
  users: state => {
    return state.users;
    //to co wyzej, tj. users:[]
  }
};

export default {
  state,
  mutations,
  getters
}
