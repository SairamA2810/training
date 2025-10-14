import { useSelector,useDispatch} from 'react-redux'
import { incrementCounter } from '../redux/slices/CounterSlice'
import type { UserType } from '../redux/slices/UserSlice'
import { deleteUser } from '../redux/slices/UserSlice';
import type { RootState } from '../redux/store';


function A() {

  let obj=useSelector((state:RootState)=>state.counterState.counter)
  console.log(obj)

  // to display form data using state from the store
  let userObj=useSelector((state:RootState)=>state.userState)

  // dispatch() is used to dispatch the data to store
  let dispatch=useDispatch()

  function handleCounter(){
    let incCounter=incrementCounter()
    dispatch(incCounter)
  }

  function toDelete(obj:UserType){
    dispatch(deleteUser(obj));
  }

  return (
    <div>
      Component -A
      <h3>Counter:{obj} </h3>
      <button className='btn btn-success' onClick={handleCounter}>+</button>

      <div className="table mt-3">
        <table className='table table-border table-stripped'>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              userObj.map((obj:UserType)=>(
                <tr key={obj.age}>
                  <td>{obj.username}</td>
                  <td>{obj.age}</td>
                  <td><button type="button" className="btn btn-warning" onClick={()=>toDelete(obj)}> Delete </button></td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default A
