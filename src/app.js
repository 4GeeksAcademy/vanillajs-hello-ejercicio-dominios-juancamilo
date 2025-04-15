window.onload=()=>{
  
  document.querySelector("#dominio-generado").innerHTML=generadorDominio();
  
}
const generadorDominio=()=>{

let pronoun = ['the', 'our', 'his'];
let adj = ['great', 'big', 'amazing' ];
let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];
let dominio = [ ".com", ".net", ".us", ".io"];


let pronounGEN = Math.floor(Math.random()*pronoun.length);
let adjGEN = Math.floor(Math.random()* adj.length);
let nounGEN = Math.floor(Math.random()* noun.length);
let dominioGEN = Math.floor(Math.random()* dominio.length);

  return pronoun[pronounGEN] + adj[adjGEN] + noun[nounGEN] + dominio[dominioGEN];
}
