const button = document.getElementById('button');
const main = document.querySelector('.container');
const ok = document.getElementById('ok');
button.addEventListener('click',()=>{
  main.classList.remove('none');
})
ok.addEventListener('click',()=>{
  main.classList.add('none')
})
