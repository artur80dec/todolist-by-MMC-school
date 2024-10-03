let todoInput;
let addBtn;
let popup;
let cancelBtn;
let ulList;
let errorInfo;
let popupInput;
let acceptBtn;
let todoEdit;


const prepareDOMElemnts = ()=>
{
  todoInput = document.querySelector('.todo-input');
  addBtn = document.querySelector('.btn-add');
  popup = document.querySelector('.popup');
  cancelBtn = document.querySelector('.cancel');
  ulList = document.querySelector('.todolist ul');
  errorInfo = document.querySelector('.error-info');
  popupInput = document.querySelector('.popup-input');
  acceptBtn = document.querySelector('.accept');
}

const prepareDOMEvents = ()=>
{
  addBtn.addEventListener('click', addLi);
  cancelBtn.addEventListener('click', hidePopup);
  ulList.addEventListener('click', klikamyIkony);
  acceptBtn.addEventListener('click', zmianaTekstu);
  todoInput.addEventListener('keyup', zatwierdzamyEnterem);
}


const main = ()=>
{
  prepareDOMElemnts();
  prepareDOMEvents();
  console.log(ulList);
  // console.log(todoInput);//undefined jeżeli nie ma w ciele tej funkcji prepareDOMElements()
  //jeżeli console.log'a z todoInput damy poza ciało tej funkcji też wyświetli undefined
}

const addLi = ()=>
{
  if (todoInput.value !== '')
  {
    // console.log(addBtn);
    const newLi = document.createElement('li');
    newLi.textContent = todoInput.value;
    todoInput.value = '';
    ulList.append(newLi);
    errorInfo.textContent = '';
    addBotton(newLi)
  }
  else
  {
    errorInfo.textContent = 'Nie wpisałeś żadnego zadania';
  }
}

const addBotton = (e)=>
{
  const tools = document.createElement('div');
  tools.classList.add('tools');
  e.append(tools);

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  tools.append(completeBtn);

  const editBtn = document.createElement('button')
  editBtn.textContent = 'EDIT';
  editBtn.classList.add('edit');
  tools.append(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  tools.append(deleteBtn);
}

const klikamyIkony = (e)=>
{
  // console.log(e.target);
  if (e.target.matches('.complete'))
  {
    e.target.closest('li').classList.toggle('completed');
  }
  else if (e.target.matches('.edit'))
  {
    edytuj(e)
  }
  else if (e.target.matches('.delete'))
  {
    kasuj(e);
  }
}

const edytuj = (e)=>
{
  popup.style.display = 'flex';
  popupInput.value = e.target.closest('li').firstChild.textContent;
  todoEdit = e.target.closest('li');
  
}

const zmianaTekstu = ()=>
{
  todoEdit.firstChild.textContent = popupInput.value;
  popupInput.value = ''
  popup.style.display = 'none';

}

const kasuj = (e)=>
{
  e.target.closest('li').remove();
  const allLi = document.querySelectorAll('.todolist li');//consta zawsze tworzymy pod usuwaniem li czyli pod linijką która jest wyżej!!
  if (allLi.length === 0)
  {
    errorInfo.textContent = 'Wpisz Marian coś co żeś odwalił, aniołkiem nie jesteś:)';
  }
  
}

const zatwierdzamyEnterem = (e)=>
{
  if (e.key === 'Enter')
  {
    addLi();
  }
}

const hidePopup = ()=>
{
  popup.style.display = 'none';
  popupInput.value = '';
  
}


// const marian = (roman)=>
// {
//   console.log(roman);//undefined
// }

// const pazdzioch = ()=>
// {
//   // prepareDOMElemnts();
//   console.log(todoInput);
// }
// pazdzioch();



document.addEventListener('DOMContentLoaded', main);