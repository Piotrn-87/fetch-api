const list = document.querySelector(".list--js");

fetch('https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for (const repo of repos) {
            list.innerHTML += `<li><a href="${repo.html_url}"> ${repo.name}</a></li>`;
        }
    })
    .catch(err => {
        console.log(err);
    })
console.log('test 2');