/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

export default {
  // Retrieve from API
  googleBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Save to DB
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  // Get from DB
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Get book by ID from DB
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
};
