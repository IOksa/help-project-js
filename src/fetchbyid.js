const BASE_URL='https://books-backend.p.goit.global/books/';

function fetchBookById(idBook){
    return fetch(`${BASE_URL}/${idBook}`)
    .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        } 
        return resp.json();
      });
}

export default {fetchBookById};