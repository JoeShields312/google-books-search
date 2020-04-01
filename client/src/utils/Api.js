import axios from "axios";
export default {
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  }
};