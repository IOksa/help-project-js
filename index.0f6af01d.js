var o={fetchTopBooks:function(){return fetch("https://books-backend.p.goit.global/books/top-books").then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}))}};var e={fetchBookById:function(o){return fetch(`https://books-backend.p.goit.global/books//${o}`).then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}))}};const t={ul:document.querySelector(".books-list"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function n(){window.removeEventListener("keydown",s),document.body.classList.remove("show-modal")}function s(o){"Escape"===o.code&&n()}console.log(t.closeModalBtn),console.log(t.backdrop),t.ul.addEventListener("click",(function(o){o.preventDefault();if(!o.target.classList.contains("gallery__image"))return;console.log(o.target.dataset.source),t=o.target.dataset.source,console.log("openGalleryItemInModal"),e.fetchBookById(t).then((o=>console.log(o))).catch((o=>console.log("Ooops! Something went wrong!"))),window.addEventListener("keydown",s),document.body.classList.add("show-modal"),console.log("onOpenModal");var t})),t.backdrop.addEventListener("click",(function(o){o.currentTarget===o.target&&(console.log("Кликнули именно в бекдроп!!!!"),n())})),o.fetchTopBooks().then((function(o){console.log("createMarkupGalleryBooks",o),console.log(o[0].books[0]);const e=o[0].books.map((({_id:o,book_image:e,book_image_width:t,book_image_height:n})=>`<li ><div class="thumb"><img class="gallery__image" src="${e}" alt="" width="${t}px" height="${n}px" data-source="${o}"/><div></li>`)).join("");console.log(e),t.ul.innerHTML=e}));
//# sourceMappingURL=index.0f6af01d.js.map
