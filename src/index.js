import API from './fetchTopBooks';
import AP from './fetchbyid';

const refs={
    ul: document.querySelector('.books-list'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
}


console.log(refs.closeModalBtn);
console.log(refs.backdrop);

refs.ul.addEventListener('click',onClickItemGalleryBooks);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

onOpenModal();

///////////////////////////////////////////////////////////////////////////////////////
//API.fetchTopBooks().then(createMarkupGalleryBooks);
//.catch(err=>console.log('Ooops! Something went wrong!'));

// function createMarkupGalleryBooks(arr) {
//     console.log('createMarkupGalleryBooks',arr);
//     console.log(arr[0].books[0]);
//     const markup=arr[0].books.map(
//         ({
//         _id,
//         book_image,
//         book_image_width,
//         book_image_height,
//         }) =>
//         `<li ><div class="thumb"><img class="gallery__image" src="${book_image}" alt="" width="${book_image_width}px" height="${book_image_height}px" data-source="${_id}"/><div></li>`
//       )
//       .join("");
//       console.log(markup);
//       refs.ul.innerHTML=markup;
//  }
// /////////////////////////////////////////////////////////////////////////////////////
// function onClickItemGalleryBooks(event){
//     event.preventDefault();

//     const isImageGalleryEl=event.target.classList.contains('gallery__image');
//     if(!isImageGalleryEl){
//         return;
//     }
//     console.log(event.target.dataset.source);
//     openGalleryItemInModal(event.target.dataset.source);
// }

// function openGalleryItemInModal(idBook){
//     console.log('openGalleryItemInModal');

//     AP.fetchBookById(idBook).then(res=>console.log(res))
//     .catch(err=>console.log('Ooops! Something went wrong!'));

//     onOpenModal();

// }


function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');

    console.log('onOpenModal');


}
  
  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
  }
  
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      console.log('Кликнули именно в бекдроп!!!!');
      onCloseModal();
    }
  }
  
  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
  
    if (isEscKey) {
      onCloseModal();
    }
  }
  

