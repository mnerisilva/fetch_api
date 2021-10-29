const root = document.querySelector('#root');
const elementUl = document.createElement('ul');
const spinner = document.querySelector('.spinner');

root.append(elementUl);

const rootUl = root.querySelector('ul');

const url = 'https://randomuser.me/api/?results=50';

let jsonString = [];

fetch(url).
then( resp => resp.json()).
then( data => {
    console.log(data.results);
    data.results.map( item => {
        rootUl.innerHTML = rootUl.innerHTML + `
        <li>${item.name.first} ${item.name.last}
            <ul>
            <li>${item.dob.age} anos</li>            
            <li>${item.email}</li>
            </ul>
        </li>
        `;
    });
    spinner.style.opacity = 0;
}).
catch(error => { 
    console.log(error);
    root.innerHTML = `Falha na comunicação: ${error}`;
});

