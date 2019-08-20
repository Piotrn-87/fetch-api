"use strict";

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

fetch('https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc')
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
    console.log(err);
  })