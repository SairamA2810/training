let studentObj=[
    {id:1,name:"sai",email:"saianumala02@gmail.com"},
    {id: 2, name: "Alice", email: "alice.smith@example.com"},
    {id: 3, name: "Bob", email: "bob.johnson@example.com"},
    {id: 4, name: "Charlie", email: "charlie.brown@example.com"},
    {id: 5, name: "Diana", email: "diana.prince@example.com"}
]
let tbody=document.querySelector('tbody')

function addchild(){
    for (let data of studentObj){
        let tr=document.createElement('tr')
        tr.innerHTML=`<td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>`
        tbody.appendChild(tr)
        
    }
}
addchild()