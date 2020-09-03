import { brandsData } from './data';

var brandList = document.querySelector('.brand-list');
var brandTemplate = document.querySelector('#brand-template').content;
var newItemTemplate = brandTemplate.querySelector('.brand-tab');

var btnShow = document.querySelector('.btn--show-all-brands');


for (var i = 0; i < brandsData.length; i++) {
    var clonedElement = newItemTemplate.cloneNode(true);
    var clonedElementImg = clonedElement.querySelector('.brand-tab__img')
    clonedElementImg.src = brandsData[i]
    brandList.appendChild(clonedElement);
}

btnShow.addEventListener('click', function(){
    if (btnShow.dataset.show === "true") {
        brandList.style.height = 'auto';
        btnShow.textContent = 'Скрыть';
        btnShow.classList.remove('btn--show-all-brands');
        btnShow.classList.add('btn--hide-brands');
        btnShow.dataset.show = "false";
    } else {
        brandList.style.height = "160px";
        btnShow.textContent = 'Показать все';
        btnShow.classList.remove('btn--hide-brands');
        btnShow.classList.add('btn--show-all-brands');
        btnShow.dataset.show = "true";
    }
});