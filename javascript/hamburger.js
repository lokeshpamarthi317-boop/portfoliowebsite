 const hamburger = document.querySelector(".navbar-menu .hamburger");
      const menubar = document.querySelector(".navbar-menu .menubar");

       hamburger.addEventListener("click", () => {
        menubar.classList.toggle("show");
       });