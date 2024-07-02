import { openContactsModal } from './modal-contact-me';

const ministryOpenButtons = document.querySelectorAll('.ministry-btn-modal');

ministryOpenButtons.forEach(button => {
  button.addEventListener('click', openContactsModal);
});
