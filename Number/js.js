let num = prompt("your number")
num =  Number(num)
let b = num
function turnN (){
    switch(num){
        case 1:num="erti"
        break;
        case 2:num="ori"
        break;
        case 3:num="sami"
        break;
        case 4:num="otxi"
        break;
        case 5:num="xuti"
        break;
        case 6:num="eqvsi"
        break;
        case 7:num="shvidi"
        break;
        case 8:num="rva"
        break;
        case 9:num="cxra"
        break;
        case 10:num="ati"
        break;
        case 11:num="tertmeti"
        break;
        case 12:num="tormeti"
        break;
        case 13:num="cameti"
        break;
        case 14:num="totxmeti"
        break;
        case 15:num="txutmeti"
        break;
        case 16:num="teqvsmeti"
        break;
        case 17:num="chvidmeti"
        break;
        case 18:num="tvrameti"
        break;
        case 19:num="cxrameti"
        break;
        case 20:num=("oci")
        break;
        case 40:num=("ormoci")
        break;
        case 60:num=("samoci")
        break;
        case 80:num=("otxmoci")
        break;
        
    };
};
if(b===20||b===40||b===60||b===80){
turnN();
alert(num);
}else if(b>0,b<20){
    num=b
    turnN();
    alert(num);
}else if(b>20,b<40){
    num=b-20
    turnN();
    alert("ocda"+num);
}else if (b>40,b<60){
    num=b-40
    turnN();
    alert("ormocda"+num);
}else if(b>60,b<80){
    num=b-60
    turnN();
    alert("samocda"+num);
}else if(b>80,b<100){
    num=b-80
    turnN();
    alert("otxmocda"+num);
}


 


















