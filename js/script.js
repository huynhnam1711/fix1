$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
            0:{
                items:3
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    const model = document.querySelector('.login-account')
    const accoutn = document.querySelector('.account');
    const closeModel = document.querySelector('.icon-btn');
    
    var CORRECT_CHANGES = 'Add user1'
    var CORRECT_USER = 'YG17';
    var CORRECT_PASS = '11'
    
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    var formLogin = document.getElementById('form-login');
    
    if(formLogin.attachEvent){
        formLogin.attachEvent('submit', formSubmit);
    }else{
        formLogin.addEventListener('submit', formSubmit);
    }
    
    function formSubmit(e) {
        var username = usernameInput.value;
        var password = passwordInput.value;
         
        if(username == CORRECT_USER && password == CORRECT_PASS){
            model.classList.remove('active')
    
            function convert() {
                result.innerText = CORRECT_CHANGES.value;
            }
        }else{
            alert('Thất bại! Sai thông tin đăng nhập');
        }
    }
    
    closeModel.onclick = () =>{
        model.classList.remove('active')
    }
    
    accoutn.addEventListener('click', showModel);
    function showModel() {
        model.classList.add('active');
    }
    
    var CORRECT_CHANGES = 'User'
    var result = document.getElementById('result');
    
    
    // 
    let previewContainer = document.querySelector('.products-preview');
    let previewBox = previewContainer.querySelectorAll('.preview');
    
    document.querySelectorAll('.products-container .product').forEach(product =>{
      product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
          let target = preview.getAttribute('data-target');
          if(name == target){
            preview.classList.add('active');
          }
        });
      };
    })
    
    previewBox.forEach(close =>{
      close.onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display='none';
      }
    })
    
    
    // login account 2
    const acountSecond = document.querySelector('.account-2');
    const modelTwo = document.querySelector('.login-account2');
    const closeTwo = document.querySelector('.icon-btn2');
    
    acountSecond.addEventListener('click', showTwo);
    
    function showTwo() {
      modelTwo.classList.add('active');
    }
    
    closeTwo.onclick = () =>{
      modelTwo.classList.remove('active');
    }