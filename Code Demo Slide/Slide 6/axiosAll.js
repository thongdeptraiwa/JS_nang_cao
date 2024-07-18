// Import Axios từ thư viện (cần cài axios vào nodejs: npm install axios)
const axios = require('axios');

function getListUser() {
    return axios.get("https://reqres.in/api/users/2");
}

function getListProduct() {
    return axios.get("https://reqres.in/api/products/2");
}

axios.all([getListUser(), getListProduct()])
    .then(([responseUser, responseProduct]) => {
        const userData = responseUser.data;
        const productData = responseProduct.data;
        console.log('User Data:', userData);
        console.log('Product Data:', productData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
