const menu = document.querySelector('.menu-bar');
const navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-up').classList.add('active');
    }else{
        document.querySelector('#scroll-up').classList.remove('active');
    }
}