async function fetchData() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    return data.products;
}

async function createCards(){
    let products=await fetchData();
    let cardsContainer=document.querySelector("#CardContainer");
      products.forEach(product=>{
        let cardCol=document.createElement('div');
        cardCol.className='col mb-3';
        let card=document.createElement('div');
        card.className='card bg-light text-center mx-auto h-100 g-3'; 
        let cardImage=document.createElement('img');
        cardImage.className='card-img-top img-fluid img-thumbnail'; 
        cardImage.src=product.thumbnail; 

        let cardBody=document.createElement('div');
        cardBody.className='card-body text-center mt-2';
        let cardTitle=document.createElement('h5');
        cardTitle.textContent=product.title;

        let cardText=document.createElement('p');
        cardText.textContent=product.description.slice(1,70);
        cardText.textContent+="...."
        
        let cardFoot=document.createElement('div');
        cardFoot.className="card-footer";
        let Button=document.createElement('button');
        Button.className='btn btn-dark';
        Button.setAttribute=("onclick","fun()")
        Button.textContent='Click to View';

        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardFoot.appendChild(Button);
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        card.appendChild(cardFoot);
        cardCol.appendChild(card);
        cardsContainer.appendChild(cardCol);

        //button action
        Button.addEventListener("click",()=>{
            localStorage.setItem('key', JSON.stringify(product));
            window.location.href="./page2.html";
        });
       
    });
}

createCards()

// function fetchData(){
//     fetch("https://dummyjson.com/products")
//     .then(obj => obj.json())
//     .then(prod => displayData(prod))
//     .catch((e)=>console.log(e))
// }
// fetchData()
 
// let allData;
// let root = document.querySelector("#CardContainer")
// function displayData(products){
 
//     let prodArr = products.products;
//     allData = prodArr;
//     for (let ele of prodArr) {
//         root.innerHTML += `<div class="card g-3">
//                             <img src="${ele.images[0]}" style="width: 70%;" class="card-img-top" alt="...">
//                             <div class="card-body"  style="width: 90%; >
//                                 <h5 class="card-title">${ele.title}</h5>
//                                 <p class="card-text">${ele.description}</p>
//                                 <div class="card-footer ">
//                                     <a href="#" class="btn btn-dark" value="${ele.id}" onClick="sendData(${ele.id})">More Details..</a>
//                                 </div>
//                             </div>
//                         </div>`
//     }  
// }
 
// function sendData(data){
//     console.log(data)
//     localStorage.setItem("key",JSON.stringify(allData[data-1]));
//     location.href='./page2.html'
// }
