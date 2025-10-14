let check1=document.querySelector(".check1")
let check2=document.querySelector(".check2")
let check3=document.querySelector(".check3")
let check4=document.querySelector(".check4")
let check5=document.querySelector(".check5")
let btn=document.querySelector("button")
let form=document.querySelector("form")
form.addEventListener('submit',(event)=>
{
    event.preventDefault()
    document.querySelector("#result").textContent=""
    let res=0
    
    if(check1.checked){
        res+=1
    }
     if(check2.checked){
        res+=1
    }
     if(check3.checked){
        res+=1
    }
     if(check4.checked){
        res+=1
    }
     if(check5.checked){
        res+=1
    }
    if(res<3){
        document.querySelector("#result").textContent="Should select 3 options"
    }
    let arr=[check1.checked,check2.checked,check3.checked,check4.checked,check5.checked]
    let res1=arr.filter(y=>y==true).length
    if (res1<3){
        console.log("failed")
    }

})