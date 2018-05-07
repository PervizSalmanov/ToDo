//Создаём кнопку close
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


//Делаем так чтобы кнопка close начала работать :) 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//При клике на  элемент добавление класса checked 
var list = document.querySelector('ul#menu');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//Функция которую привязали при клике на кнопку выполняется это действие
function Hello() {
  var li = document.createElement("li"); //Создаёт элемент li
  var inputValue = document.getElementById("hel").value; //Берёт id 
  var t = document.createTextNode(inputValue); //Подсталяет значение
  li.appendChild(t);
  if (inputValue === '') {
    alert("Введите что нибудь");
  } else {
    document.getElementById("menu").appendChild(li);
  }
  document.getElementById("hel").value = "" //С помощью value записывает значение которое ввели в input


//Кнопочка close
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}