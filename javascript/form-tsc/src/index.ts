let usernameInput=document.querySelector("#username") as HTMLInputElement;
let dobInput=document.querySelector("#dateofbirth") as HTMLInputElement;
let emailInput=document.querySelector("#email") as HTMLInputElement;
let form=document.querySelector("form") as HTMLFormElement;
let tbody=document.querySelector("tbody") as Element;

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username=usernameInput.value;
    let dob=dobInput.value;
    let email=emailInput.value;

    let userData={username,dob,email}
    console.log(userData)
    newUser(userData)
    form.reset()
    
})
//create a function to add NewUser to Table
let newUser=function (userData:any){
    tbody.innerHTML+=
    `<tr>
        <td> ${userData.username}</td>
        <td> ${userData.dob}     </td>
        <td> ${userData.email}   </td>
        <td> <button class="btn btn-danger" onclick="deleteUser(this)">X</button>  </td>
        <td> <button class="btn btn-warning" onclick="updateUser(this)">Edit</button> </td>      
    </tr>`
}

//Deleting User Details using button where this keyword is used to refer ther current button on the current row
let deleteUser=function(btn:any){
    //Accessing parent element
    let row=btn.parentElement.parentElement  //btn->td->tr 
    row.innerHTML=""
}

//Updating User Details
let updateUser=function(btn:any){
    let row=btn.parentElement.parentElement  //btn->td->tr 
    let username=row.querySelector("#username")
    console.log(username)
}