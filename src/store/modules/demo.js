import * as types from '../mutation-types';

// Initial state
const state = {
  'example': false,
  menuText1: '对自己狠一点，逼自己努力，再过五年你将会感谢今天发狠的自己、恨透今天懒惰自卑的自己。我始终相信一句话：只有自己足够强大，才不会被别人践踏。',
  menuText2: '你不得不承认，同样是备考，有人总比你高分：同样是减肥，有人总比你顺利；同样是毕业找工作，有人总比你幸运，同样都是努力，有人总比你更容易成功。' +
  '你以为生活欺骗了你，其实这就是生活。不是每个人都能成为自己想要的样子，但每个人都可以努力成为自己想要的样子。'
};

// Getters
/* eslint-disable no-shadow */
const getters = {'getExample': state => state.example};

// Actions
const actions = {
  changeExample({commit}) {
    commit(types.CHANGE_EXAMPLE);
  }
};

// Mutations
/* eslint-disable no-param-reassign  */
const mutations = {
  [types.CHANGE_EXAMPLE](state) {
    state.example = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
