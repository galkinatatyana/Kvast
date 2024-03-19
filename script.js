let elem = document.querySelector('.order__select');
elem.addEventListener('change', function(){
    this.style.color = 'black'
});

let orderForm = document.querySelector('.order__form');
let userName = orderForm.querySelector('.order__input[name="user"]');
let userTel = orderForm.querySelector('.order__input[name="tel"]');
let orderVol = orderForm.querySelector('.order__select');
console.log(orderVol.value);
orderForm.onsubmit = function(){
    if(!userName.value||!userTel.value||orderVol.value==='От 5 до 10 баррелей в неделю'){
       event.preventDefault();
       if(!userName.value){
            userName.focus()
            userName.style.border = '1px solid red';
            alert('Заполните поле');
            userName.addEventListener('input', function(){
                this.style.border = 'none';
            });
        }
        else if(!userTel.value){
            userTel.focus()
            userTel.style.border = '1px solid red';
            alert('Заполните поле');
            userTel.addEventListener('input', function(){
                this.style.border = 'none';
            });
        }
        else if(orderVol.value==='От 5 до 10 баррелей в неделю'){
            orderVol.focus()
            orderVol.style.border = '1px solid red';
            alert('Заполните поле');
            orderVol.addEventListener('input', function(){
                this.style.border = 'none';
        });
        }
    }
}
