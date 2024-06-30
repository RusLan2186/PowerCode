document.addEventListener('DOMContentLoaded', function () {
  const phoneMask = document.getElementById('phone')
  IMask(
    phoneMask,
    { mask: '(00) 000-00-00' }
  )

  const fields = [
    {
      id: 'name',
      errorElement: 'nameError',
      validation: value => value.trim().length >= 6,
      errorMessage: 'Имя и фамилия не короче 6-ти символов',
      emptyMessage: 'Пожалуйста, введите Ваше имя и фамилию'
    },
    {
      id: 'phone',
      errorElement: 'phoneError',
      validation: value => /^\(\d{2}\) \d{3}-\d{2}-\d{2}$/
        .test(value.trim()),
      errorMessage: 'Пожалуйста, введите корректный номер телефона',
      emptyMessage: 'Пожалуйста, введите Ваш номер телефона'
    },
    {
      id: 'email',
      errorElement: 'emailError',
      validation: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim()),
      errorMessage: 'Пожалуйста, введите корректный email',
      emptyMessage: 'Пожалуйста, введите корректный email'
    }
  ];

  function clearErrorMessages() {
    fields.forEach(field => {
      document.getElementById(field.errorElement).textContent = '';
    });
  }

  function validateField(field) {
    const value = document.getElementById(field.id).value.trim();
    if (value === '') {
      document.getElementById(field.errorElement).textContent = field.emptyMessage;
      return false;
    } else if (!field.validation(value)) {
      document.getElementById(field.errorElement).textContent = field.errorMessage;
      return false;
    }
    return true;
  }

  function validateForm() {
    let isValid = true;
    clearErrorMessages();
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  }

  document.getElementById('myForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  fields.forEach(field => {
    const element = document.getElementById(field.id);

    element.addEventListener('input', function () {
      document.getElementById(field.errorElement).textContent = '';
    });

    element.addEventListener('blur', function () {
      validateField(field);
    });
  });

  window.intlTelInput(document.getElementById('phone'), {
    initialCountry: "ua",
    separateDialCode: true,
  });
});


