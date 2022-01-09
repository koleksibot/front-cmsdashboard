export const state = () => ({
  drawer: false,
  
  visitedItems: [
    {name: "Inicio", path: "/admin/", deletable: false}
  ],
  activo: false

})
export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  }, 
  drawer(state, val) {
    state.drawer = val
  },
  setUser(state, data) {
    state.user = data
  },
  
  items(state) {
    state.visitedItems = []
  },

  ADD_VISITED_ITEM: (state, item) => {
    if (state.visitedItems.some((v) => v.path === item.path)) {
      return;
    }
    state.visitedItems.push(item);
  },
  REMOVE_VISITED_ITEM: (state, item) => {
    for (const [i, v] of state.visitedItems.entries()) {
      if (v.path === item.path) {
        state.visitedItems.splice(i, 1);
        break;
      }
    }
  },
  REMOVE_ALL_ITEMS(state) {
    state.visitedItems = [];
  },
  REPLACE_ITEMS(state, items) {
    state.visitedItems = items;
  },
};

export const actions = {
  addItem({ commit }, item) {
    commit("ADD_VISITED_ITEM", item);
  },
  removeItem({ commit }, item) {
    commit("REMOVE_VISITED_ITEM", item);
  },

  removeAll({ commit }) {
    commit("REMOVE_ALL_ITEMS");
  },

  replaceItems({ commit }, items) {
    commit("REPLACE_ITEMS", items);
  },
};
export const getters = {

  visited: state => {
    return state.visitedItems
  }
}
