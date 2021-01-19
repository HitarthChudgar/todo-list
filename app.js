const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//template generated for adding a todo element to dom
const genTemplate = todo => {
    //using template strings
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="fas fa-trash-alt delete"></i>
                  </li>`
    //adds to the end
    list.innerHTML += html;
}

//adding to-dos
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //doesn't let spaces to be entered as it trims it
    const todo = addForm.add.value.trim();
    //checks for non empty input
    if(todo.length){
        genTemplate(todo);
        //resets the form
        addForm.reset();
    }
});

//deleting to-dos
list.addEventListener('click', e => {
    //checks class list from target element
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})



