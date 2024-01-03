//Cоздаем функцию
let todos = [];
const getInfoList = document.querySelector('#do_input');
const createListItem = () => {
  const infoText = getInfoList.value;
  const listNode = document.createElement('div');
  document
    .querySelector('.dolist_wrap')
    .appendChild(listNode)
    .classList.add('do_itembox');
  const getInfoItem = document.createElement('li');
  getInfoItem.textContent = infoText;
  getInfoItem.classList.add('do_item');
  const removeItem = document.createElement('img');
  removeItem.setAttribute('src', 'assets/img/box.png');
  removeItem.classList.add('remove_item');
  let checkTask = document.createElement('input');
  checkTask.type = 'checkbox';

  //Добавляем задачу
  listNode.append(checkTask, getInfoItem, removeItem);
  const dataTask = { task: infoText };
  todos.push(dataTask);

  checkTask.addEventListener('change', () => {
    checkTask.checked;
    if (checkTask.checked) {
      getInfoItem.textContent = 'Got ya!!!';
    } else {
      getInfoItem.textContent = infoText;
    }
  });

  //Удаление задачи
  listNode.addEventListener('click', (e) => {
    if (e.target === removeItem && checkTask.checked) {
      e.target.parentNode.remove();
      todos = todos.filter((task) => task !== dataTask);
      console.log(todos);
    } else {
      return;
    }
  });
};

//Cоздаем список задач
const listForm = document.querySelector('#do_form');
let error = document.createElement('p');
listForm.addEventListener('submit', (e) => {
  console.log(todos);
  e.preventDefault();
  let exists = false;
  let listItems = document.querySelectorAll('.do_itembox li');
  listItems.forEach((item) => {
    if (item.textContent === getInfoList.value) {
      exists = true;
      error.textContent = 'This task exists!!!';
      listForm.append(error);
    }
  });

  if (getInfoList.value !== '' && !exists) {
    error.textContent = '';
    createListItem();
  }
  listForm.reset();
});
