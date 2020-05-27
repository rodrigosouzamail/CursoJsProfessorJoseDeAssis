/*
 *JS - Aula06: Jogo do dado 
 * @Author Rodrigo Souza 
 */

var sorteio = Math.floor(Math.random() * 6 + 1);

switch(sorteio){
    case 1:
    document.getElementById("face").src = "_imagens/face1.png"
    break;
    case 2:
    document.getElementById("face").src = "_imagens/face2.png"
    break;
    case 3:
    document.getElementById("face").src = "_imagens/face3.png"
    break;
    case 4:
    document.getElementById("face").src = "_imagens/face4.png"
    break;
    case 5:
    document.getElementById("face").src = "_imagens/face5.png"
    case 6:
    document.getElementById("face").src = "_imagens/face6.png"
}