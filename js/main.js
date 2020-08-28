let p = document.getElementById('tekst');
let add = document.getElementById('dodaj');
let remove = document.getElementById('usun');

add.onclick = function(){
    p.textContent = 'dowolny text';
}

remove.onclick = function(){
    p.textContent = "";
}