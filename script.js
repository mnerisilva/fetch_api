const root = document.querySelector("#root");
const elementUl = document.createElement("ul");
const spinner = document.querySelector(".spinner");

root.append(elementUl);

const rootUl = root.querySelector("ul");

//const url = "https://randomuser.me/api/?results=50";
const url = "https://randomuser.me/api/?nat=br&page=3&results=10&seed=abc";

let jsonString = [];

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.results);
    data.results.map((item) => {
      rootUl.innerHTML =
        rootUl.innerHTML +
        `
        <a href="">
            <li class="card">
                <div class="avatar"><img src='${item.picture.thumbnail}' /></div>
                <ul class="card-text-info">
                    <li>${item.name.first} ${item.name.last}</li>
                    <li><i class="fas fa-birthday-cake"></i> ${item.dob.age} anos</li>            
                    <li><i class="far fa-envelope"></i> ${item.email}</li>
                </ul>
            </li>
        </a>
        `;
    });
    spinner.style.opacity = 0;
  })
  .catch((error) => {
    console.log(error);
    root.innerHTML = `Falha na comunicação: ${error}`;
  });
