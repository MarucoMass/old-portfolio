const hamburguer = document.querySelector('.nav-burguer');
const burguer = document.querySelector('.burguer');
const mobile = document.querySelector('.header-navbar');
const item = document.querySelectorAll('.header-navbar .header-ul li a');

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    burguer.classList.toggle('active');
    mobile.classList.toggle('active');
//     if(hamburguer.classList.contains('active')) {
// 		burguer.classList.toggle('active');
// 		setTimeout(() => {
// 		hamburguer.classList.toggle('active');
// 	}, 300);
// 	} else {
// 	hamburguer.classList.toggle('active');
// 	setTimeout(() => {
// 		burguer.classList.toggle('active');
// 	}, 300);
// }
})

item.forEach(selectItem => selectItem.addEventListener('click', ()=>{
    if ((mobile.classList = 'active') || (hamburguer.classList = 'active')) {
    }
    hamburguer.classList.toggle('active');
    burguer.classList.toggle('active');
    mobile.classList.toggle('active');     
    mobile.classList.add('header-navbar');     
}))



window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('active', window.scrollY > 0)
})


let secondaryTitle = document.getElementById('text');
let port = document.getElementById('port');
let contact = document.getElementById('contact');
let sombra = '';
for (let i = 0; i < 15; i++) {
  // sombra += (sombra ? ',' : '')+ -i*1+'px '+ i*1+'px 0 #1B4359';
  // sombra += (sombra ? ',' : '')+ -i*1+'px '+ i*1+'px 0 #006CA6';
  // sombra += (sombra ? ',' : '')+ -i*1+'px '+ i*1+'px 0 #009CF2';
  sombra += (sombra ? ',' : '')+ -i*1+'px '+ i*1+'px 0 #d9d9d9';
}
secondaryTitle.style.textShadow = sombra;
port.style.textShadow = sombra;
contact.style.textShadow = sombra;
