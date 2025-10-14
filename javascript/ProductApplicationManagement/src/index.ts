async function ftechData():Promise<unknown>{
    let httpReq:Response=await fetch("https://dummyjson.com/products");
    let productsData:object[]=await httpReq.json()
    return productsData;
}
async function displayData() {

    let data=await ftechData();
    if(data!==null && typeof data==='object' && 'products' in data && Array.isArray(data.products)){
    console.log(data.products.length);
}}
displayData();
