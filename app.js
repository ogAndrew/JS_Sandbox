let val; 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1]

 val = list.children
val = list.children[1];
list.children[1].textContent = 'Hello';

val = list.children[3].children;


val = list.firstChild;
val = list.firstElementChild;

console.log(val);