//variables globales
const $q = document.querySelector.bind(document),
  $qa = document.querySelectorAll.bind(document),
  $id = document.getElementById.bind(document),
  $class = document.getElementsByClassName.bind(document);


/* Efecto de deslice de izquierda a derecha al observarse */
const izquierda = $qa('.acercaDeMi__contenedorParaEfectos'),
  izquierda2 = $qa('.acercaDeMi__contenedorWebDevParaEfectos'),
  izquierda3 = $qa('.contacto__links');

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("classAparecerPorIzquierda");
    }
  })
})

izquierda.forEach(image => {
  observer.observe(image)
})

izquierda2.forEach(image => {
  observer.observe(image)
})

izquierda3.forEach(image => {
  observer.observe(image)
})


/* Efecto de deslice de derecha a izquierda al observarse */
const derecha = $qa('.proyectos__contenedor'),
  derecha2 = $qa('.contacto__formContenedorParaEfectos'),

  mirar = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("classAparecerPorDerecha");
      }
    })
  })

derecha.forEach(image => {
  mirar.observe(image)
})

derecha2.forEach(image => {
  mirar.observe(image)
})


const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

window.onscroll = e => {  /* se activa al escrollear windows */
  storeScroll()
}

storeScroll()

/* afecta el margin top y bottom del scroll imaginario en la seccion "acercaDeMi" */
const scrollMove = $q(".acercaDeMi__contenedor__scroll"),
  texto = $q(".acercaDeMi__contenedor__texto__contenido"),
  estudios = $q(".acercaDeMi__contenedor__estudios__contenido");

$q(".acercaDeMi__contenedor__estudios").addEventListener("click", () => {
  scrollMove.classList.add("acercaDeMi__contenedor__scrollDown");
  texto.style.display = "none";
  estudios.style.display = "grid";
});

$q(".acercaDeMi__contenedor__texto").addEventListener("click", () => {
  scrollMove.classList.remove("acercaDeMi__contenedor__scrollDown");
  texto.style.display = "block";
  estudios.style.display = "none";
})

/* subrayado en .header__inicio al observar esa seccion, 
hay que especificar px aunque sea un margin de 0 para que funcione*/
const red = $q(".header__inicio"),
  section = $q(".hero"),
  sectionOptions = {
    rootMargin: "-360px 0px 0px 0px"
  };

const sectionObserver = new IntersectionObserver(function (
  entries, sectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red.classList.add("navScrolled");
    } else {
      red.classList.remove("navScrolled");
    }
  });
},
  sectionOptions);

sectionObserver.observe(section);


/* subrayado en .header__proyectos al observar esa seccion, 
hay que especificar px aunque sea un margin de 0 para que funcione*/
const red2 = $q(".header__proyectos"),
  section2 = $q(".proyectos"),
  section2Options = {
    rootMargin: "-439px 0px -30px 0px"
  };

const section2Observer = new IntersectionObserver(function (
  entries, section2Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red2.classList.add("navScrolled");
    } else {
      red2.classList.remove("navScrolled");
    }
  });
},
  section2Options);

section2Observer.observe(section2);


/* subrayado en .header__acercaDeMi al observar esa seccion, 
hay que especificar px aunque sea un margin de 0 para que funcione*/
const red3 = $q(".header__acercaDeMi"),
  section3 = $q(".acercaDeMi"),
  section3Options = {
    rootMargin: "-300px 0px -100px 0px"
  };

const section3Observer = new IntersectionObserver(function (
  entries, section3Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red3.classList.add("navScrolled");
    } else {
      red3.classList.remove("navScrolled");
    }
  });
},
  section3Options);

section3Observer.observe(section3);


/* subrayado en .header__contacto al observar esa seccion, 
hay que especificar px aunque sea un margin de 0 para que funcione*/
const red4 = $q(".header__contacto"),
  section4 = $q(".contacto__formContenedor"),
  section4Options = {
    rootMargin: "0px 0px -350px 0px"
  };

const section4Observer = new IntersectionObserver(function (
  entries, section4Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      red4.classList.add("navScrolled");
    } else {
      red4.classList.remove("navScrolled");
    }
  });
},
  section4Options);

section4Observer.observe(section4);

const headerColor1 = $q(".header__proyectos"),
  headerColor2 = $q(".header__acercaDeMi"),
  headerColor3 = $q(".header__contacto"),
  heroLink = $q(".verProyectos"),
  heroLink2 = $q(".verProyectos__linkProyectos"),
  heroLink3 = $q(".linkHero"),
  section5 = $q(".hero__container__logo"),
  section5Options = {
    rootMargin: "-360px 0px 0px 0px"
  };
let Query799 = window.matchMedia("(max-width: 799px)");

