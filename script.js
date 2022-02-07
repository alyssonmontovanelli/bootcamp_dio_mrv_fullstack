var Correntenum = document.getElementById("numeroCorrente");
numeroCorrente = 0;


function somar(){
 numeroCorrente = numeroCorrente + 1;
 Correntenum.innerHTML = numeroCorrente;
 if (numeroCorrente >= 0){
  Correntenum.style.color = 'green';}
}

function diminuir(){
 numeroCorrente = numeroCorrente - 1;
 Correntenum.innerHTML = numeroCorrente;
 if (numeroCorrente < 0){
  Correntenum.style.color = 'red';
 }
}
