let arrowRight = document.querySelector('.arrowRight');
let arrowLeft = document.querySelector('.arrowLeft');
let menu_info = document.querySelector('.menu_info');
let aguja = document.querySelector('.rotacion');
let hr = document.querySelector('.hr');
let min = document.querySelector('.min');


let d = 0;
let f = 380;
let back = '';
let foward = '';

arrowRight.addEventListener('click',()=>{
    d = d + f;
    menu_info.style.marginLeft=`${d}px`;
    foward = menu_info.style.marginLeft=`${d}px`;
    console.log(menu_info.style.marginLeft=`${d}px`)
    if(foward > '0px'){
    menu_info.style.marginLeft='0px';
    d=-1520;
    }
    
    
})

arrowLeft.addEventListener('click',()=>{
    d = d - f;
    menu_info.style.marginLeft=`${d}px`;
  back = menu_info.style.marginLeft=`${d}px`;

  if(back == '-1520px'){
    menu_info.style.marginLeft='0px';
    d=0;
    
}
  
})



let grados = 6;
 




 setInterval( () =>{

  let dato = new Date();
  let segundos = dato.getSeconds() * grados;
  let minutos = dato.getMinutes() * grados;
  let horas = dato.getHours() * 30;


 aguja.style.transition = '1s infinite';
 hr.style.transform = `rotateZ(${(horas) + (minutos / 12)}deg)`;
                min.style.transform = `rotateZ(${minutos}deg)`;
  aguja.style.transform =`rotateZ(${segundos}deg)`;

  
 },1000)

 



