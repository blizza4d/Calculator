var id = null;
let pos = 0
let val = document.getElementById("output");
let prev = null;
let res = 0;
let initial = null;
let op = false;
let dotused = false;
let operator = null;

function myMove(){
    var elem = document.getElementById("bubble")
    var pos = (Math.floor(Math.random()*200))+300
    up = ((Math.floor(Math.random()*10)/10))+0.5
    function frame(){
        if (pos <= 0){
            myMove();
            return;
        }
        pos-= up;
        elem.style.top = pos + 'px';
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);   
}
function myMove1(){
    var elem1 = document.getElementById("bubble1")
    var pos1 = (Math.floor(Math.random()*200))+300
    upp = ((Math.floor(Math.random()*10)/10))+0.5
    function frame1(){
        if (pos1 <= 0){
            myMove1();
            return;
        } 
            pos1-= upp;
            elem1.style.top = pos1 + 'px';
            requestAnimationFrame(frame1)
    }   
    requestAnimationFrame(frame1)
}

function myMove2(){
    var elem2 = document.getElementById("bubble2")
    var pos2 = (Math.floor(Math.random()*200))+300
    uppp = ((Math.floor(Math.random()*10)/10))+0.5
    function frame2(){
        if (pos2 <= 0){
            myMove2();
            return;
        }
        pos2-= uppp;
        elem2.style.top = pos2 + 'px';
        requestAnimationFrame(frame2)
    }  
    requestAnimationFrame(frame2)
}


function myMove3(){
    var elem3 = document.getElementById("bubble3")
    var pos3 = (Math.floor(Math.random()*200))+300
    uppp = ((Math.floor(Math.random()*10)/10))+0.5
    function frame3(){
        if (pos3 <= 0){
            myMove3();
            return;

        }
        pos3-= uppp;
        elem3.style.top = pos3 + 'px';
        requestAnimationFrame(frame3)
    }   
    requestAnimationFrame(frame3)
}

document.querySelectorAll('.item').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.remove('animate'); 
        void button.offsetWidth;           
        button.classList.add('animate');    
    });
});



function appendvalue(char){
    val.value += char;
}

function backspace(){
    let lastchar = val.value.slice(-1);
    if (["-" , "*" , "/" , "+" , "%" ].includes(lastchar)){
        op = false
    }
    else if(lastchar === "."){
        dotused = false
    }
    val.value = val.value.slice(0,-1);
    console.log(val.value)

}

function deleted(){
    val.value = '';
    op = false;
    dotused = false;
}

function appenddot(dot){
    if(!dotused){
        val.value+= dot;
        dotused = true;}
}
function appendoperator(oper){
    if(val.value == "") return;

    if(!op){
        prev = Number(val.value)
        operator = oper
        val.value += oper;
        op = true;
        dotused = false;
    }
}

function calculate(){
    if(!op){
        return;
    }
    let index = val.value.indexOf(operator)
    last = Number(val.value.slice(index+1,))
    console.log(last)
    op = false
    dotused = false
    switch(operator){
        case("+"):{
            res = add(prev,last);
            break;
        }
        case("-"):{
            res = sub(prev , last);
            break;
        }
        case("*"):{
            res = multiply(prev , last);
            break;
        }
        case("/"):{
            res = divide(prev , last);
            break;
        }
        case("%"):{
            res = remainder(prev,last);
            break;
        }
    }
    
    initial = val.value
    document.getElementById("prev").textContent = initial
    val.value = res
}


function add(val1 , val2){
    return val1+val2
}
function sub(val1 , val2){
    return val1-val2
}
function divide(val1 , val2){
    if (val2 === 0){
        return("nice try ;)")
    }
    else{
    return Number((val1/val2).toFixed(5))}
}
function multiply(val1 , val2){
    return val1*val2
}
function remainder(val1 , val2){
    return val1%val2
}

