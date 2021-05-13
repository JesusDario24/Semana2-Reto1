/*function Enviar (){
location.href=" https://www.freecodecamp.com/email-submit"
}*/


function Enviar (){
    var envia;
    var email;


    envia = document.getElementById('envia');
    email = document.getElementById('email');


    envia.onclick = function(){

        var valor1 = email.value;

           if(valor1!=""){
            location.href="https://www.freecodecamp.com/email-submit";
            return false;
          }else{
            alert("Debes llenar el correo");
        }
    }
}