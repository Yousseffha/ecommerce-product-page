let cart = document.getElementById("cart");
let cartContent = document.getElementById("cart-content");
let header = document.querySelector("header");
let overlay = document.getElementById("overlay");
let menu = document.getElementById("menu");
let xMark = document.getElementById("x-mark");
let menuList = document.getElementById("ul");
let hidden = document.getElementById("hidden");
let selectedImg = document.getElementById("selected-img");
let hiddenClose = document.getElementById("hidden-close");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let currentImg = 1;
let Images = document.querySelectorAll(".images .image");
let image = document.getElementById("current-img");
let hiddenCurrentImg = 1;
let hiddenImages = document.querySelectorAll(".hidden .images .hdden-image");
let hiddenPrevious = document.querySelector(".hidden #previous")
let hiddenNext = document.querySelector(".hidden #next")
let hiddenimage = document.getElementById("hidden-current-img");
let minus = document.getElementById("minus")
let numberOfPieces = document.getElementById("number-of-pieces")
let plus = document.getElementById("plus")
let addToCartBtn = document.getElementById("add-to-cart")
let products = document.getElementById("products")


cart.onclick = function () {
  cartContent.classList.toggle("visible");
  overlay.classList.toggle("visible");

  if (overlay.classList.contains("visible")) {
    overlay.onclick = function () {
      overlay.classList.remove("visible");
      cartContent.classList.remove("visible");
    };
  }
};

menu.onclick = function () {
  menuList.style.display = "flex";
  overlay.style.display = "block";
  overlay.style.background = "rgba(0, 0, 0, 0.38)";

  overlay.onclick = function () {
    menuList.style.display = "none";
    overlay.style.display = "none";
    overlay.style.background = "transparent";
  };

  xMark.onclick = function () {
    menuList.style.display = "none";
    overlay.style.display = "none";
    overlay.style.background = "transparent";
  };
};

selectedImg.onclick = function () {
  hidden.style.display = "block";
  overlay.style.display = "block";
  overlay.style.background = "rgba(0, 0, 0, 0.48)";
  overlay.style.height = "calc(100% + 90px)";
  overlay.style.top = "-90px";
  overlay.style.zIndex = "999";

  overlay.onclick = function () {
    hidden.style.display = "none";
    overlay.style.display = "none";
    overlay.style.background = "transparent";
    overlay.style.height = "100%";
    overlay.style.top = "0";
    overlay.style.zIndex = "1";
  };

  hiddenClose.onclick = function () {
    hidden.style.display = "none";
    overlay.style.display = "none";
    overlay.style.background = "transparent";
    overlay.style.height = "100%";
    overlay.style.top = "0";
    overlay.style.zIndex = "1";
  };
};

previous.onclick = function () {
  if (currentImg > 1) {
    currentImg--;
  } else {
    currentImg = 4;
  }

  if (currentImg === 1) {
    image.setAttribute("src", "/images/image-product-1-thumbnail.jpg");
  }
  if (currentImg === 2) {
    image.setAttribute("src", "/images/image-product-2-thumbnail.jpg");
  }
  if (currentImg === 3) {
    image.setAttribute("src", "/images/image-product-3-thumbnail.jpg");
  }
  if (currentImg === 4) {
    image.setAttribute("src", "/images/image-product-4-thumbnail.jpg");
  }
};
next.onclick = function () {
  if (currentImg < 4) {
    currentImg++;
  } else {
    currentImg = 1;
  }

  if (currentImg === 1) {
    image.setAttribute("src", "/images/image-product-1-thumbnail.jpg");
  }
  if (currentImg === 2) {
    image.setAttribute("src", "/images/image-product-2-thumbnail.jpg");
  }
  if (currentImg === 3) {
    image.setAttribute("src", "/images/image-product-3-thumbnail.jpg");
  }
  if (currentImg === 4) {
    image.setAttribute("src", "/images/image-product-4-thumbnail.jpg");
  }
};

Images.forEach((e) => {
  e.onclick = function() {
    if(e.innerHTML === Images[0].innerHTML) {
      Images[0].classList.add("selected")
      Images[1].classList.remove("selected")
      Images[2].classList.remove("selected")
      Images[3].classList.remove("selected")
    }
    if(e.innerHTML === Images[1].innerHTML) {
      Images[0].classList.remove("selected")
      Images[1].classList.add("selected")
      Images[2].classList.remove("selected")
      Images[3].classList.remove("selected")
    }
    if(e.innerHTML === Images[2].innerHTML) {
      Images[0].classList.remove("selected")
      Images[1].classList.remove("selected")
      Images[2].classList.add("selected")
      Images[3].classList.remove("selected")
    }
    if(e.innerHTML === Images[3].innerHTML) {
      Images[0].classList.remove("selected")
      Images[1].classList.remove("selected")
      Images[2].classList.remove("selected")
      Images[3].classList.add("selected")
    }
    if(Images[0].classList.contains("selected")) {
      image.setAttribute("src", "/images/image-product-1-thumbnail.jpg")
    }
    if(Images[1].classList.contains("selected")) {
      image.setAttribute("src", "/images/image-product-2-thumbnail.jpg")
    }
    if(Images[2].classList.contains("selected")) {
      image.setAttribute("src", "/images/image-product-3-thumbnail.jpg")
    }
    if(Images[3].classList.contains("selected")) {
      image.setAttribute("src", "/images/image-product-4-thumbnail.jpg")
    }
  }
})

