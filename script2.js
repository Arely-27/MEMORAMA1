var cards = document.querySelectorAll('.card');
let cont =0;
let fiCart;
let b=0;
let punt=0;

function acumu(car){
  console.log(cont);
  if(car.getAttribute('facing')!='true' & b!=1){
    car.classList.toggle('is-flipped');
    alt(car);
  }
}

function alt(car){
  cont =cont+1;
  if(cont==2){
    if(car.getAttribute('id')!=fiCart.getAttribute('id')){
      if(car.getAttribute('ident')==fiCart.getAttribute('ident')){
        b=1;
        setTimeout(()=>{
          car.setAttribute('facing', 'true');
          fiCart.setAttribute('facing', 'true');
          b=0;
        },100);
        punt=punt+2;
        document.getElementById('lpun').innerHTML='Puntos: '+punt
        if (punt==12){
          setTimeout(()=>{
            window.alert('Ganaste');
          },100);
        }
        cont=0;
      }else if(car.getAttribute('facing')=='false' | fiCart.getAttribute('facing')=='false'){
        b=1;
        setTimeout(() => {
          car.classList.toggle('is-flipped');
          fiCart.classList.toggle('is-flipped');
          b=0;
        }, 1500);
        fiCart.setAttribute('facing', 'false');
        cont=0;
      }

    }else{
      cont=1;
    }


  }else{
    fiCart=car;
    setTimeout(()=>{
      car.setAttribute('facing', 'true');
    },100)
  }
}
window.onload = function() {

visor=document.getElementById("reloj"); 
document.cron.boton1.onclick = activo; 
document.cron.boton2.onclick = pausa;
document.cron.boton1.disabled=false;
document.cron.boton2.disabled=true;
var marcha=0; 
var cro=0; 

}

function activo (){   
     if (document.cron.boton1.value=="Empezar") { 
        empezar() 
        }
     else {  
        reiniciar()  
        }
     }

function pausa (){ 
     if (marcha==0) { 
        continuar() 
        }
     else {  
        parar() 
        }
     }

function empezar() {
      emp=new Date() 
      elcrono=setInterval(tiempo,10);
      marcha=1 
      document.cron.boton1.value="Reiniciar"; 
      document.cron.boton2.disabled=false; 
      }
    
function tiempo() { 
     actual=new Date(); 
     cro=actual-emp; 
     cr=new Date(); 
     cr.setTime(cro); 
     cs=cr.getMilliseconds(); 
     cs=cs/10; 
     cs=Math.round(cs); 
     sg=cr.getSeconds(); 
     mn=cr.getMinutes();  
     ho=cr.getHours()-1; 
       
     if (cs<10) {cs="0"+cs;} 
     if (sg<10) {sg="0"+sg;} 
     if (mn<10) {mn="0"+mn;} 
            
     visor.innerHTML=ho+" "+mn+" "+sg+" "+cs; 
     }
function parar() { 
     clearInterval(elcrono); 
     marcha=0; 
     document.cron.boton2.value="Continuar"; 
     }     

function continuar() {
     emp2=new Date(); 
     emp2=emp2.getTime(); 
     emp3=emp2-cro; 
     emp=new Date();  
     emp.setTime(emp3); 
     elcrono=setInterval(tiempo,10); 
     marcha=1; 
     document.cron.boton2.value="parar"; 
     document.cron.boton1.disabled=false; 
     }

function reiniciar() {
     if (marcha==1) {  
         clearInterval(elcrono); 
         marcha=0; 
         }
         
     cro=0; 
     visor.innerHTML = "0 00 00 00"; 
     document.cron.boton1.value="Empezar";
     document.cron.boton2.value="Parar"; 
     document.cron.boton2.disabled=true;  
     }  