let todoInput;
let addBtn;
let ulList;
let errortodo;
let newLi;
let popup;
let cancelBtn;
let acceptBtn;
let popupInput;
// let editToDo;
// let allTodo;


// let divTools;



const prepareDOMelements =()=>
{
  todoInput = document.querySelector('.todo-input');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
  errortodo = document.querySelector('.error-info');
  popup = document.querySelector('.popup');
  cancelBtn = document.querySelector('.cancel');
  acceptBtn = document.querySelector('.accept');
  popupInput = document.querySelector('.popup-input');
  
}

const prepareDOMevents =()=>
{
  addBtn.addEventListener('click', addLi);
  ulList.addEventListener('click', checkClick);
  cancelBtn.addEventListener('click', cancelChange);
  acceptBtn.addEventListener('click', changeTask);
  todoInput.addEventListener('keyup', checkEnter);
}
const main =()=>
{
  prepareDOMelements();
  prepareDOMevents();
}

const addLi = ()=>
{
  if (todoInput.value !== '')
  {
    newLi = document.createElement('li');
    // newLi.classList.add('todolist li');
    newLi.textContent = todoInput.value;
    todoInput.value = '';
    errortodo.textContent = '';
    ulList.append(newLi);
    addBottons();
  }
  else
  {
    errortodo.textContent = 'wpisz tekst zadania'
  }
  
}

const addBottons = ()=>
{
  const divTools = document.createElement('div');
  divTools.classList.add('tools');
  newLi.append(divTools);

  const completedBtn = document.createElement('button');
  completedBtn.classList.add('complete');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  divTools.append(completedBtn);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';
  divTools.append(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
  divTools.append(deleteBtn);
}

const checkClick =(e)=>
{
  if (e.target.matches('.complete'))
  {
    // console.log(e.target);
    e.target.closest('li').classList.toggle('completed');

  }
  else if (e.target.matches('.edit'))
  {
    // console.log(e.target);
    popup.style.display = 'flex';
    popupInput.value = e.target.closest('li').firstChild.textContent;
    editToDo = e.target.closest('li');
    popupInput.value = '';
  }
  else if (e.target.matches('.delete'))
  {
    // console.log(e.target);
    // e.target.closest('li').remove();
    // if (allTodo.length === 0)
    // {
    //   errortodo.textContent = 'Wpisz swoje pierwsze zadanie.';
    // }
    deletetoDo(e);
  }
}

const deletetoDo = (e)=>
{
  // console.log(e.target);
  // const allTodo = ulList.querySelectorAll('li');
  // e.target.closest('li').remove();
  // if (allTodo.length == 0)
  // {
  //   errortodo.textContent = 'Wpisz swoje pierwsze zadanie';
  // }
  e.target.closest('li').remove();
  const allTodo = ulList.querySelectorAll('li');//kolejność linijek musi buć zachowana
  if (allTodo.length == 0)
  {
    errortodo.textContent = 'Wpisz swoje pierwsze zadanie!';
  }


  // e.target.closest('li').remove();

  // const allTodos = ulList.querySelectorAll('li');
  // if (allTodos.length == 0)
  // {
  //   errortodo.textContent = 'Brak zadań na liście';
  // }
}

const cancelChange =()=>
{
  popup.style.display = 'none';
}

const changeTask =()=>
{
  popup.style.display = 'none';
  editToDo.firstChild.textContent = popupInput.value;
  popupInput.value = '';
}

const checkEnter = (e)=>
{
  if(e.key === 'Enter')
  {
    addLi();
  }
}

document.addEventListener('DOMContentLoaded', main);

// const popo =()=>
// {
//   const x = 2;
//   const y = 5;
//   const result = x + y;
//   pokazWynik(result);
// }

// const pokazWynik = (roman)=>
// {
//   const z = 5
//   const wieslaw = roman + z;
//   console.log(wieslaw);
// }

// popo();