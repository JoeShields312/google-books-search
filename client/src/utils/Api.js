import axios from "axios";

export default {
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get('/api/books');
  },
  deleteBook: function(_id) {
    return axios.delete(`/api/books/${_id}`);
  },
  getBook: function(q) {
    return axios.get("/api/books/google/", { params: { q: "title:" + q } });
  },
  postBook: function(data) {
    return axios.post('/api/books/', data);
  }
};
