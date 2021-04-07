//Password settings

(() => {
    const refs = {
      openModalBtn: document.querySelector('.sign'),
      closeModalBtn: document.querySelector('.close'),
      modal: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.log'),
    closeModalBtn: document.querySelector('.close_login'),
    modal: document.querySelector('.cover_block'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-none');
  }
})();