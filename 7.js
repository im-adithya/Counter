let count = 0;
const add = document.getElementById('plus');
const subtract = document.getElementById('minus');
const reset = document.getElementById('reset');
const value = document.querySelector('.value');

add.addEventListener('click',function(){
count += 1;
value.textContent = count;
})
subtract.addEventListener('click',function(){
count -= 1;
value.textContent = count;
})
reset.addEventListener('click',function(){
count = 0;
value.textContent = count;
})
