import Swiper, { Pagination } from 'swiper';
import { brandsData } from './data';

var swiper = document.querySelector('.swiper-wrapper');
var brandTemplateSlider = document.querySelector('#brand-template-slider').content;
var newItemTemplateSlider = brandTemplateSlider.querySelector('.swiper-slide');



for (var i = 0; i < brandsData.length; i++) {
  var clonedElement = newItemTemplateSlider.cloneNode(true);
  var clonedElementImg = clonedElement.querySelector('.brand-tab__img')
  clonedElementImg.src = brandsData[i]
  swiper.appendChild(clonedElement);
}

Swiper.use([Pagination]);

var mySwiper = new Swiper('.swiper', {
    width: 240,
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    }
})
