var burger = document.querySelector('.burger');
var hide = document.querySelector('.close');
var menu = document.getElementById('menu');
var arrow = document.querySelectorAll('.arrowdown');



burger.addEventListener('click',function(e){
    menu.style.display ='block';
});

hide.addEventListener('click',function(e){
    menu.style.display = 'none';
});

arrow.forEach(function(each){
    var subMenu = each.parentNode.querySelector('.sub-menu');
    each.addEventListener('click',function(e){
        if(subMenu.style.display ==='block'){
            subMenu.style.display = '';
            each.setAttribute('src','images/icon-arrow-down.svg')
        }else{
           subMenu.style.display = 'block';
            each.setAttribute('src','images/icon-arrow-up.svg')
        }
    })
   
})