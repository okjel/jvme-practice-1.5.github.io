import { brandsData } from "./data";
import { showBrands, hideBrands, inflateList } from "./shared";

var brandList = document.querySelector(".brand-list");
var brandTemplate = document.querySelector("#brand-template").content;
var newItemTemplate = brandTemplate.querySelector(".brand-tab");

var btnShow = document.querySelector(".btn--show-all-brands");

inflateList(brandsData, newItemTemplate, brandList);

btnShow.addEventListener("click", function () {
  if (btnShow.classList.contains("btn--show-all-brands")) {
    showBrands(btnShow, brandList);
  } else {
    hideBrands(btnShow, brandList);
  }
});
