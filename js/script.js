// alert("ciao")


// foto principale grande
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]; 
// console.log(items);


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
// console.log(fotografie);

const box  = document.querySelector(".box");
box.innerHTML = fotografie

// let foto = document.querySelector ('.foto');
// foto.className = 'foto';
const fotos = document.getElementsByClassName('foto');
console.log(fotos);
let fotoAttiva = 0;


console.log(fotos[fotoAttiva]);
fotos[fotoAttiva].classList.add('active');

// titolo immagine grande
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];
// console.log(title);

let titles = '';

for (let i = 0; i < title.length; i++){
    titles +=`
    <div class="titolo">
        ${title[i]}
    </div>`
}
// console.log(titles);

const titoloContainer  = document.querySelector(".titolo-container");
titoloContainer.innerHTML = titles
console.log(titoloContainer);

// let titolo = document.querySelector ('.titolo');
// titolo.className = 'titolo titolo-visibile';
// console.log(titolo);

const titoli = document.getElementsByClassName('titolo');
console.log(titoli);
let titoloAttivo = 0;

console.log(titoli[titoloAttivo]);
titoli[titoloAttivo].classList.add('titolo-visibile');


// testo immagine grande
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]; 
// console.log(text);

let informazioni = '';

for (let i = 0; i < text.length; i++){
    informazioni +=`
    <div class="txt">
        ${text[i]}
    </div>`
}
// console.log(informazioni);

const txtContainer  = document.querySelector(".txt-container");
txtContainer.innerHTML = informazioni
console.log(txtContainer);

// let txt = document.querySelector ('.txt');
// txt.className = 'txt txt-visibile';
// console.log(txt);
const didascalie = document.getElementsByClassName('txt');
console.log(didascalie);
let didascaliaAttiva = 0;
console.log(didascalie[didascaliaAttiva]);

didascalie[didascaliaAttiva].classList.add('txt-visibile');

// pulsanti
    const up = document.querySelector('.up')
    const down = document.querySelector('.down')


    //up

    up.addEventListener('click', function(){
        
        // rimuove la classe active
        fotos[fotoAttiva].classList.remove('active');
        titoli[titoloAttivo].classList.remove('titolo-visibile');
        didascalie[didascaliaAttiva].classList.remove('txt-visibile');

        // incrementa il contatore active
        fotoAttiva++;
        titoloAttivo++;
        didascaliaAttiva++;

        // classe active allélento successivo
        fotos[fotoAttiva].classList.add('active');
        titoli[titoloAttivo].classList.add('titolo-visibile');
        didascalie[didascaliaAttiva].classList.add('txt-visibile');

    }); 

    
    // down
    
    down.addEventListener('click', function(){
        // rimuove la classe active
        fotos[fotoAttiva].classList.remove('active');
        titoli[titoloAttivo].classList.remove('titolo-visibile');
        didascalie[didascaliaAttiva].classList.remove('txt-visibile');

        // incrementa il contatore active
        fotoAttiva--;
        titoloAttivo--;
        didascaliaAttiva--;

        // classe active elemento successivo
        fotos[fotoAttiva].classList.add('active');
        titoli[titoloAttivo].classList.add('titolo-visibile');
        didascalie[didascaliaAttiva].classList.add('txt-visibile');

    }); 