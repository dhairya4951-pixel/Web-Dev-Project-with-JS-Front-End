console.log("JS is running");
const API_URL = "http://127.0.0.1:5001/products";

// For Home page: load products
async function loadProducts() {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        productList.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
            <div class="card-header">
          <h3>${product.name}</h3>
        <span class="stock-badge">${product.stock} in stock</span>
    </div>

    <p class="description">${product.description}</p>

    <hr>

    <div class="card-footer">
        <span class="category">${product.category}</span>
        <span class="price">₹${product.price}</span>
    </div>
`;

            productList.appendChild(card);
        });
    } catch (error) {
        productList.innerHTML = "<p>Failed to load products.</p>";
        console.error(error);
    }
}


// For Add Product page: submit form
async function handleProductForm() {
    const form = document.getElementById("product-form");
    if (!form) return;

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const category = document.getElementById("category").value;
        const message = document.getElementById("message");
        const description = document.getElementById("description").value;
        const stock = document.getElementById("stock").value;

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    price: price,
                    category: category,
                    description: description,
                    stock: stock
                })
            });

            const result = await response.json();

            if (response.ok) {
                message.textContent = "Product added successfully!";
                form.reset();
            } else {
                message.textContent = result.error || "Something went wrong";
            }
        } catch (error) {
            message.textContent = "Server error";
            console.error(error);
        }
    });
}

loadProducts();
handleProductForm();


