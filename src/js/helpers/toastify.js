import 'toast-notification-js/src/toast-notification.css';
import { ToastNotification } from 'toast-notification-js';

const createToastNotification = ToastNotification();

export const errorNotification = () =>
  createToastNotification.create({
    classList: 'error-notification',
    message: 'Помилка відправки форми',
    duration: '5',
    position: {
      y: 'top',
      x: 'right',
      marginWidth: '20px',
    },
    closeButton: false,
  });

export const successNotification = () =>
  createToastNotification.create({
    classList: 'success-notification',
    message: 'Дякуємо за вашу заявку',
    duration: '5',
    position: {
      y: 'top',
      x: 'right',
      marginWidth: '20px',
    },
    closeButton: false,
  });
