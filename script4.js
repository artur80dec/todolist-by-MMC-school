//pobieramy elementy html do tworzenia listy bez elementów edytowania
let glownyInput;
let przyciskAdd;
let blad;
let calaListaUl;
let popup;
let popupInput;
let popupInfo;
let popupBtn;

//dodatkowe zmienne z elementami edytowania
let noweLi;
let ptaszek;
let editBtn;
let cancelBtn;

//Funkcja main -> zbiera wszystkie funkcje
const glowna = ()=>
{
  pobieramyInputy();
  uruchamiamyZdarzenia();
}

const pobieramyInputy = ()=>
{
  glownyInput = document.querySelector('.todo-input');
  przyciskAdd = document.querySelector('.btn-add');
  blad = document.querySelector('.error-info');
  calaListaUl = document.querySelector('.todolist ul');
  popup = document.querySelector('.popup');
  cancelBtn = document.querySelector('.cancel');
  popupInput = document.querySelector('.popup-input');
  popupInfo = document.querySelector('.popup-info');
  popupBtn = document.querySelector('.accept');
  
  //elmenty li do edytowania

}

const uruchamiamyZdarzenia =()=>
{
  przyciskAdd.addEventListener('click', stwórzLi);
  // ptaszek.addEventListener('click', przekreslonytekst);//nie możemy zrobić tego na buttona z ptaszkiem ponieważ ten element został stworzony poprzez żywe kolekcję. Dlatego trzeba to zrobić poprzez element stworzony statycznie w pliku HTML. A tym Elementem najbliższym jest lista ul więc patrz -> zapis niżej
  calaListaUl.addEventListener('click', przekreslonytekst);
  cancelBtn.addEventListener('click', hidePopup);
  popupBtn.addEventListener('click', zmianaTekstu);
  glownyInput.addEventListener('keyup', sprawdzamyCzyEnter);

}

const stwórzLi =()=>
{
  if(glownyInput.value !== '')
  {
    const zadanie = glownyInput.value
    noweLi = document.createElement('li');
    calaListaUl.append(noweLi);
    noweLi.textContent = glownyInput.value;
    glownyInput.value = '';
    blad.textContent = ''
    stwórzPrzyciskiLi();
  }
  else
  {
    blad.textContent = 'Proszę wprowadzić jakąś wartość';
  }
}

const stwórzPrzyciskiLi =()=>
{
  const divZbuttonami = document.createElement('div');
  divZbuttonami.classList.add('tools');
  noweLi.append(divZbuttonami);

  ptaszek = document.createElement('button');
  ptaszek.classList.add('complete');
  ptaszek.innerHTML = '<i class="fas fa-check"></i>';
  divZbuttonami.append(ptaszek);

  editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';
  divZbuttonami.append(editBtn);

  cancelBtn = document.createElement('button');
  cancelBtn.classList.add('delete');
  cancelBtn.innerHTML = '<i class="fas fa-times"></i>'
  divZbuttonami.append(cancelBtn);
}

const przekreslonytekst =(e)=>
{
  // console.log(e.target);
  if (e.target.matches('.complete'))
  {
    e.target.closest('li').classList.toggle('completed');
  }
  else if (e.target.matches('.edit'))
  {
    // popup.classList.toggle('.popup-body');
    edit(e);
    
  }
  else if (e.target.matches('.delete'))
  {
    e.target.closest('li').remove();
    deleteLi()
  }
}

const hidePopup =()=>
{
  popup.style.display = 'none';

}

const edit =(e)=>
{
  popup.style.display = 'flex';
  // glownyInput.value = popupInput.value;
  todoEdit = e.target.closest('li');
  popupInput.value = todoEdit.firstChild.textContent;//pierwszym dzieckiem elementam li jest tekst znajdujący się w li -> do tego dodajemy textContent
}
const zmianaTekstu =()=>
{
  if (popupInput.value === '')
  {
    popupInfo.textContent = 'Wprowadź jakiś tekst'
  }
  else
  {
    todoEdit.firstChild.textContent = popupInput.value;
    popupInput.value = '';
    popup.style.display = 'none';
    glownyInput.value = '';
  }
}

const deleteLi = ()=>
{
  const allLi = document.querySelectorAll('.todolist ul li');
  if (allLi.length == 0)
  {
    blad.textContent = 'Wpisz jakieś zadanie do wykonania'
  }
}

const sprawdzamyCzyEnter = (e)=>
{
  if (e.key === 'Enter')
  {
    stwórzLi();
  }
}


document.addEventListener('DOMContentLoaded', glowna);