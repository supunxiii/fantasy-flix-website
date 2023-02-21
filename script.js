
var myVar;
var points=0;
const actualAnswer=[];
const expectedAnswer=["Red pill","Cresmont movie theatre","Eggos","Beacon Hills","He lost his right arm","Bode","2005","Hans Zimmer","Harry Potter And The Philosopher's Stone","Tesseract"];
function getRadioValue(radioArray){
    var i;
    for(i=0;i<radioArray.length;i++){
        if(radioArray[i].checked){
            return radioArray[i].value;

        }
    }
    return " ";
}
function getRadioCount(radioArray){
    var i;
    for(i=0;i<radioArray.length;i++){
        if(radioArray[i].checked){
            return i;

        }
    }
    return -1;
}


function show(formref){
    if (document.getElementById("Startbtn").clicked != true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[0].checked=false;
        document.getElementsByName("radio")[1].checked=false;
        document.getElementsByName("radio")[2].checked=false;
        document.getElementsByName("radio")[3].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{  
     
     var x=getRadioValue(formref.radio);
     actualAnswer[0]=x;
     var xvalue=getRadioCount(formref.radio);
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=0){
        document.getElementsByClassName("container1")[0].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[0].style.color="white";
     }
     if(xvalue!=1){
        document.getElementsByClassName("container1")[1].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[1].style.color="white";
     } 
     if(xvalue!=2){
        document.getElementsByClassName("container1")[2].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[2].style.color="white";
     }
      if(xvalue!=3){
        document.getElementsByClassName("container1")[3].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[3].style.color="white";
     }
    
    }
}
function show1(formref){
    if (document.getElementById("Startbtn").clicked != true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[4].checked=false;
        document.getElementsByName("radio")[5].checked=false;
        document.getElementsByName("radio")[6].checked=false;
        document.getElementsByName("radio")[7].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[1]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+4;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=4){
        document.getElementsByClassName("container1")[4].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[4].style.color="white";
     }
     if(xvalue!=5){
        document.getElementsByClassName("container1")[5].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[5].style.color="white";
     } 
     if(xvalue!=6){
        document.getElementsByClassName("container1")[6].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[6].style.color="white";
     }
      if(xvalue!=7){
        document.getElementsByClassName("container1")[7].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[7].style.color="white";
     }
    
    }
    
}    
function show2(formref){
    if (document.getElementById("Startbtn").clicked !=true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[8].checked=false;
        document.getElementsByName("radio")[9].checked=false;
        document.getElementsByName("radio")[10].checked=false;
        document.getElementsByName("radio")[11].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[2]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+8;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=8){
        document.getElementsByClassName("container1")[8].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[8].style.color="white";
     }
     if(xvalue!=9){
        document.getElementsByClassName("container1")[9].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[9].style.color="white";
     } 
     if(xvalue!=10){
        document.getElementsByClassName("container1")[10].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[10].style.color="white";
     }
      if(xvalue!=11){
        document.getElementsByClassName("container1")[11].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[11].style.color="white";
     }
    
    }
    }
       
function show3(formref){
    if (document.getElementById("Startbtn").clicked !=true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[12].checked=false;
        document.getElementsByName("radio")[13].checked=false;
        document.getElementsByName("radio")[14].checked=false;
        document.getElementsByName("radio")[15].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[3]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+12;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=12){
        document.getElementsByClassName("container1")[12].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[12].style.color="white";
     }
     if(xvalue!=13){
        document.getElementsByClassName("container1")[13].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[13].style.color="white";
     } 
     if(xvalue!=14){
        document.getElementsByClassName("container1")[14].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[14].style.color="white";
     }
      if(xvalue!=15){
        document.getElementsByClassName("container1")[15].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[15].style.color="white";
     }
    
    }
    }    

function show4(formref){
    if (document.getElementById("Startbtn").clicked !=true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[16].checked=false;
        document.getElementsByName("radio")[17].checked=false;
        document.getElementsByName("radio")[18].checked=false;
        document.getElementsByName("radio")[19].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[4]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+16;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=16){
        document.getElementsByClassName("container1")[16].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[16].style.color="white";
     }
     if(xvalue!=17){
        document.getElementsByClassName("container1")[17].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[17].style.color="white";
     } 
     if(xvalue!=18){
        document.getElementsByClassName("container1")[18].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[18].style.color="white";
     }
      if(xvalue!=19){
        document.getElementsByClassName("container1")[19].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[19].style.color="white";
     }
    
    }
    }    

