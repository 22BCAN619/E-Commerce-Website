document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const products = {
        1: {
            title: "Product 1",
            price: "$100",
            description: "Description for product 1",
            image: "product1.jpg"
        },
        2: {
            title: "Product 2",
            price: "$150",
            description: "Description for product 2",
            image: "product2.jpg"
        }
    };

    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
    }
});
