// let kitli=document.getElementById('arraylist')
// let curry=["salt","pepper","chilli"];

// for(let powder of curry){
//     let li=document.createElement("li");
//     li.innerText=powder;
//     kitli.appendChild(li);
//     console.log(li);
// }
// curry.forEach(function(powder){
//     let li=document.createElement("li");
//     li.innerText=powder;
//     kitli.appendChild(li);
// }
// );

let alllist=document.querySelectorAll("li");
let powderarray=[];

alllist.forEach(function(list){
    let listItemText=list.innerText;
    powderarray.push(listItemText);
});
console.log(powderarray);