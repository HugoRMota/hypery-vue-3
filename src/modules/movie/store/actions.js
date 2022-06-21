import axios from "../../../support/http/axios";
import endpoint from "../movie.endpoint";
import { useToast } from "vue-toastification";

const { GET_MOVIE } = endpoint;
const toast = useToast();

export default {
  async ACT_MOVIE_LIST(payload) {
    this.movie.status = "LOADING";
    try {
      const { data } = await axios.get(GET_MOVIE(payload));
      this.movie.status = "SUCCESS";
      this.movie.data = data.results;
    } catch (error) {
      toast.error(error);
      this.movie.status = "ERROR";
    }
  },
};
