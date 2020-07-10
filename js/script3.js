const nextBtn=document.querySelector('.nextBtn');
const prevBtn=document.querySelector('.prevBtn');
const container=document.querySelector('.images');

let counter=0;

nextBtn.addEventListener('click',nextPic);

prevBtn.addEventListener('click',prevPic);

function nextPic() {

    if (counter === 10){
        counter= -1;
    }
    counter++;
    container.style.backgroundImage = `url(/img/president-${counter}.jpg)`
}

function prevPic(){
    if (counter === 0){
        counter= 10;
    }
    counter--;
    container.style.backgroundImage = `url(/img/president-${counter}.jpg)`
}