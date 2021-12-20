document.querySelector(".check_it").addEventListener("click",()=>{
    let data1;
    let radio = document.querySelectorAll(".first");
    for(let i = 0;i<radio.length;i++){
        if(radio[i].checked){
            data1 = radio[i].value;
            break;
        }
    }
    document.getElementById("x1").innerHTML = data1;
    data1="";

    let data2 = document.querySelector(".second").value;
    document.getElementById("x2").innerHTML = data2;


    let data3 = "";
    let checkbox = document.querySelectorAll(".therd");
    for(let i = 0;i<checkbox.length;i++){
        if(checkbox[i].checked){
            data3 += "  " + checkbox[i].value;
        }
    }
    document.getElementById("x3").innerHTML = data3;
    
    if (document.querySelector("#name").value != 0)
    {
    let data4 = "Имя " + document.querySelector("#name").value;
    document.getElementById("x4").innerHTML = data4;
    }

    if (document.querySelector("#adress").value != 0)
    {
    let data5 = "Адрес " +document.querySelector("#adress").value;
    document.getElementById("x5").innerHTML = data5;
    }

    if (document.querySelector("#number").value != 0)
    {
    let data6 = "Номер " +document.querySelector("#number").value;
    document.getElementById("x6").innerHTML = data6;
    }

    if (document.querySelector(".forth").value != 0)
    {
    let data7 = "Вопрос следующий: " +document.querySelector(".forth").value;
    document.getElementById("x7").innerHTML = data7;
    }
    
    document.getElementById("window").setAttribute("style", "display:block");
});

function delet(){
    document.getElementById("x1").innerHTML = "";
    document.getElementById("x2").innerHTML = "";
    document.getElementById("x3").innerHTML = "";
    document.getElementById("x4").innerHTML = "";
    document.getElementById("x5").innerHTML = "";
    document.getElementById("x6").innerHTML = "";
    document.getElementById("x7").innerHTML = "";
    document.getElementById("window").setAttribute("style", "display:none");
}