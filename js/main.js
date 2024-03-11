// let str = document.querySelector('#str');
// let store = document.querySelector('.store');
let diretory = document.querySelector('#diretory');
let main_dm = document.querySelector('.main_dm');
function click(button,content){
    button.addEventListener('click', function() {
        if (content.style.display === 'none') {
            content.style.display = 'block';
        }else{
            content.style.display = 'none';
        }
    });
}

click(diretory,main_dm);
// let click_heat =document.querySelector('.click-heat');
// let heat = document.querySelector('.heat');


let index = 0;
let autoImg;
let img = document.querySelectorAll(".slide");
function autoSlide(){
    // Truy cập vào vị trí ảnh
     // điều kiện
    if(index >= img.length){
        index = 0;
    }
    if(index < 0){
        index = img.length - 1;
    }
    // chuyển tất cả ảnh về vị trí ẩn
    for(let i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[index].style.display = "block";
    index++;
    // sau 2s nó tự gọi lại nó
    autoImg = setTimeout(autoSlide, 5000);
}
autoSlide();

let prd = document.querySelectorAll('.prd-wrapper');
function showPrd(){
    if(index >= prd.length){
        index = 0;
    }
    if(index < 0){
        index = prd.length - 1;
    }
    for(let i = 0; i < prd.length; i++){
        prd[i].style.display = "none";
    }
    prd[index].style.display = "block";
}
showPrd();

function movePrd(n){
    showPrd(index +=n);
}

function toggleDropdown() {
    var dropdown = document.getElementById('bottomHeader');
    dropdown.classList.toggle('show');
}