function show5(formref){
    if (document.getElementById("Startbtn").clicked != true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[20].checked=false;
        document.getElementsByName("radio")[21].checked=false;
        document.getElementsByName("radio")[22].checked=false;
        document.getElementsByName("radio")[23].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[5]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+20;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=20){
        document.getElementsByClassName("container1")[20].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[20].style.color="white";
     }
     if(xvalue!=21){
        document.getElementsByClassName("container1")[21].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[21].style.color="white";
     } 
     if(xvalue!=22){
        document.getElementsByClassName("container1")[22].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[22].style.color="white";
     }
      if(xvalue!=23){
        document.getElementsByClassName("container1")[23].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[23].style.color="white";
     }
    
    }
    }    

function show6(formref){
    if (document.getElementById("Startbtn").clicked != true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[24].checked=false;
        document.getElementsByName("radio")[25].checked=false;
        document.getElementsByName("radio")[26].checked=false;
        document.getElementsByName("radio")[27].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[6]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+24;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=24){
        document.getElementsByClassName("container1")[24].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[24].style.color="white";
     }
     if(xvalue!=25){
        document.getElementsByClassName("container1")[25].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[25].style.color="white";
     } 
     if(xvalue!=26){
        document.getElementsByClassName("container1")[26].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[26].style.color="white";
     }
      if(xvalue!=27){
        document.getElementsByClassName("container1")[27].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[27].style.color="white";
     }
    
    }
    }    

function show7(formref){
    if (document.getElementById("Startbtn").clicked != true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[28].checked=false;
        document.getElementsByName("radio")[29].checked=false;
        document.getElementsByName("radio")[30].checked=false;
        document.getElementsByName("radio")[31].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[7]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+28;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=28){
        document.getElementsByClassName("container1")[28].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[28].style.color="white";
     }
     if(xvalue!=29){
        document.getElementsByClassName("container1")[29].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[29].style.color="white";
     } 
     if(xvalue!=30){
        document.getElementsByClassName("container1")[30].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[30].style.color="white";
     }
      if(xvalue!=31){
        document.getElementsByClassName("container1")[31].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[31].style.color="white";
     }
    
    }
    }    

function show8(formref){
    if (document.getElementById("Startbtn").clicked != true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[32].checked=false;
        document.getElementsByName("radio")[33].checked=false;
        document.getElementsByName("radio")[34].checked=false;
        document.getElementsByName("radio")[35].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[8]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+32;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=32){
        document.getElementsByClassName("container1")[32].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[32].style.color="white";
     }
     if(xvalue!=33){
        document.getElementsByClassName("container1")[33].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[33].style.color="white";

     } 
     if(xvalue!=34){
        document.getElementsByClassName("container1")[34].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[34].style.color="white";

     }
      if(xvalue!=35){
        document.getElementsByClassName("container1")[35].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[35].style.color="white";

     }
    
    }
    }    

function show9(formref){
    if (document.getElementById("Startbtn").clicked !=true){
        alert("Press start to begin quiz session");
        document.getElementsByName("radio")[36].checked=false;
        document.getElementsByName("radio")[37].checked=false;
        document.getElementsByName("radio")[38].checked=false;
        document.getElementsByName("radio")[39].checked=false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }else{    
    var x=getRadioValue(formref.radio);
    actualAnswer[9]=x;
    var xvalue=getRadioCount(formref.radio);
    xvalue=xvalue+36;
     document.getElementsByClassName("container1")[xvalue].style.backgroundColor="White";
     document.getElementsByClassName("container1")[xvalue].style.color="black";
     if(xvalue!=36){
        document.getElementsByClassName("container1")[36].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[36].style.color="white";

     }
     if(xvalue!=37){
        document.getElementsByClassName("container1")[37].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[37].style.color="white";

     } 
     if(xvalue!=38){
        document.getElementsByClassName("container1")[38].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[38].style.color="white";

     }
      if(xvalue!=39){
        document.getElementsByClassName("container1")[39].style.backgroundColor="#34495e";
        document.getElementsByClassName("container1")[39].style.color="white";

     }
    
    }
    }    

