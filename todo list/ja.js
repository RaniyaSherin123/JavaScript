let TodoInput=document.querySelector(".to-in");

let TodoButton=document.querySelector(".to-btn");

let TodoList=document.querySelector(".todolist");

//adding event

TodoButton.addEventListener('click', addto);
//add oter event


todolist.addEventListener('click',Del)

//add functn

function addto(e){

    const todoDiv=document.createElement('div')

    e.preventDefault();
    todoDiv.classList.add('todo')

    const toLi=document.createElement('li')
    toLi.classList.add('todoItems')
    toLi.innerText=TodoInput.value

    todoDiv.appendChild(toLi)

    //trash button
    const trashbtn=document.createElement('button')

    trashbtn.classList.add('trash')
    trashbtn.innerText="-Del"
    todoDiv.appendChild(trashbtn)


    TodoList.appendChild(todoDiv)
    //clear input
    TodoInput.value="";
}

//delete funtn
function Del(e)
{
    const item=e.target
    if(item.classList[0]==='trash')
    {
        const todo = item.parentElement

        todo.remove()
    }


}