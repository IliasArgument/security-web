const mobileNavFunction = () => {
    const headerBtn = document.querySelector(".header-burger-button");
    const mobileNav = document.querySelector(".mobile-nav");
  
    const toggleMobileNav = () => {
      const isOpen = mobileNav.classList.toggle("active");
      document.body.style.overflowY = isOpen ? "hidden" : "auto";
    };
  
    // Вешаем обработчик на кнопку и все ссылки с помощью делегирования
    headerBtn.addEventListener("click", toggleMobileNav);
    mobileNav.addEventListener("click", (event) => {
      if (event.target.classList.contains("mobile-nav__link")) {
        mobileNav.classList.remove("active");
        document.body.style.overflowY = "auto";
      }
    });
  };
  
  export default mobileNavFunction;
  