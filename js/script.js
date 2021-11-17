const container = document.querySelector('.container');

let items='';


function addSquare() {
    const node = document.createElement('div');
    node.className = 'square';
        
    return node;
}

for (let i = 0; i < 100; i++){
    const divEl = addSquare();
    container.appendChild(divEl);

    divEl.addEventListener('click', ()=> {
        divEl.classList.add('clicked-true');
    });
}



