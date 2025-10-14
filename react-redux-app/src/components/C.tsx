import type { RootState } from '../redux/store';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { postsPromiseLifeCycle } from '../redux/slices/PostSlice';


function C() {
    let {posts,error,status}=useSelector((state:RootState)=>state.postState);
    let dispatch=useDispatch();

    useEffect(()=>{
        let actionObj:any=postsPromiseLifeCycle("https://jsonplaceholder.typicode.com/posts");
        dispatch(actionObj);
    },[])

    console.log(posts)
  return (
    <div className='text-center'>
        {
            status==="rejected" && <h1 className='text-dark text-center'>{error}</h1>
        }
      {
        status==="pending" && <h1 className='text-dark text-center'>Pending</h1>
      }
      {
        status==="success" && (
            <div className='container text-center'>
                <h1 className='text-center lead text-info fs-3'>Posts</h1>
                <table className="table table-bordered text-center w-75 mx-auto">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        
                    </thead>

                    <tbody>
                        {
                            posts.map(obj=>(
                                <tr key={obj["id"]}>
                                    <td>{obj["id"]}</td>
                                    <td>{obj["title"]}</td>
                                    <td>{obj.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
      }

    </div>
  )
}

export default C
