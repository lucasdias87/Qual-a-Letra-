
var palavra="";
var dataAtual = new Date();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var segundos = dataAtual.getSeconds();
var dia = dataAtual.getDay();
var mes = dataAtual.getMonth();

recomecar=document.getElementById("recome");

x=document.getElementById("dicaa");
g=document.getElementById("ganhou");






///loop para a hora e tema
const loop = setInterval(() => {
    
    if(localStorage.getItem("darkm")=="true"){
        darkm();
       
    }
   
    document.getElementById("hora").innerHTML=horas+":"+minutos+":"+segundos;

}   , 1000);




//função para mudar o tema
function darkm (){
   
    document.getElementById("palavra").style.backgroundColor = "black";
    document.getElementById("palavra").style.color = "white";
    document.getElementById("resultadop").style.color = "white";
    document.getElementById("resultadop2").style.color = "white";
    document.getElementById("hora").style.color = "white";
    document.getElementById("recome").style.backgroundColor = "black";
    document.getElementById("recome").style.color = "white";
    document.getElementById("divp").style.backgroundColor = "grey";
    document.getElementById("dica").style.color = "black";
    document.getElementById("dica").style.backgroundColor = "white";
    document.getElementById("textoh").style.color = "white";
    document.getElementById("textop").style.color = "white";
  
   localStorage.setItem("darkm", "true");

    

    
}
function lyth(){
    document.getElementById("palavra").style.backgroundColor = "";
    document.getElementById("palavra").style.color = "";
    document.getElementById("resultadop").style.color = "";
    document.getElementById("resultadop2").style.color = "";
    document.getElementById("hora").style.color = "";
    document.getElementById("recome").style.backgroundColor = "";
    document.getElementById("recome").style.color = "";
    document.getElementById("divp").style.backgroundColor = "";
    document.getElementById("dica").style.color = "";
    document.getElementById("dica").style.backgroundColor = "";
    document.getElementById("textoh").style.color = "";
    document.getElementById("textop").style.color = "";
    localStorage.clear();

}







    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * 26);
      }
      var posicao=getRandomArbitrary(0,25);
    
   
 




///função para a dica
function dica (){
   

    if(posicao>="0" && posicao<"12"){
        document.getElementById("dica").innerHTML="pode ser a letra A mas não é a letra M";
        x.play();
    }
      else if(posicao >="12"&& posicao<"20"){
           document.getElementById("dica").innerHTML="Não é a letra L  nem as letras anterior";
           x.play();
      }
         else if(posicao >="20"  && posicao<="26"){
                 document.getElementById("dica").innerHTML="poderia ser a letra Q ou a letra Z";
                 x.play();
             }
}






//função para capturar a palavra


function capturando(){
   
 
palavra=document.getElementById("palavra").value;
//verifica se a letra é válida
if(palavra=="" ||palavra=="A"||palavra=="B"|| palavra=="C"||palavra=="D"||palavra=="E"||palavra=="F"||palavra=="G"||palavra=="H"||palavra=="I"||palavra=="J"||palavra=="K"||palavra=="L"||palavra=="M"||palavra=="N"||palavra=="O"||palavra=="P"||palavra=="Q"||palavra=="R"||palavra=="S"||palavra=="T"||palavra=="U"||palavra=="V"||palavra=="W"||palavra=="X"||palavra=="Y"||palavra=="Z" || palavra=="0"|| palavra=="1" ||palavra=="2"||palavra=="3"||palavra=="4"||palavra=="5"||palavra=="6"||palavra=="7"||palavra=="8"||palavra=="9"){    
    alert("Preencha o campo corretamente");
    palavra="";
    document.getElementById("resultadop2").innerHTML="letra imvalida";
}
else{

}



//array de palavras
var alfabeto= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
if(palavra==alfabeto[posicao]){
   
    document.getElementById("resultadop").innerHTML=palavra;
    document.getElementById("resultadop2").innerHTML="Parabéns você acertou";
    resultadop.style.color="green";
    resultadop.style.fontSize="1.2rem";
    resultadop2.style.color="green";
    resultadop2.style.fontSize="1.5rem";
    document.getElementById("palavra").value="";
    recomecar.style.visibility =  'visible';
    
    g.play();



}
 



else{
   
    document.getElementById("resultadop").innerHTML=palavra;
    document.getElementById("resultadop2").innerHTML="Voce errou_";
    
    resultadop.style.color="red";
    resultadop.style.fontSize="1.3rem";
    resultadop2.style.color="red";
    resultadop2.style.fontSize="1.5rem";
    document.getElementById("palavra").value="";
    document.getElementById("hora").innerHTML=horas+":"+minutos;
    
    
}


    
}
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        capturando();
    
    }
  });






   
   
    
   




    


    


  


   
   
    
        
   
       