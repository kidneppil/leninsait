let colorbutton = document.querySelector("#color-button");
let div = document.querySelector("#div-for-local")

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

colorbutton.onclick=function(){
    div.style.background = randColor();
    localStorage.setItem('color',div.style.background);
}
div.style.background = localStorage.getItem('color');