const section5Observer = new IntersectionObserver(function (
  entries, section5Observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // headercolor da color blanco al header al estar en top 0
      headerColor1.classList.add("headerColor");
      headerColor2.classList.add("headerColor");
      headerColor3.classList.add("headerColor");
      heroLink.style.display = "block";
      heroLink2.style.display = "block";
      heroLink3.style.display = "none";
    } else {
      headerColor1.classList.remove("headerColor");
      headerColor2.classList.remove("headerColor");
      headerColor3.classList.remove("headerColor");
      if (Query799.matches) {
        heroLink.style.display = "block";
        heroLink2.style.display = "block";
        heroLink3.style.display = "none";
      } else {
        heroLink.style.display = "none";
        heroLink2.style.display = "none";
        heroLink3.style.display = "block";
      }
    }
  });
},
  section5Options);

section5Observer.observe(section5);

/*efecto de hover a ".verProyectos", la idea es darle hover solo cuando no este animado
ya que se corta la animacion con ciertos movimientos del mouse sobre el mismo*/
heroLink.addEventListener('animationstart', () => {
  heroLink.classList.remove("verProyectos__linkProyectos__hoverEffect");
});

heroLink.addEventListener('animationend', () => {
  heroLink.classList.add("verProyectos__linkProyectos__hoverEffect");
});

/*efecto de hover a ".linkHero", la idea es darle hover solo cuando no este animado
ya que se corta la animacion con ciertos movimientos del mouse sobre el mismo*/
heroLink3.addEventListener('animationstart', () => {
  heroLink3.classList.remove("linkHero__hoverEffect");
});

heroLink3.addEventListener('animationend', () => {
  heroLink3.classList.add("linkHero__hoverEffect");
});

const hidenMenu = $q(".navBarMenu"),
  NavLine1 = $q(".header__navBar__line:nth-of-type(1)"),
  NavLine2 = $q(".header__navBar__line:nth-of-type(2)");
let numberMenu = 1;


//crea una x en el navbar si numberMenu es igual a 1 y desarma la x si no lo es
$q(".header__navBar").addEventListener("click", () => {

  NavLine1.style.animation = "navBarClickedLine1 0.5s Forwards";
  NavLine2.style.animation = "navBarClickedLine2 0.5s Forwards";
  if (numberMenu == 1) {
    numberMenu++;
    hidenMenu.style.animation = "navBarShow 1s forwards";
  } else {
    numberMenu--;
    hidenMenu.style.animation = "navBarHide 1s forwards";
    NavLine1.style.animation = "navBarClosingLine1 0.5s Forwards";
    NavLine2.style.animation = "navBarClosingLine2 0.5s Forwards";
  }
});


let hideFunction = $class('hideMenuClose');
for (let i = 0; i < hideFunction.length; i++) {
  hideFunction[i].addEventListener("click", () => {
    if (numberMenu == 2) {
      numberMenu--;
      hidenMenu.style.animation = "navBarHide 1s forwards";
      NavLine1.style.animation = "navBarClosingLine1 0.5s Forwards";
      NavLine2.style.animation = "navBarClosingLine2 0.5s Forwards";
    }
  });
}

//movimiento 3d
//objetos en los que ocurre el movimiento
const acercaDeMiCardContainer = $q(".acercaDeMi__contenedorWebDev"),
  acercaDeMiCard = $q(".acercaDeMi__contenedorWebDev img");

//animacion de movimiento
acercaDeMiCardContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 1.5 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 0.45 - e.pageY) / 18.5;
  acercaDeMiCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animatcion al entrar
acercaDeMiCardContainer.addEventListener("mouseenter", (e) => {
  acercaDeMiCard.style.transition = "none";
});
//Animatcion al salir
acercaDeMiCardContainer.addEventListener("mouseleave", (e) => {
  acercaDeMiCard.style.transition = "all 0.5s ease";
  acercaDeMiCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

//oscurece el fondo al presionar y cambia las sombras
$q(".header__light").addEventListener("click", () => {
  $q(".header__light__circle").classList.toggle("header__light__circleDark");

  let lightSectionCounter = $class('lightBackgroundSection');

  $q(".proyectos").classList.add('lightBackgroundSection');
  $q(".acercaDeMi").classList.add('lightBackgroundSection');
  $q(".contacto").classList.add('lightBackgroundSection');
  $q("body").classList.add('lightBackgroundSection');

  let lightSelectorCounter = $class('lightBackgroundSelector');
  $q(".proyectos__contenedor__card1").classList.add('lightBackgroundSelector');
  $q(".proyectos__contenedor__card2").classList.add('lightBackgroundSelector');
  $q(".proyectos__contenedor__card3").classList.add('lightBackgroundSelector');
  $q(".proyectos__contenedor__card4").classList.add('lightBackgroundSelector');
  $q(".acercaDeMi__contenedor").classList.add('lightBackgroundSelector');
  $q(".acercaDeMi__contenedorWebDev").classList.add('lightBackgroundSelector');
  $q(".contacto__formContenedor").classList.add('lightBackgroundSelector');

  for (let i = 0; i < lightSectionCounter.length; i++) {
    lightSectionCounter[i].classList.add("lightBackground");
    lightSectionCounter[i].classList.toggle("darkBackground");
  }

  for (let i = 0; i < lightSelectorCounter.length; i++) {
    lightSelectorCounter[i].classList.add("shadowClass");
    lightSelectorCounter[i].classList.toggle("ShadowLightClass");
  }
})