function validarTelefone() {

    let telefone = document.getElementById("telefone").value;

    if(telefone.length != 9){
     document.getElementById("telefon").innerText= "telefone inválido";
     return false;

    }else{
        document.getElementById("telefone").innerText= ""; 
    }


   }

   function validarSenha() {

    let primeiraSenha= document.getElementById("primeiraSenha").value;
    let segundaSenha = document.getElementById("segundaSenha").value;

    if(primeiraSenha != segundaSenha){
     document.getElementById("senha").innerText= "senhas incompatíveis";
     return false

    }else{
        document.getElementById("senha").innerText= ""; 

    }

    }

    function validarCnpj(){
            
        let Cnpj= document.getElementById("Cnpj").value;

        if(Cnpj.length != 14){
        document.getElementById("cnpj").innerText= "Cnpj inválido";
        return false

        }else{
            document.getElementById("cnpj").innerText= ""; 
    
        }
        

   }
   function validarEmail(){

    let primeiroEmail= document.getElementById("primeiroEmail").value;
    let segundoEmail= document.getElementById("segundoEmail").value;


    if(primeiroEmail != segundoEmail){
        document.getElementById("E-mail").innerText= "E-mail incompatível";
        return false;

        }else{
            document.getElementById("E-mail").innerText= ""; 
    
        }
        

    }
    

 



function validarFormBtn(){

    if(!validarTelefone()){
        alert("Telefone inválido");
        return false;
    }

    if(!validarSenha()){
        alert("Senha ínvalida");
        return false;
    }

    if(!validarCnpj()){
        alert("Cnpj inválido");
        return false;
    }
    if (!validarEmail()){
        alert("E-mail inválido")
        return false;
    }
}