let todoInput //input gdzie wpisujemy treść zadania
let errorInfo // info o braku zadań/musimy wpisać tekst
let addBtn //button na dodanie nowego zadania
let ulList //nasza lista zadań
// let newTodos //no dodany td
let completeBtn
let editBtn
let deleteBtn
let popup//nasz cały popup
let popupInfo //tekst w popupie jak sie doda pusty string w inpucie
// let todoToEdit
// let popupInput //input w popupie
// let popupAddBtn//przycisk 'zatwierdz' w popupie
// let popupCloseBtn//przycisk 'anuluj' w popupie

const main =()=> //funkcja main będzie wywoływała wszystkie nasze funkcje
{
  prepareDOMElements();
  prepareDOMEvents();
}

const prepareDOMElements = ()=>//tutaj będą siedziały pobierane elementy
{
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
  popup = document.querySelector('.popup')
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents =()=>//tutaj wpiszemy zdarzenia jakie możemy wykonać na naszej stronie
{
  addBtn.addEventListener('click', addNewTodo);
  ulList.addEventListener('click', checkClick);
  popupCloseBtn.addEventListener('click', closePopup);
  popupAddBtn.addEventListener('click', changeTodoText);
  todoInput.addEventListener('keyup', enterKeyCheck);
}

/* co ma robić funkcja do tworzenia nowego zadania

1. pobranie wartości z inputa za pomocą buttona "add"
2. stworzenie nowego elementu listy
3. wpisanie treści zadania do li
4. utworzenie wszystkich ikon w li
5 zabezpieczyć nasze nowe zadanie przed tym aby nie przyjąć zadania jako pustego pola

*/

const addNewTodo = ()=>
{
  if (todoInput.value !== '')
  {
    // console.log('ten string nie jest pusty');
    // errorInfo.textContent = '';
    // console.log(todoInput.value);
    // todoInput.value = '';

    const newTodos = document.createElement('li');
    ulList.append(newTodos);
    newTodos.textContent = todoInput.value;
    todoInput.value = '';
    errorInfo.textContent = '';
    createToolsArea(newTodos);//nie musimy używać zmiennej globalne przez to
  }
  else
  {
    errorInfo.textContent = 'Wpisz coś w Inputa bo kolega nie lubi piwa :)';
  }
}

const createToolsArea =(roman)=>//tworzymy buttony dzikusy :D
{
  //tworzymy panel wszystkich buttonów
  divTools = document.createElement('div');
  divTools.classList.add('tools');
  roman.append(divTools);

  //tworzymy teraz buttony w tym panelu
  //button completed
  const completeBtn = document.createElement('button');//tworzymy buttona
  completeBtn.classList.add('complete');//nadajemy klasę buttonowi
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';//wkładamy ikonę do buttona
  divTools.append(completeBtn);//doklejamy element do div'a

  //button edit
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';
  divTools.append(editBtn);


  //button delete
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  divTools.append(deleteBtn);

  // divTools.append(completeBtn, editBtn, deleteBtn);
}

const checkClick = (e)=>
{
  // console.log(e.target.classList.contains('complete'));//wszystkie tagi zawierające klasę complete będą wyświetlane w console.log'u jako 'true'
  // console.log(e.target.matches('.complete'))//będzie tak samo wskazywać na 'true' jak klikniemy element HTML o klasie 'complete' -> tutaj nie podajemy już zapisu classList!!
  if (e.target.matches('.complete'))//
  {
    // console.log(e.target);
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  }
  else if (e.target.matches('.edit'))
  {
    // console.log(e.target);
    // popup.style = 'display: flex';
    editTodo(e);
    // changeTodoText()
  }
  else if(e.target.matches('.delete'))
  {
    console.log(e.target);
    deleteTodo(e);
  }
}

const editTodo = (e)=>//funkcja która wpowadza automatycznie w inputa tekst ze stringa znajdującego się w liście zadań. czyli stringa z li wciskamy w value inputa w wyskakującym okienku.
{
  popup.style.display = 'flex';
  todoToEdit = e.target.closest('li');
  popupInput.value = todoToEdit.firstChild.textContent;
  // console.log(e.target);
  // console.log(todoToEdit.firstChild);
}

const closePopup =()=>
{
  popup.style.display = 'none';
}

const changeTodoText = ()=>
{
  if (popupInput.value !== '')
  {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = 'none';
  }
  else
  {
    popupInfo.textContent = 'wpisz jakieś zadanie';
  }
}

const deleteTodo =(e)=>
{
  e.target.closest('li').remove();

  const allTodos = ulList.querySelectorAll('li');
  if (allTodos.length == 0)
  {
    errorInfo.textContent = 'Brak zadań na liście';
  }
}


const enterKeyCheck = (e)=>
{
  if (e.key === 'Enter')
  {
    // console.log('enter');
    addNewTodo()
  }
}


document.addEventListener('DOMContentLoaded', main);

//----------------------------------------------------------------

const add = (x,y)=>
{
  const score = x + y;
  showScore(score);
}

// console.log(score);//błąd

const showScore = (sth)=>
{
  console.log(`Wynik to: ${sth}`);
}


add(3,5);//'Wynik to 8'

//czyli reasumując nie wywołujemy już funkcji showScore ręcznie ponieważ wywołanie jej znajduje się w fukcji add. Wywołujac funkcję add wywołujemy też funkcję showScore. Pozdro dla kumatych. :D

//następny przykład

let score;

const add2 = (x,y)=>
{
  score = x + y;
  showScore2()
}

const showScore2 =()=>
{
  console.log(`Wynik to:${score}`);
}

add2(15,10);//'Wynik to 25
//-----------------------------------------------------------------------
