async function ftechData<T>() {
    let data=await fetch('https://jsonplaceholder.typicode.com/posts')
    let res=await data.json()
    return (res)
    
}
async function result(){
    let productsData= await ftechData();
    let card=
}