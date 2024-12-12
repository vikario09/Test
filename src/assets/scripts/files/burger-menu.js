class BurgerMenu {
  constructor() {
    this.menuBtn = document.querySelector('.burger-menu');
    this.menu = document.querySelector('.menu');
    this.body = document.querySelector('body');
    this.headerWrap = document.querySelector('.header__wrap');
    this.topWrap = document.querySelector('.top__wrap')
    this.menuIsOpen = false;
    this.openBurgerMenu()
  }

  openBurgerMenu() {
    this.menuBtn.addEventListener('click', () => {
      this.menuIsOpen = !this.menuIsOpen;
      this.menuBtn.classList.toggle('burger-menu--open');
      this.menu.classList.toggle('menu--open');
      this.body.classList.toggle('overflow-hidden');
      console.log(this.topWrap.clientHeight);


      if (this.menuIsOpen) {
        this.headerWrap.style.marginTop = `-${this.topWrap.clientHeight}px`
      } else {
        this.headerWrap.style.marginTop = 0;
      }
    })
  }



}

const burgerMenu = new BurgerMenu();