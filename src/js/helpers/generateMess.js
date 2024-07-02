export const generateMess = data => {
  return `Хочу дізнатись більше! \nІм'я: ${data.name} \nНомер телефону: ${
    data.phone
  } \nКоментар: ${data.comment ? data.comment : ''}.`;
};
