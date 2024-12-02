const navbar = document.querySelector(".navbar-collapse");


  document.addEventListener('click', ()=>{
    if (navbar.classList.contains('show')){
        navbar.classList.remove('show');
    }
  })


