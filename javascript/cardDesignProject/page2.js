let productDetails=document.getElementById('productDetail'); // Accessing root div by using ID
let storedProduct=localStorage.getItem('key');   //Getting Data (obj) from local Storage by using getItem
let product=JSON.parse(storedProduct);       //changing JSON format to object format using JSON.parse() method
{// productDetails.innerHTML = `
//             // <div class="card bg-light text-center mx-auto">
//             //     <img src="${product.thumbnail}" class="card-img-top img-fluid w-50 h-50 mx-auto" alt="${product.title}">
//             //     <div class="card-body">
//             //         <h1 class="card-title">${product.title}</h1>
//             //         <p class="card-text">${product.description}</p>
//             //         <p><b>Price:</b> $${product.price}</p>
//             //         <p><b>Brand:</b> ${product.brand}</p>
//             //         <p><b>Category:</b> ${product.category}</p>
//             //         <p><b>Rating:</b> ${product.rating}</p>
//             //         <p><b>Stock:</b> ${product.stock}</p>
//             //     </div>
//             // </div>
//         `;
}
console.log(product)
let title=document.querySelector("h1");
let leftSide=document.querySelector(".left");
let rightSide=document.querySelector(".right");
let table=document.querySelector("table");

title.textContent=product.title;
leftSide.innerHTML=`<img src="${product.thumbnail}" width=""/>
<p text-center lead text-black>${product.description}</p>`
let cnt=0
for(let pro in product){
    if (cnt===7){
        break;
    }
    else{
        if(pro!=='description'&& pro!=="title"){
        cnt++;
        table.innerHTML+= `<tr class="text-start"><td class="text-left"><b>${pro}</b></td> <td>:  ${product[pro]}</td></tr>`;
    }}
   
}
let button=document.querySelector("button");
button.addEventListener('click',()=>{
    window.location.href="./index.html";
})