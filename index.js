let i ;
var a , b;
var oper;
var digits = document.getElementsByClassName('digit');
var text = document.getElementsByClassName('field')[0] ;
var op = document.getElementsByClassName('operator');
var equ = document.getElementsByClassName('equal')[0];
var cl = document.getElementById('clear');
var sqr = document.getElementById('squareRoot');
var sq = document.getElementById('square');



for(i = 0 ; i < 11 ; i++) {
    digits[i].onclick = (e) => {
            var ele = e.target.innerText;
            console.log(ele);
            text.value += ele;
    };
}

for(i = 0; i < 5 ; i++) {
    op[i].onclick = (e) => {
        a = text.value ;
        text.value = '';
        oper = e.target.innerText;
    }
}

cl.onclick = () => {
    a = '';
    text.value = '';
}

sqr.onclick = () => {
    let c = text.value;
    c = Math.sqrt(c);
    text.value = c ;
}

sq.onclick = () => {
    let c = text.value;
    c = c*c;
    text.value = c;

}

equ.onclick = () => {
    b = text.value;
    a = parseFloat(a);
    b = parseFloat(b);
    if(oper === '*') {
        text.value = a*b;
    }
    else if(oper === '+') {
        text.value = a + b;
    }
    else if(oper === '-') {
        text.value = a - b;
    }
    else if(oper === '/') {
        text.value = a / b;
    }
    else if(oper === '%') {
        text.value = a % b;
    }
}