hiddenPrevious.onclick = function () {
  if (hiddenCurrentImg > 1) {
    hiddenCurrentImg--;
  } else {
    hiddenCurrentImg = 4;
  }

  if (hiddenCurrentImg === 1) {
    hiddenimage.setAttribute("src", "/images/image-product-1-thumbnail.jpg");
    hiddenImages[0].classList.add("selected")
    hiddenImages[1].classList.remove("selected")
    hiddenImages[2].classList.remove("selected")
    hiddenImages[3].classList.remove("selected")
  }
  if (hiddenCurrentImg === 2) {
    hiddenimage.setAttribute("src", "/images/image-product-2-thumbnail.jpg");
    hiddenImages[0].classList.remove("selected")
    hiddenImages[1].classList.add("selected")
    hiddenImages[2].classList.remove("selected")
    hiddenImages[3].classList.remove("selected")
  }
  if (hiddenCurrentImg === 3) {
    hiddenimage.setAttribute("src", "/images/image-product-3-thumbnail.jpg");
    hiddenImages[0].classList.remove("selected")
    hiddenImages[1].classList.remove("selected")
    hiddenImages[2].classList.add("selected")
    hiddenImages[3].classList.remove("selected")
  }
  if (hiddenCurrentImg === 4) {
    hiddenimage.setAttribute("src", "/images/image-product-4-thumbnail.jpg");
    hiddenImages[0].classList.remove("selected")
    hiddenImages[1].classList.remove("selected")
    hiddenImages[2].classList.remove("selected")
    hiddenImages[3].classList.add("selected")
  }
};

hiddenNext.onclick = function () {
  if (hiddenCurrentImg < 4) {
    hiddenCurrentImg++;
  } else {
    hiddenCurrentImg = 1;
  }

  if (hiddenCurrentImg === 1) {
    hiddenimage.setAttribute("src", "/images/image-product-1-thumbnail.jpg");
    hiddenImages[0].classList.add("selected")
    hiddenImages[1].classList.remove("selected")
    hiddenImages[2].classList.remove("selected")
    hiddenImages[3].classList.remove("selected")
  }
  if (hiddenCurrentImg === 2) {
    hiddenimage.setAttribute("src", "/images/image-product-2-thumbnail.jpg");
    hiddenImages[0].classList.remove("selected")
    hiddenImages[1].classList.add("selected")
    hiddenImages[2].classList.remove("selected")
    hiddenImages[3].classList.remove("selected")
  }
  if (hiddenCurrentImg === 3) {
    hiddenimage.setAttribute("src", "/images/image-product-3-thumbnail.jpg");
    hiddenImages[0].classList.remove("selected")
    hiddenImages[1].classList.remove("selected")
    hiddenImages[2].classList.add("selected")
    hiddenImages[3].classList.remove("selected")
  }
  if (hiddenCurrentImg === 4) {
    hiddenimage.setAttribute("src", "/images/image-product-4-thumbnail.jpg");
    hiddenImages[0].classList.remove("selected")
    hiddenImages[1].classList.remove("selected")
    hiddenImages[2].classList.remove("selected")
    hiddenImages[3].classList.add("selected")
  }
};

plus.onclick = function() {
  numberOfPieces.innerHTML = Number(numberOfPieces.innerHTML) + 1
}
minus.onclick = function() {
  if(Number(numberOfPieces.innerHTML) > 0) {
    numberOfPieces.innerHTML = Number(numberOfPieces.innerHTML) - 1
  }
}

addToCartBtn.onclick = function() {
  if(Number(numberOfPieces.innerHTML) > 0) {
    products.innerHTML = `
  <div class="box">
                <div class="image">
                  <img src="/images/image-product-1-thumbnail.jpg" alt="">
                </div>
                <div class="text">fall limited edition sneakers $125.00 x <span id="num-of-sneakers">${numberOfPieces.innerHTML}</span> <span id="price">${125 * Number(numberOfPieces.innerHTML)}.00</span></div>
                <div class="image">
                  <img src="/images/icon-delete.svg" alt="" id="delete">
                </div>
              </div>
              <button>checkout</button>
  `
  }
  let trash = document.getElementById("delete")
  trash.onclick = function() {
    products.innerHTML = "your cart is empty"
  }
}