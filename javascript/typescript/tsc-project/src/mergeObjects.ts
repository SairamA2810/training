function mergeObjects<T,U>(ob1:T,ob2:U){
    return {...ob1,...ob2}
}
console.log(mergeObjects({a:10,b:30,k:200},{c:10,d:90}))