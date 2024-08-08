let kitchenInput=document.getElementById("kitchen-input")
let addbtn=document.getElementById("add-btn")
let kitchkitchenitemslist=document.getElementById("kitchen-items-list")



function addItems(){
    let kitchenInputData=kitchenInput.value;
    let li=document.createElement("li");
    li.innerText=kitchenInputData;
    kitchkitchenitemslist.appendChild(li);
    kitchenInput.value="";
    kitchenInput.focus();
    console.log(li);


    let trashBtn=document.createElement("i");
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);
    console.log(trashBtn);
}


function deleteKitchenItem(event){
    if(event.target.classList[0]==="fas"){
        let item=event.target.parentElement;
        item.remove();
    }
}



addbtn.addEventListener("click",addItems);
kitchkitchenitemslist.addEventListener("click",deleteKitchenItem);




