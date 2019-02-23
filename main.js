const div = document.querySelector('div');

window.onresize = ()=>{
    width = window.innerWidth;
    height = window.innerHeight;

    div.style.width = width  + 'px';
    div.style.height = height + 'px';
}