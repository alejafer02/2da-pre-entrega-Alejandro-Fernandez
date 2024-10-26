// Array para almacenar los productos
let products = [];

// Clase para crear objetos Producto
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Función para agregar un nuevo producto al array
function addProduct() {
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);

  // Validación simple
  if (!name || isNaN(price)) {
    alert("Por favor, ingresa un nombre y un precio válidos.");
    return;
  }

  // Crear y agregar el producto al array
  const newProduct = new Product(name, price);
  products.push(newProduct);

  // Actualizar la lista en el HTML
  displayProducts(products);

  // Limpiar los campos de entrada
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

// Función para mostrar los productos en el HTML
function displayProducts(productList) {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = ""; // Limpiar la lista

  productList.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    productsContainer.appendChild(listItem);
  });
}

// Función para buscar un producto en el array
function searchProduct() {
  const query = document.getElementById("searchQuery").value.toLowerCase();

  // Filtrar los productos que coincidan con la consulta
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query)
  );

  // Mostrar productos filtrados
  displayProducts(filteredProducts);
}
