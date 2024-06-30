const TOKEN = '7480801912:AAHPxuq-hYBoi98yY-vgk_N9EAJCHEq8ps0';
const CHAT_ID = '-1002155016468';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`


function showToast(message, backgroundColor) {
  Toastify({ 
    text: message, 
    duration: 3000, 
    close: true,    
    gravity: 'bottom', 
    position: 'right', 
    backgroundColor: backgroundColor, 
  }).showToast();
}
let code;

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault()
  const element = document.querySelector('.iti__selected-dial-code');
  let code = '';
  if (element) {
    code = element.textContent;
  }
 
  let message = `<b>Заявка с сайта: </b>\n`
  message += `<b>Отправитель: </b> ${this.name.value}\n`
  message += `<b>Phone: </b>${code} ${this.phone.value}\n`
  message += `<b>Email: </b> ${this.email.value}`

  if (!this.name.value || !this.phone.value || !this.email.value) {
    return
  } 

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
    .then((res) => {
      this.name.value = ''
      this.phone.value = ''
      this.email.value = ''
      
      showToast('Заявка успешно отправлена', 'linear-gradient(to right, #00b09b, #96c93d)');
    
    })
    .catch((err) => {
      showToast(`Ошибка при отправке заявки: ${err.message}`, 'linear-gradient(to right, #e74c3c, #c0392b)');
    }) 
   
})


