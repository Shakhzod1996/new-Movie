let elSearch = document.querySelector(".content-inside-grid");

let random = Math.random() * 10;

// ?Getting Dat from other js file
let arr = movies.filter((newMovies, index) => {
  return index < 50;
});

  arr.forEach((film) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
      <img src=${film.youtubePoster} alt=""/>
      <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
      <div class='div-cont'>
      <h3 class='main-title'>${film.title}</h3>
      <div class="stars-all">
      <div>
      <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${film.year}</span>
      <div class="rate"><i class="fa-solid fa-star"></i> ${film.imdbRating}</div>
      </div>
      <div>
      <div class="language"><i class="fa-solid fa-language"></i> ${film.language} </div>
      <div class="time"><i class="fa-solid fa-clock"></i>${film.runtime} min</div>
      </div>
      </div>
      
      <div class="janr">
      <p>${film.categories}</p>
      </div>
      
      <div class="btns">
        <button class="more-info" onclick="moreInfo('${film.imdbId}')">More info</button>
        <button><a class="imdb" href=${film.imdbPage}>IMDb</a></button>
        </div>
        </div>
        `;
    elSearch.appendChild(movieDiv);
  });

let restInfo = document.querySelector(".rest-info");
let restInfoBack = document.querySelector(".rest-back");

// ?Adding Modal Window
function moreInfo(imId) {
  restInfo.classList.add("rest-info-show");
  restInfoBack.classList.add("rest-back-show");

  let newMoviesArr = movies.filter((movie) => {
    return imId === movie.imdbId;
  });

  newMoviesArr.forEach((newMovie) => {
    restInfo.innerHTML = `
  <div class="rest-in-div">
    <div class="left-rest">
      <h2 class="left-title">${newMovie.title}</h2>
      <img src=${newMovie.youtubePoster} class="rest-img" alt="">
    </div>
    <div class="right-rest">
      <div class="rest-rate">
        <div class="rest-start"><i class="fa-solid second-star fa-star"></i>${newMovie.imdbRating}</div>
        <div class="rest-year"><i class="fa-solid fa-clock"></i>${newMovie.year}</div>
        <div class="rest-length">length: ${newMovie.runtime} min</div>
      </div>

      <div class="rest-janr">
        ${newMovie.categories}
      </div>
      <p class="rest-desc">${newMovie.summary}</p>

      <div class="rest-btns">
        <button class="rest-show-btn"><a href=${newMovie.imdbPage}>Show on IMDb</a></button>
        <button class="rest-bookmark" onclick='bookClick()'>Bookmark<i class="fa-solid fa-bookmark marked"></i></button>
      </div>
    </div>
  </div>
  `;
  });
}

// ?Removing modal window
function backFunc() {
  restInfo.classList.remove("rest-info-show");
  restInfoBack.classList.remove("rest-back-show");
  favouriteFixed.classList.remove("favourites-toggle-fixed-show");
  restInfo.innerHTML = "";
}

// ?Search filter
let elISearch = document.querySelector(".search");
let formMain = document.querySelector(".form-main");
let titleAll = document.querySelectorAll(".main-title");


formMain.addEventListener("submit", (e) => {
e.preventDefault();
let inputVal = elISearch.value.toLowerCase();
titleAll.forEach((title) => {
  let titleVal = title.textContent;
  if (titleVal.toLowerCase().indexOf(inputVal) != -1) {
    title.parentElement.parentElement.style.display = "block";
  } else {
    title.parentElement.parentElement.style.display = "none";
  }
});

});

// ?Serch with Year data and type
let searchForm2 = document.querySelector(".search-2");
let searByName = document.querySelector(".search-by-name");
let searchByYear = document.querySelector(".search-by-year");
let select = document.querySelector("#select-films");
searchForm2.addEventListener("submit", serchName);

function serchName(e) {
  e.preventDefault();
  titleAll.forEach((title) => {
    let inputVal = searByName.value.toLowerCase();
    let titleVal = title.textContent;
    if (titleVal.toLowerCase().indexOf(inputVal) != -1) {
      title.parentElement.parentElement.style.display = "block";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
    if (searByName.value == "") {
      title.parentElement.parentElement.style.display = "none";
    }
  });
}

// ?Swiper JS
const swiper = new Swiper(".swiper", {
  // ?Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  // ?If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    // type: 'progressbar',
  },

  // ?Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // ?And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// swipe slider 2
const swiper2 = new Swiper(".swiper2", {
  // ?Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  // ?If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    // type: 'progressbar',
  },

  // ?Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // ?And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 4,
    },
  },
  slidesPerView: 4,
  spaceBetween: 20,
});

// ? Favourite button toggle
let favouriteBtn = document.querySelector(".favourites");
let favouriteFixed = document.querySelector(".favourites-toggle-fixed");

favouriteBtn.addEventListener("click", () => {
  favouriteFixed.classList.add("favourites-toggle-fixed-show");
  restInfoBack.classList.add("rest-back-show");
});

// ?Adding To The Favourites
let loveBtn = document.querySelectorAll(".love");
let hearts = document.querySelectorAll(".fa-heart");
let circleNews = document.querySelector(".news-circle");
let circleIn = 1;

loveBtn.forEach((love) => {
  love.addEventListener("click", (e) => {
    e.target.classList.add("love-clicked");
    circleNews.innerHTML = circleIn++;
    circleNews.classList.add("news-circle-show");
    let targeted = e.target;
    targeted.setAttribute("disabled", "disabled");
  });
});

function favouriteClicked(idfav) {
  let newMoviesArr = movies.filter((movie) => {
    return idfav === movie.imdbId;
  });

  let ulFavourite = document.querySelector(".favourite-ul");
  ulFavourite.innerHTML += "";
  newMoviesArr.forEach((newMovie) => {
    let liFafourite = document.createElement("li");
    liFafourite.classList.add("li-favourite");
    liFafourite.innerHTML = `
    <img src=${newMovie.youtubePoster} class="rest-img" alt="img">
    <div class='favourite-block'>
    <h2 class="left-title">${newMovie.title}</h2>
    <div class="rate"><i class="fa-solid fa-star"></i> ${newMovie.imdbRating}</div>
    </div>
    <div class='btn-block'>
    <button class='fav-watch'>Watch</button>
    <button class='fav-remove remove-btns'>Remove</button>
    </div>
  `;
    ulFavourite.appendChild(liFafourite);
  });

  // ?Delete From Watching List
  let removeBtns = document.querySelectorAll(".remove-btns");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let parElement = e.target.parentElement.parentElement;
      parElement.remove();
      circleNews.innerHTML = circleIn-- - 2;

      loveBtn.forEach((love) => {
        love.classList.remove("love-clicked");
        let targeted = e.target;
        love.removeAttribute("disabled");
      });
    });
  });
}

// ?Bookmark show hide
function bookClick() {
  let bookMark = document.querySelector(".marked");
  bookMark.classList.toggle("marked-show");
}

// ?Input Click hover efect
let searchAll = document.querySelector(".search");
window.addEventListener("scroll", () => {});

searchAll.addEventListener("focus", () => {
  let swiper = document.querySelector(".slider-container");

  swiper.classList.add("swipe-container-hide");
});

let logoH1 = document.querySelector(".logo-h1");

logoH1.addEventListener("click", () => {
  let swiper = document.querySelector(".slider-container");

  swiper.classList.remove("swipe-container-hide");
});

// ?Pagination Buttons
const pageNumbers = (total, max, current) => {
  const half = Math.round(max / 2);
  let to = max;
  if (current + half >= total) {
    to = total;
  } else if (current > half) {
    to = current + half;
  }

  let from = to - max;

  return Array.from({ length: max }, (_, i) => i + 1 + from);
};

function PaginationButtons(totalPages, maxPageVisible = 10, currentPage = 1) {
  let pages = pageNumbers(totalPages, maxPageVisible, currentPage);
  let currentPageBtn = null;
  const buttons = new Map();
  const fragment = document.createDocumentFragment();
  const paginationButtonsContainer = document.createElement("div");
  paginationButtonsContainer.className = "pagination-buttons";

  const disabled = {
    start: () => pages[0] === 1,
    prev: () => currentPage === 1,
    end: () => pages.slice(-1)[0] === totalPages,
    next: () => currentPage === totalPages,
  };
  let sum = 0;
  const createAndSetupButton = (
    label = "",
    cls = "",
    disabled = false,
    handleClick = () => {}
  ) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.className = `page-btn${cls} one${sum++}`;
    button.disabled = disabled;
    button.addEventListener("click", (event) => {
      handleClick(event);
      this.update();
      paginationButtonsContainer.value = currentPage;
      paginationButtonsContainer.dispatchEvent(new Event("change"));
    });

    return button;
  };

  const onPageButtonClick = (e) =>
    (currentPage = Number(e.currentTarget.textContent));

  const onPageButtonUpdate = (index) => (btn) => {
    btn.textContent = pages[index];

    if (pages[index] === currentPage) {
      currentPageBtn.classList.remove("active");
      btn.classList.add("active");
      currentPageBtn = btn;
      currentPageBtn.focus();
    }
  };

  buttons.set(
    createAndSetupButton(
      "start",
      " start-page",
      disabled.start(),
      () => (currentPage = 1)
    ),
    (btn) => (btn.disabled = disabled.start())
  );

  buttons.set(
    createAndSetupButton(
      "prev",
      " prev-page",
      disabled.prev(),
      () => (currentPage = -1)
    ),
    (btn) => (btn.disabled = disabled.prev())
  );

  pages.forEach((pageNumber, index) => {
    const isCurrentPage = pageNumber === currentPage;
    const button = createAndSetupButton(
      pageNumber,
      isCurrentPage ? " active" : "",
      false,
      onPageButtonClick
    );

    if (isCurrentPage) {
      currentPageBtn = button;
    }

    buttons.set(button, onPageButtonUpdate(index));
  });

  buttons.set(
    createAndSetupButton(
      "next",
      " next-page",
      disabled.next(),
      () => (currentPage += 1)
    ),
    (btn) => (btn.disabled = disabled.next())
  );

  buttons.set(
    createAndSetupButton(
      "end",
      " end-page",
      disabled.end(),
      () => (currentPage = totalPages)
    ),
    (btn) => (btn.disabled = disabled.end())
  );

  buttons.forEach((_, btn) => fragment.appendChild(btn));

  this.render = (container = document.body) => {
    paginationButtonsContainer.appendChild(fragment);
    container.appendChild(paginationButtonsContainer);
  };

  this.update = (newPageNumber = currentPage) => {
    currentPage = newPageNumber;
    pages = pageNumbers(totalPages, maxPageVisible, currentPage);
    buttons.forEach((updateButton, button) => updateButton(button));
  };

  this.onChange = (handler) => {
    paginationButtonsContainer.addEventListener("change", handler);
  };
}

const paginationButtons = new PaginationButtons(100);

paginationButtons.render();
// paginationButtons.update(12);
paginationButtons.onChange((e) => {
  console.log(e.target.value);
});

// First Page
let one1 = document.querySelector(".one2");

let firstArray = movies.filter((movie, index) => {
  return index < 50;
});

one1.addEventListener("click", () => {
  console.log("qwerty");
  elSearch.innerHTML = "";
  firstArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// SecondPage_
let one2 = document.querySelector(".one3");

let secondArray = movies.filter((movie, index) => {
  return index >= 50 && index < 100;
});

one2.addEventListener("click", () => {
  elSearch.innerHTML = "";
  secondArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// Third Page
let one3 = document.querySelector(".one4");

let thirdArray = movies.filter((movie, index) => {
  return index >= 100 && index < 150;
});

one3.addEventListener("click", () => {
  elSearch.innerHTML = "";
  thirdArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// Four Page
let one4 = document.querySelector(".one5");

let fourthArray = movies.filter((movie, index) => {
  return index >= 150 && index < 200;
});

one4.addEventListener("click", () => {
  elSearch.innerHTML = "";
  fourthArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// Five Page
let one5 = document.querySelector(".one6");

let fifthArray = movies.filter((movie, index) => {
  return index >= 200 && index < 250;
});

one5.addEventListener("click", () => {
  elSearch.innerHTML = "";
  fifthArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// six Page
let one6 = document.querySelector(".one7");

let sixthArray = movies.filter((movie, index) => {
  return index >= 250 && index < 300;
});

one6.addEventListener("click", () => {
  elSearch.innerHTML = "";
  sixthArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// seven Page
let one7 = document.querySelector(".one8");

let seventhArray = movies.filter((movie, index) => {
  return index >= 300 && index < 350;
});

one7.addEventListener("click", () => {
  console.log("qwerty");
  elSearch.innerHTML = "";
  seventhArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// eight Page
let one8 = document.querySelector(".one9");

let eighthArray = movies.filter((movie, index) => {
  return index >= 400 && index < 450;
});

one8.addEventListener("click", () => {
  elSearch.innerHTML = "";
  eighthArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// nine Page
let one9 = document.querySelector(".one10");

let ninethArray = movies.filter((movie, index) => {
  return index >= 400 && index < 450;
});

one9.addEventListener("click", () => {
  elSearch.innerHTML = "";
  ninethArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});

// nine Page
let ten = document.querySelector(".one11");

let tenthArray = movies.filter((movie, index) => {
  return index >= 400 && index < 450;
});

ten.addEventListener("click", () => {
  elSearch.innerHTML = "";
  tenthArray.forEach((element) => {
    let movieDiv = document.createElement("li");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
    <img src=${element.youtubePoster} alt=""/>
    <button class='love' onclick="favouriteClicked('${film.imdbId}')">+</button>
    <div class='div-cont'>
    <h3 class='main-title'>${element.title}</h3>
    <div class="stars-all">
    <div>
    <span class='year-s'><i class="fa-solid fa-calendar-days"></i>${element.year}</span>
    <div class="rate"><i class="fa-solid fa-star"></i> ${element.imdbRating}</div>
    </div>
    <div>
    <div class="language"><i class="fa-solid fa-language"></i> ${element.language} </div>
    <div class="time"><i class="fa-solid fa-clock"></i>${element.runtime} min</div>
    </div>
    </div>
    
    <div class="janr">
    <p>${element.categories}</p>
    </div>
    
    <div class="btns">
      <button class="more-info" onclick="moreInfo('${element.imdbId}')">More info</button>
      <button><a class="imdb" href=${element.imdbPage}>IMDb</a></button>
      </div>
      </div>
      `;
    elSearch.appendChild(movieDiv);
  });
});
