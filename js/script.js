// alert("ciao")


// foto principale grande
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]; console.log(items);


let fotografie = '';

for (let i = 0; i < items.length; i++){
    fotografie +=`
    <div class="foto">
        <img  src="${items[i]}" alt="">
    </div>
    `      
    }
    fotografie += `<div class="txt-container"></div>`;
    fotografie += `<div class="titolo-container"></div>`;
console.log(fotografie);

const box  = document.querySelector(".box");
box.innerHTML = fotografie

const foto = document.querySelector ('.foto');
foto.className = 'foto active';


// titolo immagine grande
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];console.log(title);

let titoli = '';

for (let i = 0; i < title.length; i++){
    titoli +=`
    <div class="titolo">
        ${title[i]}
    </div>`
}
console.log(titoli);

const titoloContainer  = document.querySelector(".titolo-container");
titoloContainer.innerHTML = titoli
console.log(titoloContainer);

const titolo = document.querySelector ('.titolo');
titolo.className = 'titolo titolo-visibile';
console.log(titolo);


// testo immagine grande
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]; console.log(text);

let informazioni = '';

for (let i = 0; i < text.length; i++){
    informazioni +=`
    <div class="txt">
        ${text[i]}
    </div>`
}
console.log(informazioni);

const txtContainer  = document.querySelector(".txt-container");
txtContainer.innerHTML = informazioni
console.log(txtContainer);

const txt = document.querySelector ('.txt');
txt.className = 'txt txt-visibile';
console.log(txt);
