let form=document.querySelector('form')
let username=document.querySelector('#username')
let password=document.querySelector("#password")
let btn=document.querySelector('button')
let checkbox=document.querySelector("#checkbox")
let checkbox2=document.querySelector("#ML")
let option=document.querySelector('select')
let text=document.querySelector('textarea')
let email=document.querySelector=("#email")

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    let u=username.value
    if (u===""||u.length>4||u.length<10){
      
    }
    
    let p=password.value
    let reactstatus=checkbox.checked
    let state=option.value
    let feedback=text.value
    let mlStatus=checkbox2.checked

    if(mlStatus=="false"){
        document.querySelector("small").innerHTML="not checked"
    }
    
console.log(mlStatus)
})

//create 5 checkboxes. selection of minimun is mandatory
