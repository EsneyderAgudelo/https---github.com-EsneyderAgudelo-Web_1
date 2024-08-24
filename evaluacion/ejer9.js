let numero = parseInt(prompt("Ingrese el numero"));
let mensaje;

switch (numero){
    case 1 :
        mensaje = ("Opcion 1 seleccionada");
        break;
    case 2 :
        mensaje = ("Opcion 2 seleccionada");
        break;
    case 3 :
        mensaje = ("Opcion 3 seleccionada");
        break;  
    case 4 :
        mensaje = ("Opcion 4 seleccionada");
        break;
    default :
        mensaje = ("Opcion no valida");
        break;                      
}
    alert (mensaje);
