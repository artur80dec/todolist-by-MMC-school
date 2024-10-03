let todoInput //miejsce, gdzie użytkownik wpisuje treść zadań
let errorInfo //info o braku zadań / konieczność wpisania tekstu
let addBtn //przycisk ADD - dodaje nowe elementy do lity
let ulList //lista zadań, tagi UL
// let newTodo //nowo dodane LI, nowy todos (zadanie)
let popup //popup
let popupInfo //tekst w popupie, jak się doda pusty tekst
let todoToEdit //edytowany Todo
let popupInput //input w popupie
let popupAddBtn //przycisk zatwierdź w popupie
let popupCloseBtn //przycisk 'anuluj' w popupie


const main =()=>
{
  prepareDOMElements();
  prepareDOMEvents();
}

const prepareDOMElements = () => {
  //pobieramy wszystkie elementy
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
  
  // console.log(ulList);
  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
  // nadajemy nasłuchiwanie
  addBtn.addEventListener('click', addNewTodo);
  ulList.addEventListener('click', checkClick);
  popupCloseBtn.addEventListener('click', closeEditToDo);
  popupAddBtn.addEventListener('click', changeTodoText);
}

console.log(ulList);//undefined -> zmienna przypisany w fukcji (zmienna lokalna)

/*
wstawianie nowych todusów na liście

jak będzie działać funkcja która będzie tworzyć listę todo według mnie

1. wpisanie do inputa rzeczy do zrobienia
2. pobranie wartości z inputa za pomocą nasłuchiwacza -> kliknięcie przycisku "add"
3. stworzenie liItem'u
4. włożenie zawartości z inputa do li
5. stworzenie buttonów w itemie
6. nadanie im funkcji w JS

jak według mmc będzie działać ta fukcja ->

1. tworzyć nowy element (li)
2. dodawać nowy element do ul listy
3. funkcja będzie odpalana na click w przycisku ADD
4. przechwytuje treść z inputa i umieszcza go w nowo stworzonym LI
5. funkcja nie doda do lity pustego 'todosa'
*/

//TWORZENIE TREŚCI TODO LISTY

const addNewTodo = ()=>
{
  if (todoInput.value !== '')
  {
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    // console.log(newTodo);



    newButton(newTodo);//tutaj wywołujemy funkcję która jest zapisana poniżej -> gdzie są zawarte wszystkie buttony i ikony. Pozdro dla kumatych :D pa



    ulList.append(newTodo);
    todoInput.value = '';
    //Jeżeli nie wpiszemy nic w inputa to to w p .error-info pojawi się komunikat "Wpisz treść zadania" - > poprzez else na dole. Ale jak już wpiszemy i dodamy normalnie tekst to ten tekst o błędzie nie zniknie i będzie cały czas wyświetlany. Aby ten problem usunąć piszemy linijkę poniżej ->
    errorInfo.textContent = '';
    //po wpisaniu treści w inputa i wciśnieniu "add" tekst błędu poniżej zniknie. Pozdrawiam
  }
  else
  {
    errorInfo.textContent = 'Wpisz treść zadania!'
  }
}

//TWORZYMY ELEMENTY W LI JUŻ PO WPISANIU TREŚCI DO INPUTA

//PLAN:

//tworzym diva
//dodać klasę tools
//dodać trzy przyciski
//umieścić odpowiednią treść w przyciskach
//dodać odpowiednie klasy do przycisków



// const createToolsArea = () =>
// {
//   let divTools = document.createElement('div');//ok
//   divTools.classList.add('tools');//nie miałem tego
//   newTodo.append(divTools);
//   for (let i = 1; i <= 3; i++)
//   {
//     let button = document.createElement('button');
//     divTools.append(button);
//   }
//   button[1].classList.add('complete');
//   let iconOne = document.createElement('i');
//   button[1].append(iconOne);
//   iconOne.classList.add('fas');
//   iconOne.classList.add('fa-check');
//   button[2].classList.add('edit');
//   button[2].textContent = 'EDIT';
//   button[3].classList.add('delete');
//   let iconTwo = document.createElement('i');
//   button[3].append(iconTwo);
//   iconTwo.classList.add('fas');
//   iconTwo.classList.add('fa-times');
// }


//TWORZENIE BUTTONA

const newButton =(mleko)=>//podczas wywołania tej funkcji w argument wpisujemy zmieinną newTodo -> patrz wstążka niebieska
{
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  mleko.append(toolsPanel);//to wpięcie nie zadziała jeżeli nie wpiszemy tej funkcji do funkcji addNewTodo -> ponieważ tylko ona dziła na zadarzenie 'click'

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
}

const checkClick = (e)=>
{
  if(e.target.matches('.complete'))
  {
    e.target.closest('li').classList.toggle('completed');//closest zawsze wskazuje na swojego najbliższego rodzica
    e.target.classList.toggle('completed');
    console.log(e.target.closest('li'));
    // console.log(e.target);
  }
  else if (e.target.matches('.edit'))
  {
    editTodo(e);
  }
  else if (e.target.matches('.delete'))
  {
    console.log('delete');
    console.log(e.target);
  }
}

//pokazujemy meny edycji po uperzednim kliknięciu buttona (gdzie wywołamy funkcję ckeckClisk) następnie klikając na button "edit" wywołamy poniższą funkcję "editTodo" gdzie przkażemy zawartość elementu na który kliknęliśmy - o rany ale to jest zawiłe-> jedziemy dalej!!

//ta funkcja poniżej tylko wyświetla okno edycji po kliknięciu 'edit' oraz w pobiera wartość oryginalnego inputa i wkleja ją do inputa edytowanego -> jazda co? :D

const editTodo = (e) =>
{
  popup.style.display = 'flex';
  todoToEdit = e.target.closest('li');
  popupInput.value = todoToEdit.firstChild.textContent; //bez metody textContent dostaniemy tylko -> [object Text] - a my chcemy zawartość tekstu więc dlatego dajemy textContent
  console.log(todoToEdit.firstChild);//szok!!!! pierwszym dzieckiem naszego Li nie jest następny tag HTML - tylko nasz tekst w LI - aż ciężko w to uwierzyć ale to prawda !!
}



//ta funkcja powoduje -> iż po wywołaniu już formularza edycji za pomocą kliknięcia anuluj chowamy formularz edycji.

const closeEditToDo = ()=>
{
  popup.style.display = 'none';
}

const changeTodoText = ()=>
{
  if(popupInput.value !== '')//ten if jest po to aby w przypadku -> jak nic nie wpiszemy w inputa żeby nie wykonał się kod poniżej. Bo jeżeli nic nie wpiszemy do inputa to gdyby nie było tego Ifa to jedno li z naszej listy było by puste. Pozdro dla kumatych :)
  {
    todoToEdit.firstChild.textContent = popupInput.value;//czyli to co wpiszemy w inpucie w oknie edit będzie wyświetlane w tym li.
    popup.style.display = 'none';
  }
  else
  {
    popupInfo.textContent = 'wpisz tekst';
  }
}

// const changeTodoText = ()=>
//   {
//     if (popupInput.value !== '')
//     {
//       todoToEdit.firstChild.textContent = popupInput.value;
//       // popup.style.display = 'none';
//     }
//     else
//     {
//       popupInfo.textContent = 'wpisz jakieś zadanie';
//     }
//   }

document.addEventListener('DOMContentLoaded', main)//DOMContentLoaded - Strona została wczytana (sam DOM, bez CSS, grafik, itd.)