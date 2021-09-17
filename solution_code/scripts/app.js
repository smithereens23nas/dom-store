console.log("Jquery Fun!",{$});

/* === Variables  === */
let sidebarActive = false;

// example data from database
const clothes = {
  shirts: [
    {
      name: "Internet Friends",
      price: 29,
      image: "https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_6de889fb-b540-49e4-b733-3af0baaa7f63_x1440.jpg?v=1571274629"
    },
    {
      name: "Inside Forever",
      price: 19,
      image: "https://cdn.shopify.com/s/files/1/1297/1509/products/IMG_7728_x1440.jpg?v=1571274625"
    }
  ],
  pants: [
    {
      name: "Angry Pants",
      price: 35,
      image: "https://cdn.shopify.com/s/files/1/1297/1509/products/HERO_c5b0ec76-ad06-4cc7-a165-6129e11a8ff6_x1440.jpg?v=1571274622"
    }
  ],
  jackets: [
      {
      name: "Dead Cool",
      price: 50,
      image: "https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_40030160-f468-4d50-8f30-c8b9733ce84e_x1440.jpg?v=1575020412"
    }
  ]
};

/* === Dom Elements  === */

const $sidebarActivator = $("#sidebar__activator");
const $sidebar = $("#sidebar");
const $body = $("body");
const $productsCategories = $("#products__categories");

/* === Functions  === */

const generateCategories = function generateCategories(data) {
  for(key in data){
    $productsCategories.append(`
    <div class="categories" id="products__${key}">
      <h4>${key.toUpperCase()}</h4>
      <hr/>
      <div class="products">
        ${generateProducts(data[key])} 
      </div>
    </div>`)
  }
  
}

const generateProducts = function generateProducts(products) {
  console.log(products);
  return products.map(product => `
    <div class="product">
      <section class="product__image">
        <img src=${product.image} alt=${product.name} />
      </section>
      <section class="product__name">
        ${product.name}
      </section>
      <section class="product__price">
        $ ${product.price}
      </section>
    </div>
  `).join("");
}


/* === Event Functions  === */

const toggleSidebar = function toggleSidebar(event){
  event.stopPropagation();
  sidebarActive = !sidebarActive;
  
  let value = "-100%"

  if(sidebarActive){
    value = 0;
    $body.on("click", toggleSidebar);
  } else {
    $body.off("click", toggleSidebar);
  }

  $sidebar.css("transform",`translateX(${value})`);
}


/* === Event Listeners  === */

$sidebarActivator.on("click", toggleSidebar);

/* Invoked Functions */

generateCategories(clothes);