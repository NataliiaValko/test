import { generateMess } from './helpers/generateMess';
import { errorNotification, successNotification } from './helpers/toastify.js';

// Хендлер для кліку по кнопці закриття модалки
document
  .getElementById('modal-contact-me-close')
  .addEventListener('click', function () {
    closeModal();
  });

// Закриття модального вікна при кліку по бекдропу
document
  .getElementById('modal-contact-me-backdrop')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

// Закриття модалки при натисканні на клавішу ESC
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

//Подія відправки форми
document
  .getElementById('modal-contact-me-form')
  .addEventListener('submit', handleSubmit);

// Функція для відкриття модального вікна
export function openContactsModal() {
  const contactsModal = document.getElementById('modal-contact-me-backdrop');
  if (!contactsModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'hidden';
  contactsModal.style.display = 'block';
}

// Закриття модального вікна
function closeModal() {
  const contactsModal = document.getElementById('modal-contact-me-backdrop');
  if (!contactsModal) {
    console.error('Modal not found');
    return;
  }
  document.body.style.overflow = 'auto';
  contactsModal.style.display = 'none';
}

// Відправка форми
async function handleSubmit(e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    comment: e.target.message.value,
  };

  try {
    await fetch('appointment.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        text: generateMess(formData),
      }),
    }).then(successNotification);

    e.target.reset();
    closeModal();
  } catch (error) {
    errorNotification();
  }
}
