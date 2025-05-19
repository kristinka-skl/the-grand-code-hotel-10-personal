(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-s]"),
      closeModalBtn: document.querySelector("[data-modal-close-s]"),
      modal: document.querySelector("[data-modal-s]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-m]"),
      closeModalBtn: document.querySelector("[data-modal-close-m]"),
      modal: document.querySelector("[data-modal-m]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
  })();

  (() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-l]"),
      closeModalBtn: document.querySelector("[data-modal-close-l]"),
      modal: document.querySelector("[data-modal-l]"),
    };
  
    refs.openModalBtns.forEach((openModalBtn) => openModalBtn.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
  })();