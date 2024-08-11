// Fetch data from the API
const res = fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
console.log(res);
let e = '';  // Variable to store the HTML content
res.then((response) => response.json())
    .then((data) => {
        const filteredData = data.filter(item => item.id >764 && item.id<775 );
        filteredData.forEach((item) => {
            e += `
            <div class="card" style="width: 18rem; margin: 1rem;">

                   <img src="${item.image_link}" class="card-img-top card-image" alt="${item.name}">
                   <div class="card-body">
                       <h5 class="card-title">${item.name}</h5>
                       <h5 class="card-sub-title">${item.brand}</h5>
    
                       <p class="card-text">Price: $${item.price}</p>
                       <a href="${item.product_link}" class="btn " target="_blank">Buy Now</a>
                   </div>
               </div>
           `;
        });
        console.log(e);
        document.getElementById('product-row').innerHTML = e;
    })

    .catch((err) => {
        console.log(err);
    });





 