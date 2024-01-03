var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btnText=e.target.innerText;
        if(btnText=='x'){
          btnText='*';
        }
        if(btnText=='÷'){
            btnText='/';
        }
        if(btnText=='÷'){
            btnText='/';
        }
        screen.value +=btnText;
    })
}

function sin(){
    screen.value=Math.sin(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}
function tan(){
    screen.value=Math.tan(screen.value);
}
function log(){
    screen.value=Math.log(screen.value);
}
function pow(){
    screen.value=Math.pow(screen.value,2);
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function pi(){
    var a=screen.value.charAt(screen.value.length-1);
    if(a=='-'||a=='+'||a=='*'||a=='/'||a=='%'){
            screen.value+=3.14159265359;  
    }
    else if(a=='0'||a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7'||a=='8'||a=='9'||a=='.'){
        screen.value=`${screen.value}*3.14159265359`; 
    }
    else{
        screen.value=3.14159265359;  
    }
}
function e(){
    var a=screen.value.charAt(screen.value.length-1);
    if(a=='-'||a=='+'||a=='*'||a=='/'||a=='%'){
            screen.value+=2.718281828846;  
    }
    else if(a=='0'||a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7'||a=='8'||a=='9'||a=='.'){
        screen.value=`${screen.value}*2.718281828846`; 
    }
    else{
        screen.value=2.718281828846;  
    }
}
function fact(){
    var i,num,f=1;
    num=screen.value;
    for(i=1;i<=num;i++){
        f*=i;
    }
    i=i-1;
    screen.value=f;
}
function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}