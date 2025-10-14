// {//Access elements from DOM
// let heading=document.querySelector("#hd");

// //handling Events
// heading.addEventListener('click',()=>
// {
//     //change Text
//     heading.textContent="welcome to DOM";
    
//     //change styles 
//     heading.style.color="red";
//     heading.style.textAlign="center"
//     heading.style.fontSize="3.5rem"
// })
// }

//creating Elements
let parent=document.querySelector(".parent");
let btn=document.querySelector("button");

btn.addEventListener('click',()=>
{
    let h2=document.createElement('h2'); //creating element
    h2.textContent="this is heading"; //adding text to the element
    parent.appendChild(h2);  // appending to parent element {div}
    //shorthand notion to create along with heading
    parent.innerHtml+="<h2>Hello heading</h2>";

})