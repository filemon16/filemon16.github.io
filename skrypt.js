var a,s,d,f,g,h,j,k,l,aa,ss,dd,ff,gg,hh,jj,kk,ll,o,z,ile=0;
var losowa=0;
var podana=0;
var ilezle=1;
var att;
var wuu=0;
losowa=Math.round(Math.random()*100+1);
function gracz1(){
    z= document.getElementById("bn1").value;
    document.getElementById("gr").innerHTML="Kolej Gracza: 1";
}var z=0;
function gracz2(){
    z= document.getElementById("bn2").value;
    document.getElementById("gr").innerHTML="Kolej Gracza: 2";
}var z=0;

function poka1(){
   if((z==="GRACZ 1")&&(document.getElementById("1").innerHTML=="")){
 document.getElementById("1").innerHTML="<img  src=obrazy/x.png>";
 a=1;
 suma();
 z="GRACZ 2";
 document.getElementById("gr").innerHTML="Kolej Gracza: 2";
}
else if((z==="GRACZ 2")&&(document.getElementById("1").innerHTML=="")){
    document.getElementById("1").innerHTML="<img  src=obrazy/o.png>";
   s=8;
    suma();
    z="GRACZ 1";
    document.getElementById("gr").innerHTML="Kolej Gracza: 1";
}

} z=0;
function poka2(){
    if((z==="GRACZ 1")&&(document.getElementById("2").innerHTML=="")){
        document.getElementById("2").innerHTML="<img  src=obrazy/x.png>";
        d=12;
        suma();
        z="GRACZ 2";
        document.getElementById("gr").innerHTML="Kolej Gracza: 2";
    }
       else if((z==="GRACZ 2")&&(document.getElementById("2").innerHTML=="")){
           document.getElementById("2").innerHTML="<img  src=obrazy/o.png>";
           f=14;
           suma();
           z="GRACZ 1";
           document.getElementById("gr").innerHTML="Kolej Gracza: 1";
        }
        
    }z=0;
    function poka3(){
        if((z==="GRACZ 1")&&(document.getElementById("3").innerHTML=="")){
            document.getElementById("3").innerHTML="<img  src=obrazy/x.png>";
            g=33;
            suma();
            z="GRACZ 2";
            document.getElementById("gr").innerHTML="Kolej Gracza: 2";
        }
           else if((z==="GRACZ 2")&&(document.getElementById("3").innerHTML=="")){
               document.getElementById("3").innerHTML="<img  src=obrazy/o.png>";
               h=570;
               suma();
               z="GRACZ 1";
               document.getElementById("gr").innerHTML="Kolej Gracza: 1";
            }
        
        }
        function poka4(){
            if((z==="GRACZ 1")&&(document.getElementById("4").innerHTML=="")){
                document.getElementById("4").innerHTML="<img  src=obrazy/x.png>";
                j=100;
                suma();
                z="GRACZ 2";
                document.getElementById("gr").innerHTML="Kolej Gracza: 2";
            }
               else if((z==="GRACZ 2")&&(document.getElementById("4").innerHTML=="")){
                   document.getElementById("4").innerHTML="<img  src=obrazy/o.png>";
                   k=131;
                   suma();
                   z="GRACZ 1";
                   document.getElementById("gr").innerHTML="Kolej Gracza: 1";
                }
            }
            function poka5(){
                if((z==="GRACZ 1")&&(document.getElementById("5").innerHTML=="")){
                    document.getElementById("5").innerHTML="<img  src=obrazy/x.png>";
                    l=500;
                    suma();
                    z="GRACZ 2";
                    document.getElementById("gr").innerHTML="Kolej Gracza: 2";
                }
                   else if((z==="GRACZ 2")&&(document.getElementById("5").innerHTML=="")){
                       document.getElementById("5").innerHTML="<img  src=obrazy/o.png>";
                       aa=11;
                       suma();
                       z="GRACZ 1";
                       document.getElementById("gr").innerHTML="Kolej Gracza: 1";
                    }
                
                }
                function poka6(){
                    if((z==="GRACZ 1")&&(document.getElementById("6").innerHTML=="")){
                        document.getElementById("6").innerHTML="<img  src=obrazy/x.png>";
                        ss=427;
                        suma();
                        z="GRACZ 2";
                        document.getElementById("gr").innerHTML="Kolej Gracza: 2";
                    }
                       else if((z==="GRACZ 2")&&(document.getElementById("6").innerHTML=="")){
                           document.getElementById("6").innerHTML="<img  src=obrazy/o.png>";
                           dd=844;
                           suma(); 
                           z="GRACZ 1";
                           document.getElementById("gr").innerHTML="Kolej Gracza: 1";
                        }
                    }
                    function poka7(){
                        if((z==="GRACZ 1")&&(document.getElementById("7").innerHTML=="")){
                            document.getElementById("7").innerHTML="<img  src=obrazy/x.png>";
                            ff=2134;
                            suma();
                            z="GRACZ 2";
                            document.getElementById("gr").innerHTML="Kolej Gracza: 2";
                        }
                           else if((z==="GRACZ 2")&&(document.getElementById("7").innerHTML=="")){
                               document.getElementById("7").innerHTML="<img  src=obrazy/o.png>";
                               gg=6829;
                               suma();
                               z="GRACZ 1";
                               document.getElementById("gr").innerHTML="Kolej Gracza: 1";
                            }
                        
                        }
                        function poka8(){
                            if((z==="GRACZ 1")&&(document.getElementById("8").innerHTML=="")){
                                document.getElementById("8").innerHTML="<img  src=obrazy/x.png>";
                                hh=9004;
                                suma();
                                z="GRACZ 2";
                                document.getElementById("gr").innerHTML="Kolej Gracza: 2";
                            }
                               else if((z==="GRACZ 2")&&(document.getElementById("8").innerHTML=="")){
                                   document.getElementById("8").innerHTML="<img  src=obrazy/o.png>";
                                   jj=11750;
                                   suma();
                                   z="GRACZ 1";
                                   document.getElementById("gr").innerHTML="Kolej Gracza: 1";
                                }
                            
                            }
                            function poka9(){
                                if((z==="GRACZ 1")&&(document.getElementById("9").innerHTML=="")){
                                    document.getElementById("9").innerHTML="<img  src=obrazy/x.png>";
                                    kk=13131;
                                    suma();
                                    z="GRACZ 2";
                                    document.getElementById("gr").innerHTML="Kolej Gracza: 2";
                                }
                                   else if((z==="GRACZ 2")&&(document.getElementById("9").innerHTML=="")){
                                       document.getElementById("9").innerHTML="<img  src=obrazy/o.png>";
                                       ll=3333;
                                       suma();
                                       z="GRACZ 1";
                                       document.getElementById("gr").innerHTML="Kolej Gracza: 1";
                                    }
                              
                            }
 function zresetujto(){
    location.reload(); 
 }                           
                            function suma() {var pre=false;  
                                var pp=[a+g+d,j+l+ss,ff+hh+kk,a+j+ff,d+l+hh,g+ss+kk,a+l+kk,g+l+ff,s+f+h,k+aa+dd,gg+jj+ll,s+k+gg,f+aa+jj,h+dd+ll,s+aa+ll,h+aa+gg];
                                for(var i=0;i<16;i++){
                                switch(pp[i]){ 
                                    case 46:{
                                        alert("Win Gracz 1");pre=true;}break;
                                        case 1027:{
                                           alert("Win Gracz 1");pre=true;}break;
                                           case 24269:{
                                            alert("Win Gracz 1");pre=true;}break;
                                            case 2235:{
                                                alert("Win Gracz 1");pre=true;}break;
                                                case 9516:{
                                                    alert("Win Gracz 1");pre=true;}break;
                                                    case 13591:{
                                                        alert("Win Gracz 1");pre=true;}break;
                                                        case 13632:{
                                                            alert("Win Gracz 1");pre=true;}break; 
                                                            case 2667:{
                                                                alert("Win Gracz 1");pre=true;}break; 
                                                                case 592:{
                                                                    alert("Win Gracz 2");pre=true;}break; 
                                                                    case 986:{
                                                                        alert("Win Gracz 2");pre=true;}break; 
                                                                        case 21912:{
                                                                            alert("Win Gracz 2");pre=true;}break; 
                                                                            case 6968:{
                                                                                alert("Win Gracz 2");pre=true;}break; 
                                                                                case 11775:{
                                                                                    alert("Win Gracz 2");pre=true;}break; 
                                                                                    case 4747:{
                                                                                        alert("Win Gracz 2");pre=true;}break; 
                                                                                        case 3352:{
                                                                                            alert("Win Gracz 2");pre=true;}break;
                                                                                            case 7410:{
                                                                                                alert("Win Gracz 2");pre=true;};break;
                                                                                             }}  
                                     if((pre==false)&&(!pp[i])&&(document.getElementById("1").innerHTML!="")&&(document.getElementById("2").innerHTML!="")&&(document.getElementById("3").innerHTML!="")&&(document.getElementById("4").innerHTML!="")&&(document.getElementById("5").innerHTML!="")&&(document.getElementById("6").innerHTML!="")&&(document.getElementById("7").innerHTML!="")&&(document.getElementById("8").innerHTML!="")&&(document.getElementById("9").innerHTML!="")){
                                        alert("remis");
                                    }
                                   
                            }  

                            function lsw(){
                                losowa=Math.round(Math.random()*100+1);
                            }
                            function stworz(){
                                podana=document.getElementById("litery").value;

                                while(podana!=losowa){
                             if(podana<losowa){
                                alert("za mało");
                                document.getElementById("prb").innerHTML=(ilezle=ilezle+1);
                                return 0;
                                
                            } else if(podana>losowa){
                                alert("za dużo");
                                document.getElementById("prb").innerHTML=(ilezle=ilezle+1);
                                return 0; 
                            }}
                            if(losowa==podana){
                                alert("zgadles");
                                document.getElementById("zgd").innerHTML=(ile=ile+1);
                                if( document.getElementById("his").innerHTML==""){
                                    document.getElementById("his").innerHTML="liczba losowa: "+losowa+" próba: "+ilezle;
                                }else if( document.getElementById("hiss").innerHTML==""){
                                    document.getElementById("hiss").innerHTML="liczba losowa: "+losowa+" próba: "+ilezle;
                                }else if((document.getElementById("his").innerHTML!="")&&(document.getElementById("hiss").innerHTML!="")){
                                     document.getElementById("his").innerHTML="liczba losowa: "+losowa+" próba: "+ilezle;
                                     document.getElementById("hiss").innerHTML="";
                                }
                               
                                document.getElementById("prb").innerHTML=(ilezle=1);
                                return lsw();
                            }
                        }
