import { useState, type ChangeEvent, type FormEvent } from "react"
import A from "./components/A"
import B from "./components/B"
import C from "./components/C"
import FormDemo from "./components/FormDemo"
import type { UserType } from "./redux/slices/UserSlice"
import { addNewUser } from "./redux/slices/UserSlice"
import { useDispatch } from "react-redux"

function App() {
  
  // state to handle inputs

  let[user,setUser]=useState<UserType>({
    username:"",
    age:0
  })

  const dispatch=useDispatch();
// to handle inputs 
const handleInputs=(e:ChangeEvent<HTMLInputElement>)=>{
  setUser({...user,[e.target.name]:e.target.value})
}

const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
 console.log(user)
  // create action obj
  let actionOBj=addNewUser(user);
  console.log(actionOBj)
  dispatch(actionOBj)
}
  return (
    <div>
      {/* User creation form */}
      <h1 className="text-center text-info lead display-3" >User Form</h1>
      {/* <form className="w-50 mx-auto mt-3" onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input type="text" name="username" placeholder="Username" onChange={handleInputs} className="form-control" />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-2">
          <input type="number" name="age" placeholder="age" onChange={handleInputs} className="form-control" />
          <label htmlFor="username">Age</label>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form> */}

      {/* <div className="container bg-light p-5 text-center mt-4">
        <div className="row">
          <div className="col cols-md-6 bg-info p-3"><A /></div>
          <div className="col cols-md-6 bg-warning p-3"><B /></div>
        </div>
      </div> */}
      {/* <C /> */}
      <FormDemo />
    </div>
  )
}

export default App
