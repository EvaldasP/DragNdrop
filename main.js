let slots = document.getElementById('slots');
let innerSlots = Array.from(document.querySelectorAll('.inner_slot'));
let body = document.querySelector('body');
let iskviesti = document.getElementById('iskviesti');
let atmesti = document.getElementById('decline');
let forma = document.querySelector('.formele');
let inputai = document.querySelector('form');
let redagavimoforma = document.querySelector('.redagavimas');
/////////////////////////
let naujaUzduotis = document.getElementById('uzduotis');
var editTekstas = document.getElementById('edituzduotis');
///random id kuri naudosim kurt dinamiskas uzduotis
let randomId = 'kazkas'+ Math.random() * 1000;

///Pradaam tempima ir pasiimam elemento duomenis

slots.addEventListener('dragstart', function(e){

    if(e.target.classList.contains('task')){
        e.dataTransfer.setData("elementoId", e.target.id);
    }
});


innerSlots.forEach((items) =>{

////tikrinam ar galima tempti

    items.addEventListener('dragover', function(e){
        if(!e.target.classList.contains('inner_slot')){
            return;
        }
        e.preventDefault();
    });

/////Dropinsim elementa ten kur nutempem

        items.addEventListener('drop', function(e){

            var elementoId = e.dataTransfer.getData('elementoId');
            var elementas = document.getElementById(elementoId);

            if(items.classList.contains('pirmas_slotas')){
                elementas.style.backgroundColor ='#407294 ';
            } else if (items.classList.contains('antras_slotas')){
                elementas.style.backgroundColor ='#78d0aa';
            }else if (items.classList.contains('nulinis_slotas')){
                elementas.style.backgroundColor ='#191919 ';

            };

            e.target.appendChild(elementas);

            e.preventDefault();

        });

});

let accept = document.getElementById('accept');

accept.addEventListener('click', function(e){
    e.preventDefault();

    if(naujaUzduotis.value == 0){
        alert('Tuscia uzduotis negalima');
    }else{

    var redaguoti = document.createElement('button');
    var istrinti = document.createElement('button');
    istrinti.innerHTML ='✘';
    redaguoti.innerHTML = '✎';
    redaguoti.classList.add('redaguoti');
    istrinti.classList.add('istrinti');
     var divas = document.createElement('div');
     divas.appendChild(redaguoti);
     divas.appendChild(istrinti);
    var uzduotys = document.querySelector('.nulinis_slotas');
    let naujaUzduotis = document.getElementById('uzduotis').value;
    let kortele = document.createElement("div");
    kortele.id = 'kazkas'+ Math.random() * 1000;
    kortele.draggable = 'true';
    kortele.classList.add('stilius');
    kortele.classList.add('task');
    kortele.innerHTML = naujaUzduotis;
    kortele.appendChild(divas);
    uzduotys.appendChild(kortele);
    forma.classList.remove('aktyvuoti');
    inputai.reset();
}
/////////////////////////////////////////////////
   
});

//iskvieciam pridejima

iskviesti.addEventListener('click', function(e){
    e.preventDefault();
    forma.classList.add('aktyvuoti');
});

////// Atsaukiam pridejima

decline.addEventListener('click', function(e){
    e.preventDefault();
    forma.classList.remove('aktyvuoti');
});


var index;



/////////////redaguojam

body.addEventListener('click', function(e){
    if(e.target.classList.contains('redaguoti')){
        index = e.target.parentElement.parentElement;
        var editTekstas = document.getElementById('edituzduotis');
        editTekstas.value = e.target.parentElement.parentElement.childNodes[0].textContent;
        redagavimoforma.classList.add('aktyvuoti');
        console.log(index);
    };

});

var editUzduotis = document.querySelector('.redagavimomygtukas');

editUzduotis.addEventListener('click', function(e){

    if(editTekstas.value ==0){
        alert('Negalima tuscia uzduotis');
    }else{
    index.childNodes[0].textContent = editTekstas.value;
    redagavimoforma.classList.remove('aktyvuoti');

    }
});
/// Atsaukiam redagavima 

document.getElementById('editdecline').addEventListener('click', function(e){

    redagavimoforma.classList.remove('aktyvuoti');

});


///////Istrinam 

body.addEventListener('click', function(e){
    if(e.target.classList.contains('istrinti'))
    e.target.parentElement.parentElement.remove();

});