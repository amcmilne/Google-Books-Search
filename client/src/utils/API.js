import axios from "axios";

export default {
  getBook: function (query) {
    return axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  
  // Saves book to DB
  saveBook: function (bookInfo) { 
    return axios
    .post("/api/saved", bookInfo)
    .then(result => result.data);
  },

  // Get SAVED book from DB
  savedBooks: function () {
    return axios
    .get("/api/saved/:id")
    .then(result => result.data);
  },

  // // Deletes SAVED book w/ id
  // deleteBook: function (id) {
  //   return axios
  //   .delete("/api/books/" + id)
  //   .then(result => result.data);
  // },
};

