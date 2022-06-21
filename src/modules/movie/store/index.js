import { defineStore } from "pinia";

import state from "./state";
import getters from "./getters";
import actions from "./actions";

export const useMovieStore = defineStore({
  id: "movie",
  // state: () => ({
  //   ...state,
  // }),
  state,
  getters,
  actions,
});
