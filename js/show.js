
    function mostrarContrasena(id){
	    var id=id;
	    var tipo = document.getElementById(id);
	    if(tipo.type == "password"){
	      tipo.type = "text";
	    }else{
	      tipo.type = "password";
	    } 
  	};
  
