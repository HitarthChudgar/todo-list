const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

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

//filter and search

const filterTodos = term => {
    //converting HTML Collection to an array
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        //negate to return stuff that don't include the term
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        //include the term
        .forEach((todo) => todo.classList.remove('filtered'))    
};

//keyup event
search.addEventListener('keyup', () => {
    //convert to lowercase
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});



