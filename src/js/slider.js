import Swiper, { Pagination } from "swiper";
import { brandsData } from "./data";
import { inflateList } from "./shared";

var swiper = document.querySelector(".swiper-wrapper");
var brandTemplateSlider = document.querySelector("#brand-template-slider")
  .content;
var newItemTemplateSlider = brandTemplateSlider.querySelector(".swiper-slide");

inflateList(brandsData, newItemTemplateSlider, swiper);

Swiper.use([Pagination]);

var mySwiper = new Swiper(".swiper", {
  width: 240,
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