function check(){
    clearTimeout(myVar)
    for(var count=0;count<10;count++){
        console.log(actualAnswer[count]);
        if(actualAnswer[count]=="Red pill"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[1];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Blue pill"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[0];
            element.style.backgroundColor ="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Red and Blue pill"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[2];
            element.style.backgroundColor ="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="None of the above"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[3];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Cresmont movie theatre"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[4];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Baker's drugs"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[5];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Blue Spot Liqour"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[6];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Eisenhower park"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[7];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }if(actualAnswer[count]=="Eggos"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[10];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Ice Cream"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[8];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Apples"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[9];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Pancakes"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[11];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Beacon Hills"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[13];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Mystic falls"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[12];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Sunnydale"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[14];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Stars Hollow"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[15];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="He lost his right arm"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[17];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="He lost his left leg"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[16];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="He lost his right leg"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[18];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="He lost"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[19];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Bode"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[22];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Kinsey"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[20];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Tyler"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[21];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Tommy"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[23];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        

        }
        if(actualAnswer[count]=="2005"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[25];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="2006"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[24];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="2001"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[26];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="2009"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[27];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Hans Zimmer"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[28];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="John Williams"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[29];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Mark Mothersbaugh"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[30];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Danny Elfman"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[31];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Harry Potter And The Philosopher's Stone"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[32];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Harry Potter And The Chamber of Secrets"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[33];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Harry Potter and The Goblet of Fire"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[34];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Harry Potter and The Order of The Phoenix"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[35];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Tesseract"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[37];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="The Orb"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[36];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="The Force"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[38];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="UV lamp"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[39];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        
    }
    if(points>=18){
        document.body.style.backgroundColor="green";

    }else if(points>=10){
        document.body.style.backgroundColor="purple";
    }else if(points>5){
        document.body.style.backgroundColor="blue";   
    }else if(points<5){
        document.body.style.backgroundColor="red"
    }
    var element=document.getElementById("scoreboard");
    element.style.border="solid";
    element.style.borderRadius="10px";
    element.style.marginBottom="50px";
    element.style.marginTop="50px";

    document.getElementById("Yourscore").style.display="block";
    document.getElementById("Score").style.display="block";
    document.getElementById("Comment").style.display="block";
    document.getElementById("scoreboard").style.display="block";
    

    
    
    document.getElementById("Yourscore").innerHTML="Your score:";
    document.getElementById("Score").innerHTML=points;
    if(points >= 18){
        document.getElementById("Comment").innerHTML="Congratulations you won a chance to get two free tickets for Jurassic World: Dominion";
    }else{
        document.getElementById("Comment").innerHTML="Better luck next time";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function starttimer(){
   document.getElementById("Startbtn").clicked=true;
   myVar=setTimeout(stopandalert,60000);
}
function stopandalert(){
    alert("Time is up");
    for(var count=0;count<10;count++){
        console.log(actualAnswer[count]);
        if(actualAnswer[count]=="Red pill"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[1];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Blue pill"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[0];
            element.style.backgroundColor ="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Red and Blue pill"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[2];
            element.style.backgroundColor ="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="None of the above"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[3];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Cresmont movie theatre"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[4];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Baker's drugs"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[5];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Blue Spot Liqour"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[6];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Eisenhower park"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[7];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }if(actualAnswer[count]=="Eggos"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[10];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Ice Cream"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[8];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Apples"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[9];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Pancakes"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[11];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Beacon Hills"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[13];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Mystic falls"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[12];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Sunnydale"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[14];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Stars Hollow"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[15];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="He lost his right arm"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[17];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="He lost his left leg"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[16];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="He lost his right leg"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[18];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="He lost"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[19];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Bode"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[22];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Kinsey"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[20];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Tyler"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[21];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Tommy"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[23];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        

        }
        if(actualAnswer[count]=="2005"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[25];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="2006"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[24];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="2001"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[26];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="2009"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[27];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Hans Zimmer"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[28];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="John Williams"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[29];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Mark Mothersbaugh"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[30];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Danny Elfman"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[31];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Harry Potter And The Philosopher's Stone"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[32];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="Harry Potter And The Chamber of Secrets"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[33];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Harry Potter and The Goblet of Fire"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[34];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="Harry Potter and The Order of The Phoenix"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[35];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        if(actualAnswer[count]=="Tesseract"){
            points=points+2;
            console.log("answer is correct");
            var element=document.getElementsByClassName("container1")[37];
            element.style.backgroundColor = "green";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";
        }else if(actualAnswer[count]=="The Orb"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[36];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="The Force"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[38];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }else if(actualAnswer[count]=="UV lamp"){
            points=points-1;
            console.log(actualAnswer[count]);
            var element=document.getElementsByClassName("container1")[39];
            element.style.backgroundColor="red";
            element.style.color ="White";
            element.style.border="White";
            element.style.border="solid";

        }
        
    }
    if(points>=18){
        document.body.style.backgroundColor="green";

    }else if(points>=10){
        document.body.style.backgroundColor="purple";
    }else if(points>5){
        document.body.style.backgroundColor="blue";
    }else if(points<5){
        document.body.style.backgroundColor="red"
    }
    var element=document.getElementById("scoreboard");
    element.style.border="solid";
    element.style.borderRadius="10px";
    element.style.marginBottom="50px";
    element.style.marginTop="50px";

    document.getElementById("Yourscore").style.display="block";
    document.getElementById("Score").style.display="block";
    document.getElementById("Comment").style.display="block";
    document.getElementById("scoreboard").style.display="block";
    
    
    document.getElementById("Yourscore").innerHTML="Your score:";
    document.getElementById("Score").innerHTML=points;
    if(points >= 18){
        document.getElementById("Comment").innerHTML="Congratulations you won a chance to get two free tickets for Jurassic World: Dominion";
    }else{
        document.getElementById("Comment").innerHTML="Better luck next time";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}