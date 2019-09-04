const cont = document.querySelector(".container");
const btnLine = document.querySelectorAll('.bar');
let showMenu = false;
cont.addEventListener('click', toggleMenu)

function toggleMenu() {

    
    if(!showMenu){
        console.log('start');
        btnLine.forEach( item => {
            item.classList.add('show')
        });
        console.log('done')

        showMenu = true;
    } else {
        console.log('start2');
        btnLine.forEach( item => {
            item.classList.remove('show')
        });
        console.log('done2')

     showMenu = false;
    }
}


