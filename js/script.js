const container = document.querySelector('.container');
let items = '';

for(let i = 0; i < 64; i++){
        items += `
                <div class="square"></div>
        `;
}
    console.log(items);
    container.innerHTML = items;

    for(let i = 0; i < 64; i++){
        const divEl = addSquare();
        container.appendChild(divEl);
        divEl.addEventListener('click', function() {
            console.log(this);
            this.classList.add('clicked-true');
    });
