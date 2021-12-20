let canvas = document.querySelector("#canvas");
let style = canvas.getContext("2d");
let draw = document.querySelector(".draw");
function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
// style.fillStyle = randColor();
let height = canvas.height;
let width = canvas.width;
draw.onclick = function(){
    style.clearRect(0,0,width,height);
    let num = document.querySelector("#textarea").value;
    for(let i=0; i<num;i++){
        let r_w = width/num;
        let r_h = getRandomIntInclusive(1,height);
        let y0 = height-r_h;
        style.fillStyle = randColor();
        style.fillRect(i*r_w,y0,r_w,r_h);
    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}