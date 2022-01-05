// login account 2 (mobile - tablet)

var CONNECT_USER = 'MB17';
var CONNECT_PASS = '11';

var inputUsername = document.getElementById('username2');
var inputPassword = document.getElementById('password2');

var loginForm = document.getElementById('form-login2');

if(loginForm.showEvent){
  loginForm.showEvent('submit', submitForm);
}else{
  loginForm.addEventListener('submit', submitForm);
}

function submitForm() {
  var nameuser = inputUsername.value;
  var passuser = inputPassword.value;

  if(nameuser == CONNECT_USER && passuser == CONNECT_PASS){
    modelTwo.classList.remove('active');
  }else{
    alert('Thất bại! thông tin đăng nhập sai')
  }
}