"use strict";

const title = document.querySelector(".form__select-title--js");
const userName = document.querySelector(".form__input-name--js");
const direction = document.querySelector(".form__select-direction--js");
const submit = document.querySelector(".button__submit--js");
const headerText = document.querySelector('.header__title--js');
const list = document.querySelector(".list--js");

const text = "Lists users repositories from Github account";
const time = 200;
let index = 0;

const addLetter = () => {
  headerText.textContent += text[index];
  index++;
  if (index == text.length) {
    clearInterval(headerTyping)
  }
}
const headerTyping = setInterval(addLetter, time);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = userName.value;
  let sort = direction.value;

  fetch(`https://api.github.com/users/${inputValue}/repos?sort=updated&direction=${sort}`)
    .then(resp => resp.json())
    .then(resp => {
      const repos = resp;
      for (const repo of repos) {
        list.innerHTML +=
          `<li class="list__item">
            <a class = "list__link" 
            href="${repo.html_url}"> ${repo.name}</a></li>`;
      }
    })
    .catch(err => {
      console.log("cant find github API");
    })
})

const userNotFound = (inputValue) => {
  let resp = `<li class ="project">
<div class="project__wrapper">
<img class="project__logo" src="assets/img/github.svg" alt="github image">
<h3 class="project__name">${inputValue} doesent exist</h3> 
</div>
</li>`;
  list.innerHTML = resp;
}