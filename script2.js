let todoInput //miejsce, gdzie użytkownik wpisuje treść zadań
let errorInfo //info o braku zadań / konieczność wpisania tekstu
let addBtn //przycisk ADD - dodaje nowe elementy do lity
let ulList //lista zadań, tagi UL
let newTodo //nowo dodane LI, nowy todos (zadanie)



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
}

const prepareDOMEvents = () => {
  // nadajemy nasłuchiwanie
  addBtn.addEventListener('click', addNewTodo);
}

// console.log(ulList);//undefined -> ponieważ funkcja lokalna

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


const addNewTodo = ()=>
{
  if (todoInput.value !== '')
  {
    newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    // console.log(newTodo);


    newButton();//tutaj wywyojemy funkcję która jest zapisana poniżej -> gdzie są zawarte wszystkie buttony i ikony. Pozdro dla kumatych :D pa
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

const newButton =()=>
{
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  newTodo.append(toolsPanel);//to wpięcie nie zadziała jeżeli nie wpiszemy tej funkcji do funkcji addNewTodo -> ponieważ tylko ona dziła na zadarzenie 'click'

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

// const add = (x,y)=>
// {
//   const score = x + y;

//   showScore(score);
// }

// const showScore =(score2)=>
// {
//   console.log(`wynik to ${score2}`);
// }

// add(3,5);

// console.log(score);

let score;

const add = (x,y)=>
{
  score = x + y;

  showScore();
}

const showScore = ()=>
{
  console.log(score);
}


console.log(score);//undefined
add(5,5);
console.log(score);//10



document.addEventListener('DOMContentLoaded', main)//DOMContentLoaded - Strona została wczytana (sam DOM, bez CSS, grafik, itd.)