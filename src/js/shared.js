function showBrands(btnShow, brandList) {
  btnShow.textContent = "Скрыть";
  btnShow.classList.remove("btn--show-all-brands");

  if (!btnShow.classList.contains("btn--hide-brands")) {
    btnShow.classList.add("btn--hide-brands");
  }

  if (brandList.classList.contains("brand-list--state_hide")) {
    brandList.classList.remove("brand-list--state_hide");
  }
  if (!brandList.classList.contains("brand-list--state_show")) {
    brandList.classList.add("brand-list--state_show");
  }
}

function hideBrands(btnShow, brandList) {
  btnShow.textContent = "Показать все";

  if (btnShow.classList.contains("btn--hide-brands")) {
    btnShow.classList.remove("btn--hide-brands");
  }

  btnShow.classList.add("btn--show-all-brands");

  if (brandList.classList.contains("brand-list--state_show")) {
    brandList.classList.remove("brand-list--state_show");
  }
  if (!brandList.classList.contains("brand-list--state_hide")) {
    brandList.classList.add("brand-list--state_hide");
  }
}

function inflateList(data, template, inflatedList) {
  for (var i = 0; i < data.length; i++) {
    var clonedElement = template.cloneNode(true);
    var clonedElementImg = clonedElement.querySelector(".brand-tab__img");
    clonedElementImg.src = data[i];
    inflatedList.appendChild(clonedElement);
  }
}

export { showBrands, hideBrands, inflateList };
