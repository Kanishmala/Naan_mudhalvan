let mobile = [
  {
    productid: 1,
    brand: "Samsung",
    model: "realme 13 Pro 5G",
    image: "https://m.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg",
    description: "realme 13 Pro 5G (Monet Gold,8GB+128GB)",
    price: 80000,
  },
  {
    productid: 2,
    brand: "Redmi A4 5G",
    model: "galaxy s26",

    image: "https://m.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg",
    description: "Redmi A4 5G (Starry Black, 4GB RAM, 128GB Storage)",
    price: 80000,
  },
  {
    productid: 3,
    brand: "iQOO Neo9 Pro 5G",
    model: "galaxy s26",
    image: "https://m.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg",
    description: "iQOO Neo9 Pro 5G (Fiery Red, 8GB RAM, 128GB Storage) ",
    price: 80000,
  },
  {
    productid: 4,
    brand: "Samsung Galaxy Z Fold4 5G",
    model: "galaxy s26",
    image: "https://m.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg",
    description:
      "Samsung Galaxy Z Fold4 5G For Business | Buy Now | Vodafone UK",
    price: 80000,
  },
];

const con = document.getElementById("container");

for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
  <div class="product-card">
    <img src=${mobile[i].image}>
  <div class="product-info">
    <h1 class="product-title"> ${mobile[i].brand}</h1>
     <p class="product-description">${mobile[i].description}</p>
    <p class="product-price"> ${mobile[i].price}</p>
    <button class="add-to-cart" onclick="cart(${mobile[i].productid})">Add to Cart</button>
    </div>
  </div>
  `;
}

let arr = [];
function cart(proid) {
  arr.push(mobile[proid - 1]);
  localStorage.setItem("cartdata", JSON.stringify(arr));
}
