const botaoMenu = document.querySelector(".menu__btn");

botaoMenu.addEventListener("click", function(){
    
    const menuLinks = document.querySelector(".menu__links");
    menuLinks.classList.toggle("ativo");
   
})