let products = [];

function addProduct(name, image, cate_id, price) {
    const product = {
        id: products.length + 1,
        name: name,
        image: image,
        cate_id: cate_id,
        price: price
    };
    products.push(product);
}

addProduct("Product 1", "https://abc.com/image1.jpg", 1, 50);
addProduct("Product 2", "https://abc.com/image2.jpg", 2, 70);
addProduct("Product 3", "https://abc.com/image3.jpg", 1, 80);
addProduct("Product 4", "https://abc.com/image4.jpg", 3, 60);
addProduct("Product 5", "https://abc.com/image5.jpg", 2, 90);

console.log(products); 