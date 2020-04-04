import axios from "axios";

export default {
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get('/Api/books');
  },
  deleteBook: function(_id) {
    return axios.delete(`/Api/books/${_id}`);
  },
  getBook: function(q) {
    return axios.get("/Api/books/google/", { params: { q: "title:" + q } });
  },
  postBook: function(data) {
    return axios.post('/Api/books/', data);
  }
};