function uu(){
    
    switch( document.getElementById("kolor").value){
          case "zielony": { document.getElementById("koll").innerHTML="<style>#koll{background-color: green;}</style>";}break;
          case "bialy": { document.getElementById("koll").innerHTML="<style>#koll{background-color: white;}</style>";}break;
          case "niebieski": { document.getElementById("koll").innerHTML="<style>#koll{background-color: blue;}</style>";}break;
          case "czerwony": { document.getElementById("koll").innerHTML="<style>#koll{background-color: red;}</style>";}break;
          default :document.getElementById("koll").innerHTML=""; break;
    }
     }    
     function auto(){
        att=document.getElementById("kolor").value;
        switch(att){
            case "zielony": {   if(document.getElementById("silnik1").checked==true){
                document.getElementById("genob").innerHTML="<img src=obrazy/maluch1.jpeg>"
               }else if(document.getElementById("silnik2").checked==true){
                 document.getElementById("genob").innerHTML="<img src=obrazy/maluch11.jpeg>"
               }else{
                 alert("nie wybrałes poprawnie opcji");
               }}break;
            case "bialy": {  if(document.getElementById("silnik1").checked==true){
                document.getElementById("genob").innerHTML="<img src=obrazy/maluch2.jpeg>"
               }else if(document.getElementById("silnik2").checked==true){
                 document.getElementById("genob").innerHTML="<img src=obrazy/maluch22.jpeg>"
               }else{
                 alert("nie wybrałes poprawnie opcji");
               }}break;
            case "niebieski": {   if(document.getElementById("silnik1").checked==true){
                document.getElementById("genob").innerHTML="<img src=obrazy/maluch3.jpeg>"
               }else if(document.getElementById("silnik2").checked==true){
                 document.getElementById("genob").innerHTML="<img src=obrazy/maluch111.jpeg>"
               }else{
                 alert("nie wybrałes poprawnie opcji");
               }}break;
            case "czerwony": {if(document.getElementById("silnik1").checked==true){
                document.getElementById("genob").innerHTML="<img src=obrazy/maluch4.jpeg>"
               }else if(document.getElementById("silnik2").checked==true){
                 document.getElementById("genob").innerHTML="<img src=obrazy/maluch44.jpeg>"
               }else{
                 alert("nie wybrałes poprawnie opcji");
               } }break;
        }  } var pierr;var piezz;
        function spr(){
                if (piezz == 1) {
                    alert("nie jest liczba pierwsza");
                } else {
                    alert(" jest liczba pierwsza");
                }
        }
        function pierwsza(){
            pierr=document.getElementById("pierwszaa").value;
           for(var i=2;i<pierr;i++){
            if (pierr % i == 0) {
                piezz = 1;
                spr();
                return 0;
            } else {
                piezz = 2;
            }
           }
           spr();
           return 0;
        }
    
   
                            

                            