function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function calculator(a,b,operator){
    return operator(a,b);
}
calculator(3,4,mul);
calculator(3,4,add);
calculator(3,4,sub);
calculator(3,4,div);