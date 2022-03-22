let lampada=document.createElement('img');
lampada.src="images/lampadaoff.png";
lampada.setAttribute('id','lampada');
let interruptor=document.createElement('img');
interruptor.src="images/switchoff.png";
interruptor.setAttribute('id','interruptor');

let body=document.querySelector("body");
let div=document.createElement("div");
div.appendChild(interruptor);
div.appendChild(lampada);
body.appendChild(div);

interruptor.onclick = function(){

    if(interruptor.src.match("on")){
        document.getElementById(interruptor.src="images/switchoff.png");
        document.getElementById(lampada.src="images/lampadaoff.png");
        document.body.style.backgroundColor = "white";
    }else{
        document.getElementById(lampada.src="images/lampadaon.png");
        document.getElementById(interruptor.src="images/switchon.png");
        document.body.style.backgroundColor = "yellow";
    }
}