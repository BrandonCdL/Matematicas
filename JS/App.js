/*let variable1;
function sumar(){
    variable1=0;
    let variable2=0;
}*/

const boton1=document.getElementById("btnsumar");
boton1.addEventListener("click", sumar);
function sumar(){
    const varnumero1=Number(document.getElementById("num1").value);
    const varnumero2=Number(document.getElementById("num2").value);
    const imprimirdivresultado=document.getElementById("divresultado");
    const varresultado=varnumero1+varnumero2;
    imprimirdivresultado.innerText=varresultado;
    /*alert("La suma es: " + varresultado);*/
}

const boton2=document.getElementById("btnrestar")
boton2.addEventListener("click", restar);
function restar(){
    const varnumero3=Number(document.getElementById("num3").value);
    const varnumero4=Number(document.getElementById("num4").value);
    const imprimirdivresultado2=document.getElementById("divresultado2");
    const varresultado2=varnumero3-varnumero4;
    imprimirdivresultado2.innerText=varresultado2;
}

const boton3=document.getElementById("btnmultiplicar")
boton3.addEventListener("click", multiplicar);
function multiplicar(){
    const varnumero5=Number(document.getElementById("num5").value);
    const varnumero6=Number(document.getElementById("num6").value);
    const imprimirdivresultado3=document.getElementById("divresultado3");
    const varresultado3=varnumero5*varnumero6;
    imprimirdivresultado3.innerText=varresultado3;
}

const boton4=document.getElementById("btndividir")
boton4.addEventListener("click", dividir);
function dividir(){
    const varnumero7=Number(document.getElementById("num7").value);
    const varnumero8=Number(document.getElementById("num8").value);
    const imprimirdivresultado4=document.getElementById("divresultado4");
    const varresultado4=varnumero7/varnumero8;
    imprimirdivresultado4.innerText=varresultado4;
}

const boton5=document.getElementById("btnmostrarnumeros");
boton5=addEventListener("click", mostrar);
function mostrar(){
    const listas=document.getElementById("listado");
    listas.innerText=" ";
    for(let x=1;x<=100; x++){
        //alert("Numero"+x);
        const li=document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText=x;
        listas.appendChild(li);
    }
}

const boton6=document.getElementById("botonverificacion");
boton6=addEventListener("click", compararcalificaciones);
function compararcalificaciones(){
    const calificacion = Number(document.getElementById("numcalificacion").value);
    const resultado=document.getElementById("divimprimircal");
    if(calificacion>=8){
        resultado.innerText="Aprobado";
    }else{
        resultado.innerText="Reprobado";
        const audio=document.getElementById("audioreprobado");
        audio.play();
    }
}