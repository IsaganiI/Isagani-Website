const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu');
const navLogo= document.querySelector('#navbar__logo');

// Displaying the Menu
const mobileMenu = ()=> {
   menu.classList.toggle('is-active')
   menuLinks.classList.toggle('active')

}
menu.addEventListener('click',mobileMenu);

//show active menu when scrolling
const highlightMenu = () =>{
   const elem = document.querySelector('.hightlight');
   const homeMenu = document.querySelector('.#home-page');
   const AboutMeMenu = document.querySelector('.#about-page');
   const ProjectsMenu = document.querySelector('.#projects-page');
   let scrollPos= window.scrollY
   console.log(scrollPos);

   //adds 'highlight' class to menu items
   if(window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight')
      AboutMeMenu.classList.remove('highlight')
      return
   } else if(window.innerWidth > 960 && scrollPos < 1400){
      AboutMeMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      ProjectsMenu.classList.remove('highlight');
      return
   } else if(window.innerWidth > 960 && scrollPos < 2345){
      ProjectsMenu.classList.add('highlight');
      AboutMeMenu.classList.remove('highlight');
      return
   }
   if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
      elem.classList.remove('highlight');
   }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Close mobile Menu when clicking menu item
cons
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
   if(window.innerwidth <= 768 && menuBars){
      menu.classList.toggle('is-active')
      menuLinks.classList.remove('active')
   }

}

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);