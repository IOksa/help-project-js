!function(){var o={ul:document.querySelector(".books-list"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function e(){window.removeEventListener("keydown",n),document.body.classList.remove("show-modal")}function n(o){"Escape"===o.code&&e()}console.log(o.closeModalBtn),console.log(o.backdrop),o.ul.addEventListener("click",onClickItemGalleryBooks),o.closeModalBtn.addEventListener("click",e),o.backdrop.addEventListener("click",(function(o){o.currentTarget===o.target&&(console.log("Кликнули именно в бекдроп!!!!"),e())})),window.addEventListener("keydown",n),document.body.classList.add("show-modal"),console.log("onOpenModal")}();
//# sourceMappingURL=index.8a926ff2.js.map
