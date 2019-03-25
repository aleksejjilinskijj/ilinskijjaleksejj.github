
function crs() {
	
var x = document.getElementById("forUser").value;

var elem = document.createElement('div');
elem.className = "intro";
elem.innerHTML = x;

var elem2 = document.createElement('div');
elem2.className = "intro";


var ght=document.body;
ght.appendChild(elem);

var ght2=document.body;
ght2.appendChild(elem2);







//document.body.insertBefore(elem, document.body.firstChild);

 // создать копию узла
 // var div2 = elem.cloneNode(true);
  // копию можно подправить
//  div2.innerHTML = 'Супер!';
  // вставим её после текущего сообщения
//  elem.parentNode.insertBefore(div2, elem.nextSibling);
  
  
  elem.addEventListener("click", function() {this.className = "intro2";}, false); 
 elem2.addEventListener("click", function() {this.remove();
 elem.remove();
 }, false); };
 //elem.addEventListener("click", function() {setTimeout(function() {elem.remove(); }, 10000);}, false);};


function crse() {

  alert("Привет");


};











