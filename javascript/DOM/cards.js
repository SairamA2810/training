let row=document.querySelector(".row");
let arr=[
    {i:'src="./img1.jpg"'},
    {i:'src="./img2.jpg"'},
    {i:'src="./img3.jpg"'}
]
function addCol(){
    for (let img of arr){
        row.innerHTML+=`
        <div class="col">
            <div class="card">
             <img ${img.i} alt="not found">
             <p>Lorem ipson sit,</p>
            </div>
        </div>    `
        

    }
}
addCol()