import {useForm} from 'react-hook-form'
import { useState, type ChangeEvent } from 'react';


type UserType={
    username:string;
    email:string;
    skills:string[]
}

function FormDemo() {

    let [skills,setSkills]=useState<string[]>([])
    let[err,setErr]=useState("")

    // using register and handlesubmit from useForm() hook
    const {register,handleSubmit,formState:{errors}}=useForm<UserType>()
    // const {errors}=formState
        console.log(errors)
    // function to handle Selected options
    function handleSelect(e:ChangeEvent<HTMLInputElement>){
        // console.log(e)
        const {value,checked}=e.target
        if(checked){
            // skills.push(value)
            setSkills([...skills,value])
        }
        else{
            // if not matching skill should give new skill array with selected option
            setSkills(skills.filter(skill=>skill!==value));
        }
    }
    function toHandleSubmit(data:UserType){
        
        {
            // if(data.skills.length<3 || data.skills.length===0 || data.skills===false){
        //     setErr("Minimun 3 skills Required")
        //     console.log(err)
            
        // }
        // else{
        //     setErr("")
        //     console.log(data)
        // }
        
        // console.log(skills)
        }
        
        if(skills.length<3){
            setErr("Please Select Minimum of 3 Skills")
        }
        else{
            let finalData={...data,skills}
            console.log(finalData)
            setErr("")
        }
        
    }
    
   
  return (
    <div>
      <form className="mx-auto mt-2 w-75 " onSubmit={handleSubmit(toHandleSubmit)}>  
        <div className="form-floating mb-3">
            <input type="text" {...register("username",{required:"UserName is required",minLength:4})}  id="username" className="form-control" placeholder='username'/>
            <label htmlFor="username">Username</label>
        </div>
        {errors.username?.type==="required" && <p className='text-center text-danger'>{errors.username.message}</p>}
        <div className="form-floating mb-3">
            <input type="email" {...register("email",{})} id="email" className='form-control' placeholder='email' />
            <label htmlFor="email">Email</label>
        </div>
        <div className='mb-3'>
            <input type="checkbox" onChange={handleSelect}  className='form-check' value="react" id="react" />
            <label htmlFor="react" className='form-input-check'>React</label>

            <input type="checkbox"  onChange={handleSelect}   value="nodeJs" name="nodejs" className='form-check' id="nodejs" />
            <label htmlFor="nodejs" className='form-input-check'>NodeJs</label>

            <input type="checkbox"  onChange={handleSelect}  name="MongoDB" value="mongoDB" className='form-check' id="MongoDB" />
            <label htmlFor="MongoDB" className='form-input-check'>MongoDB</label>

            <input type="checkbox"  onChange={handleSelect}  name="Python" value="python" className='form-check' id="Python" />
            <label htmlFor="Python" className='form-input-check'>Python</label>

            <input type="checkbox"  onChange={handleSelect}  name="Java" value="java" className='form-check' id="Java" />
            <label className='form-input-check' htmlFor='java'>Java</label>

            {err && <p className='text-center text-danger'>{err}</p>}
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}

export default FormDemo
